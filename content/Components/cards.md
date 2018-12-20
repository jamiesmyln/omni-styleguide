---
title:  "Cards"
menu:
  main:
    parent: components
weight: 15
---
Cards are a way to visually separate content, must always be on the Light Gray background `@color-gray-light`, and must always be accompanied by other cards (never use a single card alone.)

---

## Vertical Card
<div class="card card_vertical-image">
  <div class="image-container"></div>
  <div class="card-content">
    <div class="category-header">Category Header</div>
    <a href="#" class="article-title">Article Title</a>
    <div class="snippet-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias sunt deserunt facilis quod dignissimos exercitationem, modi, ratione quidem quis, rem voluptas inventore optio repellat similique incidunt! Illo non dolores quis.</div>
  </div>
</div>
<br>
<br>
{{% tabs %}}
{{% tab HTML %}}
```html
<div class="card card_vertical-image">
 <div class="image-container"></div>
 <div class="card-content">
   <div class="category-header">Category Header</div>
   <a href="#" class="article-title">Article Title</a>
   <div class="snippet-text">
     ...
   </div>
 </div>
</div>
 ```
{{% /tab %}}

{{% tab LESS %}}
  ```CSS
  .card {
    background-color: @color-white;
    .box-shadow;
    border-radius: 5px;

    .card-content {
      padding: 1em;
    }
    .category-header {
      text-transform: uppercase;
      font-weight: 600;
      font-size: .8em;
      margin-bottom: 10px;
    }
    .article-title {
      color: @color-blue-primary;
      text-decoration: none;
      margin-bottom: 5px;
    }
    .snippet-text {
      font-size: .7em;
      margin-top: 5px;
    }
    &_vertical-image {
      max-width: 350px;
      .image-container {
        background: url('../images/kitty.jpg') no-repeat;
        background-size: cover;
        min-height: 200px;
        border-radius: 5px 5px 0 0;
      }
    }
  }
  ```
{{% /tab %}}

{{% /tabs %}}

---

## Horizontal Card
<div class="card card_horizontal-image">
  <div class="image-container"></div>
  <div class="card-content">
    <div class="category-header">Category Header</div>
    <a href="#" class="article-title">Article Title</a>
    <div class="snippet-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias sunt deserunt facilis quod dignissimos exercitationem, modi, ratione quidem quis, rem voluptas inventore optio repellat similique incidunt! Illo non dolores quis.</div>
  </div>
</div>
<br>
<br>
{{% tabs %}}
{{% tab HTML %}}
```html
<div class="card card_horizontal-image">
 <div class="image-container"></div>
 <div class="card-content">
   <div class="category-header">Category Header</div>
   <a href="#" class="article-title">Article Title</a>
   <div class="snippet-text">
     ...
   </div>
 </div>
</div>
 ```
{{% /tab %}}

{{% tab LESS %}}
  ```CSS
  .card {
    ...

    &_horizontal-image {
      max-width: 450px;
      display: grid;
      grid-template-columns: 200px auto;

      .image-container {
        background: url('../images/deer.jpg') no-repeat;
        background-size: cover;
        display: inline-flex;
        border-radius: 5px 0 0 5px;
      }
    }
  }
  ```
{{% /tab %}}

{{% /tabs %}}

---

## Text Card
<div class="card card_text">
  <div class="card-content">
    <div class="category-header">Category Header</div>
    <a href="#" class="article-title">Article Title</a>
    <div class="snippet-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias sunt deserunt facilis quod dignissimos exercitationem, modi, ratione quidem quis, rem voluptas inventore optio repellat similique incidunt! Illo non dolores quis.</div>
  </div>
</div>
<br>
<br>
{{% tabs %}}
{{% tab HTML %}}
```html
<div class="card card_text">
 <div class="card-content">
   <div class="category-header">Category Header</div>
   <a href="#" class="article-title">Article Title</a>
   <div class="snippet-text">
     ...
   </div>
 </div>
</div>
 ```
{{% /tab %}}

{{% tab LESS %}}
  ```CSS
  .card {
    ...

    &_text {
      max-width: 450px;
    }
  }
  ```
{{% /tab %}}

{{% /tabs %}}

---

## Color Block Card
<div class="card card_color-block">
  <div class="card-header card-header--purple">
    <div class="title">Color Block Card</div>
  </div>
  <div class="card-subheader card-subheader--purple">
    <div class="subtitle">Subtitle</div>
  </div>
  <div class="card-content">
    <input type="radio" id="pub-1" name="sample" checked />
    <label for="pub-1">Publication 1</label>
    <br>
    <input type="radio" id="pub-2" name="sample" />
    <label for="pub-2">Publication 2</label>
    <br>
    <input type="radio" id="pub-3" name="sample" />
    <label for="pub-3">Publication 3</label>
  </div>
</div>
<br>
<br>
{{% tabs %}}
{{% tab HTML %}}
```html
<div class="card card_color-block">
 <div class="card-header card-header--purple">
   <div class="title">Color Block Card</div>
 </div>
 <div class="card-subheader card-subheader--purple">
   <div class="subtitle">Subtitle</div>
 </div>
 <div class="card-content">
   ...
 </div>
</div>
 ```
{{% /tab %}}

{{% tab LESS %}}
  ```CSS
  .card {
    ...

    &_color-block {
      .card-header {
        border-radius: 5px 5px 0 0;
        padding: 10px 20px;
        &--purple {
          background-color: @color-purple;
          color: @color-white;
        }
      }
      .card-subheader {
        padding: 10px 20px;
        font-size: .8em;
        &--purple {
          background-color: @color-purple-30;
        }
      }
    }
  }
  ```
{{% /tab %}}

{{% /tabs %}}

---

## Tiles
<div class="card card_tile">
  <div class="card_tile-footer card_tile-footer--blue">
    <span class="title">Title</span>
    <span class="date">Date</span>
  </div>
</div>
<br>
<br>
{{% tabs %}}
{{% tab HTML %}}
```html
<div class="card card_tile">
 <div class="card_tile-footer card_tile-footer--blue">
   <span class="title">Title</span>
   <span class="date">Date</span>
 </div>
</div>
 ```
{{% /tab %}}

{{% tab LESS %}}
  ```CSS
  .card {
    ...

    &_tile {
      background: url('../images/cookies.jpg') no-repeat;
      background-size: cover;
      background-position: center;
      height: 200px;
      width: 150px;
      display: flex;

      &-footer {
        flex-flow: row;
        align-self: flex-end;
        width: 100%;
        border-radius: 0 0 5px 5px;
        padding: 5px 10px;

        &--blue {
          color: @color-white;
          background-color: @color-blue-dark;
        }
        .title {
          text-transform: uppercase;
          font-size: .8em;
          display: flex;
        }
        .date {
          font-size: .7em;
          font-weight: 200;
          display: flex;
        }
      }
    }
  }
  ```
{{% /tab %}}

{{% /tabs %}}
