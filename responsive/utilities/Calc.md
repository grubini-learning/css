# Calc

Makes clear to other developers what the intent is here

## Mathematical Operators

- '+'
- '-'
- '\*'
- '/'

```css
.something {
  width: 14.286%;
  width: calc(100% / 7);
}
```

## Unit Conversion

- From pixels to rems

```css
h2 {
  font-size: calc(24 / 16 * 1rem);
}
```

- Calculating colors and gradients

```html
<style>
  :root {
    --red-hue: 0deg;
    --intense: 100% 50%;

    --red: hsl(var(--red-hue) var(--intense));
    --orange: hsl(calc(var(--red-hue) + 20deg) var(--intense));
    --yellow: hsl(calc(var(--red-hue) + 40deg) var(--intense));
    --pinkred: hsl(calc(var(--red-hue) - 20deg) var(--intense));
    --pink: hsl(calc(var(--red-hue) - 40deg) var(--intense));
  }
</style>

<div class="row">
  <div class="demo-box" style="background: var(--pink)"></div>
  <div class="demo-box" style="background: var(--pinkred)"></div>
  <div class="demo-box" style="background: var(--red)"></div>
  <div class="demo-box" style="background: var(--orange)"></div>
  <div class="demo-box" style="background: var(--yellow)"></div>
</div>
```
