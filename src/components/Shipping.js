import { useRecoilState } from "recoil";

import {shippingState} from "../atoms";
import {destinations} from '../model';

const Shipping = () => {
    const [shipping, setShipping] = useRecoilState(shippingState);

    return (
        <div>
            {Object.entries(destinations).map(([country, price]) => (
                <button key={country} onClick={
                    () =>setShipping(country)
                }>
                    {country} @ {price}
                    {country === shipping ? <span> Selected</span> : ""}
                </button>
            )) 
            }
        </div>
    )
};

export default Shipping;