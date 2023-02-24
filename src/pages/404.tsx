import React from 'react';
import Error from '@/components/Error';

const NotFound = () => {
  return <Error statusCode={404} />;
};

export default NotFound;
