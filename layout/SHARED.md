# Tips and Tricks

## Achieve covering all the viewports

- Set `min-height` to `100vh`, the issue is that for mobile it will account the whole screen and ignore the address bar.
- Set `html, body` to `100%`, then the parent container to match the height of the body.
