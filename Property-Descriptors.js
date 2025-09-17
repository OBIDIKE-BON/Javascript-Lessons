const car = {}
Object.defineProperty(car, 'vin', {
  value: 'VIN123456',
  writable: true,
  enumerable: true,
  configurable: true,
})

Object.defineProperty(car, 'color', {
  value: 'blue',
  writable: false,
  enumerable: true,
  configurable: true,
})

car.vin = 'VIN654321'
car.color = 'red'


console.log(Object.getOwnPropertyDescriptors(car));


