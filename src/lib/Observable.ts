import debounce from '../utils/debounce'
import cloneTarget from '../utils/cloneTarget'
import { observerMap } from '../'

class Observable<T extends { [key in PropertyKey]: any } | any[]> {
  private proxy: InstanceType<typeof Proxy>

  public constructor(target: T) {
    this.proxy = new Proxy(cloneTarget(target), {
      set: this.set,
      deleteProperty: this.deleteProperty,
    })
  }

  private handle = debounce((newValue: T, prevValue: T) => {
    const handlers = observerMap.get(this.proxy) || []

    handlers.forEach(handler => handler(newValue, prevValue))
  }, 25)

  private set = (target: T, propKey: PropertyKey, value: any) => {
    const prevValue = cloneTarget(target)

    target[propKey as any] = value

    this.handle(target, prevValue)

    return true
  }

  private deleteProperty = (target: T, propKey: PropertyKey) => {
    const prevValue = cloneTarget(target)

    delete target[propKey as any]

    this.handle(target, prevValue)

    return true
  }

  public getObservable() {
    return this.proxy
  }
}

export default Observable
