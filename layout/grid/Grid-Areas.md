# Grid Areas

Ability to name the regions of the grid

```css
.wrapper {
  diplay: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  grid-template-columns: 250px 1fr;
  grid-template-rows: 80px 1fr;
}

aside {
  grid-area: sidebar;
}
header {
  grid-area: header;
}
main {
  grid-area: main;
}
```

## Holy Grail

```html
<style>
  html,
  body {
    height: 100%;
  }
  /* TODO */
  .wrapper {
    display: grid;
    grid-template-columns: 200px 1fr 150px;
    grid-template-rows: 4rem 1fr 5rem;
    min-height: 100%;
    grid-template-areas:
      "header header header"
      "nav main aside"
      "footer footer footer";
  }

  header {
    grid-area: header;
  }
  nav {
    grid-area: nav;
  }
  main {
    grid-area: main;
  }
  aside {
    grid-area: aside;
  }
  footer {
    grid-area: footer;
  }
</style>

/* TODO */
<div class="wrapper">
  <header></header>
  <nav></nav>
  <main></main>
  <aside></aside>
  <footer></footer>
</div>
```
