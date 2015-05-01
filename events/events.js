// Your code here
window.addEventListener("load", function() {
    document.querySelector("button").addEventListener("click", function(event) {
        alert();
    });

    document.querySelector("#mouser").addEventListener("mouseover", function(event) {
        this.style.backgroundColor = "yellow";
    });

    document.querySelector("#mouser").addEventListener("mouseout", function(event) {
        this.style.backgroundColor = "green";
    });

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert(this.querySelector("input[name=term]").placeholder);
    });

    document.querySelector("ul").addEventListener("click", function(event) {
        alert(event.target.innerHTML);
    });
});
