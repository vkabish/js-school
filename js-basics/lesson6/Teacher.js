// const MIN = 1;
// const MAX = 10;

class Teacher extends Person {
 
  constructor(name, age, specialization, scientificWorks = 0, missingClasses) {
    super(name, age, missingClasses);
    
    this.specialization = specialization;
    this.scientificWorks = scientificWorks;
  }

  getSpecialization() {
    return this.specialization;
  }

  getScientificWorks() {
    return this.scientificWorks;
  }

  rate(assessments) {
    assessments[this.getSpecialization()].push(
      Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
    )
  }

  rateStudent(student) {
    if (!student.canGoToClass()) return student;
    
    return {
      ...student,
      assessments: {
        ...student.assessments,
        [this.getSpecialization()]: this.rate(student.assessments)
      }      
    };
  }

  rateGroup(students) {
    return students.map(this.rateStudent.bind(this));
  }

}
