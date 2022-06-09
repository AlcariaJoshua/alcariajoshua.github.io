
let keyNum = document.querySelector('.buttons')
let display = document.querySelector('.display')
let calculator =document.querySelector('.calculator')


keyNum.addEventListener('click', function(event){
    if(!event.target.matches('button')) return

    let key = event.target
    let keyValue = key.textContent
    let displayValue = display.textContent

    display.textContent = displayValue + keyValue
    
   

    if(key.classList.contains('equal')){
        const compute = eval(displayValue)
        display.textContent = compute
    }

    if(key.classList.contains('clear')){
        display.textContent = ''
    }else if(key.classList.contains('slice')){
        display.textContent = displayValue.slice(0, -1) 
    }



})






/*


let display = document.querySelector(".display")

let buttons = Array.from(document.querySelectorAll("button"))

    buttons.map( button => {
        button.addEventListener('click', function(event){
            switch(event.target.innerText){
                case 'C':
                    display.innerHTML = "";
                    break;
                case '=':
                    display.innerHTML = eval(display.innerHTML)
                    break;
                case '<':
                    display.innerHTML = display.innerHTML.slice(0, - 1)
                    break;
                default:
                    display.innerHTML += event.target.innerHTML
            }
        })
    })

*/
   

    