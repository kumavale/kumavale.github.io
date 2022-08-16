const content_url = "https://gist.githubusercontent.com/kumavale/a409860fc3e0b4fe828b31ecaf3f6b43/raw/CatGallery.json";

document.addEventListener("DOMContentLoaded", async function() {
    let lists = [];  // ファイルID一覧

    await fetch(content_url, {
        mode: "cors",
    })
    .then(data => lists = data.json())
    .then(json => {
        lists = json;
    });

    let gallery = document.getElementById("gallery");

    for (let i = 0; i < lists.length; ++i) {
        let fileid = lists[i];
        let image  = document.createElement("img");

        image.classList.add("image");
        image.src = 'https://drive.google.com/uc?export=view&id=' + fileid + '&usp=sharing';

        gallery.appendChild(image);
    }
});
