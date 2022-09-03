document.addEventListener('DOMContentLoaded' , () => {
    const form = document.getElementById('login');

    form.addEventListener('submit' , (evento) => {
        evento.preventDefault();

        const inputs = form.querySelectorAll('input');

        let vacio = false;

        inputs.forEach((input) => {
            if (input.value =='') {
                vacio = true;
            }
        });
        if(vacio) {
            alert('Datos incorrectos');
        } else {
            window.location = "home.html"
        }
    });
}); 