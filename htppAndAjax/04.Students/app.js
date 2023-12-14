async function attachEvents() {
  const baseURL = 'http://localhost:3030/jsonstore/collections/students';

  const tableBody = document.querySelector('tbody');
  const submitBtn = document.getElementById('submit');

  submitBtn.addEventListener('click', onLoad);

  const getResponse = await fetch(baseURL);
  const students = await getResponse.json();

  Object.values(students).forEach((student) => {
  rowCreator(student);
  })

  async function onLoad() {

    const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll('#form input');

    let isValid = firstName.value !== '' && lastName.value !== '' && facultyNumber.value !== '' && grade.value !== '';
    if (isValid) {
      const newStudentsInfo = {
        firstName: firstName.value,
        lastName: lastName.value,
        facultyNumber: facultyNumber.value,
        grade: grade.value
      }
      await fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(newStudentsInfo)
      })
      
      rowCreator(newStudentsInfo);

      firstName.value = '';
      lastName.value = '';
      facultyNumber.value = '';
      grade.value = '';

    };


  }
   function rowCreator(student){
    const row = document.createElement('tr');
    row.innerHTML = `
     <tr>
         <th>${student.firstName}</th>
         <th>${student.lastName}</th>
         <th>${student.facultyNumber}</th>
         <th>${student.grade}</th>
      </tr>
     `;
    tableBody.appendChild(row); l
   }
}

attachEvents();