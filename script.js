const clicked = document.querySelector(".wrapper")
const input = document.querySelector(".input")
const values = Array.from(document.querySelectorAll(".rate-value"))

let txt = ""

 values.forEach(element => {
     element.addEventListener("click", ()=>{
         txt = element.innerText
         for (item of values) {
             item.classList.remove("selected")
         }
         element.classList.add("selected")
     })
    

     element.addEventListener("mouseover", ()=> {
        if (element.classList.contains("selected"))
        {
            element.style.backgroundColor = ""
        } else {
            element.style.backgroundColor = "grey"
     }
    })

    element.addEventListener("mouseout", ()=> {
        element.style.backgroundColor = ""
    })
    
 });



let flip = () => {
    if (txt == ""){
        alert("Please select a rating")
    }
    else{
        clicked.setAttribute("flipped", "true");
        input.innerHTML = txt;
    }
    
}

