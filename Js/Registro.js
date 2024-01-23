
const form = document.getElementById('formRegister')

const register = () => {
    
    let nom = document.getElementById('nom').value
    let ape = document.getElementById('ape').value
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if(nom == '' || ape == '' || user == '' || password == ''){
        alert('Introduzca los datos solicitados')
        location.href = 'Regristro.html'
    }else{
        alert('Fuiste registrado exitosamente')
        location.href = '../index.html'
    }

    form.reset();

};