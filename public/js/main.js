(() => {
  const focusableSelector = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ].join(",");

  let activeModal = null;
  let lastFocusedElement = null;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initIconsAndAnimations() {
    if (window.lucide) {
      window.lucide.createIcons();
    }

    if (window.AOS) {
      window.AOS.init({
        disable: prefersReducedMotion,
        duration: 900,
        easing: "ease-out-quart",
        offset: 70,
        once: true
      });
    }
  }

  function initHeader() {
    const nav = document.getElementById("main-nav");
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");

    if (!nav || !menuBtn || !mobileMenu || !menuIcon || !closeIcon) {
      return;
    }

    const setMenuState = (isOpen) => {
      mobileMenu.classList.toggle("hidden", !isOpen);
      menuIcon.classList.toggle("hidden", isOpen);
      closeIcon.classList.toggle("hidden", !isOpen);
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("overflow-hidden", isOpen);
    };

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      nav.classList.toggle("glass-nav", isScrolled);
      nav.classList.toggle("py-2", isScrolled);
      nav.classList.toggle("shadow-sm", isScrolled);
      nav.classList.toggle("bg-transparent", !isScrolled);
      nav.classList.toggle("py-4", !isScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    menuBtn.addEventListener("click", () => {
      setMenuState(mobileMenu.classList.contains("hidden"));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });
  }

  function setInlineBackgrounds(container) {
    container.querySelectorAll("[data-inline-style]").forEach((panel) => {
      const styleText = panel.getAttribute("data-inline-style");

      if (styleText) {
        panel.style.cssText = styleText;
      }
    });
  }

  function initBeforeAfterSliders() {
    document.querySelectorAll(".before-after").forEach((container) => {
      const slider = container.querySelector(".before-after__slider");
      setInlineBackgrounds(container);

      if (!(slider instanceof HTMLInputElement)) {
        return;
      }

      const updatePosition = (value) => {
        const numericValue = Number(value);
        const clamped = Number.isFinite(numericValue)
          ? Math.min(100, Math.max(0, numericValue))
          : 50;

        container.style.setProperty("--ba-position", `${clamped}%`);
      };

      updatePosition(slider.value);
      slider.addEventListener("input", (event) => {
        updatePosition(event.currentTarget.value);
      });
    });
  }

  function getFocusableElements(modal) {
    return Array.from(modal.querySelectorAll(focusableSelector)).filter((element) => {
      return element instanceof HTMLElement && !element.hasAttribute("disabled");
    });
  }

  function openModal(modalId, trigger) {
    const modal = document.getElementById(modalId);

    if (!modal) {
      return;
    }

    activeModal = modal;
    lastFocusedElement = trigger instanceof HTMLElement ? trigger : document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    const firstFocusable = getFocusableElements(modal)[0];

    if (firstFocusable instanceof HTMLElement) {
      firstFocusable.focus();
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);

    if (!modal) {
      return;
    }

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }

    activeModal = null;
    lastFocusedElement = null;
  }

  function trapModalFocus(event) {
    if (!activeModal || event.key !== "Tab") {
      return;
    }

    const focusableElements = getFocusableElements(activeModal);

    if (focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function initStaffModals() {
    document.querySelectorAll("[data-modal-target]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const modalId = trigger.getAttribute("data-modal-target");
        if (modalId) {
          openModal(modalId, trigger);
        }
      });
    });

    document.querySelectorAll("[data-modal-close]").forEach((button) => {
      button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal-close");
        if (modalId) {
          closeModal(modalId);
        }
      });
    });

    document.querySelectorAll(".modal-backdrop").forEach((modal) => {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          closeModal(modal.id);
        }
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && activeModal) {
        closeModal(activeModal.id);
        return;
      }

      trapModalFocus(event);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initIconsAndAnimations();
    initHeader();
    initBeforeAfterSliders();
    initStaffModals();
  });
})();
