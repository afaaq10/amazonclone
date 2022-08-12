import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'


const Checkout = () => {

    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className='checkout'>

            <div className="checkout__left">


                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    {basket.map((item) =>
                        <CheckoutProduct
                            id={item.id}
                            img={item.img}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}



                        />
                    )}
                </div>
                {basket.length == 0 ? <img style={{ display: "flex", backgroundColor: "white", margin: "auto" }} src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" alt="" /> : ""}
            </div>

            <div className="checkout__right">
                <Subtotal />



            </div>





        </div>
    )
}

export default Checkout