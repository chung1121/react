'use client';

import { ENDPOINT } from '@/constants';
import { useState, useEffect } from 'react';

export default function SSR() {
  const [state, setState] = useState(underfined);
  useEffect(() => {
    setState('client loaded');
  }, []);

  return (
    <>
      <div>{state}</div>
    </>
  );
}
