import useFetch from "./useFetch";
import axios from "@config/axios";

const fetcher = (url) => 
    axios
    .get(url)
    .then(res => res.data)
    .catch(err => err);

const useData = (refresh = 0) => {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1`;

    const {
        data,
        error,
        isLoading,
        mutate,
    } = useFetch(url, fetcher, { refresh });

    return {
        data,
        error,
        isLoading,
        mutate,
    }
}

export default useData;