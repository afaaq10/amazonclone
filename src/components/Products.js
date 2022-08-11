import React from 'react'
import './Products.css'
import knockSound from '../knockSound.mp3'
import { useStateValue } from './StateProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Products = ({ id, img, title, price, rating }) => {






    const [{ basket }, dispatch] = useStateValue()
    console.log("my basket", basket)

    const addProduct = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                img: img,
                title: title,
                price: price,
                rating: rating,

            }
        })
        setTimeout(() => {


            toast.success("Item added to Cart. Click on the cart icon at the top right corner");
            const audio = new Audio(knockSound);
            audio.play()

        }, 100);


    }


    return (
        <div className="products">
            <img src={img} alt="" />
            <div className="products__info">
                <p>{title}</p>
                <p className='products__price'>
                    Price : <big>{price}</big>
                    <small>$</small>
                </p>
                <div className="products__rating">

                    {Array(rating).fill().map((_, i) =>
                        <p>⭐</p>
                    )}

                </div>

            </div>


            <button onClick={addProduct}>Add Product</button>

            <ToastContainer
                position="bottom-center"
                autoClose={1400}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />







        </div>
    )
}

export default Products