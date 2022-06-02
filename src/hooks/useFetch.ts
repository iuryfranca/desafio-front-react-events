import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    api.get(url, options)
    .then(response => {
      setData(response.data);
     }).catch(error => {
      setError(error);
     }).finally(() => {
      setLoading(false);
     });
  }, []);
 
  return [ data, loading, error ];
}