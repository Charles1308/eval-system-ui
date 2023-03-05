// import useSWR from 'swr';
import React from 'react';
import useFetch from './useFetch';
import axios from '@config/axios';

const fetcher = (url) => 
    axios
    .get(url)
    .then(res => res.data)
    .catch(err => err);

const useEvaluation = ({ type, id = '', page, limit, refresh = 0 }) => {
    const url = type && 
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/form/${type}${
            id ? `/${id}` : ''
        }/?page=${page}&limit=${limit}`;

    const {
        data,
        error,
        isLoading,
        mutate,
    } = useFetch(url, fetcher, { refresh });

    return {
        evaluation: data,
        error,
        isLoading,
        mutate,
    };
}

export default useEvaluation;