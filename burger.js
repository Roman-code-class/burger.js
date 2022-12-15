
// Распознование устройства 
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

// Подменю со стрелкой 
if (isMobile.any()) {
    document.body.classList.add ('_touch');

let menuArrows = document.querySelectorAll ('.menu_arrow')
if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index]; 
        menuArrow.addEventListener ("click", function (e) {
            menuArrow.parentElement.classList.toggle('_active');
        });
    }
}
}
else {
    document.body.classList.add ('_pc');
}

// плавный переход по сайту
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener ("click", onMenuLinkClick);
    });

    function onMenuLinkClick (e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('wrapper').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault ();
        }
    }
}