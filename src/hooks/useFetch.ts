import { useState, useEffect } from 'react';
import { Meta } from '../definitions/meta';

type FetchState<T> = null | T | undefined

type Response = Meta

export const useFetch = <T>(method: ()=> any) => {
    const [state, setState] = useState<FetchState<T>>(null);
    //handle type of api response
    const [response, setResponse] = useState<Response>();
   
    useEffect(() => {
        const fetch = async () => {
            const data = await method();
            setState(data.data);
            setResponse(data.meta);
        };
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { state, response };
};