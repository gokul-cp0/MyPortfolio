const stickyNav=this.document.querySelector(".sticky");
const stickyList = document.querySelector(".stickyList");
const navButton = document.querySelector(".navButton");
const navbarBrand=this.document.querySelector(".navbar-brand");
const buttonIcon=document.querySelector('.navButtonIcon');
const toggleMobileNav=document.querySelector(".toggleMobileNav");


window.addEventListener('scroll', function () {
    
    const scroller=this.window.scrollY>290;

    stickyNav.classList.toggle("p-2",scroller);
    stickyNav.classList.toggle("p-4",!scroller);
    stickyNav.classList.toggle("stickyFade",!scroller);
    stickyNav.classList.toggle("stickyBg",scroller);

    stickyList.classList.replace(scroller? "mx-auto" : "ms-auto",scroller? "ms-auto":"mx-auto");

    navbarBrand.classList.toggle("d-lg-none",!scroller);

    [stickyList,navButton,navbarBrand].forEach(elem=>elem.classList.toggle("stickyFadeScroller",scroller));

    stickyNav.style.boxShadow=scroller? "0px 5px 20px rgba(0, 0, 0, 0.20)" : "none";

    toggleMobileNav.classList.replace("show","hide");
    buttonIcon.classList.replace('fa-xmark','fa-bars');

});

document.addEventListener("click",event=> {
    const clickElem=event.target;
    if (
        !clickElem.classList.contains("navButtonIcon") && 
        !clickElem.classList.contains("navButton") && 
        !clickElem.classList.contains("toggleMobileNav")&& 
        !clickElem.classList.contains("nav-link")) {

        toggleMobileNav.classList.replace("show","hide");
        buttonIcon.classList.replace('fa-xmark','fa-bars');
    }
});

function HandleClick(){
    
    if(buttonIcon.classList.contains('fa-bars')){
        buttonIcon.classList.replace('fa-bars','fa-xmark');
        toggleMobileNav.classList.add("show");
        toggleMobileNav.classList.remove("hide");
    }
    else{
        buttonIcon.classList.replace('fa-xmark','fa-bars');
        toggleMobileNav.classList.replace("show","hide");
    }
}


const seeMoreProject=()=>{
    const Body=document.querySelector("body");
    const popUp=document.querySelector(".popUp-project");

    if(popUp.style.display==="flex")
    {
        Body.style.overflow="auto";
        popUp.style.display="none";
    }
    else{
        Body.style.overflow="hidden";
        popUp.style.display="flex";
    }
}

const contactSubmit=()=>{
    const formName=document.getElementById("form-name").value.trim();
    const formEmail=document.getElementById("form-email").value.trim();
    const FormMessage=document.getElementById("form-message").value.trim();
    if(formName==="" || formEmail==="" || FormMessage===""){
        alert("Please fill the empty box");
        return false;
    }
    alert("Message send successfully");
    return true;
}