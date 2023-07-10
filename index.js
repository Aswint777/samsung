
window.onscroll=function(){
    scrollFunction();
};
function scrollFunction(){
    const a=document.getElementsById("arrow")
    if( document.body.scrollTop > 20 || document.documentElement > 20){
            a.style.display="block";
    }else{
        a.style.display="none";
    }
}
document.getElementById("arrow").addEventListener("click",function(){
    scrolltotop();
})
function scrolltotop(){document.documentElement.scrollTop=0;
}