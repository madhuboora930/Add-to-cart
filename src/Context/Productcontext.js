


import { createContext, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    
      const res = await axios.get(url);
      const products = await res.data;
      console.log(
        "🚀 ~ file: productcontex.js ~ line 18 ~ getProducts ~ products",
        products
      );
      }

      
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <>
    <AppContext.Provider value={{ myName: "Madhu Boora" }}>
      {children}
    </AppContext.Provider>
    
    </>
  );
};
// custom hooks
const useProductContext = () => {
    return useContext(AppContext);
  };
export{AppProvider,AppContext,useProductContext}
