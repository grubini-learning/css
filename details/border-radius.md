# Border Radius

Each the properties take in two values (horizontal and vertical radius for each corner)

- When we use percentages, the horizontal radius is based on the width and vertical on the height

## Full short hand

```css
.box {
  border-radius: 10% 20% 30% 40% / 50% 60% 70% 80%;
}
```

## Nested radiuses

```html
<style>
  .card {
    --outer-radius: 24px;
    --padding: 8px;

    border-radius: var(--outer-radius);
    padding: var(--padding);
  }
  .avatar {
    border-radius: calc(var(--outer-radius) - var(--padding));
  }
</style>

<article class="card">
  <img
    class="avatar"
    alt="Dog avatar"
    src="https://courses.joshwcomeau.com/cfj-mats/article-image-spot.jpg"
  />
  <h2>Spot</h2>
  <p>
    Perennial Good Boy. Parlimentary candidate, district 22. Dog park YIMBY.
  </p>
</article>
```

## Circular radius

Border radius has a built in limit that won't allow the corners to grow so large that they run into each other

## Asymmetric circles

```html
<style>
  .card {
    width: 200px;
    height: 100px;
    border: 3px solid hsl(225deg, 12%, 40%);
    border-radius: 5000px 5000px 1000px 1000px;
  }
</style>

<article class="card"></article>
```

## Using vmax

```html
<style>
  .card {
    border-radius: 100vmax;
  }
</style>

<div class="card"></div>
```

## Resources

- [Blobby shapes](https://9elements.github.io/fancy-border-radius)
- [Fancy Border Radius](https://9elements.github.io/fancy-border-radius)
