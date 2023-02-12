import { useState, useEffect, useRef, useMemo } from 'react'
import _ from 'lodash';

const cache = {};

function useFetch(url, fetcher) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [revalidate, setRevalidate] = useState(0);
  const isMounted = useRef(true)

  const mutate = (url = url, data = null, shouldValidate = true) => {
    if (url?.length && data) {
      setData(data);
      cache[url] = data;
    }

    if (shouldValidate) {
      setRevalidate(revalidate => revalidate + 1);
    }
  }

  const response = useMemo(() => ({
    data,
    error,
    isLoading,
    mutate,
  }), [data, error, isLoading, mutate]);

  useEffect(() => {
    setIsLoading(true)

    if (url) {
      const fetch = async () => {
        fetcher(url)
          .then(result => {
            cache[url] = result;
            
            setData(result)
            setIsLoading(false)
          })
          .catch(err => {
            setError(err)
            setIsLoading(false)
          })
      }
      
      fetch();
    }

    return () => {
      isMounted.current = false
    }
  }, [url, fetcher, revalidate]);

  return response;
}

export default useFetch;