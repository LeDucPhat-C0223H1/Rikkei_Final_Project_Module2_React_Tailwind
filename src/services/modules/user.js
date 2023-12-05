import axios from 'axios'

export default {
    findAllUser: () => {
        return axios.get("http://localhost:4000/users")
    },
    createUser: (newUser) => {
        return axios.post("http://localhost:4000/users", newUser)
    },
    addToCart: (userId,item) => {
        return axios.put(`http://localhost:4000/users/${userId}`, item)
    }

}