---
title:  "Buttons"
menu:
  main:
    parent: components
weight: 15
---

Buttons are used for actions a user can take on a page. Their visual design is intended to make them stand out against content to make it more apparent what actions are available to a user.

_We do not disable buttons._ Disabled buttons present accessibility issues and can confuse users as to how to enable them. So instead, we allow users to press any button and show a message if something must be done before that action can be taken.

---

## Primary
<button type="submit" href="#" class="button button_primary">Primary Button</button>
<br>
<br>
{{% tabs %}}
{{% tab HTML %}}
```html
 <button type="submit" href="#" class="button button_primary">Primary Button</button>
 ```
{{% /tab %}}

{{% tab LESS %}}
  ```CSS
  .button {
    border-radius: 2px;
    font-weight: 500;
    padding: 4px 16px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all .3s ease;

    &_primary {
      color: @color-white;
      background-color: @color-blue-primary;
      border: 2px @color-blue-primary solid;
      .box-shadow;

      &:hover {
        background-color: darken(@color-blue-primary, 10%);
        border: 2px darken(@color-blue-primary, 10%) solid;
        transition: all .3s ease;
      }
      &:active, &:visited, &:focus {
        background-color: lighten(@color-blue-primary, 10%);
        border: 2px lighten(@color-blue-primary, 10%) solid;
        transition: all .3s ease;
      }
    }
  }
  ```
{{% /tab %}}

{{% /tabs %}}

---

## Inverted
<button type="submit" href="#" class="button button_inverted">Inverted Button</button>
<br>
<br>
{{% tabs %}}
{{% tab HTML %}}
```html
 <button type="submit" href="#" class="button button_inverted">Inverted Button</button>
 ```
{{% /tab %}}

{{% tab LESS %}}
  ```CSS
  .button {
    ...
    &_inverted {
      color: @color-blue-primary;
      border: 2px solid @color-blue-primary;
      background-color: @color-white;
      .box-shadow;

      &:hover {
        background-color: darken(@color-white, 10%);
        border: 2px darken(@color-blue-primary, 10%) solid;
        color: darken(@color-blue-primary, 10%);
        transition: all .3s ease;
      }
      &:active, &:visited, &:focus {
        color: lighten(@color-blue-primary, 10%);
        border: 2px lighten(@color-blue-primary, 10%) solid;
        transition: all .3s ease;
      }
    }
  }
  ```
{{% /tab %}}

{{% /tabs %}}

---

## Accent
<button type="submit" href="#" class="button button_accent">Accent Button</button>
<br>
<br>
{{% tabs %}}
{{% tab HTML %}}
```html
 <button type="submit" href="#" class="button button_accent">Accent Button</button>
 ```
{{% /tab %}}

{{% tab LESS %}}
  ```CSS
  .button {
    ...
    &_accent {
      color: @color-white;
      background-color: @color-orange;
      border: 2px @color-orange solid;
      .box-shadow;

      &:hover {
        background-color: darken(@color-orange, 10%);
        border: 2px darken(@color-orange, 10%) solid;
        transition: all .3s ease;
      }
      &:active, &:visited, &:focus {
        background-color: lighten(@color-orange, 10%);
        border: 2px lighten(@color-orange, 10%) solid;
        transition: all .3s ease;
      }
    }
  }
  ```
{{% /tab %}}

{{% /tabs %}}

---

## Text+Icon
<button type="submit" href="#" class="button button_primary-icon"><i class="fa fa-chevron-left"></i> Button</button>
<br>
<br>
{{% tabs %}}
{{% tab HTML %}}
```html
 <button type="submit" href="#" class="button button_primary-icon"><i class="fa fa-chevron-left"></i> Button</button>
 ```
{{% /tab %}}

{{% tab LESS %}}
  ```CSS
  .button {
    ...
    &_primary-icon {
      color: @color-white;
      background-color: @color-blue-primary;
      border: 2px @color-blue-primary solid;
      .box-shadow;

      &:hover {
        background-color: darken(@color-blue-primary, 10%);
        border: 2px darken(@color-blue-primary, 10%) solid;
        transition: all .3s ease;
      }
      &:active, &:visited, &:focus {
        background-color: lighten(@color-blue-primary, 10%);
        border: 2px lighten(@color-blue-primary, 10%) solid;
        transition: all .3s ease;
      }
    }
  }
  ```
{{% /tab %}}

{{% /tabs %}}

---

## Icon Only
<button type="submit" href="#" class="button button_circle-icon"><i class="fa fa-chevron-left"></i></button>
<br>
<br>
{{% tabs %}}
{{% tab HTML %}}
```html
 <button type="submit" href="#" class="button button_circle-icon"><i class="fa fa-chevron-left"></i></button>
 ```
{{% /tab %}}

{{% tab LESS %}}
  ```CSS
  .button_circle-icon {
    cursor: pointer;
    .box-shadow;
    text-transform: uppercase;
    transition: all .3s ease;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    font-size: 1.5em;
    padding: 0;
    border: 2px solid @color-white;

    svg {
      margin-left: -3px;
    }

    &:hover {
      background-color: darken(@color-white, 10%);
      border: 2px darken(@color-white, 10%) solid;
      transition: all .3s ease;
    }
  }
  ```
{{% /tab %}}

{{% /tabs %}}

---

## Link Button
<button type="submit" href="#" class="button button_link">Link Button</button>
<br>
<br>
{{% tabs %}}
{{% tab HTML %}}
```html
 <button type="submit" href="#" class="button button_circle-icon"></button>
 ```
{{% /tab %}}

{{% tab LESS %}}
  ```CSS
  .button {
    ...
    &_link {
      color: @color-blue-primary;
      background-color: @color-white;
      border: 2px @color-white solid;

      &:hover {
        color: darken(@color-blue-primary, 10%);
        text-decoration: underline;
        transition: all .3s ease;
      }
    }
  }
  ```
{{% /tab %}}

{{% /tabs %}}
