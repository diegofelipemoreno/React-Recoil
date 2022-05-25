import {useRecoilValue} from 'recoil';

import {totalState} from "../selectors";

const Totals = () => {
    const totals = useRecoilValue(totalState);
    const {subtotal, total, shipping} = totals;

    return (
        <div>
            <h2>Totals</h2>
            <p>Subtotal ${subtotal.toFixed(2)}</p>
            <p>Shipping ${shipping.toFixed(2)}</p>
            <p>Total ${total.toFixed(2)}</p>
        </div>
    )
}

export default Totals;