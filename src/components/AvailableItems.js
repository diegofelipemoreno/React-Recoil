import {useRecoilState} from 'recoil';

import {cartState} from "../atoms";
import {inventory} from '../model';

const AvailableItems = () => {
    const [cart, setCart] = useRecoilState(cartState);

    return (
        <>
        <pre>
            {JSON.stringify(cart, null, 2)}
        </pre>
            <h2>Available Items</h2>
            {Object.entries(inventory).map(([id, {name, price}]) => (
                <li key={id}>
                    {name} @ ${price.toFixed(2)}
                    <button onClick={() => {
                        setCart({...cart, [id]: (cart[id] || 0) + 1 }) 
                    }}>
                        Add
                    </button>

                    {
                        cart[id] ? 
                        <button onClick={() => {
                            const copy = {...cart};

                            if (copy[id] === 1) {
                                delete copy[id];
                                setCart(copy);
                            } else {
                                setCart({...copy, [id]: copy[id] - 1 })   
                            }
                        }}>
                            Remove
                        </button>: 
                        <></>
                    }
                </li>
            ))}
        </>
    )

};

export default AvailableItems;