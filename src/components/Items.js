import React  from 'react';
import {useSetRecoilState} from 'recoil';

import AvailableItems from './AvailableItems';
import AnotherAvailableItems from './AnotherAvailableItems';
import CartItems from './CartItems';
import Shipping from './Shipping';
import Totals from './Totals';
import {dispatcherState} from '../atoms';
import UseCreateDispatcher from '../dispatcher';

const Items = () => {
    const setDispatcher = useSetRecoilState(dispatcherState);
    const dispatcherRef = React.useRef(UseCreateDispatcher());

    React.useEffect(() => {
      setDispatcher(dispatcherRef.current);
    }, [setDispatcher]);

    return (
        <>
            <AvailableItems/>
            <CartItems />
            <Shipping />
            <Totals />
            <AnotherAvailableItems />
        </>
    );
};

export default Items;