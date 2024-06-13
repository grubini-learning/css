# Fill modes

Lets you persist the final value from the animation

## Values

- forwards - copies the to block
- backwards - copy all of the declarations in the from block and apply them to the element ASAP
- both

```html
<style>
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .box {
    animation: fade-out 1000ms;
    animation-fill-mode: forwards;
  }
</style>

<div class="box">Hello World!</div>
```

```html
<!--
Acceptance criteria:

• Should have a 1000ms delay
• Should animate over 500ms
• Should have 32px of spacing from the
  bottom-right corner
-->

<style>
  @keyframes slide-up {
    from {
      transform: translateY(calc(100% + var(--spacing)));
    }
    to {
      transform: translateY(0%);
    }
  }

  .help-circle {
    --spacing: 32px;
    position: fixed;
    right: var(--spacing);
    bottom: var(--spacing);
    /* transform: translateX(-100%); */
    animation: slide-up 500ms backwards;
    animation-delay: 1000ms;
  }
</style>

<button class="help-circle">
  <img alt="" src="https://courses.joshwcomeau.com/cfj-mats/help-white.svg" />
  <span class="visually-hidden"> Access help center </span>
</button>
```

## Properties

- `animation-delay` - starts the animation with a certain delay
