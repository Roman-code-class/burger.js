document.addEventListener('DOMContentLoaded', () => {
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
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu_arrow')

    if (menuArrows.length) {
      Array.from(menuArrows).forEach(menuArrow => {
        menuArrow.addEventListener('click', () => {
          menuArrow.parentElement.classList.toggle('_active');
        });
      })
    }
  } else {
    document.body.classList.add('_pc');
  }

  // плавный переход по сайту
  const menuLinks = document.querySelectorAll('.menu_link[data-goto]');

  if (menuLinks.length) {
    Array.from(menuLinks).forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick (event) {
      event.preventDefault();

      const menuLink = event.target;
      const gotoDataset = menuLink.dataset.goto;
      const gotoBlock = document.querySelector(gotoDataset);

      if (gotoDataset && gotoBlock) {
        const wrapperOffsetHeight = document.querySelector('.wrapper')
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - wrapperOffsetHeight;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: 'smooth'
        });
      }
    }
  }
});
