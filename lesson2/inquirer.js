(function (document) {
  
  const formInfo = document.querySelector('#formInfo');
  const formJobs = document.querySelector('#formJobs');
  
  const infoWrapper = document.querySelector('.app-right__info');
  const jobWrapper = document.querySelector('.app-right__jobs');

  const addBio = (bio = '', birthday = '', sex = '', address = '') => `
    <span class="app-right__title">Информация:</span>
    ${bio && `<p>${bio}</p>`}
    ${birthday && `<p>${birthday}</p>`}
    ${sex && `<p>${sex}</p>`}
    ${address && `<p>${address}</p>`}
  `;

  const addJob = ({companyName, position, startPeriod, endPeriod, responsibility}) => `
    <p>${companyName}</p>
    <p>${position}</p>
    <p>${startPeriod} / ${endPeriod}</p>
    <p>${responsibility}</p>
  `;

  const concatBio = (firstName = '', patronymic = '', surname = '') => 
    `${surname} ${patronymic} ${firstName}`;

  formInfo.addEventListener('input', function (evt) {
    infoWrapper.innerHTML = '';
    
    const bio = concatBio(this.firstName.value, this.patronymic.value, this.surname.value)  
    const birthday = this.birthday.value;
    const sex = this.sex.value;
    const address = this.address.value;
    
    infoWrapper.innerHTML = addBio(bio, birthday, sex, address)
  }, false);

  formJobs.addEventListener('submit', function (evt) {
    evt.preventDefault();
    
    const job = {
      companyName: this.companyName.value,
      position: this.position.value,
      startPeriod: this.startPeriod.value,
      endPeriod: this.endPeriod.value,
      responsibility: this.responsibility.value
    };

    if (formJobs.checkValidity()) {
      const jobItem = document.createElement('li');
      jobItem.innerHTML = addJob(job);
      
      jobWrapper.appendChild(jobItem);
      formJobs.reset();
    }

  }, false);

})(document);
