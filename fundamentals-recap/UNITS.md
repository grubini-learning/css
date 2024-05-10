# Units

## Pixels

Correspond more or less to what you see on the screen

## CH

1ch is equal to the width of the character '0'

## Relative Units

### Ems

Its equal to the font size of the current element.
-Ex: if a heading has a font-size of 24px and we give it a padding of 2em, that padding is 48px.

### Rem

Its relative to the <html> tag. It respects user's preferences.

### Percentages

Often used with a width/height, as a way to consume portions of the available space.

### VW

Each vw is 1% of the viewport width

## Accessibility

- Zoom: applies a multiple to every unit, expect `vh` and `vw`
  - WCAG [(200% zoom)](https://www.w3.org/TR/WCAG21/#resize-text) states that a site should be usable at 200% zoom.
- Font scaling - redefines the base font size.

### Strategy

Should this value scale up as the user increases their browser's default font size?

- Absolute units

  - **horizontal padding**, because by using relative units we are reducing the amount of space for the content
  - **border widths**

- Relative units

  - **media queries**, A mobile user has less available space than a desktop user, and so we design layouts that are optimized for that amount of space.
  - **vertical margins**, (functional spacing),e A mobile user has less available space than a desktop user, and so we design layouts that are optimized for that amount of space.

- Depends
  - **widths**, in most cases it makes sense to use `rems`. If we have a specific layout in mind and vertical spacing is more abundant than horizontal.

### Constraints

- **fixed widths** can be mitigated with the use of `max-width: 100%`
- **fixed heights** can be mitigated with the use of `min-height`, allows to grow as tall as it needs.

### Testing

- [Chrome](https://support.google.com/chrome/answer/96810?hl=en&co=GENIE.Platform%3DDesktop)
- [Firefox](https://support.mozilla.org/en-US/kb/change-fonts-and-colors-websites-use)
- [Safari](https://support.apple.com/en-gb/HT207209)
- [Edge](https://support.microsoft.com/en-us/microsoft-edge/increase-default-text-size-in-microsoft-edge-c62f80af-381d-0716-25a3-c4856dd3806c)
