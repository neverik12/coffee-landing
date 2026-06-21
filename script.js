// Находим форму и поля
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('formSuccess');

// Слушаем отправку формы
form.addEventListener('submit', function (event) {
    event.preventDefault(); // отменяем стандартную отправку (перезагрузку страницы)

    let isValid = true;

    // Проверка имени
    if (nameInput.value.trim().length < 2) {
        document.getElementById('nameError').textContent = 'Введите имя (минимум 2 символа)';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Проверка телефона (простая проверка на цифры, минимум 10)
    const phoneDigits = phoneInput.value.replace(/\D/g, ''); // убираем всё, кроме цифр
    if (phoneDigits.length < 10) {
        document.getElementById('phoneError').textContent = 'Введите корректный номер телефона';
        isValid = false;
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    // Проверка сообщения
    if (messageInput.value.trim().length < 5) {
        document.getElementById('messageError').textContent = 'Сообщение слишком короткое';
        isValid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    // Если всё ок — показываем успех и очищаем форму
    if (isValid) {
        successMessage.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время.';
        form.reset();
    } else {
        successMessage.textContent = '';
    }
});