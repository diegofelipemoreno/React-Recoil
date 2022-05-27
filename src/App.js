// Framework dependencies
import React, { Suspense }  from 'react';
import {RecoilRoot} from 'recoil';

import './App.css';

import Items from './components/Items';
import AnotherAvailableItems from './components/AnotherAvailableItems';
//import CartInfoDebug from './components/CartInfoDebug';

const CartInfoDebug = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(
    () => import("./components/CartInfoDebug")
  );
});

function App() {
  return (
    <RecoilRoot>
      <Items />
      <hr/>
      <Suspense fallback={<h2>Loading...</h2>}>
        <CartInfoDebug />
      </Suspense>
      <AnotherAvailableItems/>
    </RecoilRoot>
  );
}

export default App;
