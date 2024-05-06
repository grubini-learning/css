# Recipes

## 1. Holy Grail

```html
<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .middle {
    display: flex;
    flex: 1;
  }
  .middle nav,
  .middle aside {
    flex: 1;
  }
  .middle main {
    flex: 3;
  }
</style>

<div class="wrapper">
  <header class="box">Header</header>
  <section class="middle">
    <nav class="box">Nav</nav>
    <main class="box">Main Content</main>
    <aside class="box">Ad unit</aside>
  </section>
  <footer class="box">Footer</footer>
</div>
```

## 2. Sticky Sidebar

```html
<style>
  .wrapper {
    display: flex;
  }

  nav {
    position: sticky;
    top: 0;
    height: fit-content;
  }

  main {
    flex: 1;
  }
</style>

<section class="wrapper">
  <nav class="box">
    <h2>Navigation</h2>
    <ul>
      <li>Section One</li>
      <li>Section Two</li>
    </ul>
  </nav>
  <main class="box">
    <p>This container contains random stuff to increase its height.</p>
    <img src="https://courses.joshwcomeau.com/cfj-mats/cat-300px.jpg" />
    <p>Normally, a blog post would exist in this container.</p>
    <img src="https://courses.joshwcomeau.com/cfj-mats/dog-one-300px.jpg" />
    <p>This container contains random stuff to increase its height.</p>
    <img src="https://courses.joshwcomeau.com/cfj-mats/cat-two-300px.jpg" />
    <p>Normally, a blog post would exist in this container.</p>
    <img src="https://courses.joshwcomeau.com/cfj-mats/dog-two-300px.jpg" />
  </main>
</section>
```
