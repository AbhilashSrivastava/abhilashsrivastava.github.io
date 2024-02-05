
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
window.addEventListener("load", (event) => {
  
  const imageWrapperTop = document.querySelectorAll("#image-wrapper-first-row > .image")
  imageWrapperTop.forEach(async(child, i) => {
    await delay(i * 200)
    child.classList.add('image-first-row--enter-animation')
  })

  const imageWrapperBottom = document.querySelectorAll("#image-wrapper-second-row > .image")
  imageWrapperBottom.forEach(async(child, i) => {
    await delay(i * 200)
    child.classList.add('image-second-row--enter-animation')
  })
});

app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("about me", "Who am i and what do i do.");
  createCode("all", "See all commands.");
  createCode("social -a", "All my social networks.");
  createCode("portfolio -a", "All the companies I have worked for.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/abhilashsrivastava";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const initValue = document.querySelector("input").value;
  const value = initValue.toLowerCase();
  if(value === "all"){
    trueValue(value);
    
    createCode("projects", "My github page with my projects. Follow me there ;)");
    createCode("about me", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("portfolio -a", "All the companies I worked for.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/abhilashsrivastava' target='_blank'><i class='fab fa-github white'></i> github.com/abhilashsrivastava</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("Hi, my name is Abhilash;)")
    createText("I am a FullStack developer with 10+ years of experience in app & web development. Currently I work in <a href=https://coinswitch.co  target='_blank'><span class='blue'>CoinSwitch</span></a> as an Associate Director - Technology. I work in technologies like <span class='blue'>Node, React, React Native, GraphQL, GoLang </span>. Apart from this, I am a musician - <span class='blue'> vocalist, guitarist, music producer </span> and recently started trying my hands on <span class='blue'>DJ jockeying</span>.")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/abhilashsrivastava' target='_blank'><i class='fab fa-github white'></i> github.com/abhilashsrivastava</a>")
    createText("<a href='https://www.linkedin.com/in/abhilash-srivastava-b7760b53/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/abhilash-srivastava-b7760b53</a>")
    createText("<a href='https://www.instagram.com/thatgrungeguy' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/thatgrungeguy</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  else if(value === "portfolio -a"){
    trueValue(value);
    createText("<a href='https://coinswitch.co/' target='_blank'><i class='fab fa-id-card white'></i> CoinSwitch</a>")
    createText("<a href='https://okcredit.com/' target='_blank'><i class='fab fa-id-card white'></i> OkCredit</a>")
    createText("<a href='https://www.omio.com/' target='_blank'><i class='fab fa-id-card white'></i> Omio (Germany)</a>")
    createText("<a href='https://www.olxgroup.com/locations/germany-berlin/' target='_blank'><i class='fab fa-id-card white'></i> OLX Autos (Frontier Car Group - Germany)</a>")
    createText("<a href='https://www.dream11.com/' target='_blank'><i class='fab fa-id-card white'></i> Dream11</a>")
    createText("<a href='https://www.directi.com/' target='_blank'><i class='fab fa-id-card white'></i> Directi (media.net)</a>")
    createText("<a href='https://housing.com/' target='_blank'><i class='fab fa-id-card white'></i> Housing.com</a>")
    createText("<a href='https://navyuginfo.com/' target='_blank'><i class='fab fa-id-card white'></i> Navyug Infosolutions</a>")
  }
  else if(value === "portfolio"){
    trueValue(value);
    createText("Didn't you mean: portfolio -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();