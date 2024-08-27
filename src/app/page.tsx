// pages/index.tsx
import FAQSection from '@/components/FAQSection';
import Head from 'next/head';


const Home = () => {
  return (
    <>
      <Head>
        <title>Help Center</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FAQSection />
    </>
  );
};

export default Home;
