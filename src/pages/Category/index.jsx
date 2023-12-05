import React, { useEffect } from "react";
import CategoryItem from "./CategoryItem";
import PageLayout from "../../components/Layout/PageLayout";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

const Category = ({ name, type}) => {
  const { isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi component được hiển thị
  }, []);

  return (
    <div>
      <PageLayout>
        {isLoading && <Loader/>}
        <CategoryItem name={name} type={type} />
      </PageLayout>
    </div>
  );
};

export default Category;
