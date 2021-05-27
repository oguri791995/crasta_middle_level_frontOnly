// header-img-slide
let img = document.getElementsByClassName("header-img");
let hc = document.getElementsByClassName("header-main")[0];

let removeNum = 0;
let addNum = 1;

let humbergerTrigger = false;

function slide_change(){   


    img[removeNum].classList.remove("displayOn");
    removeNum++;
    if(removeNum > 2){
        removeNum = 0;
    }
    img[addNum].classList.add("displayOn");
    addNum++;
    if(addNum > 2){  
        addNum = 0;
    }
}

slide = setInterval(slide_change,3000);

// humberger Menu
let humberger = document.getElementsByClassName("humberger")[0];
let topBar = document.getElementsByClassName("top-bar")[0];
let middleBar = document.getElementsByClassName("middle-bar")[0];
let bottomBar = document.getElementsByClassName("bottom-bar")[0];
let headerTitle = document.getElementsByClassName("header-title")[0];
let navWrapper = document.getElementsByClassName("nav-wrapper")[0];
let headerComment = document.getElementsByClassName("header-comment")[0];
let body = document.getElementsByTagName("body")[0];
let headerImg = document.getElementsByClassName("header-img");
let navItem = document.getElementsByClassName("nav-item");

humberger.addEventListener("click",toggle);

if(window.matchMedia('(max-width: 768px)').matches){
    for(let i=0;i<navItem.length;i++){
        navItem[i].addEventListener("click",toggle); 
    }
}


function toggle(){

    navWrapper.classList.toggle("displayNone-sp");
    topBar.classList.toggle("top-bar-click");
    middleBar.classList.toggle("middle-bar-click");
    bottomBar.classList.toggle("bottom-bar-click");
    headerTitle.classList.toggle("header-title");
    headerTitle.classList.toggle("test");
    headerComment.classList.toggle("displayNone-sp");
    body.classList.toggle("noScroll");
    body.classList.toggle("back");
    for(let j = 0;j < headerImg.length;j ++){
        headerImg[j].classList.toggle("displayNone-sp");
    }
}

let headerText = document.getElementsByClassName("header-text")[0];
let topLine = document.getElementsByClassName("top-line")[0];
let conceptInner = document.getElementsByClassName("concept-inner")[0];

let stickyTrigger = false;

function sticky(){  
    let conceptPos = document.querySelector('.displayOn img').getBoundingClientRect().bottom; 

    console.log(conceptPos);
    if(conceptPos < 0 && stickyTrigger == false){
        stickyToggle()
        stickyTrigger = true;
    }

    if(conceptPos >= 0 && stickyTrigger == true){
        stickyToggle()
        stickyTrigger = false;
    }
    
}

function stickyToggle(){
    headerText.classList.toggle("sticky");
    topLine.classList.toggle("sticky");
    headerTitle.classList.toggle("sticky");
    navWrapper.classList.toggle("sticky");
    conceptInner.classList.toggle("sticky");
}

addEventListener("scroll",sticky);
