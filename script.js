let search = document.getElementById("searchInput");
let side = document.getElementById("side-button");
let sideMenu = document.getElementById("sidemenu");

search.addEventListener("keypress", (e)=>{
    if(e.key == "Enter"){
        // for(let food in makanan){
        //     if(food.includes(search.value.toLowerCase())){
        //         window.location.href = "search.html?makanan=" + e;
        //     }
        // }
        // console.log(search.value);
        window.location.href = "search.html?makanan=" + search.value;
    }
});

side.addEventListener("click", ()=>{
    sideMenu.classList.toggle("hide");
});

side.addEventListener("hover", ()=>{
    sideMenu.classList.toggle("hide");
});


