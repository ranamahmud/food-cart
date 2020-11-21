import React from 'react';
import { Container } from 'react-bootstrap';
import CartItems from '../CartItems/CartItems';


const CartList = () => {
    const foods = [
        {
            id: 1,
            name: "Chicken Grill Sandwitch",
            price: 1.500,
            calory: 1002
        },
        {
            id: 1,
            name: "Veg Grill Sandwitch",
            price: 1.500,
            calory: 1002
        }
    ]

    return (
        <Container>
            {
                foods.map(food => {
                    return (
                        <CartItems food={food} />
                    )
                })
            }

        </Container>

    );
};

export default CartList;