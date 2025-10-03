/* ======================================================
   DATA MODEL
   - Edit or extend the structure below to add new links.
   - Use the clearly marked “ADD LINKS HERE” blocks.
====================================================== */

const DATA = {
  updatedAt: new Date().toISOString(), // Auto-shown in the header
  sections: [
    /* ===========================================
       SECTION: Written Content
       =========================================== */
    {
      id: "written-content",
      title: "Written Content",
      startOpen: true,
      subsections: [
        /* -----------------------------
           SUBSECTION: Books
           ADD LINKS HERE (Books)
        ------------------------------ */
        {
          id: "books",
          title: "Books",
          links: [
            { title: "FREE - Apache Iceberg: The Definitive Guide", url: "https://drmevn.fyi/linkpageiceberg" },
            { title: "FREE - Apache Polaris: The Definitive Guide", url: "https://drmevn.fyi/linkpagepolaris" },
            { title: "FREE - The Apache Iceberg Digest: Vol1", url: "https://www.puppygraph.com/ebooks/apache-iceberg-digest-vol-1" },
            { title: "Architecting an Apache Iceberg Lakehouse", url: "https://hubs.la/Q03GfY4f0" }
          ]
        },

        /* -----------------------------
           SUBSECTION: Hands-on Tutorials
           ADD LINKS HERE (Hands-on)
        ------------------------------ */
        {
          id: "hands-on-lakehouse-tutorials",
          title: "Hands-on Lakehouse Tutorials",
          links: [
            { title: "Hands-on Intro to Iceberg on your Lakehouse", url: "https://drmevn.fyi/linkpagetut" },
            { title: "Dremio University (Earn Badges on Iceberg, MCP and more)", url: "https://drmevn.fyi/linkpageuni" }
          ]
        },

        /* -----------------------------
           SUBSECTION: Blogs
           ADD LINKS HERE (Blogs)
        ------------------------------ */
        {
          id: "blogs",
          title: "Blogs",
          links: [
            { title: "Substack: Open Lakehouses For Everyone", url: "https://amdatalakehouse.substack.com/" },
            { title: "DatalakehouseHub.com Blog", url: "https://datalakehousehub.com/blog/" },
            { title: "IcebergLakehouse.com Blog", url: "https://iceberglakehouse.com/posts/" }
          ]
        }
      ]
    },

    /* ===========================================
       SECTION: Community
       =========================================== */
    {
      id: "community",
      title: "Community",
      startOpen: false,
      subsections: [
        /* -----------------------------
           SUBSECTION: Slack Communities
           ADD LINKS HERE (Slack)
        ------------------------------ */
        {
          id: "slack-communities",
          title: "Slack Communities",
          links: [
            { title: "The Data Lakehouse Hub Slack", url: "https://join.slack.com/t/thedatalakehousehub/shared_invite/zt-274yc8sza-mI2zhCW8LGkOh1uxuf8T5Q" },
            { title: "Data Events Organizing Slack", url: "https://join.slack.com/t/data-events/shared_invite/zt-38vgrooy9-U9ral_gr3NAz_Siih1QwmQ" },
            { title: "Dremio Developer Community", url: "https://developer.dremio.com" },
            { title: "Apache Iceberg Community", url: "https://iceberg.apache.org/community/" },
            { title: "Apache Polaris Community", url: "https://polaris.apache.org/" },
            { title: "Apache Arrow Community", url: "https://arrow.apache.org/community/" }
          ]
        },

        /* -----------------------------
           SUBSECTION: Meetups / Luma
           ADD LINKS HERE (Meetups)
        ------------------------------ */
        {
          id: "meetup-groupsluma-calendars-for-lakehouse-events",
          title: "Meetup Groups/Luma Calendars for Lakehouse Events",
          groups: [
            {
              label: "International",
              id: "international",
              links: [
                { title: "International Data Lakehouse Meetups", url: "https://lu.ma/datalakehousemeetupsinternational" }
              ]
            },
            {
              label: "National (USA)",
              id: "national-usa",
              links: [
                { title: "Open Data Lakehouse Meetups - Global", url: "https://www.meetup.com/iceberg-data-lakehouse-meetups/" },
                { title: "North American Open Data Lakehouse Linkups", url: "https://www.meetup.com/north-american-open-data-lakehouse-linkups/" },
                { title: "North American Community Run Apache Iceberg Meetups", url: "https://www.meetup.com/na-apache-iceberg-meetups/" },
                { title: "Lakehouse Linkups Luma", url: "https://lu.ma/Lakehouselinkups" },
                { title: "Data Lakehouse Hub Events", url: "https://luma.com/DataLakehouseHub" },
                { title: "Open Data Pioneering Meetup", url: "https://luma.com/open-data-pioneering" }
              ]
            },
            {
              label: "State",
              id: "state",
              links: [
                { title: "NYC Data Lakehouse Events", url: "https://lu.ma/NYCDataLakehouse" },
                { title: "Orlando Data Events", url: "https://lu.ma/Orlandodata" },
                { title: "West Coast US Data Lakehouse Events (SF, Seattle, Denver, etc.)", url: "https://lu.ma/westcoastlakehouse" },
                { title: "East Coast US Data Lakehouse Events (NYC, Boston, Atlanta, Austin, etc.)", url: "https://lu.ma/EastCoastLakehouse" }
              ]
            }
          ]
        }
      ]
    },

    /* ===========================================
       SECTION: Other Resources
       =========================================== */
    {
      id: "other-resources",
      title: "Other Resources",
      startOpen: false,
      subsections: [
        /* -----------------------------
           SUBSECTION: Misc
           ADD LINKS HERE (Other)
        ------------------------------ */
        {
          id: "misc",
          title: "Misc",
          links: [
            { title: "My Slide Decks 2025 and Later", url: "https://drive.google.com/drive/folders/1_Te8nKrHDr9b3" }
          ]
        }
      ]
    }
  ]
};

