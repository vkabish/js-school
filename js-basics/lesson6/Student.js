class Student extends Person {
  
  constructor(name, age, missingClasses, assessments = startAssessments(), specialNotes = '') {
    super(name, age, missingClasses);
    
    this.assessments = assessments;
    this.specialNotes = specialNotes;
  }

  _getAllAssessments() {
    return Object.entries(this.assessments)
    .reduce((acc, [,assessments]) => [...acc, ...assessments], [])
  }

  getAllAssessments() {
    return this.assessments;
  }

  getAssessments(predmet) {
    return this.assessments[predmet];
  }

  getSpecialNotes() {
    return this.specialNotes;
  }

  getAverageAssessments() {
    return Math.floor(
      this.getSumOfAssessments() / this._getAllAssessments().length
    );
  }

  getSumOfAssessments() {
    return this._getAllAssessments().reduce((a, b) => a + b);
  }
}
