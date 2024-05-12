# Fluid Grids

Grid with a dynamic number of columns

## Use Cases

- We want to render a list of items
- We sant to be uniform for every item in the list
- Tile nicely no matter what the screen size

## Clamping with minmax

`minmax(first, second)`: the first value represents the min width and the second the max width

- if we use the `fr` unit, it has to come last

```html
<style>
  .grid {
    display: grid;
    gap: 16px;
    grid-template-columns:
      minmax(50px, 1fr)
      minmax(250px, 1fr);
  }
</style>

<main class="grid">
  <div class="card"></div>
  <div class="card"></div>
</main>
```

## Auto-Fill

When we want to fill an unkown amount of columns or rows

- When the space isn't a perfect multiple of the item's width, we can leverage `justify-content`

```css
<style>
  .grid {
    display: grid;
    gap: 16px;
    grid-template-columns:
      repeat(auto-fill, 150px);
  }
</style>

<main class="grid">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</main>
```

## Repeat keywords

- `auto-fill`: which generates a dynamic number of columns.
  - lots of empty columns
- `auto-fit`: stretched out columns

## Responsive

```css
/* On large screens: */
.grid {
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}

/* On small screens: */
.grid {
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
}
```

## Fluid

```css
.grid {
  display: grid;
  padding: 16px;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr));
}
```
