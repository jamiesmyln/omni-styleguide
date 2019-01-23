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

## Mixins

Mixins should be used to DRY up code. If you find yourself writing the same couple rules more than twice it's probably a good candidate for a mixin. Also, make use of parameters when writing mixins.

---

## Media Queries

There are so many devices now that the breakpoints we used to use don't make sense to use for the modern web. Instead, we should focus on mobile first - the smallest viewport of our software with the essential features - and add more as screen size increases. You can read more about this methodology in [David Gilbertson's article.](https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862)

```css
// Responsive Mixins
.for-phone-only(@content) {
	@media (max-width: 599px) {
		@content();
	}
}

.for-tablet-portrait-up(@content) {
	@media (min-width: 600px) {
		@content();
	}
}

.for-tablet-portrait-down(@content) {
	@media (max-width: 768px) {
		@content();
	}
}

.for-tablet-landscape-down(@content) {
	@media (max-width: 1024px) {
		@content();
	}
}

.for-tablet-landscape-up(@content) {
	@media (min-width: 900px) {
		@content();
	}
}

.for-desktop-up(@content) {
	@media (min-width: 1200px) {
		@content();
	}
}

.for-big-desktop-up(@content) {
	@media (min-width: 1800px) {
		@content();
	}
}

.for-Incontext-tablet(@content) {
	@media (min-width: 600px) and (max-width: 1026px) {
		@content();
	}
}

// usage
.mixin-example {
	padding: 10px;

	.for-desktop-up({ padding: 20px; });
}
```

---

## Feature Queries

Feature queries are the safest way to use new CSS features. Some things to note:

- IE 11 does not support feature queries and will ignore anything inside of them completely.
- Feature queries can take arguments in the support statement `not` `or` `and`.
- The fallback CSS should be placed above the query since the browser will apply the queried code over the fallback code if it is supported.

### Example

```css
@supports (display: grid) {
  div {
    display: grid;
  }
}
```
