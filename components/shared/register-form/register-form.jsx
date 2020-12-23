import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './register-form.module.scss';

const cx = classNames.bind(styles);

const RegisterForm = (props) => (
  <section className={cx('container', 'row', 'wrapper')}>
    <form className={cx('form')}>
      <h2 className={cx('title')}>Register for ghost</h2>
      <input className={cx('input')} type="email" placeholder="Email address..." />
      <input className={cx('input')} type="text" placeholder="User name..." />
      <input className={cx('input')} type="password" placeholder="Password..." />
      <button type="submit" className={cx('button')}>Next</button>
      <span>If you already have an account you can
        {' '}
        <Link href="/sign-in">Sign in</Link>
      </span>
    </form>
  </section>
)

RegisterForm.propTypes = {

};

RegisterForm.defaultProps = {

};

export default RegisterForm;
