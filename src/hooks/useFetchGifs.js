import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

//Con el arreglo vacío solo se ejecuta sus funciones
// cuando el componente es renderizado por primer vez
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);

  return state; //{ data: [], loading: true }
};
