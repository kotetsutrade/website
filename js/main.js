// =========================================================
// Kotetsu Trade Co., Ltd. — Main JavaScript
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile nav toggle ---
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  }

  // --- Header shadow / condense on scroll ---
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (window.scrollY > 20) {
      header && header.classList.add('scrolled');
    } else {
      header && header.classList.remove('scrolled');
    }
    var backBtn = document.querySelector('.back-to-top');
    if (backBtn) {
      if (window.scrollY > 500) backBtn.classList.add('show');
      else backBtn.classList.remove('show');
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // --- Back to top button ---
  var backBtn = document.querySelector('.back-to-top');
  if (backBtn) {
    backBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Simple reveal-on-scroll animation ---
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('revealed'); });
  }

  // --- Hero stat counter animation ---
  var counters = document.querySelectorAll('[data-counter]');
  if (counters.length) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-counter'));
        var suffix = el.getAttribute('data-suffix') || '';
        var decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals'), 10) : 0;
        var duration = 1400;
        var startTime = null;
        function step(ts) {
          if (!startTime) startTime = ts;
          var progress = Math.min((ts - startTime) / duration, 1);
          var value = target * progress;
          el.textContent = value.toFixed(decimals) + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target.toFixed(decimals) + suffix;
        }
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { counterObserver.observe(c); });
  }

  // --- Contact form (client-side only — no backend) ---
  var contactForm = document.getElementById('inquiry-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var successBox = document.getElementById('form-success');
      var subject = encodeURIComponent('[Kotetsu Labs Inquiry] ' + (contactForm.company.value || 'New product inquiry'));
      var bodyLines = [
        'Name: ' + contactForm.name.value,
        'Company: ' + contactForm.company.value,
        'Email: ' + contactForm.email.value,
        'Phone: ' + (contactForm.phone ? contactForm.phone.value : ''),
        'Application / Use Case: ' + (contactForm.application ? contactForm.application.value : ''),
        'Product Category of Interest: ' + (contactForm.category ? contactForm.category.value : ''),
        '',
        'Message:',
        contactForm.message.value
      ];
      var body = encodeURIComponent(bodyLines.join('\n'));
      var mailto = 'mailto:sales@kotetsulabs.com?subject=' + subject + '&body=' + body;

      if (successBox) {
        successBox.classList.add('show');
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      // Open user's mail client with pre-filled inquiry
      window.location.href = mailto;
      contactForm.reset();
    });
  }

  // --- Product filter (products.html) ---
  var filterButtons = document.querySelectorAll('[data-filter]');
  var productCards = document.querySelectorAll('[data-category]');
  if (filterButtons.length && productCards.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) { b.classList.remove('active-filter'); });
        btn.classList.add('active-filter');
        var filter = btn.getAttribute('data-filter');
        productCards.forEach(function (card) {
          var cats = (card.getAttribute('data-category') || '').split(' ');
          if (filter === 'all' || cats.indexOf(filter) !== -1) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Set current year in footer ---
  var yearEls = document.querySelectorAll('.current-year');
  yearEls.forEach(function (el) { el.textContent = new Date().getFullYear(); });

});
