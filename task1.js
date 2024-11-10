function validateForm() {
    let valid = true;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    document.getElementById("nameError").innerText = name ? "" : "Имя не может быть пустым.";
    valid = name ? valid : false;

    const emailRegex = /.+@.+\..+/;
    document.getElementById("emailError").innerText = emailRegex.test(email) ? "" : "Введите корректный email.";
    valid = emailRegex.test(email) ? valid : false;

    document.getElementById("passwordError").innerText = password.length >= 8 ? "" : "Пароль должен содержать минимум 8 символов.";
    valid = password.length >= 8 ? valid : false;

    if (valid) {
        alert("Форма успешно отправлена!");
    }
}
