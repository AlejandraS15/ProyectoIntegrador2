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

  function initClinicChatbot() {
    const root = document.querySelector("[data-chatbot]");
    const config = window.DentalChatbotConfig;

    if (!root || !config) {
      return;
    }

    const panel = root.querySelector("[data-chatbot-panel]");
    const toggle = root.querySelector("[data-chatbot-toggle]");
    const close = root.querySelector("[data-chatbot-close]");
    const messages = root.querySelector("[data-chatbot-messages]");
    const quickActions = root.querySelector("[data-chatbot-quick-actions]");
    const form = root.querySelector("[data-chatbot-form]");
    const input = root.querySelector("[data-chatbot-input]");
    const status = root.querySelector("[data-chatbot-status]");
    const isEnglish = config.language === "en";
    let hasOpened = false;
    const conversationHistory = [];

    if (!panel || !toggle || !close || !messages || !quickActions || !form || !(input instanceof HTMLInputElement)) {
      return;
    }

    const normalize = (value) => value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const includesAny = (value, keywords) => keywords.some((keyword) => value.includes(keyword));
    const cta = () => `${config.booking.freeEvaluation} ${config.booking.primaryCta}`;

    const intentKeywords = {
      booking: ["agendar", "agenda", "cita", "reservar", "whatsapp", "contactar", "llamar", "book", "appointment", "contact", "call"],
      foreignPatients: ["extranj", "turismo", "tourism", "foreign", "international", "english", "ingles", "viaje", "travel"],
      freeEvaluation: ["gratis", "gratuita", "sin costo", "valoracion", "evaluacion", "consulta", "free", "assessment", "consultation"],
      location: ["ubic", "direccion", "donde", "mapa", "guayabal", "medellin", "poblado", "location", "address", "where", "map"],
      pricing: ["precio", "precios", "costo", "costos", "valor", "cuanto vale", "cuanto cuesta", "price", "pricing", "cost"],
      procedures: ["procedimiento", "proceso", "duracion", "tarda", "resina", "ceramica", "microdiseno", "carilla", "blanqueamiento", "diente", "sonrisa", "procedure", "process", "duration", "resin", "ceramic", "veneer", "whitening", "tooth", "smile"],
      schedule: ["horario", "hora", "abren", "atienden", "sabado", "domingo", "festivo", "schedule", "hours", "open", "saturday", "sunday"],
      staff: ["doctor", "doctora", "doctoras", "doc", "equipo", "especialista", "odontologa", "odontologo", "isabella", "lopez", "yenny", "madrigal", "estudio", "estudios", "formacion", "trayectoria", "experiencia", "perfil", "team", "dentist", "training", "career", "profile"],
      services: ["servicio", "servicios", "tratamiento", "tratamientos", "ofrecen", "hacen", "especialidad", "services", "treatments", "offer"]
    };
    const clinicKeywords = Object.values(intentKeywords).flat().concat([
      "dental", "odont", "clinica", "expertos", "implant", "orthodontics", "clinic"
    ]);

    const classifyIntent = (message) => {
      const text = normalize(message);

      if (/^(hola|buenas|hello|hi|hey)\b/.test(text)) {
        return "greeting";
      }

      if (includesAny(text, intentKeywords.freeEvaluation)) return "freeEvaluation";
      if (includesAny(text, intentKeywords.pricing)) return "pricing";
      if (includesAny(text, intentKeywords.location)) return "location";
      if (includesAny(text, intentKeywords.schedule)) return "schedule";
      if (includesAny(text, intentKeywords.booking)) return "booking";
      if (includesAny(text, intentKeywords.foreignPatients)) return "foreignPatients";
      if (includesAny(text, intentKeywords.staff)) return "staff";
      if (includesAny(text, intentKeywords.procedures)) return "procedures";
      if (includesAny(text, intentKeywords.services)) return "services";

      return includesAny(text, clinicKeywords) ? "fallback" : "unrelated";
    };

    const findTreatment = (message) => {
      const text = normalize(message);

      return config.services.treatments.find((treatment) => {
        const title = normalize(treatment.title);
        const slug = normalize(treatment.slug.replace(/-/g, " "));

        return text.includes(title) || text.includes(slug) || title.split(" ").some((word) => word.length > 5 && text.includes(word));
      });
    };

    const listTreatments = () => config.services.treatments
      .map((treatment) => treatment.title)
      .join(", ");

    const findStaffMember = (message) => {
      const text = normalize(message);
      const staffMembers = config.staff?.members || [];

      return staffMembers.find((member) => {
        const name = normalize(member.name);
        const nameParts = name.split(/\s+/).filter((part) => part.length > 3);

        return nameParts.some((part) => text.includes(part));
      });
    };

    const formatStaffMember = (member) => {
      const training = Array.isArray(member.training) && member.training.length > 0
        ? isEnglish
          ? `Training mentioned on the site: ${member.training.join(", ")}.`
          : `Formacion mencionada en el sitio: ${member.training.join(", ")}.`
        : "";

      return `${member.name}: ${member.specialty}. ${member.focus} ${training}`;
    };

    const rememberMessage = (role, text) => {
      conversationHistory.push({ role, text });

      if (conversationHistory.length > 8) {
        conversationHistory.splice(0, conversationHistory.length - 8);
      }
    };

    const buildResponse = (message) => {
      const intent = classifyIntent(message);
      const treatment = findTreatment(message);

      if (intent === "greeting") {
        return {
          cta: true,
          text: config.copy.welcome
        };
      }

      if (intent === "services") {
        const additional = config.services.additional.length > 0
          ? isEnglish
            ? `The site also mentions: ${config.services.additional.join(", ")}.`
            : `El sitio también menciona: ${config.services.additional.join(", ")}.`
          : "";

        return {
          cta: true,
          text: isEnglish
            ? `At ${config.brand.name} we highlight these smile design options: ${listTreatments()}. ${additional}`
            : `En ${config.brand.name} destacamos estas opciones de diseño de sonrisa: ${listTreatments()}. ${additional}`
        };
      }

      if (intent === "freeEvaluation") {
        return {
          cta: false,
          showBookingButton: true,
          text: isEnglish
            ? `${config.booking.freeEvaluation} During that visit, the team can review your smile, expectations and the best treatment path. ${config.booking.primaryCta}`
            : `${config.booking.freeEvaluation} En esa visita, el equipo puede revisar tu sonrisa, tus expectativas y la mejor ruta de tratamiento. ${config.booking.primaryCta}`
        };
      }

      if (intent === "location") {
        return {
          cta: true,
          text: isEnglish
            ? `We are located at ${config.contact.address} You can also open the map from the contact page.`
            : `Estamos en ${config.contact.address} También puedes abrir el mapa desde la página de contacto.`
        };
      }

      if (intent === "schedule") {
        return {
          cta: true,
          text: `${config.schedule.weekdays} ${config.schedule.saturday} ${config.schedule.closed} ${config.schedule.flexibility}`
        };
      }

      if (intent === "booking") {
        return {
          cta: true,
          showBookingButton: true,
          text: isEnglish
            ? `The fastest way to book or modify your appointment is WhatsApp. You can also contact us by phone at ${config.contact.phoneDisplay} or email ${config.contact.email}.`
            : `La forma más rápida de agendar o modificar tu cita es WhatsApp. También puedes contactarnos por teléfono al ${config.contact.phoneDisplay} o al correo ${config.contact.email}.`
        };
      }

      if (intent === "foreignPatients") {
        return {
          cta: true,
          showBookingButton: true,
          text: config.tourism.note
        };
      }

      if (intent === "pricing") {
        return {
          cta: true,
          showBookingButton: true,
          text: config.pricing.note
        };
      }

      if (intent === "staff") {
        const staffMembers = config.staff?.members || [];
        const member = findStaffMember(message);
        const staffText = member
          ? formatStaffMember(member)
          : staffMembers.map((staffMember) => formatStaffMember(staffMember)).join(" ");

        return {
          cta: true,
          text: `${config.staff?.note || ""} ${staffText}`.trim()
        };
      }

      if (intent === "procedures") {
        if (treatment) {
          const benefits = treatment.benefits.slice(0, 2).join(" ");
          return {
            cta: true,
            text: `${treatment.title}: ${treatment.summary} ${treatment.duration} ${benefits}`
          };
        }

        return {
          cta: true,
          text: isEnglish
            ? "Every case starts with an assessment. The team reviews shade, edges, proportions, bite and expectations before recommending composite resin, ceramic or another route mentioned on the site."
            : "Cada caso empieza con una valoración. El equipo revisa color, bordes, proporciones, mordida y expectativas antes de recomendar resina, cerámica u otra ruta mencionada en el sitio."
        };
      }

      if (intent === "unrelated") {
        return {
          cta: false,
          text: isEnglish
            ? "I can only help with information about our dental clinic, treatments, location and booking. Remember that the initial assessment is free."
            : "Puedo ayudarte únicamente con información de nuestra clínica odontológica, tratamientos, ubicación y agendamiento. Recuerda que la valoración inicial es gratis."
        };
      }

      return {
        cta: false,
        text: isEnglish
          ? "The site does not include that specific information. The clinic team can confirm it directly through WhatsApp. Remember that the initial assessment is free."
          : "El sitio no incluye esa información específica. El equipo de la clínica puede confirmarla directamente por WhatsApp. Recuerda que la valoración inicial es gratis."
      };
    };

    const requestEnhancedResponse = async (message, localResponse) => {
      try {
        const response = await fetch("/api/chatbot", {
          body: JSON.stringify({
            history: conversationHistory.slice(-6),
            language: config.language,
            message
          }),
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        });

        if (!response.ok) {
          return localResponse;
        }

        const data = await response.json();

        if (!data || typeof data.text !== "string") {
          return localResponse;
        }

        return {
          ...localResponse,
          ...data,
          bookingButtonLabel: data.booking?.buttonLabel,
          bookingUrl: data.booking?.whatsappUrl
        };
      } catch (_error) {
        return localResponse;
      }
    };

    const scrollMessages = () => {
      messages.scrollTop = messages.scrollHeight;
    };

    const setChatbotStatus = (source) => {
      if (!status) {
        return;
      }

      if (source === "gemini") {
        status.textContent = isEnglish ? "Gemini active" : "Gemini activo";
        status.setAttribute("data-mode", "gemini");
        return;
      }

      status.textContent = isEnglish ? "Local rules" : "Reglas locales";
      status.setAttribute("data-mode", "local");
    };

    const splitMessageText = (text) => {
      const normalized = text
        .replace(/\s+/g, " ")
        .replace(/\s+([.,;:!?])/g, "$1")
        .trim();

      if (!normalized) {
        return [];
      }

      const sentences = normalized.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [normalized];
      const chunks = [];

      sentences.forEach((sentence) => {
        const cleanSentence = sentence.trim();

        if (cleanSentence.length <= 52) {
          chunks.push(cleanSentence);
          return;
        }

        let current = "";
        cleanSentence.split(" ").forEach((word) => {
          if ((current + " " + word).trim().length > 52 && current) {
            chunks.push(current.trim());
            current = word;
          } else {
            current = `${current} ${word}`.trim();
          }
        });

        if (current) {
          chunks.push(current.trim());
        }
      });

      return chunks;
    };

    const addMessage = (text, sender, options = {}) => {
      const bubble = document.createElement("div");
      bubble.className = `clinic-chatbot__message clinic-chatbot__message--${sender}`;
      bubble.dataset.label = sender === "bot" ? config.brand.name : (isEnglish ? "You" : "Tu");

      const textParts = splitMessageText(text);
      textParts.forEach((part) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = part;
        bubble.appendChild(paragraph);
      });

      if (options.cta) {
        splitMessageText(cta()).forEach((part) => {
          const ctaText = document.createElement("p");
          ctaText.textContent = part;
          ctaText.className = "clinic-chatbot__cta-text";
          bubble.appendChild(ctaText);
        });
      }

      if (options.showBookingButton) {
        const link = document.createElement("a");
        link.className = "clinic-chatbot__booking-link";
        link.href = options.bookingUrl || config.booking.whatsappUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = options.bookingButtonLabel || config.copy.bookingButton;
        bubble.appendChild(link);
      }

      messages.appendChild(bubble);
      rememberMessage(sender === "bot" ? "assistant" : "user", text);
      if (sender === "bot" && options.source) {
        setChatbotStatus(options.source);
      }
      scrollMessages();
    };

    const answerMessage = async (message) => {
      const localResponse = buildResponse(message);
      const typing = document.createElement("div");
      typing.className = "clinic-chatbot__typing";
      typing.textContent = config.copy.typing;
      messages.appendChild(typing);
      scrollMessages();

      const minimumDelay = new Promise((resolve) => {
        window.setTimeout(resolve, prefersReducedMotion ? 0 : 360);
      });
      const response = await requestEnhancedResponse(message, localResponse);

      await minimumDelay;
      typing.remove();
      addMessage(response.text, "bot", {
        bookingButtonLabel: response.bookingButtonLabel,
        bookingUrl: response.bookingUrl,
        cta: response.cta,
        showBookingButton: response.showBookingButton,
        source: response.source
      });
    };

    const sendMessage = (message) => {
      const trimmed = message.trim();

      if (!trimmed) {
        return;
      }

      addMessage(trimmed, "user");
      input.value = "";
      answerMessage(trimmed);
    };

    const openChat = () => {
      panel.classList.add("is-open");
      panel.setAttribute("aria-hidden", "false");
      toggle.setAttribute("aria-expanded", "true");

      if (!hasOpened) {
        addMessage(config.copy.welcome, "bot");
        hasOpened = true;
      }

      window.setTimeout(() => input.focus(), prefersReducedMotion ? 0 : 180);
    };

    const closeChat = () => {
      panel.classList.remove("is-open");
      panel.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    };

    config.copy.quickQuestions.forEach((question) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = question;
      button.addEventListener("click", () => sendMessage(question));
      quickActions.appendChild(button);
    });

    toggle.addEventListener("click", () => {
      if (panel.classList.contains("is-open")) {
        closeChat();
      } else {
        openChat();
      }
    });

    close.addEventListener("click", closeChat);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      sendMessage(input.value);
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage(input.value);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && panel.classList.contains("is-open")) {
        closeChat();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initIconsAndAnimations();
    initHeader();
    initBeforeAfterSliders();
    initStaffModals();
    initClinicChatbot();
  });
})();
