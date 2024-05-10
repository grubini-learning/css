# Font Loading

When a person visits our site for the first time,
they'll need to download all of the web font files we are using

## Options

1. Wait until the web font has been downloaded before showing any text
2. Render the text in a "fallback" font, one that is locally installed on the user's device
3. We can leverage `font-display`

## Why does it work on mym machine

- on localhost, fonts can be downloaded instantly
- in production, you'll only notice it the first time that you visit the page
- you might already have the font installed locally
- Your internet connection might be significantly faster

## Font Display

Controls how a font should be rendered before its available.

### Timeline

- **block period**
  - text printed in invsible ink
- **swap period**
  - the fallback font is rendered
  - if the web font becomes available, the fallback gets swapped
- **failure period**
  - if the web font didn't load during the other periods, it stop trying
- **font-optional**
  - short block period, and no swap
  - good for fonts that are not very important

### Font Matching

Mechanism that allows tweaking the characteristics of the fallback font

```css
@font-face {
  font-family: "Great Vibes";
  src: url("/fonts/great-vibes.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Fallback";
  size-adjust: 95%;
  ascent-override: 90%;
  descent-override: 20%;
  src: local("Arial");
}

body {
  font-family: "Great Vibes", "Fallback", sans-serif;
}
```

### Options

- `block`: has a long block period and infinite swap period
- `swap`: little to no block period and infinitely swap period
- `fallback`: very short block period, moderate swap time

```css
@font-face {
  font-family: "Great Vibes";
  src: url("/fonts/great-vibes.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* 👈👈👈 */
}
```

```html
<head>
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,400;1,600&display=swap"
    ad
  />
  rel="stylesheet" >
</head>
```

### Resources

- [Fallback Generator](https://screenspan.net/fallback)
- [Fontaine](https://github.com/danielroe/fontaine)
- [next/font](https://nextjs.org/docs/basic-features/font-optimization)
