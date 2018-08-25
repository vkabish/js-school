const getStudentsGradation = (lessons) => ({
  GOOD: MAX_ASSESSMENTS * 0.5,
  EXCELLENT: MAX_ASSESSMENTS * 0.8
});

const setStudentGradation = (student, gradations) => {
  const sumOfAssessments = student.getSumOfAssessments();
  
  return (sumOfAssessments >= gradations.EXCELLENT) ?
    'EXCELLENT' :
    (sumOfAssessments >= gradations.GOOD) ? 
      'GOOD' :
      'BAD';
};

const renderAssesments = (assessments) => {
  let str = ``;

  for(let key in assessments) {
    str += `${key}: ${assessments[key]}
    `;
  }

  return str;
};
