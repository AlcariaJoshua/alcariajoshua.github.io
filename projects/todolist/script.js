
let input = document.getElementById('input')
let addButton = document.querySelector('.addBtn')
let list = document.querySelector('.list')

addButton.addEventListener('click', addNewList)
list.addEventListener('click', deleted)

function addNewList(){

        let newlist = document.createElement('li')
        newlist.className = 'newlist'
        let inputValue = input.value
        let listText = document.createTextNode(inputValue)
        newlist.appendChild(listText) 

       

        if(inputValue === ''){
                alert('write something')
        }else{
                list.appendChild(newlist)
        }
              


            

               let closeBtn = document.createElement('span')
               let btnIcon = document.createTextNode('\u00D7')
               closeBtn.appendChild(btnIcon)
               closeBtn.className = 'close'

               newlist.appendChild(closeBtn)

}

function deleted(e){
        let list = e.target
        
        if(list.className === 'close'){
                let div = list.parentElement
                div.remove()
        }


}

       