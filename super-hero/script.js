import Swal from 'sweetalert2'; 

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const token = '6288958434495629';
const base = `https://www.superheroapi.com/api.php/${token}`;
const maxHeros = 800; // 731 herois, 800 p simular erro

const randomId = () => Math.floor(Math.random() * maxHeros);

button.addEventListener('click', (event) => {

  event.preventDefault();
  const id = randomId();

  /* fetch é uma função do js (usada em js assincrono) 
  que retorna uma promisse */
  fetch(`${base}/${id}`) 
    .then((result) => result.json())
    .then((data) => {
      img.src = data.image.url;
      name.innerHTML = data.name;
    })

    .catch( //catch p capturar o erro
      (error) => Swal.fire({ //sweetalert2        
        title: 'Herói não encontrado',
        //exibe o erro encontrado pelo sistema (padrão)
        text: error.message, 
        icon: 'error',
        confirmButtonText: 'Cool',
      }),
    );

});