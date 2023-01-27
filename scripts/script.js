let Clear = () =>{
    document.getElementById('display-selected').innerHTML = ""
}
let addTodisplay = (str) =>{
    document.getElementById('display-selected').innerHTML += str;
}
let back = () =>{
    let pre = document.getElementById('display-selected').textContent;
    document.getElementById('display-selected').innerHTML = pre.slice(0,-1);
}
let soomething = () =>{
    let expre = document.getElementById('display-selected').textContent;
    document.getElementById('answer').innerHTML = eval(expre);
}