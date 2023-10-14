//taggle icon navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top    = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id     = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
            // active sections for animation on acroll
            sec.classList.add('show-animate');
        }else{
            sec.classList.remove('show-animate');
        }
    });
    //sticky header 
    let header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon and navbar when click vavbar links (scrol)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
    // ANIMATION FOOTER ON SCROLL
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}                                

// language
let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let logo = document.getElementById("logo");
let Home = document.getElementById("Home");
let About= document.getElementById("About");
let Education = document.getElementById("Education");
let Skills =document.getElementById("Skills");
let Contact=document.getElementById("Contact");
arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang" , "aranic");
};
english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang" , "english");
};
onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
}
function setLanugage(getLanuage){
    if(getLanuage === "arabic"){
        logo.innerHTML ="فارس";
        Home.innerHTML ="الصفحة الرئيسية";
        About.innerHTML="من نحن" ;
        Education.innerHTML="التعلم" ;
        Skills.innerHTML="مهارتي";
        Contact.innerHTML="اتصل بنا";
    }
    else if(getLanuage === "english"){
        logo.innerHTML = "FARES.";
        Home.innerHTML ="Home";
        About.innerHTML="About";
        Education.innerHTML="Education";
        Contact.innerHTML="Contact"
    };

}
