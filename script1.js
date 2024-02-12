function Vehcile(numWheels , price){
    this.numWheels = numWheels;
    this.price = price;
    // this.getPrice = function(){
    //     return this.price;
    // }
    // this.setPrice = function(price){
    //     return this.price = price;
    // }
}
Vehcile.prototype.getPrice = function(){
  
         return this.price;
}
Vehcile.prototype.setPrice = function(price){
    return this.price = price;
}
var v1 = new Vehcile(2,100000000);
var v2 = new Vehcile(4,242342525);
console.log(v1.__proto__);
console.log(v1.__proto__ === Vehcile.prototype);
console.log(Object.getPrototypeOf(v1));
console.log(Object.getPrototypeOf(v1)===Vehcile.prototype);
console.log(Vehcile.hasOwnProperty('getPrice'));
console.log(Vehcile.prototype.isPrototypeOf(v1));