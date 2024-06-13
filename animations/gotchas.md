# Gotchas

## Applying perspective to descendants

- Doom Flicker
- `transform-style`: is not inheritable, and it only creates a 3D context with direct children

```html
<!-- This works because if a child sets a transform-style, it forwards the context from the parent downwards -->
<style>
  /* 1. Shared parent */
  .wrapper {
    perspective: 500px;
    transform-style: preserve-3d;
  }

  /* 2. Individual card wrapper */
  .card-link {
    transform-style: inherit;
    display: block;
  }

  /* 3. Child to be transformed: */
  .card {
    transform-origin: top center;
    will-change: transform;
    transform: rotateX(0deg);
    transition: transform 750ms;
  }

  /*
    Apply the transforms to the child
    when we hover/focus the wrapper:
  */
  .card-link:hover .card,
  .card-link:focus .card {
    transform: rotateX(-35deg);
    transition: transform 250ms;
  }
</style>

<div class="wrapper">
  <a href="/" class="card-link">
    <article class="card">
      <img src="https://courses.joshwcomeau.com/images/logos/chrome.svg" />
    </article>
  </a>
  <a href="/" class="card-link">
    <article class="card">
      <img src="https://courses.joshwcomeau.com/images/logos/firefox.svg" />
    </article>
  </a>
  <a href="/" class="card-link">
    <article class="card">
      <img src="https://courses.joshwcomeau.com/images/logos/safari.png" />
    </article>
  </a>
  <a href="/" class="card-link">
    <article class="card">
      <img src="https://courses.joshwcomeau.com/images/logos/edge.svg" />
    </article>
  </a>
  <a href="/" class="card-link">
    <article class="card">
      <img src="https://courses.joshwcomeau.com/images/logos/opera.svg" />
    </article>
  </a>
</div>
```

## Properties that disable 3D rendering

If we apply these properties to the wrapper

- overflow
- clip-path
- opacity
- filter
- mix-blend-mode
