import axios from "axios";

export default {
  findAllProducts: () => {
    return axios.get(`http://localhost:4000/products`);
  },
  filterProductById: (id) => {
    return axios.get(`http://localhost:4000/products?id=${id}`);
  },
  filterProductByGender: (gender) => {
    return axios.get(`http://localhost:4000/products?gender=${gender}`);
  },
  filterProductByGenderAndSort: (gender,type,sort) => {
    return axios.get(`http://localhost:4000/products?gender=${gender}&_sort=${type}&_order=${sort}`);
  },
  searchProductByName: (name) => {
    return axios.get(`http://localhost:4000/products?name_like=${name}`);
  },
  searchProductByDesc :(desc, name) => {
    return axios.get(`http://localhost:4000/products?desc=${desc}&name=${name}`);
  }
};