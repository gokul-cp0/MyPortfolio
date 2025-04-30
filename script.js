const stickyNav=this.document.querySelector(".sticky");
const stickyList = document.querySelector(".stickyList");
const navButton = document.querySelector(".navButton");
const navbarBrand=this.document.querySelector(".navbar-brand");
const buttonIcon=document.querySelector('.navButtonIcon');
const toggleMobileNav=document.querySelector(".toggleMobileNav");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

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

  new Typed('.type-role', {
    strings: ['Full Stack Developer','Web Developer','MERN Stack Developer'],
    typeSpeed: 120,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    showCursor: false,
  });


const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const navItem = document.querySelector(`.nav-link[href="#${id}"]`);
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          navItem.classList.add("active");
        }
      });
    },
    {
      threshold: 0.6, // section visible % before it triggers
    }
  );
  sections.forEach((section) => {
    observer.observe(section);
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