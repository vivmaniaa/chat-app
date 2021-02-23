import {useEffect, useState} from 'react';

const PREFIX_KEY = 'chat-app';


const UseLocalStorage = (key, initialValue) => {
    const setKey = PREFIX_KEY+key;
    const [value, setValue] = useState(()=>{
        if(localStorage.getItem(setKey) !== null) return JSON.parse(localStorage.getItem(setKey));
        if(typeof initialValue === 'function'){
            return initialValue();
        }else{
            return initialValue;
        }
    });

    useEffect(()=>{
        localStorage.setItem(setKey, JSON.stringify(value))
    }, [setKey, value])

    return [value, setValue];
}

export default UseLocalStorage;
