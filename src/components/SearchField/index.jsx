import { FormControl, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchProductByName } from "../../redux/slices/productSlice";
import { Link } from "react-router-dom";

const SearchField = ({ width = "600px" }) => {
  const token = localStorage.getItem("token");
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // Xử lý thay đổi giá trị tìm kiếm
  const handleSearchChange = (e) => {
    if (e.target.value != "") {
      setIsOpenSearch(true);
      dispatch(searchProductByName(e.target.value));
    } else {
      setIsOpenSearch(false);
    }
  };

  return (
    <div>
      <FormControl
        sx={{
          "& .MuiTextField-root": { width: width, backgroundColor: "white" },
        }}
      >
        <TextField
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                {token ? (
                  <SearchIcon style={{ fill: "orange" }} />
                ) : (
                  <SearchIcon style={{ fill: "gray" }} />
                )}
              </InputAdornment>
            ),
          }}
          onChange={(e) => handleSearchChange(e)}
          placeholder="Tìm kiếm..."
          onClick={() => setIsOpenSearch(isOpenSearch)}
        />
      </FormControl>

      <div
        className={`absolute z-30 w-[600px] mt-2.5 bg-white shadow-lg ${
          isOpenSearch ? "visible" : "invisible"
        } cursor-pointer`}
      >
        <div>
          <h3 className=" text-lg py-4 px-5 border-b border-[#f1f1f1] border-solid font-medium">
            Kết quả tìm kiếm
          </h3>
          {product.searchData?.map((item) => (
            <>
              <Link to={`/products/${item.productId}`}>
                <div className="flex items-center gap-2">
                  <img src={item.image} className="w-[50px] h-[50px]" />|
                  <p>{item.name}</p>|<p>{item.price.toLocaleString()}₫</p>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchField;
