const imgElement = document.querySelector("img");
const img1URL ="img/img1.png";
const img2URL ="img/img2.png";

function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL){
        imgElement.setAttribute("src",img2URL);
    } 
    else {
        imgElement.setAttribute("src", img1URL)
    }
}

imgElement.onclick = changePhoto;
