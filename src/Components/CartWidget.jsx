import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faStore} style={{color: "#f54105",}} />
            <span className="notification">0</span>
        </div>
    );
}

export default CartWidget;
