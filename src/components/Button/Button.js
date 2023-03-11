import PropTypes from 'prop-types';
import css from './Button.module.css'

export const Button = ({ updatePage }) => {

    return (
      <button onClick={updatePage} className={css.Button}>
        Load more
      </button>
    );
  };

Button.propTypes = {
    updatePage: PropTypes.func.isRequired,
}