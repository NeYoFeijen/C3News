function filterTable() {
    let searchInput = document.getElementById("searchInput");
    let table = document.getElementById("myTable");
    let tr = table.getElementsByTagName("tr")
    let td;
    let txtValue;
    let filter = searchInput.value.toLowerCase();

    for (r = 0; r < tr.length; r++) {

        tr[r].style.display = "none";

        for (c = 0; c < 2; c++) {
            td = tr[r].getElementsByTagName("td")[c];
            if (td) {
                txtValue = td.innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    tr[r].style.display = "";
                } 
            }
        }
    }
};

const pageSize = 10;
let curPage = 1;

function previousPage() {
    if(curPage > 1) {
        curPage--;
        renderTable();
    }
}

function nextPage() {
    if(curPage < 3) {
        // !!!!!!!!!!!!!!!!!!!!
        curPage++;
        renderTable();
    }
}

function renderTable() {
    let table = document.getElementById("myTable");
    let result = '';
    data.filter((row, index) => {
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

renderTable();