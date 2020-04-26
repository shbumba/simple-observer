const debounce = <A extends any[]>(fn: (...args: A) => void, timeOut = 250) => {
  let timer: number | undefined

  return function() {
    // @ts-ignore
    const context = this
    const ars = arguments

    if (timer !== undefined) {
      clearTimeout(timer)
    }

    timer = window.setTimeout(() => {
      fn.apply(context, (ars as unknown) as any)
    }, timeOut)
  } as (...args: A) => void
}

export default debounce
