import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../../../components/Product/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { filterProductByGender, filterProductByGenderAndSort } from "../../../redux/slices/productSlice";
import BasicPagination from "../../../components/Pagination";
import SingleSelect from "../../../components/Dropdown";
import { sortValue } from "../../../constant";

const CategoryItem = ({ name, type }) => {

  const [sort, setSort] = useState("");
  const { listProducts } = useSelector((state) => state.product);
  const dispatch = useDispatch();


  useEffect(()=>{
    setSort("")
  },[type])


  useEffect(() => {
    if(sort === '1'){
      dispatch(filterProductByGenderAndSort({gender : type, type :'price',sort:'asc'}));
    }else if (sort === '2'){
      dispatch(filterProductByGenderAndSort({gender : type, type :'price',sort:'desc'}));
    }
    else {
      dispatch(filterProductByGender(type));
    }
  }, [type,sort]);

  return (
    <div className="mb-20">
      <section className="text-gray-700 overflow-hidden bg-white">
        <div className="container px-5 py-10 mx-auto">
          <p className="mb-5 lg:w-4/5 mx-auto cursor-pointer">
            <Link to="/">Trang chủ |</Link> <b>{name}</b>
          </p>
          <div className="mb-5 lg:w-4/5 mx-auto border px-5 py-2 rounded-sm ">
            <SingleSelect
              name="sort"
              options={sortValue}
              value={sort}
              placeholder="Sort"
              onChange={(e) => setSort(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <span className="text-3xl uppercase font-semibold border-b-5 border-orange-500  mb-5">
              {name}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-10 mx-20">
            {listProducts.length > 0 &&
              listProducts.map((item, index) => {
                return <ProductItem item={item} key={index} />;
              })}
          </div>
        </div>
      </section>
      {/* <div className="flex justify-center">
        <BasicPagination />
      </div> */}
    </div>
  );
};

export default CategoryItem;
