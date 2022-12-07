// © M. Startsev - 2022, https://github.com/MStartsev

(() => {
  respCoef(); //респосив коеф. ( для Width < 414px)
  events();

  window.addEventListener('resize', () => {
    respCoef(); //респосив коеф.
  });

  function respCoef() {
    var windowClientWidth = parseInt(document.documentElement.clientWidth);
    var windowInnerWidth = parseInt(window.innerWidth);
    document.documentElement.style.setProperty(
      '--window-client-width',
      windowClientWidth
    );

    let coef = windowClientWidth / windowInnerWidth;
    let scrollbar = windowInnerWidth - windowClientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', scrollbar);

    if (windowInnerWidth < 414) {
      coef = windowClientWidth / 414;
      document.documentElement.style.setProperty('--coef', coef);
    } else {
      document.documentElement.style.setProperty('--coef', coef);
    }

    // console.log(
    //   'clientWidth:',
    //   getComputedStyle(document.documentElement).getPropertyValue(
    //     '--window-client-width'
    //   ),
    //   '; innerWidth:',
    //   windowInnerWidth
    // );
  }

  function events() {
    const refs = {
      openPriceModalBtn: document.querySelectorAll('.data-price-modal-open'),
      openRoomModalBtn: document.querySelectorAll('.data-room-modal-open'),
      openTableModalBtn: document.querySelectorAll('.data-table-modal-open'),

      closePriceModalBtn: document.querySelector('[data-price-modal-close]'),
      closeRoomModalBtn: document.querySelector('[data-room-modal-close]'),
      closeTableModalBtn: document.querySelector('[data-table-modal-close]'),

      modalPrice: document.querySelector('[data-price-modal]'),
      modalRoom: document.querySelector('[data-room-modal]'),
      modalTable: document.querySelector('[data-table-modal]'),

      o_hidden: document.querySelector('[data-o-hidden]'),
    };

    try {
      for (const button of refs.openPriceModalBtn) {
        button.addEventListener('click', () => {
          PriceModal();
        });
      }
      refs.closePriceModalBtn.addEventListener('click', PriceModal);
    } catch (error) {
      console.log('PriceModal not found');
    }

    try {
      for (const button of refs.openRoomModalBtn) {
        button.addEventListener('click', () => {
          RoomModal();
        });
      }

      refs.closeRoomModalBtn.addEventListener('click', RoomModal);
    } catch (error) {
      console.log('RoomModal not found');
    }

    try {
      for (const button of refs.openTableModalBtn) {
        button.addEventListener('click', () => {
          TableModal();
        });
      }
      refs.closeTableModalBtn.addEventListener('click', TableModal);
    } catch (error) {
      console.log('TableModal not found');
    }

    function PriceModal() {
      refs.modalPrice.classList.toggle('backdrop--is-hidden');
      toggleModal();
    }

    function RoomModal() {
      refs.modalRoom.classList.toggle('backdrop--is-hidden');
      toggleModal();
    }

    function TableModal() {
      refs.modalTable.classList.toggle('backdrop--is-hidden');
      toggleModal();
    }

    function toggleModal() {
      refs.o_hidden.classList.toggle('o-padding');
      refs.o_hidden.classList.toggle('not-padding');

      let width = getComputedStyle(document.documentElement).getPropertyValue(
        '--window-client-width'
      );

      if (width > 414) {
        let scrollbar = getComputedStyle(
          document.documentElement
        ).getPropertyValue('--scrollbar-width');

        try {
          let elem = document.querySelector('.o-padding').style;
          elem.paddingRight = scrollbar + 'px';
          document.querySelector('.modal').style.marginLeft = 0;
        } catch (err) {
          let elem = document.querySelector('.not-padding').style;
          elem.paddingRight = 0;
          document.querySelector('.modal').style.marginLeft =
            scrollbar / 2 + 'px';
        }
      }
    }
  }
})();
