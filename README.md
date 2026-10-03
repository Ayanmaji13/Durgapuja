# Swami Vivekananda Sangha — Website

A Durga Puja committee website: title, established year, a year-by-year
photo gallery, committee members, location map, and contact/Instagram.

## Files

- `index.html` — page structure
- `style.css` — all styling (colors, fonts, layout)
- `script.js` — **all editable content lives here**, plus the code that
  renders it onto the page
- `images/` — put your own photos here if you don't want to use the
  placeholder image links

## Running it

No build step needed.

1. Open this folder in VS Code.
2. Install the **Live Server** extension (if you don't have it).
3. Right-click `index.html` → **Open with Live Server**.

Or just double-click `index.html` to open it in a browser (the gallery and
committee photos use online placeholder images, so you'll need an internet
connection until you swap in your own local photos).

## Updating content every year

The gallery is pre-filled with every year from **2010 to 2025**, newest
first. Years that don't have photos yet show a "photos coming soon"
message instead of breaking — and committee members without a photo file
automatically show their initials in a circle instead of a broken image.
Add real files whenever you have them; nothing else needs to change.

Open `script.js` and edit the `SITE_DATA` object near the top of the file:

### Add this year's gallery photos

```js
gallery: [
  {
    year: 2026,
    images: [
      { src: "images/2026-1.jpg", caption: "Describe the photo" },
      { src: "images/2026-2.jpg", caption: "Another photo" },
    ],
  },
  // ...older years stay below, newest year should be listed first
],
```

Put the actual photo files in the `images/` folder and reference them as
shown above (`images/filename.jpg`).

### Add or edit a committee member

```js
committee: [
  { name: "Full Name", title: "President", photo: "images/name.jpg" },
  // ...
],
```

`title` can be any role: President, Vice President, Secretary, Joint
Secretary, Treasurer, Cultural Secretary, Member, etc.

### Update location, Instagram, and contact details

Edit the `location`, `social`, and `contact` objects further down in the
same file — address, Google Maps embed link, directions link, Instagram
URL, phone, and email.

To get a Google Maps embed link: open Google Maps → **Share** →
**Embed a map** → copy the URL inside `src="..."`.

## Notes

- The contact form currently only shows a "thank you" message — it isn't
  wired to send email. Connect it to a service like Formspree or Netlify
  Forms (or your own backend) to actually receive messages.
- Replace the placeholder `picsum.photos` and `pravatar.cc` image links
  with your own photos whenever you're ready.
