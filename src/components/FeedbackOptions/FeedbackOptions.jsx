import PropTypes from 'prop-types';

import { FeedbackButton } from './FeedbackOption.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(value => (
        <FeedbackButton
          key={value}
          type="button"
          onClick={() => onLeaveFeedback(value)}
        >
          {value}
        </FeedbackButton>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
