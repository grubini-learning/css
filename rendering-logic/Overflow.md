# Overflow

- When the content spills outside the bounds of the parent.
- When we set overflow, a magical box that has vast space on the inside.
- Regardless of the type of overflow-x or -y, and all

## Defaults

- `overflow: visible`

## Properties

- `overflow`
- `overflow-x`: starts with the scrollbar, 15px
- `overflow-y`: starts with the scrollbar, 15px

## Values

- `scroll`
- `auto`: adds a scrollbar, only when its required
- `hidden`: Truncates anything beyond the boundary of the parent.
- `clip`: does not create a scroll container. Any contents that spills outside is made invisible
  - in some browsers if `border-radius` is set, it can force the clipping to happen in both directions
  - tabbing is still available on the hidden element by `overflow: clip`, but you don't know what you are selecting
  - _workaround_: create an outer wrapper that holds the overflow

### Scroll

- Hides the overflow and allows scrolling to see the rest of the content
- **Beware of scroll bars**: Different O/S and on a MAC if there is a Mice detected the scrollbar appears, but if just the trackpad it only appears when scrolling.

### Hidden

- Necessary for the ellipsis.
- My rule of thumb: Always add a comment when employing this declaration. Future-you will thank you.

## Scroll Containers

A portal to a pocket dimension

- horizontal scroll

```css
.horizontal.scroll {
  overflow-x: auto;
  white-space: nowrap;
}
```
