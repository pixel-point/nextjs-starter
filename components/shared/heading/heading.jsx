import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './heading.module.scss';

const cx = classNames.bind(styles);

const Heading = (props) => {
  const {
    className: additionalClassName,
    tag: Tag,
    size,
    theme,
    children,
    innerHTML,
    ...otherProps
  } = props;

  const className = cx(
    'heading',
    `heading_size_${size}`,
    `heading_theme_${theme}`,
    additionalClassName
  );
  if (innerHTML) {
    return (
      <Tag className={className} dangerouslySetInnerHTML={{ __html: innerHTML }} {...otherProps} />
    );
  }

  return (
    <Tag className={className} {...otherProps}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p']),
  size: PropTypes.oneOf(['xxl', 'xl', 'lg', 'md']),
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'primary-inverted',
    'secondary-inverted',
    'accent-inverted',
  ]),
  children: PropTypes.node,
  innerHTML: PropTypes.string,
};

Heading.defaultProps = {
  className: null,
  tag: 'h1',
  size: 'xxl',
  theme: 'primary',
  children: null,
  innerHTML: null,
};

export default Heading;
