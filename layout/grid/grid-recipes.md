# Grid Recipes

## Two line center

```css
<style>
  .wrapper {
    display: grid;
    justify-content: center;
    align-content: center;
  }
</style>

<section class="wrapper">
  <div class="box"></div>
</section>
```

- If we set the value for `justify-content` and `align-content`, we can use `place-content`

## Sticky Grid

CSS grid is highly interoperable with other layouts

```css
. grid {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  --header-height: 5rem;
  isolation: isolate;
}

header {
  grid-area: header;
  position: sticky;
  z-index: 2;
  height: var(--header-height);
}

aside {
  grid-area: sidebar;
  position: relative;
  z-index: 1;
}

.sticky-aside {
  position: sticky;
  top: var(--header-height);
}

footer {
  grid-area: footer;
  position: relative;
  z-index: 2;
}
```

## Full Bleed

```css
.wrapper {
  --breathing-room: 16px;
  display: grid;
  grid-template-columns: 1fr, min(30ch, 100%), 1fr;
  padding-left: var(--breathing-room);
  padding-right: var(--breathing-room);
}

.wrapper > * {
  grid-column: 2;
}

.full-bleed {
    grid-column 1 / -1;
    margin-left: var(--breathing-room);
    margin-right: var(--breathing-room);
}
```
