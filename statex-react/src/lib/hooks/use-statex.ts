import type { AtomSubscriber } from '@rrios-dev/statex';
import { useEffect, useState } from 'react';

const useStatex = <V>(atom: AtomSubscriber<V>) => {
  const [state, setState] = useState<V>(atom.get());

  useEffect(() => {
    const unsubscribe = atom.subscribe(setState);
    return unsubscribe;
  }, []);

  return state;
};

export default useStatex;
