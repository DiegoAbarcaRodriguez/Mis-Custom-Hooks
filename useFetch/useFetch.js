import { useEffect, useState } from "react";


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {

        setState({ //Por si llega a cambiar el url y se monte el componente con loading en true
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();
        

        setState({
            data,
            isLoading: false,
            hasError: false
        });
    }


    useEffect(() => {
        getFetch();
    }, [url]);




    return {
        ...state
    };
}
