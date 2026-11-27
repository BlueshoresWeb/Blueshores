// News: "Read more" unfolds an item in place, and the type buttons filter the list.
// Without JavaScript every item simply stays open and the filter stays hidden.
(function () {
  var items = [].slice.call(document.querySelectorAll('.news-item'));
  if (!items.length) return;
  var bar = document.querySelector('.news-filter');
  var chips = bar ? [].slice.call(bar.querySelectorAll('.news-chip')) : [];

  function set(item, open) {
    item.querySelector('.news-toggle').setAttribute('aria-expanded', open ? 'true' : 'false');
    item.querySelector('.news-body').hidden = !open;
  }

  function setHash(slug) {
    try {
      history.replaceState(null, '', slug ? '#' + slug : location.pathname + location.search);
    } catch (e) { /* ignore */ }
  }

  function applyFilter(f) {
    items.forEach(function (item) {
      item.hidden = !(f === 'all' || item.getAttribute('data-label') === f);
    });
    chips.forEach(function (c) {
      var on = c.getAttribute('data-filter') === f;
      c.classList.toggle('is-active', on);
      c.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  items.forEach(function (item) {
    set(item, false);
    item.querySelector('.news-toggle').addEventListener('click', function () {
      var open = item.querySelector('.news-body').hidden;
      set(item, open);
      setHash(open ? item.getAttribute('data-slug') : '');
    });
  });

  if (bar) {
    bar.hidden = false;
    chips.forEach(function (c) {
      c.addEventListener('click', function () { applyFilter(c.getAttribute('data-filter')); });
    });
  }

  function fromHash() {
    var slug = location.hash.slice(1);
    items.forEach(function (item) {
      if (item.getAttribute('data-slug') === slug) {
        if (item.hidden) applyFilter('all');
        set(item, true);
        var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        item.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'start' });
      }
    });
  }

  window.addEventListener('hashchange', fromHash);
  fromHash();
})();
