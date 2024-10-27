// Add your JS functionality here
document.querySelectorAll('.btn-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart');
    });
});

document.querySelectorAll('.btn-rent').forEach(button => {
    button.addEventListener('click', () => {
        alert('QuickDrop feature activated');
    });
});