let nl = document.querySelectorAll('p')
let questionNl = document.querySelectorAll('h2')
var questionArr = Array.from(questionNl)
var answerArr = Array.from(nl)
var imgArr = Array.from(document.querySelectorAll('.arrow'))
console.log(questionArr)
console.log(answerArr)
console.log(imgArr)

function toggle(Index){
    if(questionArr[Index].classList.contains('bold')){
        questionArr[Index].classList.remove('bold')
        answerArr[Index].classList.add('hidden')
        imgArr[Index].classList.add('rotate')
    }else{
        questionArr[Index].classList.add('bold')
        answerArr[Index].classList.remove('hidden')
        imgArr[Index].classList.remove('rotate')
    }
}

