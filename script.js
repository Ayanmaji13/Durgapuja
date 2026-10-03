/* =========================================================================
   SWAMI VIVEKANANDA SANGHA — SITE DATA & LOGIC
   =========================================================================
   Everything you need to update EVERY YEAR lives in the SITE_DATA object
   below. You do not need to touch index.html or style.css to:
     - add a new year's photos to the gallery
     - add, remove, or edit a committee member
     - change the address, map, Instagram handle, or contact details

   After editing this file, just save it and refresh the page.
   ========================================================================= */

const SITE_DATA = {

  /* -----------------------------------------------------------------------
     GALLERY — one entry per year, newest first. Pre-filled for every year
     from 2010 (founding year) to 2025, in serial order.

     "images" is a list of { src, caption }. Replace each placeholder src
     with your own file, e.g. "images/2025-1.jpg", once you add real photos
     to the /images folder. An empty images array is fine — that year will
     show a "photos coming soon" placeholder instead of breaking.

     ---- TO ADD A NEW YEAR (e.g. 2026) ----
     Add a new object at the very TOP of this array (newest year first):
     {
       year: 2026,
       images: [
         { src: "images/2026-1.jpg", caption: "Describe the photo" },
         { src: "images/2026-2.jpg", caption: "Describe another photo" },
       ],
     },

     ---- TO ADD MORE PHOTOS TO AN EXISTING YEAR ----
     Find that year's object below and add more { src, caption } entries
     to its "images" array.
     ----------------------------------------------------------------------- */
  gallery: [
    { year: 2025, images: [
      { src: "president/20251.jpeg", caption: "Durga maa idol full image" },
      { src: "president/20252.jpeg", caption: "Durga maa image" },
      { src: "president/20253.jpeg", caption: "Durga maa image" },
    ]},
    { year: 2024, images: [
      { src: "president/20241.jpg", caption: "Durga maa idol full image" },
      { src: "president/20242.jpg", caption: "Vijaya Dashami" },
      { src: "president/20243.jpg", caption: "Durga maa idol Visarjan" },
      { src: "president/20244.jpeg", caption: "Durga maa image" },
    ]},
    { year: 2023, images: [
      { src: "president/20231.jpeg", caption: "Durga maa idol full image" },
      { src: "president/20232.jpeg", caption: "Durga maa idol full image" },
      { src: "president/20233.jpg", caption: "Vijaya Dashami" },
      { src: "president/20234.jpeg", caption: "Vijaya Dashami" },
    ]},
    { year: 2022, images: [
      { src: "president/20221.jpg", caption: "Durga maa idol full image" },
      { src: "president/20222.jpg", caption: "Maha Ashtami" },
      { src: "president/20223.jpg", caption: "Durga maa idol full image" },
    ]},
    { year: 2021, images: [
      { src: "president/20211.jpeg", caption: "Durga maa idol full image" },
      { src: "president/20212.jpeg", caption: "Durga maa idol full image" },
      { src: "president/20213.jpeg", caption: "Durga maa idol full image" },
    ]},
    { year: 2020, images: [
      { src: "president/20201.jpeg", caption: "Durga maa idol full image" },
    ]},
    { year: 2019, images: [
      { src: "president/20191.jpeg", caption: "Durga maa idol full image" },
      { src: "president/20192.jpeg", caption: "Durga maa idol full image" },
    ] },
    { year: 2018, images: [
      { src: "president/20181.jpeg", caption: "Durga maa idol full image" },
    ] },
    { year: 2017, images: [
      {
         src: "president/20171.jpeg", caption: "Durga maa idol full image"
      }
    ] },
    { year: 2016, images: [
      {
        src: "president/20161.jpeg", caption: "Durga maa idol full image"
      }
    ] },
    { year: 2015, images: [
      {
        src: "president/20151.jpeg", caption: "Durga maa idol full image"
      }
    ] },
    { year: 2014, images: [] },
    { year: 2013, images: [] },
    { year: 2012, images: [] },
    { year: 2011, images: [] },
    { year: 2010, images: [
    ]},
    // ---- ADD NEW YEARS ABOVE THE 2025 ENTRY AT THE TOP, NOT HERE ----
  ],

  /* -----------------------------------------------------------------------
     COMMITTEE — add or remove members freely. "title" can be any role:
     President, Vice President, Secretary, Joint Secretary, Treasurer,
     Cultural Head, Member, etc.
     ----------------------------------------------------------------------- */
  committee: [
    { name: "Ananda Ghorai", title: "Chairman", photo: "president/anand.jpeg" },
    { name: "Amar Adak", title: "Chairman", photo: "president/amar.jpg" },
    { name: "Biswajit Jana", title: "President", photo: "president/photo.jpg" },
    { name: "Ajit Maji", title: "Vice President", photo: "president/ajit.jpeg" },
    { name: "Mrittunjoy Jana", title: "Vice President", photo: "images/committee/mrittunjoy-jana.jpg" },
    { name: "Haripada Samui", title: "Vice President", photo: "images/committee/haripada-samui.jpg" },
    { name: "Pradip Jana", title: "General Secretary", photo: "president/pradip.jpeg" },
    { name: "Ashish Das", title: "General Secretary", photo: "president/rasu.jpeg" },
    { name: "Sahadev Maity", title: "Joint Secretary", photo: "images/committee/sahadev-maity.jpg" },
    { name: "Anup Jana", title: "Joint Secretary", photo: "images/committee/anup-jana.jpg" },
    { name: "Chiranjit Sana", title: "Joint Secretary", photo: "images/committee/chiranjit-sana.jpg" },
    { name: "Biswanath Jana", title: "Cashier", photo: "president/biswanath.jpeg" },
    { name: "Laltu Pandit", title: "Cashier", photo: "president/laltu.jpeg" },
    { name: "Sisir Das", title: "Treasurer", photo: "president/laltu.jpeg" },
    { name: "Susanto Maity", title: "Treasurer", photo: "president/susanto.jpeg" },
    { name: "Chandan Sahu", title: "Cultural SECRETARY", photo: "president/sahu.jpeg" },
    { name: "Prasanta Maity", title: "Cultural SECRETARY", photo: "president/prasanto.jpeg" },
    
    // ---- ADD NEW MEMBERS HERE ----
    // { name: "Full Name", title: "Role Title", photo: "images/committee/filename.jpg" },
  ],

  /* -----------------------------------------------------------------------
     LOCATION — paste your real Google Maps embed link and directions link.
     To get an embed link: open Google Maps -> Share -> Embed a map -> copy
     the URL inside the src="..." of the given <iframe> tag.
     To get a directions link: Share -> Copy link.
     ----------------------------------------------------------------------- */
  location: {
    address: "9F8C+VM9, Bar Council of Andhra Pradesh, High Court Rd, Ghansi Bazar, Gulzar Houz, High Court, Ghansi Bazaar, Hyderabad, Telangana 500002",
    mapEmbedUrl: "https://www.google.com/maps?q=9F8C%2BVM9%2C+Bar+Council+of+Andhra+Pradesh%2C+High+Court+Rd%2C+Ghansi+Bazar%2C+Gulzar+Houz%2C+High+Court%2C+Ghansi+Bazaar%2C+Hyderabad%2C+Telangana+500002&output=embed",
    directionsUrl: "https://maps.app.goo.gl/5jKYQgVUAuRakiaG9?g_st=it",
  },

  /* -----------------------------------------------------------------------
     SOCIAL + CONTACT
     ----------------------------------------------------------------------- */
  social: {
    instagramUrl: "https://www.instagram.com/swami_vivekananda_sangha?igsi=eDZrNHc1ZnVsZ3Ry",
    instagramHandle: "@swami_vivekananda_sangha",
  },

  contact: {
    phone: "+919246506287",
    email: "swamivivekanandasangha13@gmail.com",
    address: "9F8C+VM9, Bar Council of Andhra Pradesh, High Court Rd, Ghansi Bazar, Gulzar Houz, High Court, Ghansi Bazaar, Hyderabad, Telangana 500002",
  },
};

