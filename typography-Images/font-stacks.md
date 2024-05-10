# Font Stacks

## Properties

- `font-family` is how we change the font for a given element

```css
.title {
  font-family: "Lato", Futura, Helvetica, Arial, sans-serif;
}
```

Ideally it'll pick the first one, but if it's not available the second and so on.

## System font stack

```css
/* When it comes to working with the system font stack, CSS variables make life way nicer: */

html {
  --font-sans-serif: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe
      ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
  --font-serif: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid
      Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe
      UI Symbol;

  /* Set a global default */
  font-family: var(--font-sans-serif);
}

/* Apply different fonts as needed */
p {
  font-family: var(--font-serif);
}
```
