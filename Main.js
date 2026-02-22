// Scroll Reveal
window.addEventListener('scroll', function() {
    let reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            reveals[i].classList.add('active');
        }
    }
});

// Intro remove
window.onload = function(){
    setTimeout(function(){
        document.getElementById("intro").style.display="none";
    }, 5000);
}
