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

    let menuArrows = document.querySelectorAll('.menu_arrow');

    if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function(event){
          menuArrow.parentElement.classList.toggle('_active');
        });
      }
    }

  } else {
    document.body.classList.add('_pc');
  };

  // плавный переход по сайту к началу сайта 
//   const menuLinks = document.querySelectorAll('.menu_link[data-goto]');

//   if (menuLinks.length) {
//     Array.from(menuLinks).forEach(menuLink => {
//       menuLink.addEventListener('click', onMenuLinkClick);
//     });

//     function onMenuLinkClick (event) {
//       event.preventDefault();

//       const menuLink = event.target;
//       const gotoDataset = menuLink.dataset.goto;
//       const gotoBlock = document.querySelector(gotoDataset);

//       if (gotoDataset && gotoBlock) {
//         const wrapperOffsetHeight = document.querySelector('.wrapper')
//         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - wrapperOffsetHeight;

//         window.scrollTo({
//           top: gotoBlockValue,
//           behavior: 'smooth'
//         });
//       }
//     }
//   }
// });

// плавный переход по сайту по разделам  ы
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');

  if (menuLinks.length > 0) {
    Array.from(menuLinks).forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick (event) {
      event.preventDefault();

      const menuLink = event.target;
      const gotoDataset = menuLink.dataset.goto;
      const gotoBlock = document.querySelector(gotoDataset);

      if (gotoDataset && gotoBlock) {
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('.header').offsetHeight;

        if (iconMenu.classList.contains('_active')) {
          document.body.classList.remove('_lock');
          iconMenu.classList.remove('_active');
          menuBody.classList.remove('_active');
        }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: 'smooth'
        });
      }
    }
  }
});

// Бургер 

const iconMenu = document.querySelector ('.menu_icon');
const menuBody = document.querySelector ('.menu_body');
if (iconMenu) {
iconMenu.addEventListener("click", function(e) {
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
});
}
