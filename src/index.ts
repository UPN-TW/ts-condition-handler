type Handler = (predicate: any) => void
type Predicate = new () => any

export const conditionHandler = function (this: any, obj: any): any {
  let done = false

  const on = function (this: typeof conditionHandler, Class: Predicate, handler: Handler): typeof conditionHandler {
    if (done) return this

    if(obj instanceof Class) {
        handler(obj)
        done = true
    }

    return this
  }

  const fallback = function (this: typeof conditionHandler, handler: Handler): void {
    if (done) return

    handler(obj)
    done = true
    return
  }

  return {
    on,
    fallback,
  }
}
