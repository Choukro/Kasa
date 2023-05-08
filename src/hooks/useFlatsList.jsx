import { useState, useEffect } from "react";
import config from "../config.json"



export const useFlatsList = () => {
    const [flats, setFlats] = useState([]);
    useEffect(() => {
        fetch(config.host)
        .then((res) => res.json())
        .then((res) => setFlats(res))
        .catch(console.error);
    }, []);
    return flats;
};