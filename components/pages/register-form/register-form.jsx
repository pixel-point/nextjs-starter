import classNames from 'classnames/bind';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Input from 'components/shared/input';
import Heading from 'components/shared/heading/heading';

import styles from './register-form.module.scss';

const cx = classNames.bind(styles);

const RegisterForm = ({ title, buttonText, text, link }) => (
  <section className={cx('container', 'row', 'wrapper')}>
    <form className={cx('form')}>
      <Heading className={cx('title')} tag="h2" size="md" theme="secondary">
        {title}
      </Heading>
      <div className={cx('inputs-wrapper')}>
        <Input
          className={cx('input')}
          type="email"
          autoComplete="email"
          placeholder="Email address..."
          required
        />
        <Input className={cx('input')} type="text" placeholder="User name..." required />
        <Input className={cx('input')} type="password" placeholder="Password..." required />
      </div>
      <button type="submit" className={cx('button')}>
        {buttonText}
      </button>
      <span className={cx('text')}>
        {text} <Link href={link.url}>{link.title}</Link>
      </span>
    </form>
  </section>
);

RegisterForm.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default RegisterForm;
