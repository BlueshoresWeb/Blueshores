// Case studies: click a card to unfold its case in place.
// Without JavaScript all cases simply stay open.
(function () {
  var tabs = [].slice.call(document.querySelectorAll('.cs-tab'));
  if (!tabs.length) return;

  function panelOf(tab) { return document.getElementById(tab.getAttribute('aria-controls')); }

  function setOpen(id) {
    tabs.forEach(function (t) {
      var on = t.getAttribute('aria-controls') === id;
      t.setAttribute('aria-expanded', on ? 'true' : 'false');
      panelOf(t).hidden = !on;
    });
  }

  function reveal(id) {
    var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id).scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'nearest' });
  }

  function setHash(slug) {
    try {
      history.replaceState(null, '', slug ? '#' + slug : location.pathname + location.search);
    } catch (e) { /* ignore */ }
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var id = tab.getAttribute('aria-controls');
      var opening = panelOf(tab).hidden;
      setOpen(opening ? id : null);
      setHash(opening ? tab.getAttribute('data-slug') : '');
      if (opening) reveal(id);
    });
  });

  function fromHash() {
    var slug = location.hash.slice(1);
    var match = tabs.filter(function (t) { return t.getAttribute('data-slug') === slug; })[0];
    setOpen(match ? match.getAttribute('aria-controls') : null);
    if (match) reveal(match.getAttribute('aria-controls'));
  }

  window.addEventListener('hashchange', fromHash);
  fromHash();
})();
