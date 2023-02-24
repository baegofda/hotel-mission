import { NextPageContext } from 'next';
import Error from '@/components/Error';

const ErrorPage = ({ statusCode }: { statusCode: number }) => {
  return <Error statusCode={statusCode} />;
};

ErrorPage.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default ErrorPage;
