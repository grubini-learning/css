# Multi-Column

The concern of the algorithm is to split content evenly to maintain
the same height through all the columns

It automatically splits content across multiple columns

```css
.wrapper {
  columns: 3;
  column-gap: 16px;
  padding: 16px;
}
```

- If we don't want to split paragraphs across different columns
  `p { break-inside: avoid; }`
