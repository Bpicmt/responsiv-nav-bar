
/************** Toogle menu bar **************/

const hamberger = document.querySelector(".hamberger");
const menu = document.querySelector(".nav-list ul");
const menu_item = document.querySelectorAll(".nav-list ul li a");

hamberger.addEventListener("click", ()=> {
    hamberger.classList.toggle("active");
    menu.classList.toggle("active");
})

menu_item.forEach((item)=> {
    item.addEventListener("click", ()=> {
        hamberger.classList.toggle("active");
        menu.classList.toggle("active");
    })
})


/************** Header bg-change **************/

const header_bg = document.querySelector(".header");

document.addEventListener("scroll", ()=> {
    var scroll= window.scrollY
    if(scroll> 100) {
        header_bg.style.backgroundColor =
        "#080c10fd";
    }
    else {
        header_bg.style.backgroundColor =
        "#080c1065";
    }

})




/************** Login **************/

// function myFunction() {
//     var x = document.getElementById("myInput");
//     var y = document.getElementById("hide1")
//     var z = document.getElementById("hide2")

//     if (x.type === "password") {
//         x.type = "text";
//         y.style.display = "block";
//         z.style.display = "none";
//     }

//     else {
//         x.type = "password";
//         y.style.display = "none";
//         z.style.display = "block";
//     }
// }


// var bg_chenger = document.querySelector(".nav-bar");

// document.addEventListener("scroll", () => {
//     var scroll_posi = window.scrollY;
//     if (scroll_posi > 100) {
//         bg_chenger.style.backgroundColor = "#010613";
//     }
//     else {
//         bg_chenger.style.backgroundColor = "#3d536d5b"
//     }
// })