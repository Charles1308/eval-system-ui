import { useState, useEffect, useRef } from 'react'
import _ from 'lodash';

const cache = {};

function useFetch(url, fetcher, options = null) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [revalidate, setRevalidate] = useState(0);
  const isMounted = useRef(true)
  const [intervalRunning, setIntervalRunning] = useState(false)

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
    let interval = null
    setIsLoading(true)

    if (url) {
      const fetch = async function() {
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
            // set back the previous state
            setData(cache[url])
            
            console.err(`System's Error: `, err);
            setError(err)
            setIsLoading(false)
          })
      }

      fetch();
      if (options && !intervalRunning) {
        const { refresh } = options;

        if (refresh) {
          setIntervalRunning(true);
          interval = setInterval(() => {
            return fetch();
          }, options.refresh);
        }
      }
    }

    return () => {
      isMounted.current = false
      // clearInterval(interval)
    }
  }, [url, fetcher, revalidate, intervalRunning]);

  return response;
}

export default useFetch;