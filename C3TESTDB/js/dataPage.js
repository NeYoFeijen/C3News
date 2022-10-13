function filterData() {
    let searchInput = document.getElementById("searchInput");
    let filter = searchInput.value.toLowerCase();
    filteredData.length = 0;

    if (filter.length < 1) {
        filteredData = [...data];
    } else {
        data.forEach(c => {
                if (c["Title"].toLowerCase().indexOf(filter) > -1) {
                filteredData.push(c);
            }
        });
    }

    renderTable();
}

const pageSize = 10;
let curPage = 1;

function previousPage() {
    if(curPage > 1) {
        curPage--;
        renderTable();
        document.getElementById('pageNumber').innerText = curPage;
    }
}

function nextPage() {
    if((curPage * pageSize) < filteredData.length) {
        curPage++;
        renderTable();
        document.getElementById('pageNumber').innerText = curPage;
    }
}
//https://www.raymondcamden.com/2022/03/14/building-table-sorting-and-pagination-in-javascript

function renderTable() {
    let table = document.getElementById("myTable");
    let result = '';
    filteredData.filter((row, index) => {
          let start = (curPage-1)*pageSize;
          let end =curPage*pageSize;
          if(index >= start && index < end) return true;
    }).forEach(c => {
       result += `<tr>
       <td>${c["Title"]}</td>
       <td>${c["Genres"]}</td>
       <td>${c["Release Date"]}</td>
       <td>${c["Movie Run Time"]}</td>
       <td>${c["Review Rating"]}</td>
       </tr>`;
    });
    table.innerHTML = result;
}

let filteredData = [];

filterData();