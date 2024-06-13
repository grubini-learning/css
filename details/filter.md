# Filter

Manipulates SVG filter, its hardware accelerated

## Color Manipulation

These take a percentage

- `brightness()` - default value of 100%
- `contrast()`
- `sepia()`
- `contrast() grayscale()`

## Hue rotation

Shifts colors of every pixel, can be used to change emoji color as well

- `hue-rotate()`

## Blur

Can be very expensive for accessibility use with `aria-hidden`.
If we prefer a sharper edge, we can use `overflow: hidden`

```html
<style>
  img {
    filter: blur(6px) brightness(50%);
    transition: filter 800ms ease-in-out;
  }

  a:hover img,
  a:focus img {
    filter: blur(0px) brightness(100%);
    transition: filter 300ms;
  }
</style>

<a href="/">
  <img
    alt="A colourful busy street in Tokyo, Japan"
    src="https://courses.joshwcomeau.com/cfj-mats/akihabara.jpg"
  />
</a>
```

## Blur Glow

```html
<style>
  .wrapper {
    position: relative;
  }
  .gradient {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: linear-gradient(deeppink, red, coral, gold, white);
  }
  .blurry {
    position: absolute;
    filter: blur(40px);
    transform: scale(1.3) translateX(10%) rotate(30deg);
  }
  .regular {
    filter: drop-shadow(0px 0px 25px hsl(0deg 0% 0% / 0.3));
  }
</style>

<div class="wrapper">
  <div class="gradient blurry"></div>
  <div class="gradient regular"></div>
</div>
```

## Backdrop filters

Blur everything behind an element

```html
<style>
  .blur-circle {
    backdrop-filter: blur(10px);
    /* Vendor prefix for Safari: */
    -webkit-backdrop-filter: blur(10px);
  }
</style>

<img
  alt="A colourful busy street in Tokyo, Japan"
  src="https://courses.joshwcomeau.com/cfj-mats/akihabara.jpg"
/>
<div class="blur-circle"></div>
```
