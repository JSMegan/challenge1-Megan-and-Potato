const inputDisplayName = document.getElementById('inputDisplayName');
const inputUsername = document.getElementById('inputUsername');
const inputBirth = document.getElementById('inputBirth');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const buttonRegister = document.getElementById('buttonRegister');

const spanDisplayName = document.getElementById('spanDisplayName');
const spanUsername = document.getElementById('spanUsername');
const spanBirth = document.getElementById('spanBirth');
const spanEmail = document.getElementById('spanEmail');
const spanPassword = document.getElementById('spanPassword');

const imageUdapte = document.getElementById('imageUdapte');
const inputImage = document.getElementById('inputImage');

const save = document.getElementById('save')

let dataBase = {
    displayName: null,
    username: null,
    birth: null,
    email: null,
    password: null
};

const imageUdapteFast = () => {
    imageUdapte.setAttribute('src', inputImage.value);
    console.log(2)
};

setInterval(imageUdapteFast, 1000)

buttonRegister.addEventListener('click', () => {

    if(inputDisplayName.value != ''){
        spanDisplayName.textContent = 'Correct.'
        if(inputUsername.value != ''){
            spanUsername.textContent = 'Correct'
            if(inputEmail.value != ''){
                spanEmail.textContent = 'Correct'
                if(inputPassword.value != ''){
                    spanPassword.textContent = 'Correct'

                    dataBase.displayName = inputDisplayName.value
                    dataBase.username = inputUsername.value
                    dataBase.birth = inputBirth.value
                    dataBase.email = inputEmail.value
                    dataBase.password = inputPassword.value

                    save.classList.toggle('save')

                    setTimeout(() => {
                        save.classList.toggle('save')
                    }, 5000)
                    
                    console.log(dataBase)
                }else{
                    spanPassword.textContent = 'The entry must not be empty'
                }
            }else{
                spanEmail.textContent = 'The entry must not be empty'
            }
        }else{
            spanUsername.textContent = 'The entry must not be empty'
        }
    }else{
        spanDisplayName.textContent = 'The entry must not be empty'
    }
});