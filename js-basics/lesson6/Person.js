class Person {
  
  constructor(name, age, missingClasses = 0) {
    this.name = name;
    this.age = age;
    this.missingClasses = missingClasses;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getNumberOfMissingClasses() {
    return this.missingClasses;
  }

  passLesson() {
    this.missingClasses++;

    return true;
  }

  canGo() {
    let result = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    return result > 1;
  }

  canGoToClass(bool = true) {
    if (!bool) return false;

    if (!this.canGo()) {
      this.passLesson();
      return false;
    }
    
    return true;
  }

}
