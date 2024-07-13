document.getElementById("zomato-image-link").addEventListener("click", function() {
    window.open("https://www.zomato.com/", "_blank");
} );

document.getElementById("linkedin").addEventListener("click", function() {
    window.open("https://in.linkedin.com/company/zomato", "_blank");
} );
document.getElementById("insta").addEventListener("click", function() {
    window.open("https://www.instagram.com/zomato/", "_blank");
} );
document.getElementById("twitter").addEventListener("click", function() {
    window.open("https://twitter.com/zomato", "_blank");
} );
document.getElementById("youtube").addEventListener("click", function() {
    window.open("https://www.youtube.com/zomato", "_blank");
} );
document.getElementById("facebook").addEventListener("click", function() {
    window.open("https://www.facebook.com/zomato", "_blank");
} );

document.getElementById( "hindi-language" ).addEventListener( "click", function () {
    window.location.href = "https://www.zomato.com/chandigarh/dine-out?lang=hi&user_lang_change=1";
} );

document.getElementById("scroll-top").onclick = function () {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
    
function toggleMenu() {
    var hiddenMenu = document.getElementById('HiddenProfileMenu');
    hiddenMenu.style.display = hiddenMenu.style.display === 'none' ? 'block' : 'none';
}


  

