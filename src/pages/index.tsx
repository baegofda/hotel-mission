import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { home } from '@/api';
import HomeContainer from '@/views/Home';

const Home = () => {
  return <HomeContainer />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['home'], home.getHomeData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
