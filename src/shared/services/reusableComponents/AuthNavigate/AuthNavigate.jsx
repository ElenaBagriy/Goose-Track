import PropTypes from 'prop-types';
import { Navigate } from './AuthNavigate.styled';

export const AuthNavigate = ({link, text}) => {
    return <>
    <Navigate to={link}>{text}</Navigate>
    </>
};

AuthNavigate.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };