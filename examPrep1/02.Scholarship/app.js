window.addEventListener("load", solve);

function solve() {
  const previewListElement = document.getElementById('preview-list');
  const candidateListElement = document.getElementById('candidates-list')
  const studentInputElement = document.getElementById('student');
  const universityInputElement = document.getElementById('university');
  const scoreInputElement = document.getElementById('score');
  const nextButtonElement = document.getElementById('next-btn');

  nextButtonElement.addEventListener('click', (e) => {
    e.preventDefault();

    if (!studentInputElement.value || !universityInputElement.value || !scoreInputElement.value) {
      return;
    }

    const liElement = document.createElement('li');
    liElement.className = 'application';

    const articleElement = document.createElement('article');

    const articleHeaderElement = document.createElement('h4');
    articleHeaderElement.textContent = studentInputElement.value;

    const universityParagraphElement = document.createElement('p');
    universityParagraphElement.textContent = `University: ${universityInputElement.value}`;

    const scoreParagraphElement = document.createElement('p');
    scoreParagraphElement.textContent = `Score: ${scoreInputElement.value}`;

    const editButtonElement = document.createElement('button');
    editButtonElement.classList.add('action-btn');
    editButtonElement.classList.add('edit');
    editButtonElement.textContent = 'edit';

    const applyButonElement = document.createElement('button');
    applyButonElement.classList.add('action-btn');
    applyButonElement.classList.add('apply');
    applyButonElement.textContent = 'apply';

    articleElement.appendChild(articleHeaderElement);
    articleElement.appendChild(universityParagraphElement);
    articleElement.appendChild(scoreParagraphElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(editButtonElement);
    liElement.appendChild(applyButonElement);

    previewListElement.appendChild(liElement);
    clearForm();

    nextButtonElement.setAttribute('disabled', true);

    editButtonElement.addEventListener('click', () => {

      const sudentName = previewListElement.querySelector('h4').textContent;
      const paragraphElements = previewListElement.querySelectorAll('article p');

      const [universityPElement, scorePElement] = Array.from(paragraphElements);


      studentInputElement.value = sudentName;
      universityInputElement.value = universityPElement.textContent.split(': ')[1];
      scoreInputElement.value = scorePElement.textContent.split(': ')[1];

      previewListElement.innerHTML = '';

      nextButtonElement.removeAttribute('disabled');

    });

    applyButonElement.addEventListener('click', () => {

      editButtonElement.remove();
      applyButonElement.remove();

      candidateListElement.appendChild(liElement);

      previewListElement.innerHTML = '';

      nextButtonElement.removeAttribute('disabled');

    });



  });

  function clearForm() {
    studentInputElement.value = '';
    universityInputElement.value = '';
    scoreInputElement.value = '';
  }




}
