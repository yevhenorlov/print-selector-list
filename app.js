function printSelectorList(selector, logToConsole) {
  const _logToConsole = !!logToConsole || false
  if (!selector) throw new TypeError('Selector argument is required')
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
      return `\n// .${el.classList[0]} {}\n`
    })
    .filter(el => typeof el !== 'undefined')
    .join('')
  if (_logToConsole) console.log(classSelectorList)
  return classSelectorList
}
module.exports = printSelectorList
