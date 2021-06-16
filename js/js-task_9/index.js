window.addEventListener('load', function() {

    let input = document.querySelector('input[type="text"]'),
        ul = document.querySelector('.ul-todo');

    
    function todoDone(element) {
        element.addEventListener('click', function() {
            this.closest("li").classList.toggle('done');
        });
    }
    

    function todoChange(element) {
        element.addEventListener('dblclick', function() {
            let txt = this.textContent;
            let changeTodo = prompt('Редактирование пункта', txt) || txt;
            this.innerHTML = changeTodo; 
        });
    }


    function todoDelete(element) {
        element.addEventListener("click", function() {
            this.parentElement.remove();
        });
    }

    function todoClear() {
        let clearButton = document.querySelector('button.button');
        clearButton.addEventListener('click', () => {
            ul.innerHTML = '';
        });
    }


    let createToDo = function() {
        let li = document.createElement('li'),
            todoSpan = document.createElement('span');
        li.classList.add('todoLi');
        todoSpan.classList.add('text-todo');


        let newTodo = input.value;
        function checkText() {
            let regeExp = /\w|[а-я]/gi;
            if ((regeExp.test(newTodo)) == false) {
                alert('Повторите ввод своего великого дела!');
                newTodo.remove(); //почему выдаёт в консоли ошибку? и как вернуть ввод в начало input? т.е. когда вводишь кучу точек, выходит alert и эти же точки остаются в input. Также при нажатии кнопки "Очистить всё" эти точки тоже остаются
                return 
            } else {
                todoSpan.append(newTodo);
            }
        }
        checkText();


        let checkTodo = document.createElement('span');
        checkTodo.classList.add('check');

        let buttonCheck = document.createElement('button');
        buttonCheck.classList.add('button-check');
        checkTodo.append(buttonCheck);


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
        todoClear();
    }


    let addition = document.querySelector('.field i');
    addition.addEventListener('click', createToDo);


    input.addEventListener('keypress', (key) => {
        let keyEnter = 13;
        if (key.which == keyEnter) {
            createToDo();
        }
    });

});