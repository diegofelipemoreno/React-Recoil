// Framework dependencies
import {atom} from 'recoil';

// Packages dependencies

// Local dependencies


export const cartState = atom({
    key: "cartState",
    default: {},
 });
 
 export const shippingState = atom({
    key: "shipping",
    default: "US",
 });

 export const dispatcherState = atom({
   key: "dispatcherState",
   default: undefined,
 });