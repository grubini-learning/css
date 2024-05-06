# Media-Query

Known as an _at-rule_ that behave like if statements

```css
@media (max-width: 400px) {
  .signup-button {
    font-size: 2rem;
  }
}
```

Apply at 400px or less

## Defaults

- allow us to merge rules from other viewport
- don't affect specificity.
  - only pays attention at the order that it comes in the file

## Media Queries and Units

**Should our media queries be affected by the user's chosen baseline font size?**
With pixel-based media queries, we stick with the desktop layout no matter what the user does with their default font size. When cranked to 32px, it means we wind up with a really cramped layout: the sidebar expands and fills half of the screen (since it uses a rem-based width).

When we use rem-based media queries, we flip to the mobile view (even though they're using a desktop-sized window). The large text has more room to breathe, and it's generally just a much better experience.
