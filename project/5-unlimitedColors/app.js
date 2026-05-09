// logic for creating randomcolor
const randomcolor=function(){
  const hex="0123456789ABCDEF"
  let color="#"
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
}
// logic for pressing on start button
const colorgenerator = function(){
  document.body.style.backgroundColor=randomcolor()
}
let intervalId;
let starting=document.querySelector('#start').

  addEventListener('click',function(){
  if(!intervalId){
  intervalId = setInterval(colorgenerator, 1000)
  }
}
)
// logic for pressing on stop button
let ending=document.querySelector('#stop').addEventListener('click',function(){
  clearInterval(intervalId)
  intervalId=null;
})