const content_url = "https://gist.githubusercontent.com/kumavale/13100cdc5d451df2b27472aeedd61537/raw/CatGallery.json";
const image_size = "w_1024";

document.addEventListener("DOMContentLoaded", async function() {
    let lists = [];  // ファイル名一覧

    await fetch(content_url, {
        mode: "cors",
    })
    .then(data => lists = data.json())
    .then(json => {
        lists = json;
    });

    let gallery = document.getElementById("gallery");

    for (let i = 0; i < lists.length; ++i) {
        let filename = lists[i];
        let image    = document.createElement("img");

        image.classList.add("image");
        image.src = 'https://res.cloudinary.com/kumavale/image/upload/' + image_size + '/v1660699986/CatGallery/' + filename;

        gallery.appendChild(image);
    }
});
