# Transforms

Allows us to change a specified element lin some way. It comes with different transform functions that allow us to move and contort our elements in many different ways.

## Gotcha

- they don't work with inline elements in Flow layout
  - we can fix it by switching the element to `display: inline-block`

## Functions

### Translate

Allows to move item around wither on its x or y axis.

- _The item's in-flow position doesn't change_, which means that even though the element moves around, the other elements position are unaffected.
- _When we use a percentage value in `translate`, the percentage refers to the element's own size._
- We can add a buffer of space, by using `calc` and mixing percentage + px

```css
.box {
  transform: translateY(20px);

  /* It's equivalent to: */
  transform: translate(0px, 20px);
}
```

### Scale

Allows to grow and shrink the element

- It uses a unitless value that represents a multiple, _2x its normal size_
- We can also pass independent values for the x and y axis
- if the element has content inside it, it will scale up or down as well, which means elements are flattened into a texture

### Rotate

Allows to rotate our elements

- Typically, the unit is in degrees
- We can also use the unit `turn`, 1 turn = 360 degrees

```css
.box {
  transform: rotate(50deg);
}

.box {
  transform: rotate(1turn);
}
```

### Skew

Allows us to skew in either axis

- we can skew in either axis, `skewX or skewY`

```css
.box {
  transform: skew(50deg);
}
```

## Transform origin

Every element has an origin anchor that begins the transform from, like a hinging point.

```css
.box {
  transform: rotate(360deg);
  transform-origin: 25px bottom; x | y axis
}
```

## Combining multiple operations

We can string together multiple transform functions by space-separating them

- order is important because it follows the original axis of the element

```css
.box {
  transform: translateX(61px) rotate(98deg);
}
```
