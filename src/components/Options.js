import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">你的選項</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        移除選項
    </button>
    </div>

    {props.options.length === 0 && <p className="widget__message">請新增選項，讓電腦能幫你選!</p>}
    {
      props.options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;
