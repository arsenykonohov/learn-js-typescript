// ES+ features / ES+ features / ES+ features / ES+ features / ES+ features / ES+ features / ES+ features /


// // constant (readonly) over object descriptors:
// // typeScript ^2.x version
// const a:{readonly a: number, readonly b:number} = {a:1, b:3};


// // Enum:
// enum Size {
//     S,
//     L = 50,
//     XL = 52,
// }
// console.log(Size["S"]);
// console.log(Size[52]);
// console.log(Size);




// TYPES definition / TYPES definition / TYPES definition / TYPES definition / TYPES definition / TYPES definition /

// let myName: any = "Arseny";
// myName = {
//     a: 1
// };
// myName = 34588923421;

// let noVar: void;

// function a(): void {
//     console.log("no return type");
//     return;
// }

// let foo = 1234;
// // let bar: foo; // wrong way
// let bar: typeof foo; //we can catch type:

// let arr: number[];
// arr = [1, 564, 23, 3, 0]

// let arrArrObj: {name: string, id: number}[][]
// arrArrObj = [
//     [
//         {name: "string11",id: 234},
//         {name: "string12",id: 123}
//     ],
//     [
//         {name: "string21",id: 234},
//         {name: "string22",id: 123}
//     ]
// ]

// // TUPLE:
// let acouunt:[string,number];
// acouunt = ["name", 234];

// // FUNCTION:
// let calc: (a: number, b: number) => number;
// calc = function (a, b) {
//     return a + b;
// }



// TYPE ALIAS / TYPE ALIAS / TYPE ALIAS / TYPE ALIAS / TYPE ALIAS / TYPE ALIAS / TYPE ALIAS / TYPE ALIAS /
// type myType = {
//     x: string;
//     y?: myType;
// }
// let tp: myType = {
//     x: "string1",
//     y: {
//         x: "string2"
//     }
// }


// type newType = {
//     x: string;
//     y: string;
// }
// let ntp: newType = {
//     x: "a",
//     y: "b"
// }



// INTERFACE / INTERFACE / INTERFACE / INTERFACE / INTERFACE / INTERFACE / INTERFACE / INTERFACE /
// // you can implement type for context substance:
// interface iAcount {
//     name: string;
//     id: number;
//     getFrstName():this;
//     setScndName:()=>this;
// };

// let acouunt: iAcount = {
//     name: "string",
//     id: 12,
//     getFrstName: ()=>this,
//     setScndName: ()=>this
// }

// let acouunts: iAcount[] = [{
//     name: "string11",
//     id: 234,
//     getFrstName: ()=>this,
//     setScndName: ()=>this
// }]


// // but...
// // // interface should be a class-definition-feature, it's a main role:
// interface iClass {
//     name: string;
// };
// class MyClass implements iClass {
//     name: string;
//     constructor (h: number, m: number) {
//         // code here...
//     }
// };


// // multiple interface inheritance:
// interface IFirst {
//     greeting():void;
//     getName:()=>{first: string}; 
// }

// interface ILast {
//     greeting():void;
//     getName:()=>{last: string};
// }


// interface IFullName extends IFirst, ILast {
//     getName: () => {
//         first: string,
//         last: string
//     }
// }


// // interface readonly propertys:
// interface IA {
//     readonly a: string;
// }



// // interface declare merging:
// interface IA {
//     id: number;
// }

// let abc:IA = {
//     id: 234,
//     name: "string1",
//     items: ["asdfjk", "kdswon", "dkfine324"]
// }

// interface IA {
//     name: string;
// }

// interface IA {
//     items: string[];
// }



// GENERICS / GENERICS / GENERICS / GENERICS / GENERICS / GENERICS / GENERICS / GENERICS /
// Example #1:
function genericFoo<T,L>(title: T, list:L[]): {title: T, list: L[]} {
    return {
        title: title,
        list: list,
    };
}
genericFoo<string,string>("blabla", ["wow", "wow", "wow"]);
genericFoo<string,number>("blabla", [1234, 324, 0]);

// Example #2:
interface IRepo<T,TId>{
    getById(id:TId):T;
}


// Example #3:
interface IA<T extends {id:number, name: string}> {
    someProp:T;
}
// let a:IA<{id:number, isFemale:boolean>; // wrong way - Error
// we can extend our interface
let b:IA<{id:number, isFemale:boolean, name:string}> // right way





