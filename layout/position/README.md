# Positioned Layout

Defining feature is that items can overlap.

## Default

- `position: static or initial`
- Does not impact layout.
- Does not cause the element to resize
- Will always render on top of non-positioned elements.

## Position values

Each one works in their own way

- `absolute`
- `fixed`
- `relative`
- `sticky`

### Relative

Element are positioned relative to their natural position. We enable the use of `top, right, left, bottom`.

### Absolute

Elements are adjusted based to their container

- if no anchors are specified the element hover over its natural position, but its removed from the natural flow allowing other elements to take it natural space.
- Absolute elements can only be contained by other elements using Positioned layout with `absolute | relative | fixed | sticky`.

- Use cases
  - floating elements
  - Decorative elements
  - Stacking elements in the same place

### Fixed

- Can only be contained by the viewport. Major benefit is that its immune to scrolling.
- If we don't set anchor point they sit in their in-flow position.
- if we use `transform | filter | will-change` to an ancestor, its bound by it and stops being bound by the viewport

### Sticky

- element will never scroll outside of its parent
- `top | right | bottom | left`: these values control the “stick point” or the point where the element begins to stick.
  - top sets the minimum distance that the element will sit from the top of the viewport.
- maintains the space that it occupies on the layout
- sticky positioning, elements stick to the closest scroll container.
- troubleshooting
  - unfortunately it doesn't have to be the direct parent
  - the container isn't big enough
  - There's a thin gap above my sticky header! (top: -1px;)

## Tricks

- centering: we can use `inset: 25px`

## Stacking Context

Stacking context is a three-dimensional conceptualization of HTML elements along an imaginary z-axis relative to the user. Contains the competition for this order to the parent, rather than an outer parent, which produces unexpected behaviors.

- [Stacking Context Inspector](https://github.com/andreadev-it/stacking-contexts-inspector)

### Ways to create them

- Combining a non-static positioned layout with z-index
- Setting opacity value to less than 0
- Setting position to fixed or sticky
- Adding z-index to display flex or grid
- Using `transform` | `filter` | `clip-path` | `perspective`
- Explicitly creating the stacking context with `isolation: isolate`

### Z-Index

- If we want to change the layering order we use `z-index` css property
- The higher the z-index, the closer the element is placed to the viewer
