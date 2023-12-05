const products = [
    {
        "productId": 1,
        "gender": "juice",
        "name": "Cup Of Day",
        "desc": "Dâu",
        "price": 42000,
        "image": "https://firebasestorage.googleapis.com/v0/b/final-project-react-fcc98.appspot.com/o/images%2FJ1.png?alt=media&token=51045b2a-5d97-4a50-a13a-471525248788",
        "quantity": 1
    },
    {
        "productId": 1,
        "gender": "juice",
        "name": "Cup Of Day",
        "desc": "Dâu",
        "price": 42000,
        "image": "https://firebasestorage.googleapis.com/v0/b/final-project-react-fcc98.appspot.com/o/images%2FJ1.png?alt=media&token=51045b2a-5d97-4a50-a13a-471525248788",
        "quantity": 1
    },
    {
        "productId": 1,
        "gender": "juice",
        "name": "Cup Of Day",
        "desc": "Dâu",
        "price": 42000,
        "image": "https://firebasestorage.googleapis.com/v0/b/final-project-react-fcc98.appspot.com/o/images%2FJ1.png?alt=media&token=51045b2a-5d97-4a50-a13a-471525248788",
        "quantity": 1
    },
]

const newProducts = products.find(item => {
    return item.desc === "Dâu" && item.gender === "juice"
}) 

console.log(newProducts);