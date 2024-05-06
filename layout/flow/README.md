# Flow

Default layout mode.

## Block elements

When you place a block level element on the page, its content box greedily expands to fill the entire available horizontal space and does not want to share the row.

### Defaults

- `width: auto`
- dynamic sizing

- Examples: headings, paragraphs, footers, aside.
- Elements
  - `<div>`
  - `<header>`
  - `<figure>`

## Inline elements

They're like polite dinner-party guests who sit exactly where they're assigned.

### Defaults

- You can shift things in the inline direction with margin-left and margin-right, since that pushes it around in the inline direction, but you can't give it a width or height.
- Default `line-height`
  - we can get rid of it
    - setting `line-height: 0;`
    - setting `display: block;`
- They can line wrap

### Exceptions

- `<img>`
- `<video>`
- `<canvas>`

- Examples: Links, Bold text
- Elements
  - span
  - a

## Toggle

```css
display: inline | block | inline-block;
```

## Shared

- `fit-content`: forces elements to shrink down to the minimum sized required
