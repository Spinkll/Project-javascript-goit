// import axios from 'axios';

// const formWorkTogether = document.querySelector('.work-together-form');
// const inputEmail = formWorkTogether.elements.email;
// const inputMessage = formWorkTogether.elements.message;
// const successModal = document.getElementById('success-modal');
//       const closeModalButton = document.getElementById('close-modal');

// const axiosInstance = axios.create({
//     baseURL: 'https://portfolio-js.b.goit.study/api-docs',
// })

// async function postMessage(email, message) {
//     try {
//       const response = await axiosInstance.post('/endpoint', { // Замініть '/endpoint' на правильний кінцевий URL
//         email: email,
//         message: message,
//       });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }

// formWorkTogether.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const emailForm = inputEmail.value.trim();
//     const messageForm = inputMessage.value.trim();

//     if (emailForm === '' || messageForm === '') {
//     alert('Fill please all fields');
//     return;
//     }

//     try {
//           await postMessage(emailForm, messageForm);
//           successModal.classList.add('visually-hidden');
//           formWorkTogether.reset();
//         } catch (error) {
//           alert('Error sending message. Please correct the input and try again.');
//         }
//       });

//       closeModalButton.addEventListener('click', () => {
//         successModal.classList.remove('visually-hidden');
//       });

      

    const modal = document.querySelector('.modal');
    const closeModalButton = document.querySelector('.button-close');


    function closeModal() {
        modal.classList.add('visually-hidden');
    }

    closeModalButton.addEventListener('click', closeModal);

    // form.addEventListener('submit', (event) => {
    //     event.preventDefault(); // Зупиняємо стандартну відправку форми
        
    //     // Додайте тут ваш код для обробки даних форми або відправки через AJAX

    //     // Показуємо модальне вікно після успішної відправки
    //     openModal();
    // });

