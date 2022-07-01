let user = {
   name: "Swathi",
   address: {
      personal: {
        city: "Mysore",
        area: "Vijaynagar"
      },
      office: {
        city: "Banglore",
        area: {
            landmark: "Maleshwaram"
        }
      }
   }
}
let resultObj = {};
let result = flattenObject(user, 'user');

console.log(result);

function flattenObject(user, parent) {
   for (const key in user) {
      if (typeof( user[key]) == 'object') {
        flattenObject(user[key], (parent + `_`+ key ))
      } else {
        let keyVal = parent + '_' + key;
        resultObj[keyVal] = user[key];
      }
   }
   return resultObj
}