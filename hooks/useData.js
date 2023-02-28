import useFetch from "./useFetch";
import axios from "@config/axios";
import React from "react";

const fetcher = (url) => 
    axios
    .get(url)
    .then(res => res.data)
    .catch(err => err);

const useData = (refreshEvery = 0) => {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1`;
    const [isAlreadyRefreshing, setIsAlreadyRefreshing] = React.useState(false);

    const {
        data,
        error,
        isLoading,
        mutate,
    } = useFetch(url, fetcher);

    React.useEffect(() => {
        let interval
        if (refreshEvery > 0 && !isAlreadyRefreshing) {
            interval = setInterval(() => {
                mutate(url);
                console.log('Refreshing Dashboard')
            }, refreshEvery * 1000);
            setIsAlreadyRefreshing(() => true);
        }

        return () => clearInterval(interval);
    }, [refreshEvery, isAlreadyRefreshing]);

    return {
        data,
        error,
        isLoading,
        mutate,
    }
}

export default useData;