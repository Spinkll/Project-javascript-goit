import axios from 'axios';

const formWorkTogether = document.querySelector('.work-together-form');
const inputEmail = formWorkTogether.elements.email;
const inputMessage = formWorkTogether.elements.message;
const modal = document.querySelector('.modal');
const closeModalButton = modal.querySelector('.button-close');
const modalBackdrop = modal.querySelector('.modal-backdrop');

const axiosInstance = axios.create({
    baseURL: 'https://portfolio-js.b.goit.study/api-docs',
});

modal.classList.add('visually-hidden');

async function postMessage(email, message) {
    try {
        const response = await axiosInstance.post('', {
            email: email,
            message: message,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

formWorkTogether.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailForm = inputEmail.value.trim();
    const messageForm = inputMessage.value.trim();

    if (emailForm === '' || messageForm === '') {
        alert('Будь ласка, заповніть всі поля.');
        return;
    }

    try {
        await postMessage(emailForm, messageForm);
        openModalWindow();
        formWorkTogether.reset();
    } catch (error) {
        alert('Помилка при відправленні повідомлення. Будь ласка, спробуйте ще раз.');
    }
});

function closeModalWindow() {
    modal.classList.add('visually-hidden');
    modal.classList.remove('show');
}

function openModalWindow() {
    modal.classList.remove('visually-hidden');
    modal.classList.add('show');
}

closeModalButton.addEventListener('click', closeModalWindow);
modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
        closeModalWindow();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModalWindow();
    }
});