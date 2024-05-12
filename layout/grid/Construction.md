# Construction

## Defaults

- By default it we just supply `display: grid`, it becomes an implicit grid. (creates 1 new row for each element)
- If we give the grid a height, then the row's height is divided equally among its children
- absolute positioned children completely ignore the grid layout
- Every child gets its own cell
- the rows grow and shrink based on the children

## Defining columns

`grid-template-columns` property

- controls
  - number of columns we want
  - individual widths

### Rigid columns

**these values aren't “suggestions”, they're hard limits.**
**rem, em, %** are all hard limits.

```css
.wrapper {
  display: grid;
  grid-template-columns: 25% 75%;
}
```

### Flexible columns

- We want columns to grow, if their content does not fit.
- We can think of it as `flex-grow`, except it operates on the column and not on the actual child

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
```

**`fr` unit** is the only flexible unit in grid.

## Explicit Rows

When creating whole layouts in CSS Grid, it's common to give each row an explicit height. We can do this with the grid-template-rows property.

```css
.wrapper {
  display: grid;
  grid-template-rows: 64px 1fr 100px;
  min-height: 100%;
}
```

## Gutters

What if we only want there to be a gap between rows, and not between columns? We can specify two values, one for each direction:

`gap`row col or `grid-gap`

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* 8px between rows, 0px between columns */
  gap: 8px 0px;
}
```

## Repeat

This is most commonly used with the fr unit, but it doesn't have to be! We can use any unit, like repeat(4, 200px).

```css
.calendar {
  grid-template-columns: 250px repeat(5, 1fr);
}
```

## Alignment

### Properties

- `justify-content`: (Cols)

  - applies to grid structure changing the columns.
  - The default behavior in CSS Grid is to stretch the columns to take up all available space. justify-content: center overrules this behavior.
  - So, justify-content allows us to change how our columns are distributed.
  - values:
    - `space-between`
    - `space-around`
    - `start`
    - `center`
    - `end`

- `justify-items`: (Content)

  - places the items along the rows of the grid
  - moves the child element within its cell
  - values
    - `start`
    - `center`
    - `end`

- `align-content`: (Rows) - We have to give a specific height

  - Arranges the placement of the rows within a grid
  - values:
    - `space-between`
    - `space-around`

- `align-items`: it controls the element's vertical position within the row
  - values:
    - `start`
    - `end`
    - `center`
- `align-self`: allows specific children and it changes their vertical positioning within the grid cell.
- `justify-self`: which changes a particular element's horizontal position, within the grid cell
