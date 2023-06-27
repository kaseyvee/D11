import { useState, useEffect } from "react";
import { client } from "../contentful";

export const useFetchInfo = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    client.getEntries({
      content_type: "generalInfo",
    })
      .then((res) => {
        const info = res.items.map(infoItem => {
          return infoItem.fields;
        })
        
        setState(info);
      })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return state;
}