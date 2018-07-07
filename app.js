import logToFile from 'log-to-file'

function getComponentClassSelectorList(selector) {
  if (typeof selector !== 'string') {
    throw new TypeError('Attribute must be a string')
  }
  const component = document.querySelector(selector)
  const descendants = Array.prototype.slice.call(
    component.querySelectorAll('*'),
    0
  )
  const classSelectorList = descendants
    .map(el => {
      if (!el.classList.length) return
      return `// .${el.classList} {}`
    })
    .filter(el => typeof el !== 'undefined')
  return classSelectorList
}

export function printSelectorList(selector, path = './selector-list.css') {
  if (!selector) throw new TypeError('selector argument is required')
  const selectorList = getComponentClassSelectorList(selector)
  if (path) {
    logToFile(selectorList, path)
    console.log(`selector list saved to ${path}.`)
  } else {
    JSON.stringify(selectorList, null, 2)
  }
  return selectorList
}