/* ======================================================
   UTILITIES
====================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function humanDate(iso){
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {year: 'numeric', month: 'short', day: 'numeric'});
  } catch { return "—"; }
}

function copyToClipboard(text){
  navigator.clipboard?.writeText(text).then(()=> {
    alert("Link copied to clipboard!");
  }).catch(()=> {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    alert("Link copied to clipboard!");
  });
}

/* ======================================================
   RENDER: TOC
====================================================== */
function renderTOC(sections){
  const nav = $("#tocNav");
  nav.innerHTML = "";

  sections.forEach(s => {
    const group = document.createElement('div');
    group.className = "toc-group";

    const h = document.createElement('div');
    h.className = "toc-title";
    h.textContent = s.title;
    group.appendChild(h);

    const a = document.createElement('a');
    a.href = `#${s.id}`;
    a.textContent = s.title;
    a.setAttribute('aria-label', s.title);
    group.appendChild(a);

    s.subsections?.forEach(ss => {
      const a2 = document.createElement('a');
      a2.style.paddingLeft = "20px";
      a2.href = `#${ss.id}`;
      a2.textContent = `• ${ss.title}`;
      group.appendChild(a2);

      // If this subsection has groups (like International/National/State)
      if (ss.groups){
        ss.groups.forEach(g => {
          const a3 = document.createElement('a');
          a3.style.paddingLeft = "36px";
          a3.href = `#${g.id}`;
          a3.textContent = `– ${g.label}`;
          group.appendChild(a3);
        });
      }
    });

    nav.appendChild(group);
  });
}

/* ======================================================
   RENDER: SECTIONS
====================================================== */
function createCard(link){
  const card = document.createElement('div');
  card.className = "card";
  card.innerHTML = `
    <div class="title">${link.title}</div>
    <div class="meta">
      <span class="host">${new URL(link.url).hostname.replace('www.','')}</span>
    </div>
    <div class="actions">
      <a class="btn secondary small" href="${link.url}" target="_blank" rel="noopener">Open</a>
      <button class="btn ghost small copy-btn">Copy Link</button>
    </div>
  `;
  card.querySelector('.copy-btn').addEventListener('click', () => copyToClipboard(link.url));
  return card;
}

function renderSections(sections){
  const root = $("#contentRoot");
  root.innerHTML = "";
  let linkCount = 0;

  sections.forEach(section => {
    const sec = document.createElement('section');
    sec.className = `section ${section.startOpen ? 'open' : ''}`;
    sec.id = section.id;

    const header = document.createElement('div');
    header.className = "section-header";
    header.innerHTML = `
      <div class="section-title">
        <span>📚</span>
        <h2>${section.title}</h2>
      </div>
      <div class="section-actions">
        <button class="btn secondary small open-all">Open All</button>
        <button class="btn secondary small collapse-toggle">${section.startOpen ? 'Collapse' : 'Expand'}</button>
      </div>
    `;
    header.addEventListener('click', (e) => {
      // Only toggle when clicking the header area, not the buttons
      if (e.target.closest('.section-actions')) return;
      sec.classList.toggle('open');
      header.querySelector('.collapse-toggle').textContent = sec.classList.contains('open') ? 'Collapse' : 'Expand';
    });

    const content = document.createElement('div');
    content.className = "section-content";

    (section.subsections || []).forEach(sub => {
      const subWrap = document.createElement('div');
      subWrap.className = "subsection";
      subWrap.id = sub.id;
      const linkArray = sub.links || [];

      // Header for subsection
      const h3 = document.createElement('h3');
      h3.innerHTML = `${sub.title} <span class="badge">${linkArray.length} link${linkArray.length !== 1 ? 's' : ''}</span>`;
      subWrap.appendChild(h3);

      // Grid
      const grid = document.createElement('div');
      grid.className = "grid";

      // If this subsection uses groups (e.g., International/National/State)
      if (sub.groups){
        sub.groups.forEach(group => {
          const gDiv = document.createElement('div');
          gDiv.id = group.id;

          // Group label
          const gLabel = document.createElement('h3');
          gLabel.innerHTML = `${group.label} <span class="badge">${group.links.length} link${group.links.length !== 1 ? 's' : ''}</span>`;
          gDiv.appendChild(gLabel);

          const gGrid = document.createElement('div');
          gGrid.className = "grid";
          group.links.forEach(l => {
            gGrid.appendChild( createCard(l) );
            linkCount++;
          });
          gDiv.appendChild(gGrid);
          subWrap.appendChild(gDiv);
        });
      } else {
        linkArray.forEach(l => {
          grid.appendChild( createCard(l) );
          linkCount++;
        });
        subWrap.appendChild(grid);
      }

      // “Open all in subsection” button
      const openAll = document.createElement('button');
      openAll.className = "btn small ghost";
      openAll.textContent = "Open all in this subsection";
      openAll.addEventListener('click', () => {
        const links = sub.links || [];
        if (sub.groups){
          sub.groups.forEach(g => g.links.forEach(k => window.open(k.url, '_blank', 'noopener')));
        } else {
          links.forEach(k => window.open(k.url, '_blank', 'noopener'));
        }
      });
      subWrap.appendChild(openAll);

      content.appendChild(subWrap);
    });

    // Section action buttons
    header.querySelector('.open-all').addEventListener('click', (e) => {
      e.stopPropagation();
      const links = $$('.card .actions a', sec);
      links.forEach(a => window.open(a.href, '_blank', 'noopener'));
    });

    sec.appendChild(header);
    sec.appendChild(content);
    root.appendChild(sec);
  });

  // Counts and dates
  $("#totalLinks").textContent = linkCount;
  $("#lastUpdated").textContent = humanDate(DATA.updatedAt);
}

