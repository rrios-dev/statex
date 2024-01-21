import type { Subscriber } from './interfaces';

class Statex<V> {
  private data: V;
  private observers = new Set<Subscriber<V>>();

  constructor(initialValues: V) {
    this.data = initialValues;
  }

  public subscribe(fn: Subscriber<V>) {
    this.observers.add(fn);
    return () => {
      this.observers.delete(fn);
    };
  }

  public get() {
    return this.data;
  }

  public getProp<K extends keyof V>(key: K) {
    return this.data[key];
  }

  public updateObservers() {
    this.observers.forEach((observer) => {
      observer(this.data);
    });
  }

  public set(v: V) {
    this.data = v;
    this.updateObservers();
  }

  public setPartial(v: Partial<V>) {
    this.data = { ...this.data, ...v };
    this.updateObservers();
  }
}

export default Statex;
