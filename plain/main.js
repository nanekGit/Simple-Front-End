




function onMouseEnter(){
    this.color = this.style.backgroundColor;
    this.style.backgroundColor = "#F00";
}

function onMouseLeave(){
    this.style.backgroundColor = this.color;
}

document.querySelectorAll("#first > *").forEach(
    element => {
        element.onmouseenter = onMouseEnter;
        element.onmouseleave = onMouseLeave;
    }
)


function onMouseEnter2(){
    this.color = this.style.backgroundColor;
    this.style.backgroundColor = this.getAttribute("data-changeColor");
}

document.querySelectorAll("[data-changeColor]").forEach(
    element => {
        element.onmouseenter = onMouseEnter2;
        element.onmouseleave = onMouseLeave;
    }
)


 fetch("https://jsonplaceholder.typicode.com/users")
     .then(response => response.json())
     .then(users => users.forEach(user => console.log(user.name)));





