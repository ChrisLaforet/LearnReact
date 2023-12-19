import {useEffect, useState} from "react";

const useFetch = (url) => {
    // custom hooks MUST start with the word use...

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
            .then(response => {
                if (!response.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setError(null);
                setIsPending(false);
            })
            .catch(err => {
                // prevents spurious error from abort causing issues with setxxx() below
                if (err.name === 'AbortError') {
                    console.log("Fetch aborted");
                }
                setError(err.message);
                setIsPending(false);
            })

        return () => abortController.abort();
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;
