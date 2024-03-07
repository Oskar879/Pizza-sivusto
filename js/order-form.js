function showOrderForm() {
    document.getElementById("orderForm").style.display = 'block'
}

function submitorder() {
    var quantity = document.getElementById('quantity').value
    var shipmeth = document.getElementById('shipmeth').value

    console.log(quantity)
    console.log(shipmeth)
}