import React from 'react';

export default () => (
  <div onClick={() => console.log('calling from portal external div')}>
    <div onClick={() => console.log('calling from portal internal div')}>
      <p>portal internal</p>
    </div>
  </div>
);
