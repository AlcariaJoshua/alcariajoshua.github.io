let close = document.getElementById("cld")
let tc = document.querySelector(".terms-condition")
let body = document.querySelector("body")
let span1 = document.querySelector(".span1")



span1.addEventListener('click', function(){
    alert("bahala ka sa buhay mo")
})


function bukas(){
    if(tc.style.display = 'none'){
        tc.style.display = 'block'
    }
}


function sara(){
    if(tc.style.display = 'block'){
        tc.style.display = ''  
    }
}