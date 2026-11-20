/* Compact navigation on small screens; all links stay visible on desktop. */
(function () {
  var nav = document.getElementById('site-nav');
  if (!nav) return;

  var toggle = nav.querySelector('.nav-toggle');
  var links = document.getElementById(toggle.getAttribute('aria-controls'));
  var compact = window.matchMedia('(max-width: 900px)');

  function setOpen(open) {
    var expanded = compact.matches && open;
    toggle.setAttribute('aria-expanded', String(expanded));
    links.hidden = compact.matches && !expanded;
    nav.classList.toggle('is-open', expanded);
  }

  function updateLayout() {
    var focusWillHide = compact.matches && links.contains(document.activeElement);
    var focusedToggle = !compact.matches && document.activeElement === toggle;
    toggle.hidden = !compact.matches;
    setOpen(false);
    if (focusWillHide) toggle.focus();
    if (focusedToggle) links.querySelector('a').focus();
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
      event.preventDefault();
    }
  });

  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target)) setOpen(false);
  });

  links.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  if (compact.addEventListener) {
    compact.addEventListener('change', updateLayout);
  } else {
    compact.addListener(updateLayout);
  }

  updateLayout();
}());
