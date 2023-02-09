(function () {
  // Swiper

  const offersSlider = document.querySelector('.offers__slider');
  const offersPagination = offersSlider.querySelector('.swiper-pagination');

  const mySwiper = new Swiper(offersSlider, {
    slidesPerView: '1',
    freeMode: true,
    watchSlidesProgress: true,

    navigation: {
      nextEl: '.offers__btn--next',
      prevEl: '.offers__btn--prev',
    },

    pagination: {
      el: offersPagination,
      type: 'bullets',
      clickable: true,
    },
  });

  const salesSlider = document.querySelector('.sales__slider');

  const mySwiper2 = new Swiper(salesSlider, {
    slidesPerView: '4',
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
      320: {
        slidesPerView: '1',
        spaceBetween: 0,
      },
      768: {
        slidesPerView: '3',
      },
      1024: {
        slidesPerView: '4',
      },
    },

    navigation: {
      nextEl: '.sales__btn--next',
      prevEl: '.sales__btn--prev',
    },
  });

  const salesGallery = document.querySelectorAll('.sales__gallery');

  const initSlider = (slider) => {
    if (slider) {
      const mySwiper3 = new Swiper(slider, {

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },

        slidesPerView: '1',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
      });
    }
  };

  const initSalesGallery = () => {
    if (salesGallery.length) {
      salesGallery.forEach(initSlider);
    }
  };

  initSalesGallery();

  const productsSlider = document.querySelector('.products__slider');

  const mySwiper4 = new Swiper(productsSlider, {
    slidesPerView: '1',
    freeMode: true,
    watchSlidesProgress: true,

    navigation: {
      nextEl: '.products__btn--next',
      prevEl: '.products__btn--prev',
    },
  });

  const productsGallery = document.querySelectorAll('.products__gallery');

  const initSlider2 = (slider) => {
    if (slider) {
      const mySwiper5 = new Swiper(slider, {
        navigation: {
          nextEl: '.products__arrow--next',
          prevEl: '.products__arrow--prev',
        },

        slidesPerView: '1',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
      });
    }
  };

  const initProductsGallery = () => {
    if (productsGallery.length) {
      productsGallery.forEach(initSlider2);
    }
  };

  initProductsGallery();

  // Timer

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(endtime) {
    const clock = document.querySelector('.products__timers');
    const hoursSpan = clock.querySelector('.products__timer--hour');
    const minutesSpan = clock.querySelector('.products__timer--minute');
    const secondsSpan = clock.querySelector('.products__timer--second');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = new Date(Date.parse(new Date()) + 13 * 60 * 60 * 1000); // for endless timer
  initializeClock(deadline);

  // Buttons

  const salesType = document.querySelectorAll('.sales__nav__btn');

  for (let type of salesType) {
    type.addEventListener('click', () => {

      for (let el of salesType) {
        el.classList.remove('sales__nav__btn--active')
      }

      if (!type.classList.contains('sales__nav__btn--active')) {
        type.classList.add('sales__nav__btn--active')
      }
    })
  }

  const statusBtn = document.querySelectorAll('.sales__status__btn');

  for (let btn of statusBtn) {
    btn.addEventListener('click', () => {
      console.log(btn);

      if (btn.classList.contains('sales__status__btn--active')) {
        btn.classList.remove('sales__status__btn--active');
      } else {
        btn.classList.add('sales__status__btn--active');
      }
    })
  }


  // Menu

  const body = document.querySelector('.body')
  const navigationMenu = document.querySelector('.navigation');
  const navigationToggle = navigationMenu.querySelector('.navigation__toggle');

  navigationMenu.classList.remove('navigation--nojs');

  navigationToggle.addEventListener('click', () => {
    if (navigationMenu.classList.contains('navigation--open')) {
      navigationMenu.classList.remove('navigation--open');
      body.classList.remove('body-lock');
    } else {
      navigationMenu.classList.add('navigation--open');
      body.classList.add('body-lock');
    }
  })

  // Select

  const selectSingle = document.querySelector('.sitys');
  const selectSingle_title = selectSingle.querySelector('.sitys__title');
  const selectSingle_labels = selectSingle.querySelectorAll('.sitys__label');

  const selectSecond = document.querySelectorAll('.criteries__container');


  const getAttribute = (container, title) => {
    title.addEventListener('click', () => {
      if ('active' === container.getAttribute('data-state')) {
        container.setAttribute('data-state', '');
      } else {
        container.setAttribute('data-state', 'active');
      }
    });
  }

  const closeList = (labels, tittle, container) => {
    for (let el of labels) {
      el.addEventListener('click', (e) => {
        tittle.textContent = e.target.textContent;
        container.setAttribute('data-state', '');
      })
    }
  }

  getAttribute(selectSingle, selectSingle_title);
  closeList(selectSingle_labels, selectSingle_title, selectSingle);

  const getActive = (container) => {
    for (let el of container) {
      el.addEventListener('click', () => {
        if ('active' === el.getAttribute('data-state')) {
          el.setAttribute('data-state', '');
        } else {
          el.setAttribute('data-state', 'active');
        }
      });
    }
  }

  const operationList = (container) => {
    container.forEach((i) => {
      const selectLabels = i.querySelectorAll('.criteries__label');

      for (let el of selectLabels) {
        el.addEventListener('click', (e) => {
          const selectTitle = i.querySelector('.criteries__title');
          selectTitle.textContent = e.target.textContent;
          i.setAttribute('data-state', '');
        })
      }
    })
  }

  getActive(selectSecond);
  operationList(selectSecond);
})();
