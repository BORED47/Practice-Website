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