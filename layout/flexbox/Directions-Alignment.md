# Directions and Alignment

## Default behavior

- direction is `row`, if the `flow-direction` is not specified.
- items sit at the `front` of the container.
- items are `stretched` along the cross axis.

## Property values

For `space-` values, **if the parent container has no extra space, then there is no effect.**

- `justify-content`

  - `center`
  - `flex-start`
  - `flex-end`
  - `space-around`: each item has an invisible box on each side with equal amount of padding.
  - `space-evenly`: the space between the edge of the container and the first item, is the same space between subsequent items.
  - `space-between`: pushes items to be apart from each other as far away as possible.

- `align-items`

  - `baseline`
  - `center`
  - `flex-start`
  - `flex-end`
  - `stretch`

- `align-self`: Have specific items in a flex container to have specific alignments
  - `baseline`
  - `center`
  - `flex-start`
  - `flex-end`
  - `stretch`

## Tricks

- `align-items: baseline`: imagine aligning your handwriting to the handwriting's book horizontal line.

  - **this works on nested elements as well**
  - For empty input that are miss aligning, we can add an empty place holder or a placeholder that conveys meaning for accessibility.
