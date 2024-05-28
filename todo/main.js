let input = document.getElementById(`input`)
let btn = document.getElementById(`btn`)
let lists = document.getElementById(`lists`)
let localStorageArray = []
onload = function(){
    input.focus()
}
if(localStorage.getItem(`task`)){
    localStorageArray = (JSON.parse(localStorage.getItem(`task`)))
}
addElemsToPage();
btn.onclick = function () { 
    let user = {
        id:Date.now(),
        value:(input.value).trim()
    }
    localStorageArray.push(user)
    create(input.value);
    let data = JSON.stringify(localStorageArray)
    localStorage.setItem(`task`,data)
    input.value = ``
    create(input.value,user.id)
}
function create(value ,theId){
    if(value != ``){
    let task = document.createElement(`div`)
    let div = document.createElement(`div`)
    let text = document.createTextNode(value)
    let inp = document.createElement(`input`)
    let span = document.createElement(`span`)
    let a = document.createElement(`div`)
    task.id = theId
    div.classList.add(`text`)
    task.classList.add(`task`)
    a.classList.add(`a`)
    inp.id = `check`
    span.classList.add(`span`)
    span.appendChild(document.createTextNode(`X`))
    inp.setAttribute(`type`,`checkbox`)
    a.appendChild(inp)
    a.appendChild(div)
    task.appendChild(a)
    div.appendChild(text)
    task.appendChild(span)
    lists.appendChild(task)
    span.onclick = function(){
        span.parentElement.remove();
        localStorageArray = localStorageArray.filter((e)=>{
            e[`id`] != span.parentElement.id
        })
        localStorage.setItem(`task`,JSON.stringify(localStorageArray))
    }}
}

function addElemsToPage (){
    localStorageArray.forEach((e)=>{
        create(e["value"],e[`id`])
    })
}
