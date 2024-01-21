import Statex from './statex';

describe('Statex', () => {
  // can create a new instance of Statex with initial values
  it('should create a new instance of Statex with initial values', () => {
    const initialValues = { prop1: 'value1', prop2: 'value2' };
    const statex = new Statex(initialValues);

    expect(statex.get()).toEqual(initialValues);
  });

  // can subscribe to updates and receive new values
  it('should subscribe to updates and receive new values', () => {
    const statex = new Statex({ prop1: 'value1' });
    const subscriber = jest.fn();
    statex.subscribe(subscriber);
    statex.set({ prop1: 'value2' });
    expect(subscriber).toHaveBeenCalledWith({ prop1: 'value2' });
  });

  // can get the current value of the data
  it('should get the current value of the data', () => {
    const initialValues = { prop1: 'value1', prop2: 'value2' };
    const statex = new Statex(initialValues);
    expect(statex.get()).toEqual(initialValues);
  });

  // can get a specific property of the data
  it('should get a specific property of the data', () => {
    const initialValues = { prop1: 'value1', prop2: 'value2' };
    const statex = new Statex(initialValues);
    expect(statex.getProp('prop1')).toEqual('value1');
  });

  // can set a new value for the data and notify subscribers
  it('should set a new value for the data and notify subscribers', () => {
    const statex = new Statex({ prop1: 'value1' });
    const subscriber = jest.fn();
    statex.subscribe(subscriber);
    statex.set({ prop1: 'value2' });
    expect(statex.get()).toEqual({ prop1: 'value2' });
    expect(subscriber).toHaveBeenCalledWith({ prop1: 'value2' });
  });

  // can handle subscribing with the same function multiple times
  it('should handle subscribing with the same function multiple times', () => {
    const statex = new Statex({ prop1: 'value1' });
    const subscriber = jest.fn();
    statex.subscribe(subscriber);
    statex.subscribe(subscriber);
    statex.set({ prop1: 'value2' });
    expect(subscriber).toHaveBeenCalledTimes(1);
  });

  // can handle unsubscribing a function that was not subscribed
  it('should handle unsubscribing a function that was not subscribed', () => {
    const statex = new Statex({ prop1: 'value1' });
    const subscriber = jest.fn();
    const unsubscribe = statex.subscribe(subscriber);
    unsubscribe();
    statex.set({ prop1: 'value2' });
    expect(subscriber).not.toHaveBeenCalled();
  });
});
