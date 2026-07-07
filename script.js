/* RENKAI — script.js */

document.addEventListener('DOMContentLoaded', function () {

  /* ── NAV SCROLL ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  /* ── HAMBURGER ── */
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');

  burger.addEventListener('click', function () {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  function closeMenu() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }
  mobileClose.addEventListener('click', closeMenu);
  mobileNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ── SCROLL REVEAL ── */
  var revealEls = document.querySelectorAll('.reveal');
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('on');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(function (el) { revealObs.observe(el); });

  /* ── UNDERLINE DRAW-IN ── */
  var ulWords = document.querySelectorAll('.ul-word');
  var ulObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('drawn');
        ulObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });
  ulWords.forEach(function (el) { ulObs.observe(el); });

  /* ── SMOOTH ANCHOR SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

});
