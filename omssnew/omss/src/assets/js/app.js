//= ../../../node_modules/swiper/swiper-bundle.js
//= components/scrolllock.js

document.addEventListener("DOMContentLoaded", () => {
  //= components/sliders.js

  // header functional

  const header = document.querySelector(".header");
  let scrollPrev = 0;

  if (header) {
    // window.addEventListener("scroll", () => {
    //   let scrolled = document.documentElement.scrollTop;

    //   if (scrolled > 50 && scrolled > scrollPrev) {
    //     header.classList.add("out");
    //   } else {
    //     header.classList.remove("out");
    //   }

    //   if (scrolled <= 50) {
    //     header.classList.add("top");
    //   } else {
    //     header.classList.remove("top");
    //   }

    //   scrollPrev = scrolled;
    // });

    // if (document.documentElement.scrollTop <= 50) {
    //   header.classList.add("top");
    // }

    const burger = document.querySelector(".burger-menu");
    const headerContent = document.querySelector(".header-content");
    const main = document.querySelector("main");

    burger.addEventListener("click", () => {
      burger.classList.toggle("menu-on");
      headerContent.classList.toggle("active");
      main.classList.toggle("bg");

      if (burger.classList.contains("menu-on")) {
        scrollLock.disablePageScroll();
      } else {
        scrollLock.enablePageScroll();
      }
    });
  }

  // tabs

  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs =
        typeof target === "string" ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll(".tabs-btn");
      this._elPanes = this._elTabs.querySelectorAll(".tabs-pane");
      this._elPanesAddl = this._elTabs.querySelectorAll(".tabs-pane_addl");
      this._eventShow = new Event("tab.itc.change");
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute("role", "tablist");
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute("role", "tab");
        this._elPanes[index].setAttribute("role", "tabpanel");
        this._elPanesAddl[index].setAttribute("role", "tabpanel");
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elPaneAddlTarget = this._elPanesAddl[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector(".tabs-btn_active");
      const elPaneShow = this._elTabs.querySelector(".tabs-pane_show");
      const elPaneAddlShow = this._elTabs.querySelector(".tabs-pane_addl_show");
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove("tabs-btn_active") : null;
      elPaneShow ? elPaneShow.classList.remove("tabs-pane_show") : null;
      elPaneAddlShow
        ? elPaneAddlShow.classList.remove("tabs-pane_addl_show")
        : null;
      elLinkTarget.classList.add("tabs-btn_active");
      elPaneTarget.classList.add("tabs-pane_show");
      elPaneAddlTarget.classList.add("tabs-pane_addl_show");
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    }
    _events() {
      this._elTabs.addEventListener("click", (e) => {
        const target = e.target.closest(".tabs-btn");
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  if (document.querySelector(".contacts-addrs")) {
    new ItcTabs(".contacts-addrs");
  }

  // modal functioal

  const modalTriggers = document.querySelectorAll("[data-modal]");

  if (modalTriggers.length > 0) {
    modalTriggers.forEach((el) => {
      el.addEventListener("click", () => {
        let modalName = el.dataset.modal;
        let modal = document.querySelector(`[data-modalName='${modalName}']`);

        modal.classList.remove("hide");
        scrollLock.disablePageScroll();
      });
    });
  }

  const modals = document.querySelectorAll(".modal");

  if (modals.length > 0) {
    modals.forEach((el) => {
      el.querySelector("[data-close]").addEventListener("click", () => {
        el.classList.add("hide");
        scrollLock.enablePageScroll();
      });
    });
  }

  // Anchor smooth scroll

  const pageLinks = document.querySelectorAll('a[href^="#"]');

  if (pageLinks.length > 0) {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }

  let inputWrappers = document.querySelectorAll(".form-input__wrapper");

  if (inputWrappers) {
    document.querySelectorAll(".form-input").forEach(function (el) {
      el.addEventListener("focus", function () {
        el.parentElement.classList.add("focus");
      });
      el.addEventListener("blur", function () {
        if (el.value != "" || el.innerHTML.length != 0) {
          el.parentElement.classList.add("focus");
        } else {
          el.parentElement.classList.remove("focus");
        }
      });
    });
  }


  function disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    document.documentElement.style.setProperty('scroll-behavior', 'auto');
  
    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  
  function enableScroll() {
    document.documentElement.style.setProperty('scroll-behavior', null);
    window.onscroll = function () { };
  }

  function doAPIcall(type, data='', url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
        var data = xmlhttp.responseText;
        if (callback) callback(data);
      }
    };
    xmlhttp.open(type, url, true);
    if (data) {
      xmlhttp.send(data);
      return
    }
    xmlhttp.send(data)
  }


  
  
  for (const form of document.forms) {
    form.addEventListener('submit', function () {
      event.preventDefault();
      const formData = new FormData(this);
      const orderForm = this.closest('.modal-order')
      const feedback = document.querySelector('#feedback');

  
      // for(const key of formData.entries()) {
      //   console.log(key);
      // }
  
      doAPIcall('POST', formData, './send.php', function(data) {
        console.log(data)
      })
      this.reset();

      if (orderForm) {
        orderForm.classList.add('hide')
        scrollLock.enablePageScroll();
      }
  
      if (feedback) {
        feedback.classList.remove('hide')
          scrollLock.disablePageScroll();
      }
    });
  }
  
});
