import React from 'react';

export default function Card(itemId, title, id) {
  return (
    <div>
      <h1>{(title, itemId, id)}</h1>
    </div>
  );
}
