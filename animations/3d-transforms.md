# 3D Transforms

## Defaults

- orthographic projection: Everything will be the same size, no matter how far away it is.

## Perspective

Is all about the visuals of how the items are presented.

- Takes into account how far away the object is and renders its size accordingly
- The value we pas to it can be thought as a measure of how close the user is to the screen
- the property needs to be set on the parent element

```html
<style>
  .container {
    perspective: 250px;
  }
  .box {
    transform: rotateX(45deg);
  }
</style>

<div class="container">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```

## Perspective Function

Gives each transformed element its own environment

```css
.box {
  transform: perspective(250px) rotateX(45deg);
}
```

## Rendering Contexts

```css
.wrapper {
  transform-style: preserve-3d;
  perspective: 500px;
}
.card-link {
  display: block;
  transform-origin: top center;
  will-change: transform;
  transform: rotateX(0deg);
  transition: transform 750ms;
}
.card-link:hover,
.card-link:focus {
  transform: rotateX(-35deg);
  transition: transform 250ms;
}
```

## 3D rendering contexts

When we apply `transform-style: preserve-3d;`, we create a 3D rendering context. We allow the element's children to be repositioned in the 3D space. When one element moves close, it will be painted above its sibling
