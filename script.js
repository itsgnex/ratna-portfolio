// Theme toggle & persistence
(function () {
    const body = document.body;
    const toggle = document.getElementById("theme-toggle");
  
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "theme-light" || storedTheme === "theme-dark") {
      body.classList.remove("theme-light", "theme-dark");
      body.classList.add(storedTheme);
    }
  
    function updateToggleIcon() {
      if (!toggle) return;
      const icon = toggle.querySelector("i");
      if (!icon) return;
  
      if (body.classList.contains("theme-light")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
    }
  
    function toggleTheme() {
      const isLight = body.classList.contains("theme-light");
      body.classList.remove("theme-light", "theme-dark");
      const next = isLight ? "theme-dark" : "theme-light";
      body.classList.add(next);
      window.localStorage.setItem("theme", next);
      updateToggleIcon();
    }
  
    if (toggle) {
      toggle.addEventListener("click", toggleTheme);
    }
  
    updateToggleIcon();
  })();
  
  // Smooth scroll for in-page links
  (function () {
    const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href").slice(1);
        const target = document.getElementById(targetId);
        if (!target) return;
  
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  })();
  
  // Reveal on scroll
  (function () {
    const revealEls = document.querySelectorAll(".reveal");
  
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2,
        }
      );
  
      revealEls.forEach((el) => observer.observe(el));
    } else {
      // Fallback: just show everything
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }
  })();
  
  // Dynamic year in footer
  (function () {
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  })();
  