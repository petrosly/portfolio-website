/* Handling hover on projects*/
document.querySelector(".project-chat").addEventListener("mouseover",()=>{
  if(document.documentElement.clientWidth > 1024){
    console.log('Tablet Hover');
    document.querySelector(".chat-hover").style.display = "flex";
  }
});

document.querySelector(".project-chat").addEventListener("mouseout",()=>{
  document.querySelector(".chat-hover").style.display = "none";
});

document.querySelector(".project-hotel").addEventListener("mouseover",()=>{
  if(document.documentElement.clientWidth > 1024){
    console.log(screen.width);
    document.querySelector(".hotel-hover").style.display = "flex";
  }
});

document.querySelector(".project-hotel").addEventListener("mouseout",()=>{
  document.querySelector(".hotel-hover").style.display = "none";
});

document.querySelector(".project-game").addEventListener("mouseover",()=>{
  if(document.documentElement.clientWidth > 1024){
    console.log('Tablet Hover');
    document.querySelector(".game-hover").style.display = "flex";
  }
});

document.querySelector(".project-game").addEventListener("mouseout",()=>{
  document.querySelector(".game-hover").style.display = "none";
});

document.querySelector(".project-portfolio").addEventListener("mouseover",()=>{
  if(document.documentElement.clientWidth > 1024){
    console.log('Tablet Hover');
    document.querySelector(".portfolio-hover").style.display = "flex";
  }
});

document.querySelector(".project-portfolio").addEventListener("mouseout",()=>{
  document.querySelector(".portfolio-hover").style.display = "none";
});
/* Modal behavior*/
const projectChat = document.querySelector(".project-chat");
const projectHotel = document.querySelector(".project-hotel");
const projectGame = document.querySelector(".project-game");
const projectPortfolio = document.querySelector(".project-portfolio");
const expandChat  = document.querySelector(".chat-hover");
const expandHotel = document.querySelector(".hotel-hover");
const expandGame  = document.querySelector(".game-hover");
const expandPortfolio = document.querySelector(".portfolio-hover");
const modal = document.querySelector(".modal");
const modalTitle  = document.querySelector(".modal-title");
const modalDescription  = document.querySelector(".modal-description");
const modalTechnologies = document.querySelector(".modal-technologies");
const modalImage  = document.querySelector(".modal-image");
const modalFirstButton = document.querySelector(".first-button");
const modalSecondButton = document.querySelector(".second-button");

