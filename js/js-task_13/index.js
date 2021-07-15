class User {
    constructor(id, name, email, phone, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    get() {
        return {id: this.id, name: this.name, email: this.email, phone: this.phone, address: this.address}
    }
}

class Contacts {
    constructor() {
        this.data = [];
    }

    edit(event, id) {
        let user = this.data.find(item => item.id === id);
        user.name = event.currentTarget[0].value;
        user.email = event.currentTarget[1].value;
        user.phone = event.currentTarget[2].value;
        user.address = event.currentTarget[3].value;
    }

    delete(id) {
        this.data = this.data.filter(item => item.id !== id);
    }

    add(event) {
        let name = event.currentTarget[0].value;
        // function checkName(name) {
        //     let regExpName = /^[a-zA-Z]/gi;
        // if (regExpName.test(name) == true) {
        //     alert('Проверьте ввод имени!');
        //     event.currentTarget[0].classList.add('invalid');
        //     event.preventDefault();
        //     return false;
        // } else {
        //     name = event.currentTarget[0].value;
        //     event.currentTarget[0].classList.remove('invalid');
        // }
        // }
        // checkName(this.name);

        let email = event.currentTarget[1].value;
        let phone = event.currentTarget[2].value;
        let address = event.currentTarget[3].value;

        let maxId = 0;
        this.data.forEach(element => {
            if(+element.id > +maxId) maxId = element.id;
        });

        maxId++;

        let newUser = new User(maxId, name, email, address, phone);
        this.data.push(newUser);
    }
}

class ContactsApp extends Contacts {
    constructor() {
        super();

        this.update();
    }

    get storage() {
        return localStorage.getItem('contacts');
    }

    set storage(data) {
        localStorage.setItem('contacts', data);
    }

    update() {
        this.data = JSON.parse(this.storage) || [];
        this.paintUser();
    }

    paintUser() {
        document.body.querySelector('.wrapperContacts') && document.body.querySelector('.wrapperContacts').remove();
        let wrapperContacts = document.createElement('div')
        wrapperContacts.classList.add('wrapperContacts');
        // console.log(wrapperContacts);
        this.data.forEach(element => {
            //отрисовка самого контакта
            let itemContact = document.createElement('div');
            itemContact.classList.add('itemContact');
            itemContact.id = element.id;
            itemContact.innerHTML = `
                <p>Имя: ${element.name}</p>
                <p>Email: ${element.email}</p>
                <p>Тел: ${element.phone}</p>
                <p>Адрес: ${element.address}</p>
            `;

            //кнопка редактирования
            let editBtn = document.createElement('button');
            editBtn.classList.add('button');
            editBtn.innerHTML = `
            <i class="far fa-edit"></i>
            `;
            editBtn.addEventListener('click', () => this.paintEditUser(element.id));

            //кнопка удаления
            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('button');
            deleteBtn.innerHTML = `
            <i class="far fa-trash-alt">
            `;
            deleteBtn.addEventListener('click', () => {this.delete(element.id);this.paintUser()});

            itemContact.appendChild(editBtn);
            itemContact.appendChild(deleteBtn);

            wrapperContacts.appendChild(itemContact);
        });
        document.body.appendChild(wrapperContacts);

        this.storage = JSON.stringify(this.data);
    }

    paintEditUser(id) {
        let changeUser = this.data.find(item => item.id === id);
        // console.log(changeUser);

        document.getElementById(id).innerHTML = `
            <form id="changeForm" novalidate>
                <label for="name">Имя:</label>
                <input type='text' id="name" placeholder="Имя" value='${changeUser.name}'>
                <label for="email">Email:</label>
                <input type='email' id="email" placeholder="Email" value='${changeUser.email}'>
                <label for="phone">Телефон:</label>
                <input type='phone' id="phone" placeholder="Тел" value='${changeUser.phone}'>
                <label for="address">Адрес:</label>
                <input type='address' id="address" placeholder="Адрес" value='${changeUser.address}'>
                <button class="checkBtn" type="submit"><i class="fas fa-check"></i></button>
            </form>
        `;

        document.getElementById(id).style.borderLeft = "none";
        document.getElementById(id).style.boxShadow = "none";
        // itemContact.style.display = "none";

        document.getElementById('changeForm').addEventListener('submit', (event) => {this.edit(event, id); this.paintUser()});
    }

    init() {
        document.getElementById('formUser').addEventListener('submit', (event) => {this.add(event); this.paintUser()});
    }
}

let AppContacts = new ContactsApp();
AppContacts.init();
