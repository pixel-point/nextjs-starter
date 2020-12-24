import RegisterForm from 'components/pages/register-form';
import Head from 'next/head';

const registerForm = {
  title: 'Register for ghost',
  text: 'If you already have an account you can',
  buttonUrl: '/',
  buttonText: 'Next',
  link: {
    url: '/sign-in',
    title: 'Sign in',
  },
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ghost Sign In</title>
      </Head>

      <main>
        <RegisterForm {...registerForm} />
      </main>
    </div>
  );
}
