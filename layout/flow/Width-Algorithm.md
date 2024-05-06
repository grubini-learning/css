# Width Algorithm

## Units

- Explicit
  - Pixels
- Relative
  - Percentages
  - Rems
- keywords
  - auto
  - fit-content
  - min-content
  - max-content

### Percentages

It looks up to be based on the parent element's content space.

### Min-Content

Shrink as much as you can based on child contents.
In this case, we wind up with a very narrow heading, because it chooses the smallest possible value for width that still contains each word. Whenever it encounters whitespace or a hyphenated word, it'll break it onto a new line.

### Max-Content

It never adds any line-breaks. The element's width will be the smallest value that contains the content, without breaking it up.

### Fit-Content

If that width can fit within the parent container, it behaves just like max-content, not adding any line-breaks.

If the content is too wide to fit in the parent, however, it adds line-breaks as-needed to ensure it never exceeds the available space.

## Constraints

```css
.box {
  width: 50%;
  min-width: 170px;
  max-width: 300px;
  margin: 0 auto;
  border: solid hotpink;
}
```
