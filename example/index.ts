import { observable, observe } from 'src/index'

class App {
  @observable
  protected array: any[] = [1, 2]

  @observable
  protected object: object = {
    a: 1,
    b: 2,
  }

  private runArray() {
    observe(this.array, array => {
      console.log('array', array)
    })

    observe(this.array, array => {
      console.log('array2', array)
    })

    this.array.push(3)
  }

  private runObject() {
    observe(this.object, object => {
      console.log('object', object)
    })

    observe(this.object, object => {
      console.log('object2', object)
    })

    // @ts-ignore
    this.object.c = 3
    // @ts-ignore
    delete this.object.a
  }

  public run() {
    this.runArray()
    this.runObject()
  }
}

new App().run()
