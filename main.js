
main = () => {
    let mobileBars = document.getElementsByClassName('mobile-bars')[0];
    mobileBars.addEventListener('click', () => {
        let mobileNav =   document.getElementsByClassName('mobile-nav')[0];
       if(mobileBars.className.includes('open')){
           mobileBars.className = 'mobile-bars';
           mobileNav.style.height = "0";
           mobileNav.style.zIndex = -1;
           document.body.style.overflow = 'auto';
       }
       else{
           document.getElementsByClassName('mobile-nav')[0].style.display = "flex";
           mobileBars.className += ' open';
           mobileNav.style.height = "100vh";
           mobileNav.style.zIndex = 1;
           document.body.style.overflow = 'hidden';
       }
    })
}

main();