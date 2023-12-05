import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';



const clientGoogleId = '78833519786-t82e449tkfukjsb529p3kvedfu3hn366.apps.googleusercontent.com'

const products = [
    {
        "productId": 1,
        "gender": "lemon",
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
        "name": "Dâu Of Day",
        "desc": "Dâu",
        "price": 42000,
        "image": "https://firebasestorage.googleapis.com/v0/b/final-project-react-fcc98.appspot.com/o/images%2FJ1.png?alt=media&token=51045b2a-5d97-4a50-a13a-471525248788",
        "quantity": 1
    },
]

const newProducts = products.filter(item => {

    return item.name.includes("Dâu") || item.desc.includes("Dâu")
}) 

console.log(newProducts);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId={clientGoogleId}>
            <App />
        </GoogleOAuthProvider>
    </Provider>
);
