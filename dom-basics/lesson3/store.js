class Store {


  constructor(initialState = []) {
    this._id = 0;
    this._state = {};
    this._initialState = [
      ...initialState,
      ...this._loadState() || []
    ];

    this._initialState.forEach((data) => {
      this._addInnerRecord(data);
    });

    this._handlers = [];
  }

  _addInnerRecord(data) {
    data.id = this._id;
    this._state[this._generateId()] = data;
  }

  addRecord(data) {
    this._addInnerRecord(data);

    this.notifyListeners();
  }

  _removeInnerRecord(recordId) {
    const record = this.getRecordById(recordId);
    
    delete this._state[recordId];
    
    return record;
  }

  removeRecord(id) {
    this._removeInnerRecord(id);

    this.notifyListeners();
  }

  getRecordById(recordId) {
    return { ...this._state[recordId], __innerID: recordId};
  }

  getRecords() {
    const fields = Object.keys(this._state);
    return fields.map(filedId => {
      return this.getRecordById(filedId);
    });
  }

  _generateId() {
    return 'my_id_' + this._id++;
  }

  subscribe(callback) {
    this._handlers.push(callback);

    return () => this._handlers = this._handlers.filter(cb => cb !== callback);
  }

  notifyListeners() {
    this._handlers.forEach((cb) => cb());
  }

  _saveState(state) {
    const serializedData = JSON.stringify(state);
    
    localStorage.setItem('state', serializedData);
  }

  _loadState() {
    try {
      const serializedData = localStorage.getItem('state');
      if (serializedData === null) {
        return undefined;
      }
      return JSON.parse(serializedData);
    } catch (err) {
      return new Error('Can load from state');
    }
  }

}
