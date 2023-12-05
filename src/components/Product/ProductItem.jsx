import React, { useState } from "react";
import StarIcon from "../Icon/StarIcon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import Notification from "../../components/Alert";


const ProductItem = ({ item }) => {
  const userInfor = JSON.parse(localStorage.getItem("userInfor"));
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { isSuccess , cartMessage} = useSelector((state) => state.cart);

  const handleDestroyErr = () => {
    dispatch(cartActions.destroyerror());
  }

  const handleAddtoCart = (item) => {
    if(!userInfor) {
      alert('Mời bạn đăng để tiếp tục mua hàng');
    }else {
      dispatch(cartActions.addToCart({...item,quantity : quantity}));
    }
  };
  return (
    
      <div className="max-w-2xl mx-auto hover:shadow-2xl">
        <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-center">
            <img
              className="w-[250px] h-[250px] rounded-t-lg p-8"
              src={item.image}
              alt="not found"
            />
          </div>
          <div className="px-5 pb-5">
            <h3 className="uppercase font-bold text-2xl">{item.brand}</h3>
            <Link to={`/products/${item.productId}`}>
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white min-h-[56px] max-h-[56px] hover:underline decoration-1">
              {item.name}
            </h3>
              </Link>
            <div className="flex items-center mt-2.5 mb-5">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                5.0
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {item.price.toLocaleString()}₫
              </span>
              <button type="button" className=" text-xs text-white bg-yellow-500 border-0 py-2 px-3 focus:outline-none hover:bg-orange-600 rounded"
                onClick={() => handleAddtoCart(item)}
              >
                <b>Mua ngay</b>
              </button>
            </div>
          </div>
        </div>
        {isSuccess && (
        <Notification
          show={isSuccess}
          message={cartMessage}
          type={"success"}
          handleDestroyErr={handleDestroyErr}
        />
      )}
      </div>
  
  );
};

export default ProductItem;
