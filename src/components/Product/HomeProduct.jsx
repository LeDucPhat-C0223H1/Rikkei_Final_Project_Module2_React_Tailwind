import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { getProductLists } from "../../redux/slices/productSlice";

const HomeProduct = () => {
  const { listProducts } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductLists());
  }, []);

  const newPerfume = listProducts.slice(-4);

  return (
    <div>
      <div className="flex justify-center">
        <span className="text-3xl uppercase font-semibold border-b-4 border-cyan-500  mb-5">
          Sản phẩm mới
        </span>
      </div>
      <div className="grid grid-cols-4 gap-10 mx-20">
        {newPerfume.length > 0 &&
          newPerfume.map((item, index) => {
            return <ProductItem item={item} key={index} />;
          })}
      </div>
    </div>
  );
};

export default HomeProduct;
