/**
 * Convert a number to an ms string
 */
export const numToMs = (num) => `${num}ms`

/**
 * Convert a number to a px string
 */
export const numToPx = (num) => `${num}px`

/**
 * Convert camelCase to kebab-case
 */
const camelToKebab = (str) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  )

/**
 * Convert a JS object into `--` prefixed css custom properties.
 * Optionally pass a second param for normal styles
 */
export function cssProps(props) {
  const result = {}
  const keys = Object.keys(props)

  for (const key of keys) {
    let value = props[key]

    if (typeof value === 'number' && key === 'delay') {
      value = numToMs(value)
    }

    if (typeof value === 'number' && key !== 'opacity') {
      value = numToPx(value)
    }

    result[`--${camelToKebab(key)}`] = value
  }

  return { ...result }
}
