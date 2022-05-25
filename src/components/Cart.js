import {inventory} from '../model';

const Cart = ({id, quantity}) => {
    return (
        <span>
            {inventory[id].name} quantity:{quantity}  Amount${(inventory[id].price) * quantity}
        </span>
    );
};

export default Cart;