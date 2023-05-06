import { useState, useEffect } from "react";
import config from "../config.json"



export const useFlatsList = () => {
    const [flats, setFlats] = useState([]);
    useEffect(() => {
        const abortController = new AbortController();
        fetch(config.host, { signal: abortController.signal })
        .then((res) => res.json())
        .then((res) => setFlats(res))
        .catch(console.error);

        return () => {
        abortController.abort();      
        };
    }, []);
    return flats;
};