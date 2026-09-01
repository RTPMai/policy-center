/* ==========================================================================
   Polk City Area Chamber — Business Policy Center
   Rendering, search, filtering, deep links.

   You should not need to edit this file. All content lives in content.js.
   ========================================================================== */

(function () {
  'use strict';

  var state = { topic: 'all', query: '' };

  var els = {
    org: document.getElementById('org'),
    title: document.getElementById('page-title'),
    intro: document.getElementById('intro'),
    stamp: document.getElementById('stamp'),
    tools: document.getElementById('tools'),
    chips: document.getElementById('chips'),
    search: document.getElementById('search'),
    clear: document.getElementById('clear-search'),
    count: document.getElementById('count'),
    results: document.getElementById('results'),
    noResults: document.getElementById('no-results'),
    reset: document.getElementById('reset'),
    watchlist: document.getElementById('watchlist'),
    footReview: document.getElementById('foot-review'),
    footContact: document.getElementById('foot-contact'),
    footHome: document.getElementById('foot-home'),
    toast: document.getElementById('toast'),
  };

  /* ---------- helpers ---------- */

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function plain(html) {
    var d = document.createElement('div');
    d.innerHTML = html || '';
    return (d.textContent || '').toLowerCase();
  }

  function toast(msg) {
    els.toast.textContent = msg;
    els.toast.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { els.toast.hidden = true; }, 2400);
  }

  /* Build one searchable blob per entry, once. */
  ENTRIES.forEach(function (e) {
    e._search = [
      e.title,
      e.meta,
      plain(e.body),
      e.matters ? e.matters.heading + ' ' + plain(e.matters.html) : '',
      (e.sources || []).map(function (s) { return s.label + ' ' + s.publisher; }).join(' '),
      (e.topics || []).join(' '),
    ].join(' ').toLowerCase();
  });

  /* ---------- static chrome ---------- */

  function renderChrome() {
    document.title = SITE.title + ' — ' + SITE.org;
    els.org.textContent = SITE.org;
    els.title.textContent = SITE.title;
    els.intro.textContent = SITE.intro;
    els.stamp.textContent = 'Last reviewed ' + SITE.reviewedOn + '  ·  ' + SITE.cadence;

    els.tools.innerHTML = TOOLS.map(function (t) {
      return '<a class="tool" href="' + esc(t.url) + '" target="_blank" rel="noopener">' +
        '<b>' + esc(t.title) + '</b><span>' + esc(t.blurb) + '</span></a>';
    }).join('');

    var chips = [{ id: 'all', label: 'Everything' }].concat(TOPICS);
    els.chips.innerHTML = chips.map(function (t) {
      return '<button type="button" class="chip" data-topic="' + esc(t.id) + '" aria-pressed="' +
        (t.id === 'all' ? 'true' : 'false') + '">' + esc(t.label) + '</button>';
    }).join('');

    els.watchlist.innerHTML = WATCHLIST.map(function (w) {
      return '<li><a href="' + esc(w.url) + '" target="_blank" rel="noopener">' + esc(w.label) + '</a>' +
        '<span>' + esc(w.note) + '</span></li>';
    }).join('');

    els.footReview.textContent = SITE.org + '. This page was last reviewed ' + SITE.reviewedOn +
      '. Entries reflect public reporting as of the review date; verify against the linked sources before relying on anything here for a business or legal decision.';
    els.footContact.innerHTML = 'Something missing, out of date, or affecting your business that we should be tracking? Email <a href="mailto:' +
      esc(SITE.contactEmail) + '">' + esc(SITE.contactEmail) + '</a>.';
    els.footHome.innerHTML = '<a href="' + esc(SITE.chamberUrl) + '">Back to ' + esc(SITE.org) + '</a>';
  }

  /* ---------- entries ---------- */

  function entryHTML(e) {
    var sources = (e.sources || []).length
      ? '<div class="sources"><h4>Go deeper</h4><ul>' +
        e.sources.map(function (s) {
          return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) +
            '</a> <span class="pub">' + esc(s.publisher) + '</span></li>';
        }).join('') + '</ul></div>'
      : '';

    var matters = e.matters
      ? '<div class="matters"><h4>' + esc(e.matters.heading) + '</h4>' + e.matters.html + '</div>'
      : '';

    return '<details class="entry" id="' + esc(e.id) + '" data-group="' + esc(e.group) + '">' +
      '<summary>' +
        '<span class="title">' + esc(e.title) +
          '<span class="meta">' + esc(e.meta || '') + '</span>' +
        '</span>' +
        '<svg class="chev" viewBox="0 0 20 20" aria-hidden="true" focusable="false">' +
          '<path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
        '</svg>' +
      '</summary>' +
      '<div class="body">' + e.body + matters + sources +
        '<div class="entry-actions"><button type="button" class="share" data-id="' + esc(e.id) + '">Copy link to this item</button></div>' +
      '</div>' +
    '</details>';
  }

  function renderResults() {
    var q = state.query.trim().toLowerCase();
    var terms = q ? q.split(/\s+/) : [];

    var matches = ENTRIES.filter(function (e) {
      var topicOk = state.topic === 'all' || (e.topics || []).indexOf(state.topic) !== -1;
      if (!topicOk) return false;
      return terms.every(function (t) { return e._search.indexOf(t) !== -1; });
    });

    var html = GROUPS.map(function (g) {
      var inGroup = matches.filter(function (e) { return e.group === g.id; });
      if (!inGroup.length) return '';
      return '<section class="sec">' +
        '<h2 id="' + esc(g.id) + '">' + esc(g.title) + '</h2>' +
        '<p class="sec-lede">' + esc(g.lede) + '</p>' +
        inGroup.map(entryHTML).join('') +
      '</section>';
    }).join('');

    els.results.innerHTML = html;
    els.noResults.hidden = matches.length > 0;

    var label;
    if (state.topic === 'all' && !q) {
      label = ENTRIES.length + ' entries';
    } else {
      label = matches.length + (matches.length === 1 ? ' entry' : ' entries') + ' shown';
    }
    els.count.textContent = label;
    els.clear.hidden = !q;
  }

  /* ---------- deep linking ---------- */

  function openFromHash() {
    var id = decodeURIComponent((location.hash || '').replace('#', ''));
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;

    if (target.tagName.toLowerCase() === 'details') {
      target.open = true;
      target.classList.add('hit');
      setTimeout(function () { target.classList.remove('hit'); }, 2600);
    }
    setTimeout(function () {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }

  function copyLink(id) {
    var url = location.origin + location.pathname + '#' + id;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(
        function () { toast('Link copied'); },
        function () { window.prompt('Copy this link:', url); }
      );
    } else {
      window.prompt('Copy this link:', url);
    }
  }

  /* ---------- events ---------- */

  function wire() {
    els.chips.addEventListener('click', function (ev) {
      var btn = ev.target.closest('.chip');
      if (!btn) return;
      state.topic = btn.getAttribute('data-topic');
      Array.prototype.forEach.call(els.chips.querySelectorAll('.chip'), function (c) {
        c.setAttribute('aria-pressed', String(c === btn));
      });
      renderResults();
    });

    var debounce;
    els.search.addEventListener('input', function () {
      clearTimeout(debounce);
      debounce = setTimeout(function () {
        state.query = els.search.value;
        renderResults();
      }, 130);
    });

    els.clear.addEventListener('click', function () {
      els.search.value = '';
      state.query = '';
      renderResults();
      els.search.focus();
    });

    els.reset.addEventListener('click', function () {
      els.search.value = '';
      state.query = '';
      state.topic = 'all';
      Array.prototype.forEach.call(els.chips.querySelectorAll('.chip'), function (c) {
        c.setAttribute('aria-pressed', String(c.getAttribute('data-topic') === 'all'));
      });
      renderResults();
    });

    els.results.addEventListener('click', function (ev) {
      var btn = ev.target.closest('.share');
      if (btn) copyLink(btn.getAttribute('data-id'));
    });

    /* Keep the address bar in sync when someone opens an entry,
       so copying from the browser bar also works. */
    els.results.addEventListener('toggle', function (ev) {
      var d = ev.target;
      if (d.tagName && d.tagName.toLowerCase() === 'details' && d.open) {
        history.replaceState(null, '', '#' + d.id);
      }
    }, true);

    window.addEventListener('hashchange', openFromHash);
  }

  /* ---------- go ---------- */

  renderChrome();
  renderResults();
  wire();
  openFromHash();
})();
