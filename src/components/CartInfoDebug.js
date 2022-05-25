import {atom, useRecoilCallback} from 'recoil';

const itemsInCart = atom({
  key: 'itemsInCart',
  default: 0,
});

function CartInfoDebug() {
  const logCartItems = useRecoilCallback(({snapshot}) => async () => {
    const numItemsInCart = await snapshot.getPromise(itemsInCart);

    console.log('Items in cart: ', numItemsInCart);
  }, []);

  return (
    <div>
      <button onClick={logCartItems}>Log Cart Items</button>
    </div>
  );
}

export default CartInfoDebug;