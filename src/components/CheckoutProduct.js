import React from 'react'
import './CheckoutProduct.css'
import knockSound from '../knockSound.mp3'
import { useStateValue } from './StateProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CheckoutProduct = ({ id, img, title, price, rating }) => {

    const [{ basket }, dispatch] = useStateValue()

    const removeItem = () => {

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,


        })
        // if (basket.length == 0) return <h2>"Nothing to preview"</h2>

        setTimeout(() => {


            toast.info("Item removed successfully");
            const audio = new Audio(knockSound);
            audio.play()

        }, 100);

    }

    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct__image' src={img} alt="" />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>
                    <small>{title}</small>
                    <strong>Price : $ {price}</strong>

                </p>
                <div className="checkoutProduct__rating">


                    {Array(rating).fill().map((_, i) =>
                        <p>⭐</p>
                    )}


                </div>
                <button onClick={removeItem} className="checkoutProduct__button">Remove from basket</button>
            </div>
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

export default CheckoutProduct