const dropZone = document.getElementById('drop-zone');
const tickets = document.querySelectorAll('.ticket');

tickets.forEach(ticket => {
    ticket.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', ticket.getAttribute('data-type'));
    });
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const ticketType = e.dataTransfer.getData('text');
    
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <span>✅ ${ticketType} Ticket</span>
        <button class="remove-btn">Remove</button>
    `;
    
    dropZone.appendChild(cartItem);

    
    cartItem.querySelector('.remove-btn').addEventListener('click', () => {
        cartItem.remove();
    });
});