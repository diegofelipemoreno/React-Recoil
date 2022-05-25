import { selector } from "recoil";

import {cartState, shippingState} from "./atoms";
import { destinations, inventory } from "./model";

export const totalState = selector({
    key: 'totalState',
    get: ({get}) => {
        const cart = get(cartState);
        const shipping = get(shippingState);
        const shippingTotal = destinations[shipping];
        const subtotal = Object.entries(cart).reduce((acc, [id, quantity]) => {
            return acc + (inventory[id].price * quantity);
        }, 0);

        return {
            subtotal,
            shipping: shippingTotal,
            total: subtotal + shippingTotal
        }
    } 
})