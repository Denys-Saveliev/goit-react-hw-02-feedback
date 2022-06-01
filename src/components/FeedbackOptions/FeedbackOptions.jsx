import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const items = Object.keys(options);
  return (
    <div className={s.btn__container}>
      {items.map(item => (
        <button
          key={item}
          className={s.button}
          type="button"
          onClick={() => onLeaveFeedback(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
