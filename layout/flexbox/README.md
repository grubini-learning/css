# Flexbox

Control the distribution of space along a single axis. Wether items grow or shrink, wether they line wrap, column or row.

It affects the children of the flexbox container.

## Important

- **width and height are not hard rules, there are more like suggestions**

- shorthand

  - `flex-grow` | `flex-shrink` | `flex-basis`
  - default: 1 0 1

- **positioned flexbox**: if an item is conflicting with positioned layout, the latter always wins.

```jsx
<style>
  .row {
    display: flex;
  }

  .help-btn {
    flex: 1;
    position: fixed;
    right: 0;
    bottom: 0;
  }
</style>

<section class="row">
  <main>
    <!-- Stuff here -->
  </main>
  <div class="help-btn"></div>
</section>
```

- **sticky and relative position are compatible**

- **margin-collapse** is exclusive to flow layout

- **flexbox also supports z-index**
