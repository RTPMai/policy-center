/* ==========================================================================
   Polk City Area Chamber, Business Policy Center

   Routing, rendering, search, deep links.
   You should not need to edit this file. All content lives in content.js.

   Addresses this file understands:
     #/            the home page
     #/grants      a section, using the group id
     #/terms       words and sources
     #/search?q=x  search results across everything
     #entry-id     one entry, opened inside its section
   ========================================================================== */

(function () {
  'use strict';

  var view = document.getElementById('view');
  var nav = document.getElementById('section-nav');
  var searchInput = document.getElementById('search');
  var clearBtn = document.getElementById('clear-search');
  var menuBtn = document.getElementById('menu-btn');
  var sectionsEl = document.getElementById('sections');
  var toastEl = document.getElementById('toast');

  var SEASON_CLASS = {
    sun: 't-sun', autumn: 't-autumn', spring: 't-spring', winter: 't-winter',
  };

  /* ---------- small helpers ---------- */

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function stripTags(html) {
    var d = document.createElement('div');
    d.innerHTML = html || '';
    return (d.textContent || '').toLowerCase();
  }

  function groupById(id) {
    for (var i = 0; i < GROUPS.length; i++) if (GROUPS[i].id === id) return GROUPS[i];
    return null;
  }

  function entryById(id) {
    for (var i = 0; i < ENTRIES.length; i++) if (ENTRIES[i].id === id) return ENTRIES[i];
    return null;
  }

  function inGroup(id) {
    return ENTRIES.filter(function (e) { return e.group === id; });
  }

  function tint(group) {
    return SEASON_CLASS[group && group.season] || 't-navy';
  }

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toastEl.hidden = true; }, 2400);
  }

  /* Build a searchable blob per entry, once. */
  ENTRIES.forEach(function (e) {
    e._search = [
      e.title, e.meta, e.plain, stripTags(e.body),
      e.matters ? e.matters.heading + ' ' + stripTags(e.matters.html) : '',
      (e.sources || []).map(function (s) { return s.label + ' ' + s.publisher; }).join(' '),
      (e.topics || []).join(' '),
    ].join(' ').toLowerCase();
  });

  /* ---------- shared pieces ---------- */

  function entryHTML(e, showSectionTag) {
    var g = groupById(e.group);

    var tag = showSectionTag && g
      ? '<span class="from-section">' + esc(g.nav) + '</span>'
      : '';

    var sources = (e.sources || []).length
      ? '<div class="sources"><h4>Go deeper</h4><ul>' +
        e.sources.map(function (s) {
          return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' +
            esc(s.label) + '</a> <span class="pub">' + esc(s.publisher) + '</span></li>';
        }).join('') + '</ul></div>'
      : '';

    var matters = e.matters
      ? '<div class="matters"><h4>' + esc(e.matters.heading) + '</h4>' + e.matters.html + '</div>'
      : '';

    return '<details class="entry ' + tint(g) + '" id="' + esc(e.id) + '">' +
      '<summary>' +
        '<span class="title">' + tag + esc(e.title) +
          '<span class="meta">' + esc(e.meta) + '</span>' +
          (e.plain ? '<span class="plain">' + esc(e.plain) + '</span>' : '') +
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

  function toolsHTML() {
    return '<section class="tools-block">' +
      '<h2 class="block-title">Quick answers</h2>' +
      '<p class="block-lede">Official state and county lookup tools. These open in a new tab.</p>' +
      '<div class="tools">' +
        TOOLS.map(function (t) {
          return '<a class="tool" href="' + esc(t.url) + '" target="_blank" rel="noopener">' +
            '<b>' + esc(t.title) + '</b><span>' + esc(t.blurb) + '</span></a>';
        }).join('') +
      '</div></section>';
  }

  /* ---------- pages ---------- */

  function renderHome() {
    var cards = GROUPS.map(function (g) {
      var n = inGroup(g.id).length;
      return '<a class="card ' + tint(g) + '" href="#/' + esc(g.id) + '">' +
        (g.badge ? '<span class="card-badge">' + esc(g.badge) + '</span>' : '') +
        '<h2>' + esc(g.title) + '</h2>' +
        '<p>' + esc(g.blurb) + '</p>' +
        '<span class="card-count">' + n + (n === 1 ? ' item' : ' items') + '</span>' +
      '</a>';
    }).join('');

    view.innerHTML =
      '<section class="hero">' +
        '<h1>' + esc(SITE.title) + '</h1>' +
        '<p class="intro">' + esc(SITE.intro) + '</p>' +
        '<p class="howto">Pick a section below. Each item opens with one sentence telling you the gist, so you can skim first and read only what applies to you.</p>' +
        '<p class="stamp">Last reviewed ' + esc(SITE.reviewedOn) + '. ' + esc(SITE.cadence) + '.</p>' +
      '</section>' +
      '<div class="cards">' + cards + '</div>' +
      toolsHTML() +
      '<section class="tools-block">' +
        '<h2 class="block-title">Not sure what a word means?</h2>' +
        '<p class="block-lede">We keep a plain-English list of the terms that show up over and over, plus every source behind this page. <a href="#/terms">Words and sources</a>.</p>' +
      '</section>';
  }

  function renderSection(id) {
    var g = groupById(id);
    if (!g) return renderHome();

    var entries = inGroup(id);

    /* Only offer topic filters when a section has enough items to need them. */
    var used = TOPICS.filter(function (t) {
      return entries.some(function (e) { return (e.topics || []).indexOf(t.id) !== -1; });
    });
    var chips = (entries.length >= 5 && used.length > 1)
      ? '<div class="chips" id="chips">' +
          [{ id: 'all', label: 'All of this section' }].concat(used).map(function (t) {
            return '<button type="button" class="chip" data-topic="' + esc(t.id) + '" aria-pressed="' +
              (t.id === 'all' ? 'true' : 'false') + '">' + esc(t.label) + '</button>';
          }).join('') +
        '</div>'
      : '';

    view.innerHTML = '<div class="' + tint(g) + '">' +
      '<p class="crumb"><a href="#/">Back to all sections</a></p>' +
      '<header class="sec-head">' +
        '<h1>' + esc(g.title) + '</h1>' +
        '<p>' + esc(g.lede) + '</p>' +
      '</header>' +
      chips +
      '<div id="list">' + entries.map(function (e) { return entryHTML(e, false); }).join('') + '</div>' +
      '<p class="empty" id="none" hidden>Nothing in this section matches that filter.</p>' +
    '</div>';

    var chipsEl = document.getElementById('chips');
    if (chipsEl) {
      chipsEl.addEventListener('click', function (ev) {
        var btn = ev.target.closest('.chip');
        if (!btn) return;
        var topic = btn.getAttribute('data-topic');
        Array.prototype.forEach.call(chipsEl.querySelectorAll('.chip'), function (c) {
          c.setAttribute('aria-pressed', String(c === btn));
        });
        var shown = 0;
        entries.forEach(function (e) {
          var el = document.getElementById(e.id);
          var ok = topic === 'all' || (e.topics || []).indexOf(topic) !== -1;
          el.hidden = !ok;
          if (!ok) el.open = false; else shown++;
        });
        document.getElementById('none').hidden = shown > 0;
      });
    }
  }

  function renderTerms() {
    view.innerHTML = '<div class="t-navy">' +
      '<p class="crumb"><a href="#/">Back to all sections</a></p>' +
      '<header class="sec-head">' +
        '<h1>Words and sources</h1>' +
        '<p>Plain definitions for the terms that come up again and again, and the full list of what we read to keep this page current.</p>' +
      '</header>' +
      '<h2 class="subhead">Words you may run into</h2>' +
      '<dl class="glossary">' +
        GLOSSARY.map(function (t) {
          return '<div class="term"><dt>' + esc(t.term) + '</dt><dd>' + esc(t.def) + '</dd></div>';
        }).join('') +
      '</dl>' +
      '<h2 class="subhead">Where this comes from</h2>' +
      '<p class="block-lede">Nothing here is secret. Follow these yourself if you want. Our job is reading them so you do not have to.</p>' +
      '<ul class="watchlist">' +
        WATCHLIST.map(function (w) {
          return '<li><a href="' + esc(w.url) + '" target="_blank" rel="noopener">' + esc(w.label) + '</a>' +
            '<span>' + esc(w.note) + '</span></li>';
        }).join('') +
      '</ul>' +
      '<div class="note">' +
        '<h3>Where the chamber stands on politics</h3>' +
        '<p>This page tells you what a law or ballot question does and who it affects. Where there is a real disagreement, we give you both sides. We do not endorse candidates and we do not tell you how to vote.</p>' +
        '<p>The chamber does take positions on business issues. That is part of the job. When we do, the board votes on it, we say plainly that it is the chamber\'s position, and we keep it separate from the factual items.</p>' +
        '<p>If something here looks wrong or unfair to you, tell us. Getting it right matters more than getting it out fast.</p>' +
      '</div>' +
    '</div>';
  }

  function renderSearch(q) {
    var terms = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    var hits = terms.length
      ? ENTRIES.filter(function (e) {
          return terms.every(function (t) { return e._search.indexOf(t) !== -1; });
        })
      : [];

    var body;
    if (!terms.length) {
      body = '<p class="empty">Type something in the search box above.</p>';
    } else if (!hits.length) {
      body = '<p class="empty">Nothing matches that. Try a shorter or different word, or ' +
        '<button type="button" class="linkish" id="reset">go back to the sections</button>.</p>';
    } else {
      body = '<p class="count">' + hits.length + (hits.length === 1 ? ' item' : ' items') +
        ' across the whole page</p>' +
        hits.map(function (e) { return entryHTML(e, true); }).join('');
    }

    view.innerHTML = '<div class="t-navy">' +
      '<p class="crumb"><a href="#/">Back to all sections</a></p>' +
      '<header class="sec-head">' +
        '<h1>Results for &ldquo;' + esc(q) + '&rdquo;</h1>' +
        '<p>Searching every section at once.</p>' +
      '</header>' + body +
    '</div>';

    var reset = document.getElementById('reset');
    if (reset) reset.addEventListener('click', function () { go('#/'); });
  }

  /* ---------- chrome ---------- */

  function renderChrome() {
    document.title = SITE.title + ' | ' + SITE.org;

    nav.innerHTML =
      '<li><a href="#/" data-route="/">Home</a></li>' +
      GROUPS.map(function (g) {
        return '<li><a href="#/' + esc(g.id) + '" data-route="/' + esc(g.id) + '" ' +
          'style="--nav-tint:var(--' + esc(g.season) + ')">' + esc(g.nav) + '</a></li>';
      }).join('') +
      '<li><a href="#/terms" data-route="/terms">Words and sources</a></li>';

    document.getElementById('foot-review').textContent =
      SITE.org + '. Last reviewed ' + SITE.reviewedOn +
      '. Everything here was accurate on that date. Check the linked sources before you make a business or legal decision based on it.';

    document.getElementById('foot-contact').innerHTML =
      'Is something missing, out of date, or affecting your business that we should be tracking? Email ' +
      '<a href="mailto:' + esc(SITE.contactEmail) + '">' + esc(SITE.contactEmail) + '</a>.';

    document.getElementById('foot-home').innerHTML =
      '<a href="' + esc(SITE.chamberUrl) + '">Back to the chamber website</a>';
  }

  function markNav(route) {
    Array.prototype.forEach.call(nav.querySelectorAll('a'), function (a) {
      if (a.getAttribute('data-route') === route) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  /* ---------- router ---------- */

  function go(hash) {
    if (location.hash === hash) route();
    else location.hash = hash;
  }

  function route() {
    var h = location.hash || '#/';
    var openEntry = null;

    if (h.indexOf('#/search') === 0) {
      var q = decodeURIComponent((h.split('?q=')[1] || '').replace(/\+/g, ' '));
      renderSearch(q);
      markNav(null);
    } else if (h.indexOf('#/') === 0) {
      var id = h.slice(2);
      if (!id) { renderHome(); markNav('/'); }
      else if (id === 'terms') { renderTerms(); markNav('/terms'); }
      else if (groupById(id)) { renderSection(id); markNav('/' + id); }
      else { renderHome(); markNav('/'); }
    } else {
      /* A bare #entry-id link, most likely shared from social or email.
         Open that entry inside its own section. */
      var e = entryById(h.slice(1));
      if (e) {
        renderSection(e.group);
        markNav('/' + e.group);
        openEntry = e.id;
      } else {
        renderHome();
        markNav('/');
      }
    }

    sectionsEl.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');

    if (openEntry) {
      var el = document.getElementById(openEntry);
      if (el) {
        el.open = true;
        el.classList.add('hit');
        setTimeout(function () { el.classList.remove('hit'); }, 2600);
        setTimeout(function () {
          if (el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
        return;
      }
    }
    window.scrollTo(0, 0);
  }

  /* ---------- events ---------- */

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

  view.addEventListener('click', function (ev) {
    var btn = ev.target.closest('.share');
    if (btn) copyLink(btn.getAttribute('data-id'));
  });

  var debounce;
  searchInput.addEventListener('input', function () {
    clearTimeout(debounce);
    var q = searchInput.value;
    clearBtn.hidden = !q;
    debounce = setTimeout(function () {
      if (q.trim()) go('#/search?q=' + encodeURIComponent(q.trim()));
      else go('#/');
    }, 220);
  });

  clearBtn.addEventListener('click', function () {
    searchInput.value = '';
    clearBtn.hidden = true;
    go('#/');
    searchInput.focus();
  });

  menuBtn.addEventListener('click', function () {
    var open = sectionsEl.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  window.addEventListener('hashchange', route);

  /* ---------- go ---------- */

  renderChrome();
  route();
})();
