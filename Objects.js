class A {
    c = 10 ;
    add(a, b ){
        console.log(a + b);
    }
}
const a = new A();
a.add(10,20);
console.log(a.c);
const emp = {
    name : "tom",
    age : 21,
    hobby : "Swimming",
};
console.log(emp);
console.log(emp.name);
// keys
const k = Object.keys(emp);
console.log(k);
// values
console.log(Object.values(emp));
