# Feature Queries

inside the @supports statement will only be applied if the browser recognizes the CSS declaration you pass it.

```css
@supports (display: grid) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
```

## Interaction Media Queries

Applies styles based on the input mechanism used

```css
@media (hover: hover) and (pointer: fine) {
  button:hover {
    text-decoration: underline;
  }
}
```

## Preference based Media Queries

Hooks into user's preferences

- Detects wether the user prefers dark mode or light

```css
@media (prefers-color-scheme: dark) {
  /* Dark-mode styles here */
}
```

- only allows parallax animations, if the user has not chosen a preference. (Accessibility)

```css
@media (prefers-reduced-motion: no-preference) {
  /* Animations here */
}
```

- targets window orientation

```css
@media (orientation: portrait) {
  /* Styles for windows that are taller than they are wide */
}

@media (orientation: landscape) {
  /* Styles for windows that are wider than they are tall */
}
```
