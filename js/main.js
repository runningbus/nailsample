var btns = document.querySelectorAll(".buttons button");
var nail = document.getElementsByClassName("nail")[0];
var img_1 = document.getElementById("img_1");

for (i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", manageNailClasses);
}

var prev = null;
function manageNailClasses() {
    if (this.getAttribute("data-add")) {
        if (prev != null) {
            nail.classList.remove(prev);
        }
    
        prev = this.getAttribute("data-add");
        nail.classList.add(this.getAttribute("data-add"));
    } else {
        if (img_1.style.display === 'none') {
            img_1.style.display = 'block';
        } else {
            img_1.style.display = 'none';
        }
    }
}