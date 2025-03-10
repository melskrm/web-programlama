const formWrappper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchhButton = document.querySelector("#SearchButton");
const imageListWrapper = document.querySelector(".imageList-wrapper");

runEventListeners();

function runEventListeners(){
form.addEventListener("submit" , search);
}

function search(e){
    const value = searchInput.value.trim();
//@requestParam - spring - rest APİ
    fetch(`https://api.unsplash.com/search/photos?query=${value}` ),{
        method : "GET,",
        header :{
            Authorization : "Client-ID TdDkm81ZjNyTACMeK53DEYCNUXSPtHQcA9z-o6bUyEk"
        }
    }

    .then((res) =>res.json())
    .then((data) =>{
        Array.from(data.results).forEach((image)=>{
            // conSole.log(image.urls.small)
            addImageToUI(image.urls.small)

        })
    })
    
    .catch((err) =>console.log(err))


    e.preventDefault();
}



function addImageToUI(url){
    const div = document.createElement("div");
    div.className="card";

    const img = document.createElement("img");
    img.setAttribute("sec",url);
    img.height=400;
    img.widtht=400;

    div.append(img);
    imageListWrapper.append(div);

}