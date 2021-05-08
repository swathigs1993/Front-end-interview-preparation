//Insert code below

  var table = document.getElementById("gameTableData");
  var tableData;
const userAction = fetch(
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
  )
    .then((response) => response.json())
    .then((data) => {
     tableData = data;
     generateTable(tableData);
    });

function generateTable(data) {
    if (data.length > 0) {
            let temp = "";
            for (let i = 0; i < data.length; i++) {
              temp += "<tr>";
              temp += "<td>" + data[i].title + "</td>";
              temp += "<td>" + data[i].platform + "</td>";
              temp += "<td>" + data[i].score + "</td>";
              temp += "<td>" + data[i].genre + "</td>";
              temp += "<td>" + data[i].editors_choice + "</td></tr>";
            }
            table.innerHTML = temp;
          }
}

function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("gameTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
    no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
      first, which contains table headers): */
    for (i = 1; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
        one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function search() {
    
  document.getElementById("no-rows-alert").style.display = "none";
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("gameTable");
  tr = table.getElementsByTagName("tr");
  
  var filteredTable = tableData.filter(function (i,n) {
      if (i.title)
      return i.title.toUpperCase().includes(filter.toUpperCase());
});
console.log(filteredTable);
generateTable(filteredTable);
// one more way of searching
  // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
}
