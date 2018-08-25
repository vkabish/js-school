class Admin extends Person {
  
  constructor(name, age, missingClasses) {
    super(name, age, missingClasses);
  }

  lessonsFaild(lessons) {
    return this.getNumberOfMissingClasses() >= Math.floor(lessons.length / 2)
  }

}
