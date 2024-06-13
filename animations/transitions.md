# Transitions

Allows to smooth out the changes that occur in our application, instead for an element teleporting, it glides.
In order for the glide to happen, we need some css that changes.

## Values

1. name of the property we wish to animate
2. duration of the animation
3. there is a special value `all`, which any CSS property that changes will be transitioned

```html
<style>
  .btn {
    transition: transform 250ms;
  }

  .btn:hover {
    transform: translateY(-10deg);
  }
</style>

<button class="btn">Hello World!</button>
```

## Multiple properties

```css
.btn {
    transition: transform: 250ms, opacity: 400ms;
}

.btn:hover {
    transform: scale(1.2);
    opacity: 0;
}
```

## Timing functions

Simulated motion, what we are doing is more like a flipbook. These describe how a value gets from 0 to 1 over a fixed interval of time

### Linear

Element moves at a constant pace and distance, its rarely the best choice

```css
.btn {
  transition: transform 250ms;
  transition-timing-function: linear;
}

or .btn {
  transition: transform 250ms linear;
}
```

### Ease-out

Comes charging like a bull, but runs out of steam

- used when something is entering off-screen

### Ease-in

Starts slow and speeds up

- exclusively with elements ending off-screen

### Ease-in-out

Timing is symmetrical

- Most useful for anything that happens in a loop
  - fading in and out

### Ease

features a brief ramp-up and lots of deceleration

- is the default value

### Custom curves

we can define our own easing curve

```css
.btn {
  transition: 250ms cubic-bezier(0.1, 0.2, 0.3, 0.4);
}
```

## Resources

- [timing functions](https://courses.joshwcomeau.com/css-for-js/treasure-trove/011-cubic-bezier)
- [extended set of timing functions](https://easings.net/)

```css
.btn {
  /* ease-out */
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

  /* ease-in */
  transition-timing-function: cubic-bezier(0.75, 0, 1, 1);

  /* ease-in-out */
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  /* ease */
  transition-timing-function: cubic-bezier(0.44, 0.21, 0, 1);
}
```

## Delays

Keeps things for a brief interval

```css
.dropdown {
  opacity: 0;
  transition: opacity 400ms;
  transition-delay: 300ms;
}

.dropdown-wrapper:hover .dropdown {
  opacity: 1;
  transition: opacity 100ms;
  transition-delay: 0ms;
}

or .dropdown {
  opacity: 0;
  transition: opacity 250ms 300ms;
}
```

## Issues

### Doom flicker

Common animation bug where an element jumps up and down quickly, due to leaving and entering the :hover pseudoclass

```html
<style>
  .btn {
    width: 100px;
    height: 100px;
    border: none;
    background: transparent;
    padding: 0;
  }

  .btn:hover .btn-contents {
    transform: translateY(-10px);
  }

  .btn-contents {
    display: grid;
    place-content: center;
    height: 100%;
    border-radius: 50%;
    background: slateblue;
    color: white;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    transition: transform 250ms;
  }
</style>

<button class="btn">
  <span class="btn-contents"> Hello World </span>
</button>
```
