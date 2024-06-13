# Accessibility

## IN CSS

If they've ticked the "reduce animations" checkbox, prefers-reduced-motion will be set to reduce.

```css
.fancy-box {
  width: 100px;
  height: 100px;
  transform: scale(1);
  transition: transform 300ms;
}

.fancy-box:hover {
  transform: scale(1.2);
}

@media (prefers-reduced-motion: reduce) {
  .fancy-box {
    transition: none;
  }
}
```

- In this case, we're starting from a place of animations being enabled, and explicitly disabling them based on a media query. A better mental model is to think in terms of the reverse: start without animations, and enable them if the user wishes:

```css
.fancy-box {
  width: 100px;
  height: 100px;
  transform: scale(1);
  /* No more `transition` here! */
}

.fancy-box:hover {
  transform: scale(1.2);
}

@media (prefers-reduced-motion: no-preference) {
  .fancy-box {
    transition: transform 300ms;
  }
}
```

## IN JS

```js
// If it returns false, it means the user has no preference, and we should enable our animations.
function getPrefersReducedMotion() {
  const mediaQueryList = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  );

  const prefersReducedMotion = !mediaQueryList.matches;

  return prefersReducedMotion;
}

const mediaQueryList = window.matchMedia(
  "(prefers-reduced-motion: no-preference)"
);

const listener = (event) => {
  const getPrefersReducedMotion = getPrefersReducedMotion();
};

mediaQueryList.addListener(listener);

// Later:
mediaQueryList.removeListener(listener);
```

## Motions vs Animations

Not all animation involves motion

## Exercise

```css
@keyframes slide-in {
  from {
    transform: translateY(calc(100% + var(--spacing)));
  }
  to {
    transform: translateY(0%);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.help-circle {
  --spacing: 32px;
  position: fixed;
  bottom: var(--spacing);
  right: var(--spacing);
  animation: fade-in 500ms backwards;
  animation-delay: 1000ms;
}

@media (prefers-reduced-motion: no-preference) {
  .help-circle {
    animation-name: slide-in;
  }
}
```

## Resources

- [Animations in React](https://www.joshwcomeau.com/react/prefers-reduced-motion/#the-hook)
