# Clamping values

This value works like the combination of, min-width, width, and max-width

## Consists of three values

- the minimum value
- the ideal value
- the maximum value

```css
.column {
  width: clamp(500px, 65%, 800px);
  max-width: 100%;
}

/* In this snippet, we are essentially applying two maximum widths: 800px and 100%.  */
/* Our .column element will never be larger than 800px or 100% of the available space. */
```

## Min and Max

- Min: evaluates which value is smaller
- Max: evaluates which value is bigger
