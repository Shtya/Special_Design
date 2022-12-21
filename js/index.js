// [ 1 ] Random Background Image 
let landing = document.querySelector(".landing")
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
let start;
function randomBack() {
  start = setInterval(() => {
    let random = Math.floor(Math.random() * imgsArray.length)
    landing.style.backgroundImage = `url("imgs/${imgsArray[random]}")`
  }, 5000);
}
randomBack()

// [ 1 ] Random background Playing or turning off

let BtnBack = document.querySelectorAll(".Yes_No span")

BtnBack.forEach(span => {

  span.addEventListener("click", function (e) {

    e.target.parentElement.querySelectorAll(".active").forEach(e => {

      e.classList.remove("active")
    })
    e.target.classList.add("active")
    if (e.target.classList.contains("Yes")) {
      randomBack()
    }
    if (e.target.classList.contains("No")) {
      clearInterval(start)
    }
  })
})

// [ 2 ] Open Setting box
let gearIcon = document.querySelector(".setting_box .cover")
let gearIcon_I = document.querySelector(".setting_box .cover i")
let setting_box = document.querySelector(".setting_box")
gearIcon.onclick = function () {
  setting_box.classList.toggle("open")
  gearIcon_I.classList.toggle("rotate") 
  
}

// [ 3 ] Change Color Website

let optionLi = document.querySelectorAll(".option li")
optionLi.forEach(e => {
  e.addEventListener("click", function (e) {

    document.documentElement.style.setProperty("--main",e.target.dataset.color)
    
    localStorage.setItem("color", e.target.dataset.color)
    
    e.target.parentElement.querySelectorAll(".active").forEach(e => {
      e.classList.remove('active')
    })
    e.target.classList.add("active")
  })
})

// [ 4 ] Navbar Toggle

let BurgerIcon = document.querySelector(".fa-bars")
let navbar_ul = document.querySelector(".header ul")
let navbar_ul_li = document.querySelectorAll(".header ul li")
BurgerIcon.onclick = function () {
  navbar_ul.classList.toggle("open")
  navbar_ul_li.forEach(e => {
    e.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.classList.remove("open")
    })
  })
}

// [ 5 ] Loacl Storage In Color 

let colorLoaclStorage = localStorage.getItem("color")
if (colorLoaclStorage) {
  document.documentElement.style.setProperty
    ("--main", localStorage.getItem("color"))
  
  document.querySelectorAll(".option ul li").forEach(e => {
    e.classList.remove("active")
    
    if (e.dataset.color === colorLoaclStorage) {
      e.classList.add("active")
    }
  })
}

// [ 6 ] Countdown
const CountDownData = new Date("Dec 21 , 2022 5:57").getTime()
let counter = setInterval(() => {
  let dataNow = new Date().getTime()
  let DifferentData = dataNow - CountDownData 

  let days = Math.floor(DifferentData / (1000 * 60 * 60 * 24));
  let hours = Math.floor((DifferentData % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((DifferentData % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((DifferentData % (1000 * 60)) / 1000);
  document.querySelector(".Days span").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".Hours span").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".Mnuites span").innerHTML =minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".Seconds span").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);


// [ 10 ] Increase in reach section 
let Statistics_h4 = document.querySelectorAll(".Statistics h4")
let Statistics = document.querySelector(".Statistics")
let started = false;

          // Dwon With  [ 7 ] Skills
function increase() {
  Statistics_h4.forEach(e => {
    let start = setInterval(() => {
      if (++e.innerHTML == e.dataset.goal) {
        clearInterval(start)
      }
    }, 2000 / e.dataset.goal);
    
  })
}

// [ 7 ] Skills 
let Skills = document.querySelector(".Skills")
let skills_span = document.querySelectorAll(".Skills .progress span")

window.onscroll = function () {
  if ((window.scrollY >= Skills.offsetTop - 400) ) {
    skills_span.forEach(e => {
      e.style.width= e.dataset.width
    })

    if (window.scrollY >= Statistics.offsetTop - 500) {
      if (!started) {
        increase()
      }
      started = true
    }

  } 
}

// [ 8 ] Gallery 
let GalleryImg = document.querySelectorAll(".gallery_box img")

GalleryImg.forEach(e => {
  e.addEventListener("click", function (e) {
    let overlay = document.createElement("div")
    overlay.className = "overlay"
    document.body.appendChild(overlay)


    let cover = document.createElement("div")
    cover.className = "cover"
    overlay.appendChild(cover)


    let CreateImg = document.createElement("img")
    CreateImg.src = e.target.src
    cover.appendChild(CreateImg)


    let Alternat = document.createElement("p")
    let AlternatText = document.createTextNode(e.target.alt)
    Alternat.appendChild(AlternatText)
    cover.prepend(Alternat)

    let i = document.createElement("i")
    i.className = "fa-solid fa-xmark"
    cover.appendChild(i)

    i.onclick = function () {
      overlay.remove()
    }
  })
})








// [ 9 ] Gallery
let Gallery_li = document.querySelectorAll(".Gallery ul li")
let Gallery_Img = document.querySelectorAll(".gallery_box img")


Gallery_li.forEach(e => {
  e.addEventListener("click", function (e) {
    e.target.parentElement.querySelectorAll(".active").forEach(e => {
      e.classList.remove("active")
      this.classList.add("active")
    })
  })

  e.addEventListener("click", function () {
    GalleryImg.forEach(img => {
      img.style.display= "none"
    })
    document.querySelectorAll(this.dataset.cat).forEach(el => {
      el.style.display= "block"
    })
  })
})



// [ 11 ] Show Bullets Or no

let option_Bullets = document.querySelector(".option-Bullets") 
let Section_bullets = document.querySelector(".bullets")
let Show_Bullets_span = document.querySelectorAll(".Show-Bullets span")
Show_Bullets_span.forEach(e => {
  e.addEventListener("click", function (e) {
    e.target.parentElement.querySelectorAll(".active").forEach(e => {
      e.classList.remove("active")
    })
    e.target.classList.add("active")
    
    if (e.target.classList.contains("No")) {
      Section_bullets.style.display ="none"
    }
    if (e.target.classList.contains("Yes")) {
      Section_bullets.style.display ="block"
    }

  })
})

// [ 12 ] reset Website
let reset = document.querySelector(".reset")

reset.onclick = function () {
  localStorage.clear()
  window.location.reload()
}