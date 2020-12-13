const form = document.forms[0];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const values = [...new FormData(form).values()];
    console.log(values);

    if (!checkFio(values[0])) return showMessage('error', 'Введите ФИО');

    showMessage('success', 'Заказ оформлен');
});

function checkFio(FIO) {
    return FIO !== '';
}

function showMessage(type, text) {
    Swal.fire({
        text: text,
        icon: type,
        showConfirmButton: false
    });
}