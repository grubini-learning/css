# Keyframes

- each keyframe statement needs a name
- animation requires duration

**In styled components**

```jsx
import styled, { keyframes } from "styled-components";

function App() {
  return <FloatingCircle />;
}

const float = keyframes`
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(-10px);
  }
`;

const FloatingCircle = styled.div`
  animation: ${float} 1000ms infinite alternate ease-in-out;
`;
```

```css
@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}

.box {
  animation: slide-in 1000ms;
}
```

## Timing functions

- default to the `ease` curve

```html
<style>
  @keyframes drop-in {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0%);
    }
  }

  .box {
    animation: drop-in: 1000ms;
    animation-timing-function: linear;
  }
</style>

<div class="box">Hello World!</div>
```

## Looped animations

- special value `infinite`

```html
<style>
  @keyframes spin {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
  }

  .spinner {
    animation: spin 1000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
</style>

<img
  class="spinner"
  alt="Loading…"
  src="https://courses.joshwcomeau.com/cfj-mats/loader.svg"
/>
```

```html
<style>
  @keyframes slide-in {
    from {
      transform: translateX(-100%);
      opacity: 0.25;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  .box {o
    animation: slide-in 1000ms;
    animation-iteration-count: 3;
  }
</style>

<div class="box">Hello World</div>
```

## Multi-step animation

When we specify percentages

```html
<style>
  @keyframes fancy-spin {
    0% {
      transform: rotate(0turn) scale(1);
    }
    25% {
      transform: rotate(1turn) scale(1);
    }
    50% {
      transform: rotate(1turn) scale(1.5);
    }
    75% {
      transform: rotate(0turn) scale(1.5);
    }
    100% {
      transform: rotate(0turn) scale(1);
    }
  }

  .spinner {
    animation: fancy-spin 2000ms;
    animation-iteration-count: infinite;
  }
</style>

<img
  class="spinner"
  alt="Loading..."
  src="https://courses.joshwcomeau.com/cfj-mats/loader.svg"
/>
```

## Alternating animations

Controls the order of the keyframes

### Values

- normal - 0 to 100
- reverse - 100 to 0
- alternate - ping pongs between normal and reverse

```html
<style>
  @keyframes grow-and-shrink {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .box {
    animation: grow-and-shrink 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  }
</style>

<div class="box"></div>
```

## Shorthand

```css
.box {
  /* This works: */
  animation: grow-and-shrink 2000ms ease-in-out infinite alternate;

  /* This also works! */
  animation: grow-and-shrink alternate infinite 2000ms ease-in-out;
}
```
