import React from 'react';

export default function Child({ onClick }) {
  return <button onClick={onClick}>Send click count to parent.</button>;
}
