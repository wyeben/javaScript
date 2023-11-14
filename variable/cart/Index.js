const addButton = document.getElementById('add-btn');
    const removeButton = document.getElementById('remove-btn');
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Add event listener for the "Add" button
    addButton.addEventListener('click', function() {
        const newItem = `
            <tr>
                <td>Product</td>
                <td>$10.00</td>
                <td>1</td>
                <td>$10.00</td>
                <td>
                    <button class="btn btn-add">Add</button>
                    <button class="btn btn-remove">Remove</button>
                </td>
            </tr>
        `;
        cartItems.insertAdjacentHTML('beforeend', newItem);
        updateTotal();
    });

    removeButton.addEventListener('click', function() {
        const items = cartItems.getElementsByTagName('tr');
        if (items.length > 0) {
            cartItems.removeChild(items[items.length - 1]);
            updateTotal();
        }
    });

    function updateTotal() {
        const items = cartItems.getElementsByTagName('tr');
        let totalPrice = 0;
        for (let i = 0; i < items.length; i++) {
            const price = parseFloat(items[i].getElementsByTagName('td')[1].textContent.slice(1));
            totalPrice += price;
        }
        totalElement.textContent = `$${totalPrice.toFixed(2)}`;
    }