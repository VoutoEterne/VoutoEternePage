function handlePurchase(productName, productPrice) {
    const cantidad = document.getElementById("cantidad").value;
    const metodoPago = document.getElementById("metodo-pago").value;
    const numeroWhatsApp = "573005741188"; 

    if (!cantidad || !metodoPago) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const mensaje = `Hola, deseo comprar el siguiente producto:%0A- Producto: ${productName}%0A- Precio: $${productPrice}%0A- Cantidad: ${cantidad}%0A- Método de pago: ${metodoPago}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    window.open(url, "_blank");
    window.location.href = "index.html#catalogo";
}
