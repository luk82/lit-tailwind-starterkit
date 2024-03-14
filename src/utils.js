/**
 * Shuffle array in place
 * @param {Array} array
 * @returns {Array}
 * @example shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
 */
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Randomize array length
 * @param {Array} array
 * @returns {Array}
 * @example randomizeArrayLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
 */
export function randomizeArrayLength(array) {
  const length = Math.floor(Math.random() * (array.length + 1));
  return array.slice(0, length);
}

/**
 * Dispatch event
 * @param {Object} data
 * @param {HTMLElement} element
 * @returns {void}
 * @example dispatchEvent({eventName: 'search', value: 'phrase', page: 2})
 */
export function dispatchCustomEvent(data, element) {
  const event = new CustomEvent('my-event', {
    bubbles: true,
    composed: true,
    detail: data,
  });

  element.dispatchEvent(event);
}

/**
 *
 * @param {Number} price
 * @param {String} currency
 * @returns
 */
export function formatPrice(price, currency) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
