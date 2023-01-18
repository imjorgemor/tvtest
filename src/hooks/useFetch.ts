import { useState, useEffect } from 'react';
import { Meta } from '../definitions/meta';

type FetchState<T> = null | T | undefined;
type Response = Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFetch = <T>(method: () => any, lazyFetch: boolean) => {
    const [state, setState] = useState<FetchState<T>>(null);
    //handle type of api response
    const [response, setResponse] = useState<Response>();

    useEffect(() => {
        const fetch = async () => {
            // added the option of lazyfetch so we may choose when fetch data according to the viewport view or not
            if (lazyFetch) {
                const data = await method();
                setState(data.data);
                setResponse(data.meta);
            }
        };
        fetch();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lazyFetch]);

    return { state, response, setState };
};