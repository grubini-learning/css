# Text overflow

The browser looks for "soft wrap opportunities", so that it can determine when a word jumps to the next line

## Possible solutions

- Nuclear option: `overflow: hidden;`
- Wrapping onto multiple lines: `overflow-wrap`
  - `break-word`: we can line wrap longer words

## Hyphens

- `hyphen: auto`: If we want to add '-', hyphens, when a word breaks
  - These only work if the lang attribute is set on the `html` tag

## Ellipsis

- single line

```css
p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 250px;
}
```

- multi-line

```css
p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

    - Caveats:
        - Here's the reasoning: direct children inside a flexbox/grid
          parent will be stretched according to the flex/grid layout algorithm.
          We need our clamped paragraphs to use Flow layout. So by wrapping our
          paragraph in a div, we ensure that the correct layout mode is used.
