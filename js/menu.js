let menuList = document.getElementById("menuList");
let menus = [];
let noFilter = document.getElementById("noFilter");
let ascFilter = document.getElementById("ascFilter");
let descFilter = document.getElementById("descFilter");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let key = urlParams.get("filter");

if(key == null || key == "" ){
    noFilter.style.backgroundColor = "green";
    noFilter.style.color = "white";
}else if(key == "asc") {
    ascFilter.style.backgroundColor = "green";
    ascFilter.style.color = "white";
}else{
    descFilter.style.backgroundColor = "green";
    descFilter.style.color = "white";
}

ascFilter.addEventListener('click', ()=>{
    window.location.href = "/menu.html?filter=asc";
});

descFilter.addEventListener('click', ()=>{
    window.location.href = "/menu.html?filter=desc";
});

noFilter.addEventListener('click',()=>{
    window.location.href = "/menu.html";
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for(let idx in makanan){
    menus.push(idx);
}

if(key != null && key.toLowerCase() == "asc")menus.sort();
else if(key != null && key.toLowerCase() == "desc"){
    menus.sort();
    menus.reverse();
}


function addMenu(idx){
    console.log(menus[idx], idx);
    menuList.innerHTML +=   
    '    <div class="kuliner-card">' +
    '        <img src="asset/gambar/makanan/'+makanan[menus[idx]].img+'" style="width:15rem; height:10rem;border-radius : .5rem .5rem 0 0; object-fit:cover;"><br>' +
    '        <div style="background-color:white;"><br>' +
    '        <span class="title">'+makanan[menus[idx]].nama+'</span><br> ' + 
    '       <span class="daerah">- '+makanan[menus[idx]].daerah+' -</span> ' +
    '        <a href="preview.html?makanan='+menus[idx]+'"><button class="btn">Baca selengkapnya</button></a> ' +
    '    </div></div>'
        ;
    if(idx+1 < menus.length) setTimeout(()=>{addMenu(idx + 1);},10);
}



addMenu(0);