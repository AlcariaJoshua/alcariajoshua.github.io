let alink = document.querySelector(".alink")
let close = document.querySelector(".fa-times")


function bukas() {
    if(alink.style.display = 'none'){
        alink.style.display = 'block'
        document.querySelector('body').style.marginLeft = '250px';
    }
}

function sara(){
    if(alink.style.display = "block"){
        alink.style.display = ''
        document.querySelector('body').style.marginLeft = '';
    }
}

let project1 = document.querySelector('.project1');
let divA = project1.querySelector('.a');


project1.addEventListener('mouseover', function(){
    divA.style.display = 'block'
})

project1.addEventListener('mouseout', function(){
    divA.style.display = ''
})

let project2 = document.querySelector('.project2');
let divB = project2.querySelector('.a');

project2.addEventListener('mouseover', function(){
    divB.style.display = 'block'
})

project2.addEventListener('mouseout', function(){
    divB.style.display = ''
})

let project3 = document.querySelector('.project3');
let divC = project3.querySelector('.a');

project3.addEventListener('mouseover', function(){
    divC.style.display = 'block'
})

project3.addEventListener('mouseout', function(){
    divC.style.display = ''
})

let project4 = document.querySelector('.project4');
let divD = project4.querySelector('.a');

project4.addEventListener('mouseover', function(){
    divD.style.display = 'block'
})

project4.addEventListener('mouseout', function(){
    divD.style.display = ''
})

let project5 = document.querySelector('.project5');
let divE = project5.querySelector('.a');

project5.addEventListener('mouseover', function(){
    divE.style.display = 'block'
})

project5.addEventListener('mouseout', function(){
    divE.style.display = ''
})


