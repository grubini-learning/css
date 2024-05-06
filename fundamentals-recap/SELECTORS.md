# CSS Selectors

Provide a way to reach into the DOM and apply the styles specified in its CSS rule.

## [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

Styles that are applied based on the state of an HTML element.

Some examples are:

- `:focus`
- `:hover`
- `:checked`

- ### Conditional logic
  - `:first-child`: select tags that are the first child within a parent
  - `:last-child`: select tags that are the last child within a parent
  - `first-of-type`: the first occurrence of that tag within a parent
  - `last-of-type`: the last occurrence of that tag within a parent

## [Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

Styles that target sub-elements of an HTML element. They target elements in the DOM that we haven't explicitly created.

- `::placeholder`
- `::before`, `::after`: secret span, only use if the effect is strictly decorative

## [Combinators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

- space: Apply styles of the listed tags who have a descendant selector

  ```css
  nav a {
    color: red;
  }
  ```

- \>: Apply styles to direct children

  ```css
  nav > a {
    color: red;
  }
  ```

  - `~`: Apply to subsequent siblings
