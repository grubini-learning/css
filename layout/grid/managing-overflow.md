# Managing Overflow

## Solutions

1. Move `overflow: auto`to the grid child directly
2. Setting a minimum width on the column

```css
.grid {
  display: grid;
  gap: 16px;

  /* This is the changed line: */
  grid-template-columns: 175px minmax(0, 1fr);
}
```

## Resources

- [Preventing grid blowout](https://css-tricks.com/preventing-a-grid-blowout/)
