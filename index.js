var colors=["white",'green','yellow','orange','blue','pink']
var len=colors.length-1
var btnControl=document.getElementById("btn")
var spanControl=document.querySelector('.color')

btnControl.addEventListener('click',()=>{
    var index=generateRandomnumber()
        console.log(index)
        document.body.style.backgroundColor=colors[index]
        spanControl.textContent=colors[index]
    
})
function generateRandomnumber(){
    return Math.round(Math.random()*len)
}