import {IProduct} from "./product";

export interface IOrder {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    userAddress: string;
}

interface IUserOrder extends IOrder, IProduct {
    delivery: string;
}