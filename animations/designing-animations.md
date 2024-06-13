# Designing Animations

## Types

1. Transition change
2. Supplement adds or removing information, without changing their location or task
3. Feedback, helps user understand how the application responded
4. Demonstrations for education
5. Decorations are aesthetic and don't affect the information of the page

- Which of this categories does it fit into? How does it help the user?

## Animation duration

If its too quick, its disorienting, too slow and its too long.
**General acceptable range is 200 - 500ms**

## Action driven

These are animations in terms of states and we use transition to animate these changes

- Preferred setting by Josh
  - enter duration: 500ms
  - enter timing function: ease-out
  - exit duration: 250ms
  - exit timing function: ease-in

```html
<style>
  .button {
    /* Exit animations */
    transition: transform 500ms;
  }
  .button:hover {
    transform: scale(1.1);

    /* Enter animation */
    transition: transform 150ms;
  }
</style>

<button class="button">Hello World</button>
```

```html
<style>
  .front {
    transform: translateY(-4px);
    transition: transform 500ms;
  }

  .pushable:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms;
  }

  .pushable:active .front {
    transform: translateY(-2px);
    transition: transform 50ms;
  }

  .pushable {
    background: hsl(340deg 100% 32%);
    border: none;
    border-radius: 12px;
    padding: 0;
    cursor: pointer;
  }
  .front {
    display: block;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.25rem;
    background: hsl(345deg 100% 47%);
    color: white;
  }
</style>

<button class="pushable">
  <span class="front"> Push me </span>
</button>
```
