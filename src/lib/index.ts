import Observable from './Observable'

type ObserveHandler = <T extends object | any[]>(
  newValue: T,
  prevValue: T,
) => void

export const observerMap = new Map<
  InstanceType<typeof Proxy>,
  ObserveHandler[]
>()

export const observable = <T extends { [key in PropertyKey]: any }>(
  target: T,
  key: PropertyKey,
) => {
  let val = target[key as any]

  const getter = () => val

  const setter = (next: object) => {
    if (val === undefined) {
      val = new Observable(next).getObservable()
      return
    }

    Object.keys(val).forEach(k => delete val[k])
    Object.assign(val, next)
  }

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  })
}

export const observe = (
  proxy: InstanceType<typeof Proxy>,
  callback: ObserveHandler,
) => {
  const observeHandlers = observerMap.get(proxy) || []

  observerMap.set(proxy, observeHandlers.concat(callback))
}

export const stopObserve = (
  proxy: InstanceType<typeof Proxy>,
  callback: ObserveHandler,
) => {
  const observeHandlers = observerMap.get(proxy)

  if (!observeHandlers) {
    return
  }

  observerMap.set(
    proxy,
    observeHandlers.filter(h => h !== callback),
  )
}
