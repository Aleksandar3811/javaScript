function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', getAllPhones);

    document.getElementById('btnCreate').addEventListener('click', createContact);


    async function getAllPhones() {


        const phonesInfo = await (await fetch('http://localhost:3030/jsonstore/phonebook')).json();

        const phoneBook = document.getElementById('phonebook');

        Object.values(phonesInfo).forEach((contact) => {

            const li = document.createElement('li');

            const delButton = document.createElement('button');
            delButton.textContent = 'Delete';

            li.textContent = `${contact.person}: ${contact.phone}`;
            li.appendChild(delButton);

            phoneBook.appendChild(li);

            delButton.addEventListener('click', deleteContact);

            function deleteContact() {
                const id = contact._id;

                fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
                    method: 'DELETE',
                });
                li.remove();
            }



        });


    };

    function createContact() {

        const person = document.getElementById('person').value;
        const phone = document.getElementById('phone').value;

        fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'POST',
            body: JSON.stringify(
                {
                    person,
                    phone
                }
            )
        })
            .then((response) => response.json())
            .then(()=>{
                getAllPhones();
                person.value='';
                phone.value='';
            })

    };
}

attachEvents();