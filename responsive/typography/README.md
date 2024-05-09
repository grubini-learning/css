# Responsive Typography

Depending on the context of where the text is found, we shall make it bigger or smaller.

## Body Text

Should remain the same across all devices.

## Smaller text

Depends on its importnace! If its is important then bigger text

## Form fields

We can set the text in `inputs | select` to `1rem`, to avoid iOS to zoom in.

## Headings

- we can decrease this in mobile devices with `media queries`
- another way, is to use a value that depends on the viewport width, by usign `vw`
  - we need to use these with `clamp(1.5rem, 6vw, 3rem)`
  - to avoid the accessibility issue when zooming in we can use `clamp(1.5rem, 4vw + 1rem, 3rem)`
