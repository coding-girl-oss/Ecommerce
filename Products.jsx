import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "../redux/productsSlice";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (status == "loading") {
    return <p>loading....</p>;
  }

  if (status == "error") {
    return <p>Error!!</p>;
  }
  return (
    <>
    <div className="flex justify-between  items-center min-h-screen mx-20">
      <div className="flex flex-col gap-3">
      <h1 className=" text-5xl  sm:text-8xl  font-bold text-white ">
        Shopyy!!
      </h1>
      <p className="text-center">Explore the new fashion outfits!!</p>
      </div>
      <img className="lg:h-96 h-0" src='https://cdn-icons-png.flaticon.com/128/9023/9023509.png'/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[80vw] mx-auto ">
        {data.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Products;
