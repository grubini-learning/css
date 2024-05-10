# Web Fonts

## CDN

```css
<link rel="preconnect" href="https://fonts.gstatic.com">
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,400;1,600&display=swap"
  rel="stylesheet"
>

.thing {
  font-family: "Open Sans", sans-serif;
}
```

**self hosted fonts can perform better**

## Manual Way

1. Convert formats
   - [Fontsquirrel's webfont generator](https://www.fontsquirrel.com/tools/webfont-generator)
2. Font face tag
   - tell the browser that we want to use the font

```css
@font-face {
  font-family: "Wotfard";
  src: url("/fonts/wotfard-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Wotfard";
  src: url("/fonts/wotfard-medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Wotfard";
  src: url("/fonts/wotfard-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Wotfard";
  src: url("/fonts/wotfard-regular-italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
}
```

## Resources

- [Google fonts](https://fonts.google.com/)
- Modern tooling
  - [FontSource](https://fontsource.org/)
- Static files in React
  - [create react app](https://create-react-app.dev/docs/using-the-public-folder/)
  - [Next.js](https://nextjs.org/docs/basic-features/static-file-serving)
  - [Gatsby](https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/)
