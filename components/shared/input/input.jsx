import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Eye from 'public/icons/eye.svg';

import styles from './input.module.scss';

const cx = classNames.bind(styles);

const Input = React.forwardRef((props, ref) => {
  const { className: additionalClassName, tag: Tag, type, error, ...otherProps } = props;

  const className = cx('input', {
    input_invalid: error,
  });

  const innerClassName = cx('input__inner', additionalClassName);

  return (
    <div className={className}>
      <Tag className={innerClassName} type={type} {...otherProps} ref={ref} />
      {type === 'password' && (
        <button className={cx('icon-wrapper')}>
          <Eye className={cx('icon')} />
        </button>
      )}
      {error && <span className="input__error">{error}</span>}
    </div>
  );
});

Input.defaultProps = {
  className: null,
  tag: 'input',
  type: 'text',
  error: null,
};

Input.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOf(['input', 'textarea']),
  type: PropTypes.string,
  error: PropTypes.string,
};

export default Input;
