# Simple observer
[about](https://shbumba.github.io/simple-observer/)

## About ##

This is a small script that allows you to track changes in an array or object.
## How to use? ##

### Object Example ###

```typescript
import { observable, observe } from 'simple-observer'

class App {
  @observable
  protected observable: object = {
    a: 1,
    b: 2,
  }

  public run() {
    observe(this.observable, data => {
      console.log('event - 1', data)
    })

    observe(this.observable, data => {
      console.log('event - 2', data)
    })

    this.observable.c = 3

    delete this.observable.a
  }
}
```

### Array Example ###

```typescript
import { observable, observe } from 'simple-observer'

class App {
  @observable
  protected observable: any[] = [1, 2]

  public run() {
    observe(this.observable, data => {
      console.log('event - 1', data)
    })

    observe(this.observable, data => {
      console.log('event - 2', data)
    })

    this.observable.push(3)
  }
}

```