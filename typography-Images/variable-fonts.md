# Variable Fonts

The font has parameters that can be tweaked to control the rendered output.

## Parameters

- `font-weight`
- `slant`
- `mono`
- `casual`
- `cursive`

```css
<link rel="preconnect" href="https://fonts.gstatic.com">
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
>
```

or

```css
@font-face {
  font-family: "Recursive";
  src:
    url("/fonts/recursive-variable.woff2") format("woff2 supports variations"),
    url("/fonts/recursive-variable.woff2") format("woff2-variations");
  font-weight: 300 1000;
  font-display: fallback;
}
```

```css
.hello {
  font-weight: 777;
}
```

## Font Variation Settings

```css
.fun-heading {
  color: deeppink;
  font-variation-settings:
    "CRSV" 1,
    "CASL" 0.9;
}

/* This rule: */
.with-settings {
  font-variation-settings:
    "wght" 725,
    "wdth" 125,
    "slnt" -10;
}

/* …is equivalent to this rule: */
.without-settings {
  font-weight: 725;
  font-stretch: 125%;
  font-style: oblique -10deg;
}
```

## Resources

- [Supported Google Fonts](https://fonts.google.com/variablefonts)
  - [how to use them](https://developers.google.com/fonts/docs/css2)
- [Variable Fonts](https://www.recursive.design/)
