const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Cargando...';

    const serviceID = 'default_service';
    const templateID = 'template_mo1iwnc';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Enviar';
        alert('Mensaje enviado');
        this.reset();
    }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
    });
});