/* =========================================================================
   RENDERING — you shouldn't need to edit below this line.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  renderCommittee();
  renderLocationAndContact();
  setupNav();
  setupLightbox();
  document.getElementById("footerYear").textContent = new Date().getFullYear();
});

/* ---- Gallery accordion ---- */
function renderGallery() {
  const wrap = document.getElementById("yearAccordion");
  wrap.innerHTML = "";

  SITE_DATA.gallery.forEach((yearEntry, index) => {
    const card = document.createElement("article");
    card.className = "year-card";
    card.dataset.open = index === 0 ? "true" : "false"; // most recent year starts open

    const photoCount = yearEntry.images.length;

    const toggle = document.createElement("button");
    toggle.className = "year-toggle";
    toggle.setAttribute("aria-expanded", card.dataset.open);
    toggle.innerHTML = `
      <span>${yearEntry.year}
        <span class="year-count">${photoCount ? `${photoCount} photo${photoCount === 1 ? "" : "s"}` : "photos coming soon"}</span>
      </span>
      <span class="chevron" aria-hidden="true">&#9662;</span>
    `;
    toggle.addEventListener("click", () => {
      const isOpen = card.dataset.open === "true";
      card.dataset.open = isOpen ? "false" : "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });

    const photoGrid = document.createElement("div");
    photoGrid.className = "year-photos";

    if (photoCount === 0) {
      photoGrid.innerHTML = `<p class="year-empty">No photos added for ${yearEntry.year} yet — add some in the "gallery" list in script.js.</p>`;
    }

    yearEntry.images.forEach((img) => {
      const btn = document.createElement("button");
      btn.setAttribute("aria-label", `Open photo: ${img.caption}`);
      btn.innerHTML = `<img src="${img.src}" alt="${img.caption}" loading="lazy"
        onerror="this.closest('button').style.display='none'">`;
      btn.addEventListener("click", () => openLightbox(img.src, `${yearEntry.year} — ${img.caption}`));
      photoGrid.appendChild(btn);
    });

    card.appendChild(toggle);
    card.appendChild(photoGrid);
    wrap.appendChild(card);
  });
}

/* ---- Committee grid ---- */
function renderCommittee() {
  const grid = document.getElementById("committeeGrid");
  grid.innerHTML = "";

  SITE_DATA.committee.forEach((member) => {
    const initials = member.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
    const card = document.createElement("div");
    card.className = "member-card";
    card.innerHTML = `
      <img class="member-photo" src="${member.photo}" alt="${member.name}" loading="lazy"
        onerror="this.outerHTML='<span class=&quot;member-photo member-initials&quot;>${initials}</span>'">
      <p class="member-name">${member.name}</p>
      <span class="member-title">${member.title}</span>
    `;
    grid.appendChild(card);
  });
}

/* ---- Location + contact ---- */
function renderLocationAndContact() {
  const { location, social, contact } = SITE_DATA;

  document.getElementById("locationAddress").textContent = location.address;
  document.getElementById("mapFrame").src = location.mapEmbedUrl;
  document.getElementById("directionsBtn").href = location.directionsUrl;

  document.getElementById("instaLink").href = social.instagramUrl;
  document.getElementById("instaHandle").textContent = `Follow us — ${social.instagramHandle}`;

  const contactList = document.getElementById("contactList");
  contactList.innerHTML = `
    <li>Phone: <a href="tel:${contact.phone.replace(/\s+/g, "")}">${contact.phone}</a></li>
    <li>Email: <a href="mailto:${contact.email}">${contact.email}</a></li>
    <li>Address: ${contact.address}</li>
  `;
}

/* ---- Mobile nav toggle ---- */
function setupNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.dataset.open === "true";
    nav.dataset.open = String(!isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => { nav.dataset.open = "false"; });
  });
}

/* ---- Lightbox ---- */
function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

function openLightbox(src, caption) {
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightboxImg").alt = caption;
  document.getElementById("lightboxCaption").textContent = caption;
  lightbox.dataset.visible = "true";
}

function closeLightbox() {
  document.getElementById("lightbox").dataset.visible = "false";
}

