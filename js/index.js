function cambiarColor() {
    let color = document.getElementById("color").value;
    document.body.style.backgroundColor = color;
}
function restaurarColor() {
    document.body.style.backgroundColor = "#008b8b";
}

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        $('#navbar').css({ top: "100px" });
    }
    else {
        $('#navbar').css({ top: "0px" });
    }
}, false); 