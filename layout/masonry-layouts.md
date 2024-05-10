# Masonry Layouts

Its a way of stacking elements in an asymmetric grid, with elements of different sizes.

```css
ul {
  --gap: 16px;
  columns: 3;
  column-gap: var(--gap);
  padding: var(--gap);
}

img {
  width: 100%;
  display: block;
  margin-bottom: var(--gap);
}
```

## Resources

- [if the order is important](https://tobiasahlin.com/blog/masonry-with-css/)
- [Masonry.js](https://github.com/eiriklv/react-masonry-component)
