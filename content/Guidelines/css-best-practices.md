---
title:  "CSS Best Practices"
menu:
  main:
    parent: guidelines
weight: 52
---

## Theming

Theming is a way to use variables to reduce repetition and improve quality of life. A list of color variables for example, can be used as values for other semantic variables.

### Example
In variables.less we have this:
```html
@color-blue-primary: #006298;
@color-white: #ffffff;

@button-primary-bg: @color-blue-primary;
@button-primary-text: @color-white;

```

In practice, we would use it like this:

```css
.button_primary {
  background-color: @button-primary-bg;
  color: @button-primary-text;
}
```

Which allows us to simply change the value of `@button-primary-bg` when the theme requires a different color instead of finding all the places `@color-blue-primary` is used.

---

## Utility Classes

## Mixins

## Media Queries

## Feature Queries
