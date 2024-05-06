# Built in declaration

**user-agent stylesheet**, each browser includes their own base styles.

## Inheritance

Most typography properties are inheritable

- Forcing inheritance `css-property: inherit;`

## Cascade Algorithm

Multiple fighters enter but only one emerges.

_Specificity_ declares the order in which a CSS rules is merged in to apply and the last one to get merged in wins.

- Resource: https://wattenberger.com/blog/css-cascade

## Box Model and its winter layers

1. Content: the person themselves.
2. Padding: polyester stuffing in the coat that the person is wearing.
   - `px`: the best unit to use for padding for accessibility reasons.
3. Border: the material of the coat, thickness and color.
   - defaults using text color if no color is provided
   - the only property required is `border-style` to produce `3px solid black` border
   - `currentColor` refers to text's color
   - border affects layout, outline does not
4. Margin: personal space.
   - Negative margins can pull an element outside its parent
   - margin can center elements horizontally with explicit widths

### Margin Collapse

Only applies in flow layout

- block level elements have vertical margin collapse
- inline block levels have margin collapse horizontally
- Nesting doesn't prevent collapsing
- Blocked by padding or border
- `overflow` container also disables it

### Box Sizing

`box-sizing` Allows to change the rules for size calculations.

- values
  - `content-box`: inner value + padding + border = width
  - `border-box`: inner values - (padding + border) = width
