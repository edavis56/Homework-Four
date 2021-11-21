function wrong(){
alert("Wrong")
}

const button = document.getElementById("button");

for (var i = 0; i<7; i++) {
    const button = document.createElement("button");
    button.innerText = i;

    button.addEventListener("click", function() {
        console.log(i)
    })
}