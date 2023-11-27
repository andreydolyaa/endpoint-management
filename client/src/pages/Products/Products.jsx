import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [products, setProducts] = useState();

  useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();
    const getProducts = async () => {
      try {
        const response = await axiosPrivate.get("/products", {
          signal: abortController.signal,
        });
        isMounted && setProducts(response.data);
      } catch (error) {}
    };
    getProducts();
    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, []);

  return (
    <div>
      products !!
      {products &&
        products.map((x) => {
          return <div key={x._id}>{JSON.stringify(x)}</div>;
        })}
      <button onClick={() => navigate("/home")}>Go Back</button>
    </div>
  );
}

export default Products;
