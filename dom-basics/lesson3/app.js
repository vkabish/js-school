
class App {

  constructor(initData, dataTableId, formName) {
    this._dataTableId = dataTableId;
    this._formName = formName;

    this._store = new Store(initData);

    this.unsubscribe = this._store.subscribe(this._handleChangeData.bind(this));  
    this._store.notifyListeners();
    
    this._makeFieldsRequired();
    this._bindEventListeners();
  }

  run() {
    // this._store.addRecord({
    //   first: 'test',
    //   last: 'test',
    //   handle: 'test'
    // });

    // this.unsubscribe(); // unsubscribe from handleChangeData
  }

  _getTable() {
    return document.getElementById(this._dataTableId);
  }

  _getForm() {
    return document.forms[this._formName];
  }

  _handleChangeData() {
    const newData = this._store.getRecords();
    const parentTable = this._getTable();

    parentTable.innerHTML = '';
    newData.forEach(rowData => {
      const row = this._renderRow(rowData);
      row.setAttribute("id", rowData.__innerID);
      parentTable.appendChild(row);
    });

    this._store._saveState(newData);
  }

  _renderRow(rowData) {
    const row = document.createElement('tr');

    row.appendChild(this._generateTd(rowData.id));
    row.appendChild(this._generateTd(rowData.first));
    row.appendChild(this._generateTd(rowData.last));
    row.appendChild(this._generateTd(rowData.handle));

    return row;
  }

  _generateTd(tdText) {
    const td = document.createElement('td');
    td.appendChild(document.createTextNode(tdText));

    return td;
  }

  _makeFieldsRequired() {
    const form = this._getForm();
    const fields = Array.from(form.elements);

    fields.forEach(field => {
      if (field.type === 'text') {
        field.setAttribute('required', true);
      }
    })
  }

  // change to ctrlKey - with altKey have a bug in Linux(start drag)
  _handleDbClick(event) {
    if (event.ctrlKey) {
      const recordId = event.target.parentElement.id;
      
      this._store.removeRecord(recordId);
    }
  }

  _handleClick(event) {
    if (event.altKey) {
      return;
    }

    const targetRow = event.target.parentElement;
    const recordId = targetRow.getAttribute('id');
    const rowData = this._store.getRecordById(recordId);
    this._populateToForm(rowData);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const form = this._getForm();
    const fields = Array.from(form.elements);
    const rowData = {};
    
    fields.forEach((el) => {
      if (el.type === 'text') {
        rowData[el.name] = el.value;
      }
    });
   
    this._store.addRecord(rowData);

    form.reset();
  }

  _populateToForm(rowData) {
    const form = this._getForm();
    const fields = Object.keys(rowData);
    
    fields.forEach((itemName) => {
      const el = form.elements[itemName];
      if (!el) {
        return;
      }
      el.value = rowData[itemName];

    });
  }

  _bindEventListeners() {
    const parentTable = this._getTable();
    const form = this._getForm();
    parentTable.addEventListener('dblclick', this._handleDbClick.bind(this));
    parentTable.addEventListener('click', this._handleClick.bind(this));
    form.addEventListener('submit', this._handleFormSubmit.bind(this));
  }

}
