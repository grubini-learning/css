# Facts

## Mobile

- Devices have a pixelRatio that can be accessed in javascript with `window.devicePixelRatio`
  - this number is the ratio between the physical LED pixels on the device and the "theoretical" pixels we use in CSS

## Magical <meta> tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

- `width=device-width`: instructs the browser to match the device's width
- `initial-scale=1`: states that we will start at 1x zoom
- min and max scale set on this tag can limit or disable the zoom

## Mobile testing

- check our websites on mobile devices
- use a low end Android phone as daily driver
- Access localhost with a tunneling tool such as"
  - [ngrok](https://ngrok.com/)
  - [localtunnel](https://theboroer.github.io/localtunnel-www/)
  - [serveo](https://github.com/u1i/tools/blob/master/serveo.md)
- Debug on the device
  - [Eruda](https://github.com/liriliri/eruda)
- IOS enable remote debugging in the setting
  - https://webkit.org/web-inspector/enabling-web-inspector/#ios-device
