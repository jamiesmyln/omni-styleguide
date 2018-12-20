---
title:  "CSS Style Guide"
menu:
  main:
    parent: guidelines
weight: 16
---
We follow a slightly modified version of [airbnb's style guide.](https://github.com/airbnb/css)

## Only Use Classes
IDs are not reusable and add unnecessary weight to the hierarchy. Elements are not specific enough.

### Bad
This has a weight of 1 ID, 1 class, and 1 element which will require an equal amount of the same items to override.

`#block .element a`
```CSS
#block {
  .element {
    a {
      stuff
    }
  }
}
```

### Good
This has a weight of 1 class. We know exactly what each part of the class is doing and where to find it.

`.block_element--modifier`
```CSS
.block {
  //block styling

  &_element {
    //element styling

    &--modifier {
      //modifier styling
    }
  }
}
```

---

## Formatting
- Use soft tabs (2 spaces) for indentation.
- Prefer dashes over camelCasing in class names.
- Do not use ID selectors.
- When using multiple selectors in a rule declaration, give each selector its own line.
- Put a space before the opening brace { in rule declarations.
- In properties, put a space after, but not before, the : character.
- Put closing braces } of rule declarations on a new line.
- Put blank lines between rule declarations.

### Bad
```CSS
.avatar{
    border-radius:50%;
    border:2px solid white; }
.no, .nope, .not_good {
    // ...
}
#lol-no {
  // ...
}
```
### Good
```CSS
.avatar {
  border-radius: 50%;
  border: 2px solid white;
}

.one,
.selector,
.per-line {
  // ...
}
```

---

## Comments
- Prefer line comments (// in LESS-land) to block comments.
- Prefer comments on their own line. Avoid end-of-line comments.
- Write detailed comments for code that isn't self-documenting:
  - Uses of z-index
  - Compatibility or browser-specific hacks

---

## OOCSS and BEM
We encourage some combination of OOCSS and BEM for these reasons:

- It helps create clear, strict relationships between CSS and HTML
- It helps us create reusable, composable components
- It allows for less nesting and lower specificity
- It helps in building scalable stylesheets

**OOCSS**, or “Object Oriented CSS”, is an approach for writing CSS that encourages you to think about your stylesheets as a collection of “objects”: reusable, repeatable snippets that can be used independently throughout a website.

- Nicole Sullivan's [OOCSS wiki](https://github.com/stubbornella/oocss/wiki)
- Smashing Magazine's [Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)


**BEM**, or “Block-Element-Modifier”, is a naming convention for classes in HTML and CSS. It was originally developed by Yandex with large codebases and scalability in mind, and can serve as a solid set of guidelines for implementing OOCSS.

- CSS Trick's [BEM 101](https://css-tricks.com/bem-101/)
- Harry Roberts' [introduction to BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

We recommend a variant of BEM with PascalCased “blocks”, which works particularly well when combined with components (e.g. React). Underscores and dashes are still used for modifiers and children.

### Example
```JavaScript
// ListingCard.jsx
function ListingCard() {
  return (
    <article class="ListingCard ListingCard--featured">

      <h1 class="ListingCard__title">Adorable 2BR in the sunny Mission</h1>

      <div class="ListingCard__content">
        <p>Vestibulum id ligula porta felis euismod semper.</p>
      </div>

    </article>
  );
}
```
```CSS
/* ListingCard.css */
.ListingCard { }
.ListingCard--featured { }
.ListingCard__title { }
.ListingCard__content { }
```
- `.ListingCard` is the “block” and represents the higher-level component
- `.ListingCard__title` is an “element” and represents a descendant of .ListingCard that helps compose the block as a whole.
- `.ListingCard--featured` is a “modifier” and represents a different state or variation on the .ListingCard block.

---

## ID selectors
While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an unnecessarily high level of [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) to your rule declarations, and they are not reusable.

For more on this subject, read [CSS Wizardry's article](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/) on dealing with specificity.

---

## JavaScript hooks
Avoid binding to the same class in both your CSS and JavaScript. Conflating the two often leads to, at a minimum, time wasted during refactoring when a developer must cross-reference each class they are changing, and at its worst, developers being afraid to make changes for fear of breaking functionality.

We recommend creating JavaScript-specific classes to bind to, prefixed with `.js-`:

```HTML
<button class="btn btn-primary js-request-to-book">Request to Book</button>
```

---

## Border
Use `0` instead of `none` to specify that a style has no border.

### Bad
```CSS
.foo {
  border: none;
}
```

### Good
```CSS
.foo {
  border: 0;
}
```
---

## Variables
Prefer dash-cased variable names (e.g. `@my-variable`) over camelCased or snake_cased variable names. It is acceptable to prefix variable names that are intended to be used only within the same file with an underscore (e.g. `@_my-variable`).

Variables should be listed at the top of a page and each section should have a comment for its intended use.

---

## Mixins
Mixins should be used to DRY up your code, add clarity, or abstract complexity--in much the same way as well-named functions. Mixins that accept no arguments can be useful for this, but note that if you are not compressing your payload (e.g. gzip), this may contribute to unnecessary code duplication in the resulting styles.

---

## Extend directive
@extend should be avoided because it has unintuitive and potentially dangerous behavior, especially when used with nested selectors. Even extending top-level placeholder selectors can cause problems if the order of selectors ends up changing later (e.g. if they are in other files and the order the files are loaded shifts). Gzipping should handle most of the savings you would have gained by using @extend, and you can DRY up your stylesheets nicely with mixins.

---

## Nested selectors
Do not nest selectors more than three levels deep!

```CSS
.page-container {
  .content {
    .profile {
      // STOP!
    }
  }
}
```
When selectors become this long, you're likely writing CSS that is:

- Strongly coupled to the HTML (fragile) —OR—
- Overly specific (powerful) —OR—
- Not reusable

Again: **never nest ID selectors!**

If you must use an ID selector in the first place (and you should really try not to), they should never be nested. If you find yourself doing this, you need to revisit your markup, or figure out why such strong specificity is needed. If you are writing well formed HTML and CSS, you should never need to do this.

---
