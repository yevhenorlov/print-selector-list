# print-selector-list

A helper function that accepts a query selector and returns a list of
selectors as single-line-separated, commented-out lines of CSS. 

## Install

```
npm install --save-dev print-selector-list
```

## Usage

Most useful for styling components if you use shallow BEM-like selectors:

```html
<section class="article-section">
  <h1 class="article-section__heading">Article heading</h1>
  <article class="article-section__body">
    Lorem exercitationem minus vel aperiam similique doloribus Assumenda nostrum quasi labore voluptatum veniam esse Exercitationem laborum eaque ex doloremque temporibus delectus Quibusdam voluptatem aut officia ab laudantium, doloribus dolore quod.
    <div class="article-section__body__share-article__wrapper">
      <button class="article-section__body__share-article__button btn btn--main">
        <app-icon class="article-section__body__share-article__button__icon"/>
        Share article
      </button>
    </div>
  </article>
</section>
```

```javascript
import printSelectorList from 'print-selector-list'

printSelectorList('.article-section')

/* outputs:
 
"
// .article-section__heading {}

// .article-section__body {}

// .article-section__body__share-article__wrapper {}

// .article-section__body__share-article__button {}

// .article-section__body__share-article__button__icon {}
"
*/
```

Note that printSelectorList returns only the first class in each element's list,
which is why it is important to list unique classes first, and generic ones
after that.

```html
<!-- DO: -->

<button class="article-section__body__share-article__button btn btn--main"></button>

<!-- DON'T: -->

<button class="btn btn--main article-section__body__share-article__button></button>

```

## Options

printSelectorList accepts 2 attributes:

- **selector** *\[String\]* (mandatory): passed into `document.querySelector` (usually it's the component's wrapper class);

- **logToConsole** *\[Boolean\]* (optional): if set to `true`, logs output to console. Default: `false`.
