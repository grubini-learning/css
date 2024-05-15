# Grid Quirks

1. Row Limit
   - In Chrome grids are limited to 100,000 rows
2. Margin collapse on grid children does NOT work
3. Grid child can use `z-index` without it being a positioned layout
4. `fr` unit takes presedence on `grid-template-rows` over giving a specific height to a specific row

## Resources

- [virtualization](https://github.com/bvaughn/react-window)
