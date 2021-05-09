//The preventDefault() method cancels the event if it is cancelable, meaning that the default 
//action that belongs to the event will not occur.

//Clicking on a "Submit" button, prevent it from submitting a form
document.querySelector("#button").addEventListener("click", function(event){
  event.preventDefault();
});

function createTable() {
  let dropdownSelect = document.getElementById("tableSelect").value;
  let row = document.getElementById("row").value;
  let col = document.getElementById("column").value;
  let rowTable = document.getElementById("rowTable");
  let colTable = document.getElementById("colTable");
  let zigZagTable = document.getElementById("zigZagTable");

  switch(dropdownSelect) {
      case 'rowWise': {
        rowTable.style.display = 'table';
        colTable.style.display = 'none';
        zigZagTable.style.display = 'none';
        createTableRowWise(rowTable, row, col);
        break;
      }
      case 'columnWise': {
        rowTable.style.display = 'none';
        colTable.style.display = 'table';
        zigZagTable.style.display = 'none';
        createTableColWise(colTable,row, col);
        break;
      }
      case 'zigZag': {
        rowTable.style.display = 'none';
        colTable.style.display = 'none';
        zigZagTable.style.display = 'table';
        createTableZigZagWise(zigZagTable, row, col);
        break;
      }
      default: {
         return; 
      }
  }
}

function createTableRowWise(table,row, col) {
 let num = 1;
    for(let i = 0; i < row; i++) {
        var r = table.insertRow(i);
          for(let j = 0; j < col;j++) {
            let x = r.insertCell(j);
            x.innerHTML =  num++; 
          } 
    }
}

function createTableColWise(table,row, col) {
    let matrix = [];
    // create 2 diamention  matrix
    
    for(let k = 0; k < row; k++) {
      matrix[k] = [];
       for(let z = 0; z < col; z++) {
         matrix[k].push(0);
       }
    }
    //populate
    let num = 0;
    for(let j=0; j<col; j++) {
            for(let i=0;i<row;i++)
            {
                matrix[i][j]=num++;
            }       
        }
    
    console.log(matrix);

    for (let i = 0; i < matrix.length; i++) {
        var r = table.insertRow(i);
          for (let j = 0; j < matrix[i].length; j++) {
            let x = r.insertCell(j);
            x.innerHTML = matrix[i][j]; 
          } 
    } 
}

function createTableZigZagWise(table, row, col) {
    let matrix = [];
    // create 2 diamention  matrix
    
    for(let k = 0; k < row; k++) {
      matrix[k] = [];
       for(let z = 0; z < col; z++) {
         matrix[k].push(0);
       }
    }
    //populate
    let num = 0;
    for(let j=0; j<col; j++) {
        if (j % 2==0){
            for(let i=0;i<row;i++)
            {
                matrix[i][j]=num++;
            }
        }
        else {
            for(let i=row-1;i>=0;i--)
            {
                matrix[i][j]=num++;
            }            
        }
    }
    console.log(matrix);

    for (let i = 0; i < matrix.length; i++) {
        var r = table.insertRow(i);
          for (let j = 0; j < matrix[i].length; j++) {
            let x = r.insertCell(j);
            x.innerHTML = matrix[i][j]; 
          } 
    } 
}