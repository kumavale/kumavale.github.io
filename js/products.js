const username = "kumavale";
const repos_json_url = "https://gist.githubusercontent.com/kumavale/a52afa35c9ec96f992e9891b2114598b/raw/repos.json";

document.addEventListener("DOMContentLoaded", async function() {

    let repos = [];  // リポジトリの名前

    // GASからリポジトリ情報を取得
    await fetch(repos_json_url, {
        mode: "cors",
    })
    .then(data => data.json())
    .then(json => {
        json.repos.forEach(repo => {
            repos.push(repo.name);
        });
    });

    let products = document.getElementById("products");
    let table = document.createElement("table");
    table.style.textAlign = "center";
    products.appendChild(table);

    // TODO:
    // ポップアップさせて詳細な説明を表示
    for (let i = 0; i < repos.length; ++i) {
        let tr   = document.createElement("tr");
        let td   = document.createElement("td");
        let a1   = document.createElement("a");
        let a2   = document.createElement("a");
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");

        a1.href        = "https://github.com/" + username + "/" + repos[i];
        a1.target      = "_blank";
        img1.className = "product_repo";
        img1.src       = "https://github-readme-stats.vercel.app/api/pin/?username=" + username + "&repo=" + repos[i];

        if (i+1 < repos.length) {
            a2.href        = "https://github.com/" + username + "/" + repos[++i];
            a2.target      = "_blank";
            img2.className = "product_repo";
            img2.src       = "https://github-readme-stats.vercel.app/api/pin/?username=" + username + "&repo=" + repos[i];
        } else {
            img2.className     = "product_repo";
            img2.style.opacity = 0;
            img1.onload = function() {
                img2.width = this.naturalWidth;
            };
        }

        a1.appendChild(img1);
        a2.appendChild(img2);
        td.appendChild(a1);
        td.innerHTML += "\n";
        td.appendChild(a2);
        tr.appendChild(td);
        table.appendChild(tr);
    }
});
