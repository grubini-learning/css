# Height Algorithms

```html
<style>
  .wrapper {
    min-height: 100%;
    border: solid;
  }
</style>

<section class="wrapper">
  <p>I'm not very tall!</p>
</section>
```

In other words, we have an impossible condition: we're telling the <section> to be a percentage of the <body>, and the <body> wants to base its size off of the <section>.

The default "height" behavior is to be as small as possible while fitting all of the element's content.

```html
<style>
  html,
  body {
    height: 100%;
  }

  .wrapper {
    min-height: 100%;
    border: solid;
  }
</style>

<section class="wrapper">
  <p>I'm not very tall!</p>
</section>
```

## Units

- Explicit
- Relative
- Keywords
  - min-height
