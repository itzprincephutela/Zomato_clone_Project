//for login page
let log=document.getElementById("loginpage");
let full=document.getElementById("full")
let but=document.getElementById("hi");

but.addEventListener('click',()=>{
    full.style.display="block";
    log.style.display="block";
})

let cr = document.getElementById( "cross" );

cr.addEventListener('click',()=>{
    full.style.display='none';
    log.style.display='none';
})

