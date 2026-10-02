function clicked(){
    document.title = document.querySelector("input").value
}


function loading(){
    if(localStorage.getItem('local')){
        document.querySelector("#local").innerText = localStorage.getItem('local')
    }else{
        localStorage.setItem('local', "0")
    }
    if(sessionStorage.getItem('session')){
        document.querySelector("#session").innerText = sessionStorage.getItem('session')
    }else{
        sessionStorage.setItem('session', '0')
    }
}

//First, get what the button currently says. Then, convert to a number (it will be a string). Add 1. Change what the button says. Set storage.
function click1() {
    let t = JSON.parse(document.querySelector("#local").innerText) + 1
    document.querySelector("#local").innerText = t
    localStorage.setItem('local', t)
}


function click2() {
    let t = JSON.parse(document.querySelector("#session").innerText) + 1
    document.querySelector("#session").innerText = t
    sessionStorage.setItem('session', t)
}