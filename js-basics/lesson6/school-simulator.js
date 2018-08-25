console.log('---Avengares Super Heroes Lessons---');

  lessons.forEach(({ admin, teacher, group }, index) => { 
    if (admin.canGoToClass()) {
      
      if (teacher.canGoToClass()) {
        console.log(`Lesson ${index + 1}`);
        teacher.rateGroup(group);
      } else {
        console.log(`Teacher ${teacher.getName()} pass`);
        group.forEach(student => student.canGoToClass(false));
      }
    
    } else {
      console.log(`Admin ${admin.getName()} pass`);
      teacher.canGoToClass(false);
      group.forEach(student => student.canGoToClass(false));
    }
  });

console.log('---Avengares Super Heroes Lessons---');

console.log('---Lessons Result---');

  console.log('---Admin---');
  console.log(`
    Admin: ${admin.getName()}
    Age: ${admin.getAge()}
    MissingClasses: ${admin.getNumberOfMissingClasses()}
    Lessons result: ${admin.lessonsFaild(lessons) ? 'FAILD' : 'OK'}
    `);

  console.log('---Teachers---');
  teachers.forEach(teacher => {
    console.log(`
    Teacher: ${teacher.getName()}
    Age: ${teacher.getAge()}
    Specialization: ${teacher.getSpecialization()}
    ScientificWorks: ${teacher.getScientificWorks()}
    MissingClasses: ${teacher.getNumberOfMissingClasses()}
    `);
  });

  console.log('---Gradations---');
  console.log(`
    GOOD: ${studentsGradation.GOOD}
    EXCELLENT: ${studentsGradation.EXCELLENT}
  `);

  console.log('---Group of students---')
  group.forEach(student => {
    const stud = {
      name: student.getName(),
      age: student.getAge(),
      average: student.getAverageAssessments(),
      assessments: student.getAllAssessments(),
      miss: student.getNumberOfMissingClasses(),
      summ: student.getSumOfAssessments(),
      gradation: setStudentGradation(student, studentsGradation)
    };


    console.log(`
    Student: ${stud.name}
    Age: ${stud.age}
    
    Assessments: 
    ${renderAssesments(stud.assessments)}
    Average assessments: ${stud.average}
    MissingClasses: ${stud.miss}
    Sum of assessments: ${stud.summ}
    Gradation: ${stud.gradation}
    `);
  });

