import React from 'react';

const Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      我應該選哪什麼來做呢?
      </button>
  </div>
);

export default Action;
