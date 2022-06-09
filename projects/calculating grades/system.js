
let submit = document.getElementById('submit')
let record = document.getElementById('recordIt')
let reload = document.getElementById('reload')


submit.addEventListener('click', submited)
record.addEventListener('click', recorded)
reload.addEventListener('click', reLoad)

//for submit button
function submited() {

    
    let input1 = document.getElementById('input1').value
    let english = document.getElementById('eng')
    english.innerHTML = input1

    let input2 = document.getElementById('input2').value
    let math = document.getElementById('math')
    math.innerHTML = input2

    let input3 = document.getElementById('input3').value
    let science = document.getElementById('science')
    science.innerHTML = input3

    let input4 = document.getElementById('input4').value
    let filipino = document.getElementById('filipino')
    filipino.innerHTML = input4
    
    let input5 = document.getElementById('input5').value
    let pe = document.getElementById('pe')
    pe.innerHTML = input5

    let average = document.getElementById('average')

    let totalGrade = Number(input1) + Number(input2) + Number(input3) + Number(input4) + Number(input5)
    average.innerText = totalGrade/5




   
}


//for refresh button
function reLoad() {
    document.getElementById("input1").value = ''
    document.getElementById("input2").value = ''
    document.getElementById("input3").value = ''
    document.getElementById("input4").value = ''
    document.getElementById("input5").value = ''
    document.getElementById("studentName").value = ''

}

//for record button
function recorded() {

    document.getElementById("eng").innerHTML = ''
    document.getElementById("math").innerHTML = ''
    document.getElementById("science").innerHTML = ''
    document.getElementById("filipino").innerHTML = ''
    document.getElementById("pe").innerHTML = ''
    document.getElementById('average').innerHTML = ''
   



    let forName = document.querySelector('.forName')

    let name = document.getElementById('studentName').value
    let nameData = document.createElement('p')
    let nameValue = document.createTextNode(name)

    nameData.appendChild(nameValue)
    forName.appendChild(nameData)

    let forEnglish = document.querySelector('.forEnglish')

    let english = document.getElementById('input1').value
    let englishData = document.createElement('p')
    let englishValue = document.createTextNode(english)

    englishData.appendChild(englishValue)
    forEnglish.appendChild(englishData)

    let forMath = document.querySelector('.forMath')

    let math = document.getElementById('input2').value
    let mathData = document.createElement('p')
    let mathValue = document.createTextNode(math)

    mathData.appendChild(mathValue)
    forMath.appendChild(mathData)

    let forScience = document.querySelector('.forScience')

    let science = document.getElementById('input3').value
    let scienceData = document.createElement('p')
    let scienceValue = document.createTextNode(science)

    scienceData.appendChild(scienceValue)
    forScience.appendChild(scienceData)

    let forFilipino = document.querySelector('.forFilipino')

    let filipino = document.getElementById('input4').value
    let filipinoData = document.createElement('p')
    let filipinoValue = document.createTextNode(filipino)

    filipinoData.appendChild(filipinoValue)
    forFilipino.appendChild(filipinoData)

    let forPe = document.querySelector('.forPe')

    let pe = document.getElementById('input5').value
    let peData = document.createElement('p')
    let peValue = document.createTextNode(pe)

    peData.appendChild(peValue)
    forPe.appendChild(peData)

    let forGwa = document.querySelector('.forGwa')

    let average = (Number(english) + Number(math) + Number(science) + Number(filipino) + Number(pe)) / 5

    let avg = document.createElement('p')
    let avgValue = document.createTextNode(average)

    avg.appendChild(avgValue)
    forGwa.appendChild(avg)

  

}

