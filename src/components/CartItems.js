import {useRecoilState} from 'recoil';

import {cartState} from "../atoms";
import Cart from './Cart';

const CartItems = () => {
    const [cart] = useRecoilState(cartState);
    const areThereItems =  !!Object.keys(cart).length;

    return (
        <>
        <h2>Cart Items</h2>

        <ul>
            { areThereItems ? 
              Object.entries(cart).map(([id, quantity]) => (
                <li key={id}>
                    <Cart {...{id, quantity}} />
                </li>
              )) : (
                  <p>No Items.</p>
              )
            }
        </ul>
        </>
    );
};

export default CartItems;