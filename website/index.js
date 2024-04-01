// window.onscroll = () => {
//     const nav = document.querySelector('#custom');
//     if (this.scrollY <= 10) nav.className = 'custom-navbar custom-navbar-scroll navbar navbar-expand-md navbar-dark bg-dark'; 
//     else nav.className = 'nav scroll';
// };


window.addEventListener('scroll', function () {

    var scrollPosition = window.scrollY;

    let x = document.querySelectorAll('.custom-navbar-nav li')

    if (scrollPosition > 0) {
        // If scroll position is greater than 0, add a class to change styles
        document.querySelector('.custom-navbar').classList.add('scrolled');
        document.querySelector('.custom-navbar .navbar-brand').classList.add('scrolled');
        for (let i = 0; i < x.length; i++)
            x[i].querySelector('a').classList.add('scrolled');
        document.querySelector('a:hover').classList.add('scrolled');

    } else {
        // If scroll position is 0, remove the class to revert styles
        document.querySelector('.custom-navbar').classList.remove('scrolled');
        document.querySelector('.custom-navbar .navbar-brand').classList.remove('scrolled');
        for (let i = 0; i < x.length; i++)
            x[i].querySelector('a').classList.remove('scrolled');
            document.querySelector('a:hover').classList.remove('scrolled');
        //   document.querySelector('.custom-navbar .custom-navbar-nav li a').classList.remove('scrolled');

    }
});  