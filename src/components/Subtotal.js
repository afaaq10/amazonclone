import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from './StateProvider'
import { getTotalBasket } from './reducer'
const Subtotal = () => {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (

                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>

                        </p>
                        <small className="subtotal__gift">

                            <input type="checkbox" />This order contains a small gift
                        </small>

                    </>

                )}
                decimalScale={2}
                value={getTotalBasket(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />

            <button className="subtotal__product">Proceed to checkout</button>

        </div>
    )
}

export default Subtotal