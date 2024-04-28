class TsEmp{
    name :string;
    id : number;
    salary: number;
    address:any;

    constructor(name:string, id:number,salary:number,address:any){
        this.name = name;
        this.id = id;
        this.salary= salary;
        this.address = address;

    }
    displayInfo():void{
        console.log(this.name + " " + this.id + " " + this.salary + " "+ this.address );
    }

}

const a = new TsEmp("Panya", 1, 45000.00,"Vile Parle E"); 
console.log(a);
a.displayInfo();


class A {
    static a : number = 10;
    b : string ="xyz";
    static meth():void{
        console.log(A.a);
    }

    meth1():void{
        console.log(this.b);        
    }
}
const b = new A();
b.meth1();
A.meth();


abstract class B {
    meth():void{
        console.log("Non static");
    }
    static meth1():void{
        console.log("Staitc Method");

    }
    abstract meth2():void;

}
class C extends B{
    meth2(){

        console.log("abstract");

    }
}
const c = new C();
c.meth();
c.meth2();
C.meth1();


interface I {
    meth():void;
}
class D implements I{
    meth():void{
        console.log("abstract");
    }
}

const d = new D();
d.meth();


//generic

function meth<T>(a:T):T{
    return a;

}
let s = meth<number>(10);
console.log(s);
let s1 = meth<String>("Panya");
console.log(s1);