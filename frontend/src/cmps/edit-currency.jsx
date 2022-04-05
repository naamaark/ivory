import React from 'react';

function EditCurrency() {
    return ( 
        <form>
            <p>Notification type:</p>
            <input type='radio' value='sound'></input>
            <label htmlFor="sound">Sound</label>
            <input type='radio' value='popup'></input>
            <label htmlFor="popup">Popup</label>
            <input type='radio' value='order'></input>
            <label htmlFor="order">Order</label>
            <label>Upper price</label>
            <input type="text" />
            <label>Lower price</label>
            <input type="text" />
            <label>Upper precentage</label>
            <input type="text" />
            <label>Upper precentage</label>
            <input type="text" />
        </form>
     );
}

export default EditCurrency;