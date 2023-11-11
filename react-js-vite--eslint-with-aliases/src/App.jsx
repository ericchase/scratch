import React, { useState } from 'react';
import Child from './Child';

export default function App() {
  const [clicks, setClicks] = useState(0);
  // const arr = [1, 2, 3];

  return (
    <>
      <div>Clicks: {clicks}</div>
      <Child onClick={() => setClicks(clicks + 1)}></Child>
    </>
  );
}
