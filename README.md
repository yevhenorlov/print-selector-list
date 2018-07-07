# print-selector-list

A helper function that accepts a query selector and returns a list of
selectors as single-line-separated, commented-out lines of CSS. 

Most useful for styling components if you use shallow BEM-like selectors:

```html
<section class="article-section">
  <h1 class="article-section__heading">Article heading</h1>
  <p class="article-section__body">
    Lorem exercitationem minus vel aperiam similique doloribus Assumenda nostrum quasi labore voluptatum veniam esse Exercitationem laborum eaque ex doloremque temporibus delectus Quibusdam voluptatem aut officia ab laudantium, doloribus dolore quod.
    <div class="article-section__body__share-article__wrapper">
      <button class="article-section__body__share-article__button">
        <app-icon class="article-section__body__share-article__button__icon"/
        >
        Share article
      </button>
    </div>
  </p>
</section>
```

```javascript
import printSelectorList from 'print-selector-list'

printSelectorList('.article-section')

/* outputs:
 * 
 * "
 * // .article-section__heading {}
 * 
 * // .article-section__body {}
 * 
 * // .article-section__body__share-article__wrapper {}
 * 
 * // .article-section__body__share-article__button {}
 * 
 * // .article-section__body__share-article__button__icon {}
 * "
 */
```

## Options

printSelectorList accepts 2 attributes:

- **selector** *\[String\]* (mandatory): passed into `document.querySelector`, usually it's the component's wrapper class

- **logToConsole** *\[Boolean\]* (optional): if set to `true`, logs output to console. Default: `false`.
