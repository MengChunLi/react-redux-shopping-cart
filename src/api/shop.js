/**
 * Mocking client-server processing
 */
import _products from './products.json'
import prod1 from './1.json'
import prod2 from './2.json'
import prod3 from './3.json'
import prod4 from './4.json'

const TIMEOUT = 100
const FILES = [prod1, prod2, prod3, prod4]

export default {
  getDetail: (productId, cb, timeout) => setTimeout(() => cb(FILES[productId - 1]), timeout || TIMEOUT),
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}