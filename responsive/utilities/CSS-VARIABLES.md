# CSS Variables

- Custom properties are inheritable
- They are not global
- CSS variables are evaluated when they're used, not when they're defined.
- CSS variables are composable

```css
The second argument is the default
var(--inner-spacing, 16px);
```

## @property

Allows us to configure a specific variable.

```css
@property --text-color {
  syntax: "<color>";
  inherits: false;
  initial-value: black;
}
```

## Change variables in JS

```js
button.style.setProperty("--inflated-size", fontSize + "rem");
```
