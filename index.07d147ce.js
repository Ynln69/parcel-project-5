(()=>{function e(){var e=parseInt(document.documentElement.clientWidth),o=parseInt(window.innerWidth);document.documentElement.style.setProperty("--window-client-width",e);let t=e/o,d=o-e;document.documentElement.style.setProperty("--scrollbar-width",d),o<414?(t=e/414,document.documentElement.style.setProperty("--coef",t)):document.documentElement.style.setProperty("--coef",t)}e(),function(){const e={openPriceModalBtn:document.querySelectorAll(".data-price-modal-open"),openRoomModalBtn:document.querySelectorAll(".data-room-modal-open"),openTableModalBtn:document.querySelectorAll(".data-table-modal-open"),closePriceModalBtn:document.querySelector("[data-price-modal-close]"),closeRoomModalBtn:document.querySelector("[data-room-modal-close]"),closeTableModalBtn:document.querySelector("[data-table-modal-close]"),modalPrice:document.querySelector("[data-price-modal]"),modalRoom:document.querySelector("[data-room-modal]"),modalTable:document.querySelector("[data-table-modal]"),o_hidden:document.querySelector("[data-o-hidden]")};try{for(const t of e.openPriceModalBtn)t.addEventListener("click",(()=>{o()}));e.closePriceModalBtn.addEventListener("click",o)}catch(e){console.log("PriceModal not found")}try{for(const o of e.openRoomModalBtn)o.addEventListener("click",(()=>{t()}));e.closeRoomModalBtn.addEventListener("click",t)}catch(e){console.log("RoomModal not found")}try{for(const o of e.openTableModalBtn)o.addEventListener("click",(()=>{d()}));e.closeTableModalBtn.addEventListener("click",d)}catch(e){console.log("TableModal not found")}function o(){e.modalPrice.classList.toggle("backdrop--is-hidden"),n()}function t(){e.modalRoom.classList.toggle("backdrop--is-hidden"),n()}function d(){e.modalTable.classList.toggle("backdrop--is-hidden"),n()}function n(){e.o_hidden.classList.toggle("o-padding"),e.o_hidden.classList.toggle("not-padding");getComputedStyle(document.documentElement).getPropertyValue("--window-client-width")}}(),window.addEventListener("resize",(()=>{e()}))})();
//# sourceMappingURL=index.07d147ce.js.map
