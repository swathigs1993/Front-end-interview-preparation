const API_BASE_URL = 'https://www.algoexpert.io/api/testimonials';
let container = document.getElementById('testimonial-container');
let afterEnd = null;
let canFetchTestimonial = true; //when you keep scrolling, Fetch only after you get API response.

container.addEventListener('scroll',handleScroll);
fetchTestimonials();

function handleScroll() {
  if (!canFetchTestimonial) return;
  //check if div end is reached 
  if (checkbrowserEnd()) {
    fetchTestimonials();
  }
  else {
    return;
  }
}

function checkbrowserEnd() {
  if (container.scrollHeight - container.scrollTop - container.clientHeight <= 1) {
    return true;
  } else {
    return false;
  }
}

async function fetchTestimonials() {
  canFetchTestimonial = false;
  let url;

  if (afterEnd != null)
  url = API_BASE_URL + "?limit="+ 5 + '&after=' + afterEnd; 
  else 
  url = API_BASE_URL + "?limit="+ 5;

  let fetchValue = await fetch(url);
  let {testimonials,hasNext} =  await fetchValue.json();

    const fragment = document.createDocumentFragment();
     testimonials.forEach(({message})=>{
        fragment.appendChild(createDOM(message));// Instead of updating the DOM every time in for loop, Update DOM only once after for loop
     })

    container.appendChild(fragment);

    if (hasNext) {
        afterEnd = testimonials[testimonials.length - 1].id;
    } else {
       container.removeEventListener('scroll',handlescroll); // Once its reached to end it should not call the fetch API anymore.
    }

    canFetchTestimonial = true;
}

function createDOM(message) {
  let p = document.createElement('p');
  p.classList.add('testimonial');
  p.textContent = message;
  return p;
}