const cloneTarget = <T extends object | any[]>(target: T): T =>
  (Array.isArray(target) ? [...target] : { ...target }) as T

export default cloneTarget
