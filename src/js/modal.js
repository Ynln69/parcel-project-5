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

    console.log(
      'clientWidth:',
      getComputedStyle(document.documentElement).getPropertyValue(
        '--window-client-width'
      ),
      '; innerWidth:',
      windowInnerWidth
    );
  }

  function events() {
    const refs = {
      openPriceModalBtn: document.querySelector('[data-price-modal-open]'),
      openRoomModalBtn: document.querySelector('[data-room-modal-open]'),
      openTableModalBtn: document.querySelector('[data-table-modal-open]'),

      closePriceModalBtn: document.querySelector('[data-price-modal-close]'),
      closeRoomModalBtn: document.querySelector('[data-room-modal-close]'),
      closeTableModalBtn: document.querySelector('[data-table-modal-close]'),

      modalPrice: document.querySelector('[data-price-modal]'),
      modalRoom: document.querySelector('[data-room-modal]'),
      modalTable: document.querySelector('[data-table-modal]'),

      o_hidden: document.querySelector('[data-o-hidden]'),
    };

    try {
      refs.openPriceModalBtn.addEventListener('click', removePriceModal);
      refs.closePriceModalBtn.addEventListener('click', addPriceModal);
    } catch (error) {
      console.log('PriceModal not found: ');
    }

    try {
      refs.openRoomModalBtn.addEventListener('click', removeRoomModal);
      refs.closeRoomModalBtn.addEventListener('click', addRoomModal);
    } catch (error) {
      console.log('RoomModal not found: ');
    }

    try {
      refs.openTableModalBtn.addEventListener('click', removeTableModal);
      refs.closeTableModalBtn.addEventListener('click', addTableModal);
    } catch (error) {
      console.log('TableModal not found: ');
    }

    function addPriceModal() {
      refs.modalPrice.classList.add('backdrop--is-hidden');
      addHidden();
    }

    function removePriceModal() {
      refs.modalPrice.classList.remove('backdrop--is-hidden');
      removeHidden();
    }

    function addRoomModal() {
      refs.modalRoom.classList.add('backdrop--is-hidden');
      addHidden();
    }

    function removeRoomModal() {
      console.log('click3');
      refs.modalRoom.classList.remove('backdrop--is-hidden');
      removeHidden();
    }

    function addTableModal() {
      console.log('click3');
      refs.modalTable.classList.add('backdrop--is-hidden');
      addHidden();
    }

    function removeTableModal() {
      console.log('click3');
      refs.modalTable.classList.remove('backdrop--is-hidden');
      removeHidden();
    }

    function addHidden() {
      refs.o_hidden.classList.remove('o-padding');
      refs.o_hidden.classList.add('not-padding');
      toggleModal();
    }

    function removeHidden() {
      refs.o_hidden.classList.add('o-padding');
      refs.o_hidden.classList.remove('not-padding');
      toggleModal();
    }

    function toggleModal() {
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
})();
