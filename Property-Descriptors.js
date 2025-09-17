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

/* 1. The Value of the property cannot be modified when writable is set to false 
  2.  A property cannot be deleted when configurable is set to false neither can it be redefined
  (although if writable is to true, even if configurable is set to false properties can still be modified)*/


