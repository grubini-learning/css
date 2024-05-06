# Hidden

## Display: none

Cannot be clicked or focused. Takes it out of the DOM. Still hogs memory.

## Visibility: hidden

Clock of invisibility. It can be selectively undone by children.

## Opacity: 0

Aren't really hidden, buttons can still be clicked and focused.

## Accessibility

```html
<style>
  .visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }
</style>

<span class="visually-hidden">Help text</span>
```
