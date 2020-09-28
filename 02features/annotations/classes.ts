class Vehicle {
  color: string = 'red';
  constructor(color: string) {
    this.color = color;
  }
  public drive(): void {
    console.log('chugga chugga');
  }

  public honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
//如果honk是protected这里就不可以被调用
vehicle.honk();
console.log(vehicle.color);

class Car_ extends Vehicle {
   constructor(public wheels:number,color:string){
      super(color)  
   }
  //复写方法不能改变类型（public/private/protected)
  drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    //如果honk是private这里就不能用
    //因为private只有同class内部的function可以调用
    //protected可以
    //因为protected除了同class内部的function以外
    //还有可以被其子class的function调用
    this.honk();
  }
}
const car__ = new Car_(4,'red');
car__.drive();
car__.honk();


