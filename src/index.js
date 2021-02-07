 import  './css/style.css'

window.onload=function(){
    
    let info=document.createElement('h1')
    info.innerHTML="Candy font, 这是糖果体！"
    info.classList.add('tip')
    document.body.appendChild(info)

    let a=document.createElement('a')
    a.href="https://www.sentyfont.com/"
    a.innerHTML="汉字书法研究及数字化工程绿色研习社"
    document.body.appendChild(a)
}
