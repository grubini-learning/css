# Media Queries

Responsive mechanism that allows us to apply different CSS in different scenarios.

### Conditions

- `max-width`: the max width that the styles will apply
- `min-width`:
  - the min width where the styles will NOT apply
  - the styles in this block will apply when the vw is greater than the min-width

```css
@media (max-with: 300px) {
}
```

- Ex: If the window is between 0 and 300px wide, apply the CSS
