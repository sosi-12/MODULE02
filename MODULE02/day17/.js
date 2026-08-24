function greet() {
    console.log("hello");
}
greet();
const double=(n)=> {
    return n*2;
}
function outer(){
    let animal="dog";
    function inner(){
        console.log(animal);
    }
    return inner;
}
let myfunction=outer();
myfunction();
function calculate(num1,num2,operation){
    return operation(num1,num2);
}
function add(num1,num2){
return num1+num2

}
function subtract(num1,num2){
    return num1-num2
}

console.log(calculate(20,30,add))
console.log(calculate(20,30,subtract))
