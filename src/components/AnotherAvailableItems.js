// Framework dependencies
import {useRecoilState, useRecoilValue} from 'recoil';

// Local dependencies
import {cartState} from "../atoms";
import {inventory} from '../model';
import { dispatcherState } from "../atoms";

const AnotherAvailableItems = () => {
    const [cart] = useRecoilState(cartState);
    const dispatcher = useRecoilValue(dispatcherState);

    const addItem = (id) => {
      dispatcher?.addItem(id);
    };

    const removeItem = (id) => {
        dispatcher?.removeItem(id);
    };
    
    return (
        <>
        <pre>
            {JSON.stringify(cart, null, 2)}
        </pre>
            <h2>AnotherAvailable Items</h2>
            {Object.entries(inventory).map(([id, {name, price}]) => (
                <li key={id}>
                    {name} @ ${price.toFixed(2)}
                    <button onClick={() => addItem(id)}>
                        Add
                    </button>

                    {
                        cart[id] ? 
                        <button onClick={() => removeItem(id)}>
                            Remove
                        </button>: 
                        <></>
                    }
                </li>
            ))}
        </>
    )

};

export default AnotherAvailableItems;