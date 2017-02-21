/**
 * Mocking client-server processing
 */
import _products from './products.json'
import prod1 from './1.json'
import prod2 from './2.json'
import prod3 from './3.json'

const TIMEOUT = 100

export default {
  getDetail: (productId, cb, timeout) => setTimeout(() => cb(prod1), timeout || TIMEOUT),
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}