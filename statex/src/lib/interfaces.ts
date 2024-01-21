export type Subscriber<V> = (v: V) => void;
export type Unsubscriber = () => void;

export interface AtomSubscriber<V> {
  get: () => V;
  getProp: <K extends keyof V>(key: K) => V[K];
  set: (v: V) => void;
  setPartial: (v: Partial<V>) => void;
  subscribe: (fn: Subscriber<V>) => Unsubscriber;
}
