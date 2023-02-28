import { useState, useEffect, useRef } from 'react'
import _ from 'lodash';

const cache = {};

function useFetch(url, fetcher) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [revalidate, setRevalidate] = useState(0);
  const isMounted = useRef(true)

  const _mutate = (url = url, data = null, shouldValidate = true) => {
    if (url?.length && data) {
      setData(data);

      cache[url] = data;
    }
    
    if (shouldValidate) {
      setRevalidate(revalidate => revalidate + 1);
    } else {
      return cache[url];
    }
  }

  const mutate = _mutate.bind(this, url);

  const response = {
    data,
    error,
    isLoading,
    mutate,
  };

  useEffect(() => {
    setIsLoading(true)

    if (url) {
      const fetch = async () => {
        fetcher(url)
          .then(result => {
            cache[url] = result;
            
            if (typeof result === 'Object'){
              if (Array.isArray(result)) {
                setData([ ...result ]);
              } else {
                setData({ ...result });
              }
            } else {
              setData(result);
            }

            setIsLoading(false)
          })
          .catch(err => {
            console.err(`System's Error: `, err);
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