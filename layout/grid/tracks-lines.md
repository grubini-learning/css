# Track and lines

Grid structure that controls where an element sits in the grid

## Lines

They represent the edges of each column starting at the left to the right of grid.

## Tracks

They represent the edges of each row starting at the top of the grid, all the way to the bottom.

```css
.wrapper {
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

// starts in column line 3 - 4
// start in row track 2 - 3
.box {
  background: pink;
  grid-column: 3 / 4;
  grid-row: 2 /3;
}
```
