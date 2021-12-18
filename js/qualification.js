const content_url = "https://gist.githubusercontent.com/kumavale/be97c65882deedc6dd45cadf435941de/raw/a78e757f74f15f2a4bf80dd186d1dc1884c746e6/qualification.json";

// 資格情報
function Qualification(date, name, remarks) {
    this.date    = date;
    this.name    = name;
    this.remarks = remarks;
}

document.addEventListener("DOMContentLoaded", async function() {

    let lists = [];  // 資格一覧

    // GASからリポジトリ情報を取得
    await fetch(content_url, {
        mode: "cors",
    })
    .then(data => data.json())
    .then(json => {
        json.qualification.forEach(qualification => {
            lists.push(new Qualification(qualification.date, qualification.name, qualification.remarks));
        });
    });

    let qualification = document.getElementById("qualification");
    let table = document.createElement("table");
    table.style.textAlign = "center";
    qualification.appendChild(table);

    for (let i = 0; i < lists.length; ++i) {
        let tr         = document.createElement("tr");
        let td_date    = document.createElement("td");
        let td_name    = document.createElement("td");
        let td_remarks = document.createElement("td");

        td_date   .classList.add("date");
        td_name   .classList.add("name");
        td_remarks.classList.add("remarks");

        td_date.textContent    = lists[i].date;
        td_name.textContent    = lists[i].name;
        td_remarks.textContent = lists[i].remarks;

        tr.appendChild(td_date);
        tr.appendChild(td_name);
        tr.appendChild(td_remarks);
        table.appendChild(tr);
    }
});
