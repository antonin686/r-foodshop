import { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestConfig } from "axios";

function useGetFetch(url: string | null) {
  

  const [state, setstate] = useState<any>(null);

  const getMethod = useCallback(() => {
    let option: AxiosRequestConfig = {};
    if(!url) return null;
    axios
      .get(url, option)
      .then((response) => {
        //console.log(url)
        setstate(response.data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response) {
            // Request made and server responded
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            // console.log("Error", error.message);
          }
        }
        setstate([]);
      });
  }, [url]);

  useEffect(() => {
    getMethod();
  }, [url, getMethod]);

  const renewState = () => {
    getMethod();
  };

  return [state, renewState];
}

export default useGetFetch;