function closeModal(){
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function chatModal(){
  modal.style.display = "flex";
  modalSecondButton.style.display = "block";
  modalTitle.innerHTML= "Online Chatroom";
  modalDescription.innerHTML = "This is a web app that allows its users to have private conversations with anyone online. It stores and loads old messages, plus it offers an authentication mechanism through email!";
  modalTechnologies.innerHTML = "<li>Technologies used for this project:&nbsp;</li><li>Node.js,</li><li>&nbsp;Express,</li><li>&nbsp;Socket.io,</li><li>&nbsp;MongoDB,</li><li>&nbsp;HTML5,</li><li>&nbsp;CSS3,</li><li>&nbsp;ES6,</li><li>&nbsp;Heroku</li>";
  modalImage.setAttribute("src","images/laptop-chat.jpg");
  modalImage.setAttribute("alt","Screenshot of chat application inside laptop mockup");
  modalFirstButton.innerHTML = "Get Source";
  modalFirstButton.onclick = ()=>{ window.open("https://github.com/petrosly/online-chatroom-v2", "_blank");};
  modalSecondButton.innerHTML = "View Demo";
  modalSecondButton.onclick = ()=>{ window.open("https://company-chatroom.herokuapp.com/", "_blank");};
}

function hotelModal(){
  modal.style.display = "flex";
  modalTitle.innerHTML = "Hotel Website";
  modalDescription.innerHTML = "This is a static website that is used to represent this hotel's services. There are many more details inside the website!";
  modalTechnologies.innerHTML = "<li>Technologies used for this project:&nbsp;</li><li>HTML5,</li><li>&nbsp;CSS3,</li><li>&nbsp;ES6</li>";
  modalImage.setAttribute("src","images/laptop-hotel.jpg");
  modalImage.setAttribute("alt","Screenshot of hotel website inside laptop mockup");
  modalFirstButton.innerHTML = "View Demo"
  modalFirstButton.onclick = ()=>{ window.open("https://demo-tpl4.hotelist.gr/", "_blank");};
  modalSecondButton.style.display = "none";
}

function gameModal(){
  modal.style.display = "flex";
  modalSecondButton.style.display = "block";
  modalTitle.innerHTML  =  "Traffic Education Game";
  modalDescription.innerHTML  = "It is a game whose goal is to educate children of smaller ages on the traffic matters. It is equipped with a database that is used for an analysis on the scores of the user. The analysis is then used to switch the focus on areas that the user lacks knowledge and also make the application meet each user's needs.";
  modalTechnologies.innerHTML = "<li>Technologies used for this project:&nbsp;</li><li>C#,</li><li>&nbsp;Unity,</li><li>&nbsp;SQLite</li>";
  modalImage.setAttribute("src","images/laptop-game.jpg");
  modalImage.setAttribute("alt","Screenshot of my game inside laptop mockup");
  modalFirstButton.innerHTML = "Get Source";
  modalFirstButton.onclick = ()=>{ window.open("https://github.com/petrosly/Traffic-Education-Game-Code", "_blank");};
  modalSecondButton.innerHTML = "Download Game";
  modalSecondButton.onclick = ()=>{ window.open("https://github.com/petrosly/Traffic-Education-Game-Build", "_blank");};
}

function portfolioModal(){
  modal.style.display = "flex";
  modalSecondButton.style.display = "block";
  modalTitle.innerHTML = "Personal Portfolio Website";
  modalDescription.innerHTML = "This is the page you are currently on! It is a static website that is used to display my projects!";
  modalTechnologies.innerHTML = "<li>Technologies used for this project:&nbsp;</li><li>HTML5,</li><li>&nbsp;CSS3,</li><li>&nbsp;ES6,</li><li>&nbsp;Netlify</li>";
  modalImage.setAttribute("src","images/laptop-portfolio.jpg");
  modalImage.setAttribute("alt","Screenshot of portfolio website inside laptop mockup");
  modalFirstButton.innerHTML = "Get Source";
  modalFirstButton.onclick = ()=>{ window.open("https://github.com/petrosly/portfolio-website", "_blank");};
  modalSecondButton.innerHTML = "View Demo";
  modalSecondButton.onclick = ()=>{ window.open("https://www.petroslymper.com/", "_blank");};
}

projectChat.addEventListener("click", ()=>{
  if( document.documentElement.clientWidth <1025 ){
    chatModal();
  }
});

projectHotel.addEventListener("click", ()=>{
  if(document.documentElement.clientWidth < 1025){
    hotelModal();
  }
});

projectGame.addEventListener("click",()=>{
  if(document.documentElement.clientWidth < 1025){
    gameModal();
  }
});

projectPortfolio.addEventListener("click",()=>{
  if(document.documentElement.clientWidth < 1025){
    portfolioModal();
  }
});

expandChat.addEventListener("click", ()=>{
  chatModal();
});

expandHotel.addEventListener("click", ()=>{
  hotelModal();
});

expandGame.addEventListener("click", ()=>{
  gameModal();
});

expandPortfolio.addEventListener("click", ()=>{
  portfolioModal();
});
  /* Modal Tablet Behavior */
/* Top Section Buttons*/
document.querySelector(".contact-button").addEventListener("click",()=>{
  document.querySelector("#contact").scrollIntoView();
});

// document.querySelector(".get-resume-button").addEventListener("click",()=>{
//   window.open("text.pdf","_blank");
// })

/* Create burger menu */
const navBarLinks = document.querySelector(".links-bar");
const navBar = document.querySelector(".nav-bar");

function createBurgerMenu(){
  navBarLinks.style.display = "none";
  var burgerIcon = document.createElement("a");
  burgerIcon.classList.add("burger-icon");
  var burgerImage = document.createElement("img");
  burgerImage.setAttribute("src","images/menu-svgrepo-com.svg") ;
  burgerImage.setAttribute("alt","Three stacked rows image that represents menu");
  burgerIcon.appendChild(burgerImage);  
  navBar.appendChild(burgerIcon);
  const burgerMenuLinks = document.querySelectorAll(".links-bar li");
  burgerMenuLinks.forEach( link => {
    link.addEventListener("click", closeBurgerMenu);
  });
}

function closeBurgerMenu(){
  navBarLinks.style.display = "none";
  let burgerImage = document.querySelector(".burger-icon img");
  burgerImage.setAttribute("src","images/menu-svgrepo-com.svg");
}

if(document.documentElement.clientWidth < 768){
  createBurgerMenu();
  let burgerMenu = document.querySelector(".burger-icon");
  let burgerImage = document.querySelector(".burger-icon img");
  burgerMenu.addEventListener("click", ()=>{
    if(navBarLinks.style.display == "flex"){
      navBarLinks.style.display = "none";
      burgerImage.setAttribute("src","images/menu-svgrepo-com.svg");
    }else{
      navBarLinks.style.display = "flex";
      burgerImage.setAttribute("src","images/close-svgrepo-com.svg");      
    }
  });
}

window.addEventListener("resize", ()=>{
  let burgerExists = document.querySelector(".burger-icon");
  if(document.documentElement.clientWidth < 768 && burgerExists === null){
    createBurgerMenu();
    let burgerMenu = document.querySelector(".burger-icon");
    let burgerImage = document.querySelector(".burger-icon img");
    burgerMenu.addEventListener("click", ()=>{
      if(navBarLinks.style.display == "flex"){
        navBarLinks.style.display = "none";
        burgerImage.setAttribute("src","images/menu-svgrepo-com.svg");
      }else{
        navBarLinks.style.display = "flex";
        burgerImage.setAttribute("src","images/close-svgrepo-com.svg"); 
      }
    });
  }
});

window.addEventListener("resize",()=>{
  if(document.documentElement.clientWidth >= 768){
    var burgerMenu = document.querySelector(".burger-icon");
    navBar.removeChild(burgerMenu);
    navBarLinks.style.display = "flex";
    const burgerMenuLinks = document.querySelectorAll(".links-bar li");
    burgerMenuLinks.forEach( link => {
      link.removeEventListener("click", closeBurgerMenu);
    });
  }
});

/* Preload Images for Modal */
function preloadImage(url){
    var img=new Image();
    img.src=url;
}

window.addEventListener("load", ()=>{
  console.log("Going to preload images!");
  preloadImage("images/laptop-chat.jpg");
  preloadImage('images/laptop-hotel.jpg');
  preloadImage('images/laptop-game.jpg');
  preloadImage('images/laptop-portfolio.jpg');
});