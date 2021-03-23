const username = "kumavale";
const repos = [
    "ctc",
    "jaian",
    "concatsql",
    "overwritesql",
    "fmtcalc",
    "sisterm",
    "nand2tetris",
    "mipsi",
    "PenipeniWinter",
    "toGist",
    "zlp",
    "ExPing-t",
    "programming",
    "vim-weather",
    "clipac",
];

document.addEventListener("DOMContentLoaded", function() {
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
            img2.width         = img1.width;
            img2.style.opacity = 0;
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
