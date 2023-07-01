import React, { useEffect, useState, useCallback, useMemo } from 'react';

export function useLocalStorageJson(initialValue, key) {

  const getValue = () => {
    const storage = localStorage.getItem(key);

    if(storage) {
      // console.log(storage);
      return JSON.parse(storage);
    }

    return initialValue;
  }

  const [valueStorage, setValueStorage] = useState(getValue);

useEffect(() => {
  localStorage.setItem(key, JSON.stringify(valueStorage));
}, [ valueStorage ])

  return [valueStorage, setValueStorage];

}
export function useLocalStorage(initialValue, key) {

  const getValue = () => {
    const storage = localStorage.getItem(key);
    // console.log(storage);
    if(storage) {
      return storage;
    }
    return initialValue;
  }

  const [valueStorage, setValueStorage] = useState(getValue);

useEffect(() => {
  localStorage.setItem(key, valueStorage);
}, [ valueStorage ])

  return [valueStorage, setValueStorage];

}

export function useGetLocalStorage(key) {
  
  // const getValue = () => {   
    // const data = [] 
    const storage = localStorage.getItem(key);
    console.log(storage);
    const moviesList = JSON.parse(storage);  
    console.log(moviesList);  
    return moviesList;
  // }

  // const [valueStorage, setValueStorage] = useState(getValue);

// useEffect(() => {
//   localStorage.getItem(key);
// }, [ valueStorage ])

  // return [valueStorage, setValueStorage];

}