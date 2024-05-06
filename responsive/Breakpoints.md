# Breakpoints

A breakpoint is a specific viewport width that lets us segment all devices into a small set of possible experiences.

## Picking

Depends on your design.

### Approaches

- based on common device resolutions
- the most common device resolutions should sit in the middle of each grouping
  - we should put our breakpoints in dead zones, as far away from “real-world” resolutions as possible
  - breakpoints
    - 0-550px — Mobile
    - 550-1100px — Tablet
    - 1100-1500px — Laptop
    - 1500+px — Desktop

## Implementation

- Mobile first

```css
/* Default: Phones from 0px to 549px */

@media (min-width: 550px) {
  /* Tablets */
}

@media (min-width: 1100px) {
  /* Laptop */
}

@media (min-width: 1500px) {
  /* Desktop */
}
```

- Desktop first

```css
/* Default: Desktop monitors, 1501px and up */

@media (max-width: 1500px) {
  /* Laptop */
}

@media (max-width: 1100px) {
  /* Tablets */
}

@media (max-width: 550px) {
  /* Phones */
}
```

```jsx
// constants.js

// Values in pixels:
const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

// Converted to rems:
const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};
```
