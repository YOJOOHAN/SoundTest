"user strict";
{
  const head =document.getElementById("head");
  const arm1 =document.getElementById("arm1");
  const arm2 =document.getElementById("arm2");
  const tummy =document.getElementById("tummy");
  const ear1 =document.getElementById("ear1");
  const ear2 =document.getElementById("ear2");
  const face1 =document.getElementById("face1");
  const face2 =document.getElementById("face2");
  const ero = document.getElementById("ero");
  const foot1 =document.getElementById("foot1");
  const foot2 =document.getElementById("foot2");
  const tail1 =document.getElementById("tail1");
  const tail2 =document.getElementById("tail2");

  head.addEventListener("click",()=>{
    document.getElementById("power").currentTime= 0;
    document.getElementById("power").play();})

  arm1.addEventListener("click",()=>{
    document.getElementById("push").currentTime= 0;
    document.getElementById("push").play();})
    
  arm2.addEventListener("click",()=>{
    document.getElementById("push").currentTime= 0;
    document.getElementById("push").play();})

  tummy.addEventListener("click",()=>{
    document.getElementById("power").currentTime= 0;
    document.getElementById("power").play();})

  ear1.addEventListener("click",()=>{
    document.getElementById("cursor").currentTime= 0;
    document.getElementById("cursor").play();})

  ear2.addEventListener("click",()=>{
    document.getElementById("cursor").currentTime= 0;
    document.getElementById("cursor").play();})

  face1.addEventListener("click",()=>{
    document.getElementById("power").currentTime= 0;
    document.getElementById("power").play();})

  face2.addEventListener("click",()=>{
    document.getElementById("power").currentTime= 0;
    document.getElementById("power").play();})

  ero.addEventListener("click",()=>{
    document.getElementById("waaw").currentTime= 1;
    document.getElementById("waaw").play();})

  foot1.addEventListener("click",()=>{
    document.getElementById("push").currentTime= 0;
    document.getElementById("push").play();})
   
  foot2.addEventListener("click",()=>{
    document.getElementById("push").currentTime= 0;
    document.getElementById("push").play();})
    
  tail1.addEventListener("click",()=>{
    document.getElementById("beep").currentTime= 0;
    document.getElementById("beep").play();})
  
  tail2.addEventListener("click",()=>{
    document.getElementById("beep").currentTime= 0;
    document.getElementById("beep").play();})
  
  
  }