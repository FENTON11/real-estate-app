import React from 'react';
import { useQuery } from 'react-query';
import { getAllProperties } from '../../utils/api';

const useProperties = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    'allProperties',
    getAllProperties,
    { refetchOnWindowFocus: false }
  );
  console.log("inside useProperties")

  // Corrected the placement of the return statement
  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export default useProperties;
