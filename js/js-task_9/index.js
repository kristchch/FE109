window.addEventListener('load', function() {

    let input = document.querySelector('input[type="text"]'),
        ul = document.querySelector('.ul-todo');


    //функция для создания пункта списка дел
    let createToDo = function() {
        //создание li и текста внутри
        let li = document.createElement('li'),
            todoSpan = document.createElement('span');
        li.classList.add('todoLi');
        todoSpan.classList.add('text-todo');

        let newTodo = input.value;
        todoSpan.append(newTodo);

        //создание кнопки выполнения
        let checkTodo = document.createElement('span');
        checkTodo.classList.add('check');

        let buttonCheck = document.createElement('button');
        buttonCheck.classList.add('button-check');
        checkTodo.append(buttonCheck);

        //создание кнопки удаления
        let deleteTodo = document.createElement('span');
        deleteTodo.classList.add('trash');

        let icon = document.createElement("i");
        icon.classList.add("fas", "fa-trash-alt");
        deleteTodo.append(icon);

        ul.appendChild(li).append(checkTodo, todoSpan, deleteTodo);
        input.value = '';
        todoDone(checkTodo);
        todoChange(todoSpan);
        todoDelete(deleteTodo);
    }


    //создание пункта списка при нажатии на кнопку
    let addition = document.querySelector('.field i');
    addition.addEventListener('click', createToDo);


    //создание пункта списка при нажатии enter
    input.addEventListener('keypress', (key) => {
        let keyEnter = 13;
        if (key.which == keyEnter) {
            createToDo();
        }
    });


    // //функция для удаления пункта списка
    // function todoDelete(element) {
    //     element.addEventListener("click", (event) => {
    //         element.parentElement.remove();
    //         event.stopPropagation();
    //     });
    // }


    // //функция для сделанного пункта
    // function todoDone(element) {
    //     element.addEventListener('click', function() {
    //         let li = document.querySelector('.todoLi');
    //         li.classList.toggle('done');
    //     });
    // }

    // // //изменение пункта по двойному клику
    // // function todoChange(element) {
    // //     element.addEventListener('dblclick', function() {
    // //         let changeTodo = prompt('Редактирование пункта');

    // //     });
    // // }

});