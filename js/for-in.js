const person = {
  name: 'Edward',
  nickname: 'Duke',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

logObject(person);

function logObject(object) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      console.log(`${key}: ${object[key]}`);
    }
  }
}
