# Growing & Shrinking

## Important

- **minimum content size**: the smallest an item can get without its contents overflowing.
- **hypothetical size**: the room to breath before it reaches the items smallest size.
  - We can set this with `width` & `height`
  - We can also set this with `flex-basis`. The difference is that its agnostic to the flex direction is in.
    - **flex-basis always wins against height or width**

## Properties

- `flex-basis`: has the same effect as width in a flex row (height in a column). You can use them interchangeably, but flex-basis will win if there's a conflict.
  - it can't scale an item below its minimum content size, but `width` can.
- `flex-grow`: will allow a child to consume any excess space in the container. It has no effect if there isn't any excess space.
  - only does something when items are above their hypothetical size.
  - **wins over flex-basis**
- `flex-shrink`: will pick which item to consume space from, if the container is too small. It has no effect if there is any excess space. (shrinking ratio)
  - only does something when items are between minimum size and hypothetical size.
  - **we can set this to 0 to indicate NO SHRINKING**

## Constraints

- `flex-basis` works just like `width`, and it also respects the constraints set by `min-width` and `max-width`.
  - We're effectively changing the “minimum content size” to be a hardcoded value, rather than relying on the size of the element's children.
  - We can also use max-width to clamp an element's growth! And, in a column, min-height and max-height work the same way.
