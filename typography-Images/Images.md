# Images

Known as a "replacement element"

## Default

- images are inline
- can be given a height and width
- come with their own size based on the dimensions of the image
- they have an intrinsic aspect ratio
- fill: choose to fill the available space

## Priorities

We can only ever pick two

- aspect ratio is preserved
- we are not loosing any image data
- fill the available space

## Behaviors

- if we only supply width or height the other one scales
- if we provide both width and height, and it does match the aspect ratio, then the image gets stretched like a sock

## Required attributes

- src
- alt: conveys the semantic meaning to te user
  - empty alt, tells screen readers to ignore it
- resources for good alt texts
  - [How to design great alt texts](https://www.deque.com/blog/great-alt-text-introduction/)
  - [Alternative text](https://webaim.org/techniques/alttext)

## Background-image

Mean to be hung behind the content, for purely aesthetical purposes

## Image Fit `object-fit`

- `fill`: choose to fill the available space
- `contain`: preserves aspect ratio, but sacrifices filling the entire space
- `cover`: preserves aspect ratio, but looses image data (cropped)
- `none`: scales image to be its natural size, but keeps the <img> tag the size specified (zoomed in)

## Object position `object-position`

Takes two numbers, horizontal and vertical offset

- browsers that don't support

```css
   .padding-hack {
     /* Equivalent to `aspect-ratio: 2 / 1` */
     height: 0px;
     padding-bottom: 50%;
   }

.padding-hack-other {
/_ Equivalent to `aspect-ratio: 5 / 7` _/
height: 0px;
padding-bottom: calc(7 / 5 \* 100%);
}

img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  @supports (aspect-ratio: 1 / 1) {
    img {
      height: revert;
      aspect-ratio: 1 / 1;
    }
  }
```

- percentages in padding always refer to width

## Aspect Ratio

Scale images proportionally at a prescribed `aspect-ratio`

- property takes two slash separated numbers
  - 2 / 1: the image will be 2 times wider as it is tall

## Images and Flexbox

Use a wrapper

## SrcSet

Ability to provide multiple dimension of images that depend open the viewport that they are seen in. Should still use `src` to provide a default

```css
<img
  alt=""
  src="https://courses.joshwcomeau.com/cfj-mats/responsive-diamond.png"
  srcset="
    https://courses.joshwcomeau.com/cfj-mats/responsive-diamond.png 1x,
    https://courses.joshwcomeau.com/cfj-mats/responsive-diamond@2x.png 2x,
    https://courses.joshwcomeau.com/cfj-mats/responsive-diamond@3x.png 3x
  "
/>
```

- A different way to solve the same problem
  - The order matters: When the browser finds a match, it will download the image from the server and show it to the user. We want our smallest files (AVIF) to be on top.

```html
<picture>
  <source
    srcset="
      https://courses.joshwcomeau.com/cfj-mats/responsive-diamond.png    1x,
      https://courses.joshwcomeau.com/cfj-mats/responsive-diamond@2x.png 2x,
      https://courses.joshwcomeau.com/cfj-mats/responsive-diamond@3x.png 3x
    "
  />
  <img
    alt=""
    src="https://courses.joshwcomeau.com/cfj-mats/responsive-diamond.png"
  />
</picture>
```

<picture> allows us to use modern image formats in a safe way, by providing fallbacks for other browsers.
_.avif format_: a fascinating new image format. It creates dramatically smaller images; in this example, the .avif version of our 3x image is 75% smaller than the .png!

## Background-repeat

- repeat: image will be tiled side-by-side, top-to-bottom

- round: will scale the image up or down, to avoid having the image cut off at the bottom or the right. It preserves the aspect ratio.

- space: won't tweak the size of the image. Instead, it'll leave gaps between the images.

[gradients](https://www.magicpattern.design/tools/css-backgrounds)
