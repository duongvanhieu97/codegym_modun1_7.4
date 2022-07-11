function ChangeMoney() {
    let input = document.getElementById('Amount').value
    let form = document.getElementById('form').value
    let To = document.getElementById('To').value
    if (form === To) {
        if (form ==="VNĐ")
        document.getElementById('Result').innerHTML = 'Giá: ' + input + 'VNĐ'
        else {
            document.getElementById('Result').innerHTML = 'Giá: ' + input + 'USD'
        }
    } else if (form === "VNĐ") {
        document.getElementById('Result').innerHTML = 'Giá: ' + input*23000 + 'VNĐ'
    } else {
        document.getElementById('Result').innerHTML = 'Giá: ' + input/23000 + 'USD'

    }
}