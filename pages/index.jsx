import RegisterForm from 'components/shared/register-form';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
    <Head>
      <title>Ghost Sign In</title>
    </Head>
    
    <main>
      <RegisterForm/>
    </main>
    </div>
  )
}