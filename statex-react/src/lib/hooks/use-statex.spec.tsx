import Statex from '@rrios-dev/statex';
import { act, renderHook } from '@testing-library/react';
import useStatex from './use-statex';

const INITIAL_STATE = {
  test: true,
  child: {
    text: 'text',
  },
};

const state = new Statex(INITIAL_STATE);

beforeEach(() => {
  state.set(INITIAL_STATE);
});

describe('useStatex', () => {
  it('setPartial dispatch changes', () => {
    const { result } = renderHook(() => useStatex(state));
    expect(result.current).toEqual(INITIAL_STATE);
    act(() => {
      state.setPartial({ test: false });
    });

    expect(result.current).toEqual({ ...INITIAL_STATE, test: false });
  });

  it('set dispatch changes', () => {
    const { result } = renderHook(() => useStatex(state));
    expect(result.current).toEqual(INITIAL_STATE);
    const newState = { test: false, child: { text: 'prueba' } };
    act(() => {
      state.set(newState);
    });
    expect(result.current).toEqual(newState);
  });
});
