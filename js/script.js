document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();

    if (name === '' || email === '' || phone === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    if (!validatePhone(phone)) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }

    document.getElementById('signup-form').reset();
    document.getElementById('confirmation-message').style.display = 'block';
});


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^\d{9,}$/;
    return re.test(phone);
}
