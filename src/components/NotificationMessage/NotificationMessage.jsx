import PropTypes from 'prop-types';
import { NotificationText } from './NotificationMessage.styled';

export const NotificationMessage = ({ message }) => {
  return <NotificationText>{message}</NotificationText>;
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
