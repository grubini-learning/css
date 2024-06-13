# Animation

Animation is natural motion helps our brains make sense of things. It makes the pixels in our screens feel more real and tangible. I think it's a big part of why mobile apps feel more premium and polished than their web-app counterparts.

## Animation vs Transitions

- only @keyframes can do

  - looped animations
  - multi-step animations
  - pauseable animations

- transitions
  - When CSS changes as a result of application state
  - Smooth out a harsh transition

```html
<style>
  @keyframes waving {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(30deg);
    }
  }
  .wave {
    display: inline-block;
    animation: waving 1100ms infinite ease-in-out;
    animation-direction: alternate;
    transform-origin: 75% 80%;
  }
</style>

<p>
  <span class="wave" role="img" aria-label="Waving hand"> 👋 </span>
</p>
```
