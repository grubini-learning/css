# Transforms

Allows us to change a specified element lin some way. It comes with different transform functions that allow us to move and contort our elements in many different ways.

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
