import React, { lazy, Suspense }  from 'react';
import {RecoilRoot} from 'recoil';

import './App.css';

import AvailableItems from './components/AvailableItems';
import CartItems from './components/CartItems';
import Shipping from './components/Shipping';
import Totals from './components/Totals';
//import CartInfoDebug from './components/CartInfoDebug';


const CartInfoDebug = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(
    () => import("./components/CartInfoDebug")
  );
});


function App() {
  return (
    <RecoilRoot>
      <AvailableItems/>
      <CartItems />
      <Shipping />
      <Totals />
      <hr/>
      <Suspense fallback={<h2>Loading...</h2>}>
        <CartInfoDebug />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
