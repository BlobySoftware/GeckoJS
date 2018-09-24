var npmBox = document.getElementById("npmCode");
var copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () =>{
    copyNpm();
})

function copyNpm(){
    npmBox.select();
    document.execCommand("copy");
}