/* ======================================================
   SEARCH + FILTERS
====================================================== */
function applySearchAndFilters(){
  const q = $("#searchInput").value.trim().toLowerCase();
  const activeCats = $$('.filter-checkbox:checked').map(cb => cb.value);

  // Section visibility by category
  DATA.sections.forEach(section => {
    const el = document.getElementById(section.id);
    if (!el) return;
    const inActive = activeCats.includes(section.title);
    el.style.display = inActive ? "" : "none";
  });

  // Card-level filter by search
  $$('.card').forEach(card => {
    const title = $('.title', card)?.textContent.toLowerCase() || "";
    const host = $('.host', card)?.textContent.toLowerCase() || "";
    const matches = !q || title.includes(q) || host.includes(q);
    card.style.display = matches ? "" : "none";
  });

  // Update badges after search
  $$('.subsection').forEach(ss => {
    const visibleCards = $$('.card', ss).filter(c => c.style.display !== 'none').length;
    const badge = $('h3 .badge', ss);
    if (badge) badge.textContent = `${visibleCards} link${visibleCards !== 1 ? 's' : ''}`;
  });
}

/* ======================================================
   GLOBAL CONTROLS + THEME
====================================================== */
function bindGlobalControls(){
  $("#expandAll").addEventListener('click', () => {
    $$('.section').forEach(s => {
      s.classList.add('open');
      $('.collapse-toggle', s).textContent = 'Collapse';
    });
  });

  $("#collapseAll").addEventListener('click', () => {
    $$('.section').forEach(s => {
      s.classList.remove('open');
      $('.collapse-toggle', s).textContent = 'Expand';
    });
  });

  $("#searchInput").addEventListener('input', applySearchAndFilters);
  $("#clearSearch").addEventListener('click', () => {
    $("#searchInput").value = "";
    applySearchAndFilters();
    $("#searchInput").focus();
  });

  // Filter checkboxes
  $$('.filter-checkbox').forEach(cb => cb.addEventListener('change', applySearchAndFilters));

  // Theme toggle
  const themeBtn = $("#themeToggle");
  const stored = localStorage.getItem('theme');
  if (stored) document.documentElement.dataset.theme = stored;

  const updateButtonState = () => {
    const mode = document.documentElement.dataset.theme || 'auto';
    themeBtn.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
  };

  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme || 'auto';
    const next = current === 'dark' ? 'light' : current === 'light' ? 'auto' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    updateButtonState();
  });

  updateButtonState();
}

/* ======================================================
   THEME (Auto vs Forced)
   - Respect prefers-color-scheme unless user forces mode
====================================================== */
(function manageTheme(){
  const apply = () => {
    const forced = document.documentElement.dataset.theme;
    if (forced === 'dark'){
      document.documentElement.classList.add('force-dark');
      document.documentElement.classList.remove('force-light');
    } else if (forced === 'light'){
      document.documentElement.classList.add('force-light');
      document.documentElement.classList.remove('force-dark');
    } else {
      document.documentElement.classList.remove('force-dark','force-light');
    }
  };
  const mo = new MutationObserver(apply);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  apply();
})();

/* ======================================================
   INIT
====================================================== */
function init(){
  renderTOC(DATA.sections);
  renderSections(DATA.sections);
  bindGlobalControls();
  applySearchAndFilters();
}

// Kickoff
document.addEventListener('DOMContentLoaded', init);

/* ======================================================
   HOW TO ADD LINKS LATER
   ------------------------------------------------------
   1) Find the SECTION and SUBSECTION you want inside DATA.
   2) Append a new object to the `links` array:
        { title: "My Title", url: "https://example.com" }
   3) For Meetups, you can add in sub.groups[X].links.
   4) After editing DATA, the UI updates automatically on reload.
====================================================== */
