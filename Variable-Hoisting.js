const AnotherInfo = {
  name: 'August'

}

const AvarageInfo = {
  age: 20,
  height: 1.67,
  weight: 70,
  "otherInfo": AnotherInfo
}

console.log(AvarageInfo.otherInfo.name)
AvarageInfo.otherInfo.name = 'Chibuzor'
console.log(AvarageInfo.otherInfo.name)
console.log(AnotherInfo.name)

const evenAnother = { ...AvarageInfo }
evenAnother.age = 30
console.log(evenAnother.age);
console.log(AvarageInfo.age);

const moreInfo = JSON.parse(JSON.stringify(AvarageInfo))
moreInfo.otherInfo.name = 'Marc'

console.log(moreInfo.otherInfo.name);
console.log(AvarageInfo.otherInfo.name);
console.log(evenAnother.otherInfo.name);

/* Object Properties
  Value
  Writable
  Enumerable
  Configurable
*/
const user = {}
Object.defineProperty(user, "id", {
  value: 101,
  writable: false,
  enumarable: true,
  configuraable: false,

})

console.log(user);

user.id = 200;
console.log(user.id); console.log(user);

console.log(typeof (user.id));

user.age = 25

console.log(user.age);

Object.defineProperty(user, 'DOB', {
  value: '19/08/1997',
  writable: false,
  enumerable: true,
  configurable: false,
})

console.log(user.DOB);
console.log(typeof (user.DOB));
const newob = Object.getOwnPropertyDescriptors(user);

console.log(Object.getOwnPropertyDescriptor(newob.age, "writable"));


