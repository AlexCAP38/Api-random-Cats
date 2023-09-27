const btn = document.querySelector('.container__btn');
const image = document.querySelector('.container__image');

btn.addEventListener('click', (event) => {

    fetch('https://cataas.com/cat', {})
        .then((response) => {
            if (response.ok) {                                  //Проверка запроса
                return response.blob();                         //Ответ надо преобразовать. метод blob() Бинарный массив
            } else {
                return Promise.reject(response)                 //Ошибка. вернуть состояние промиса reject c ответом
            }
        })
        .then((data) => {
            const objectURL = URL.createObjectURL(data);        //метод создает виртуальный url из бинарного массива
            image.src = objectURL;
        })
        .catch((error) => {
            alert(`Упс.. Ошибка: ${error.status} ${error.statusText}.`)
        })

})


