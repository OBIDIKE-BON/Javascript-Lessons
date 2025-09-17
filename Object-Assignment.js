const student = {
  name: 'John',
  scores: {
    math: 80,
    english: 85,
  }
}

const shallowCopy = {...student}
shallowCopy.scores.math = 95

const deepCopy = JSON.parse(JSON.stringify(student))
deepCopy.scores.english = 90


console.log(student.scores);

/*shallow copy does refrencing usings keys while deep copy copies the properties and expands them this is the reason 
in this case we can make changes in shallow copy but not in deep copy*/
