//字面量
let a = '', b = "", c = '';//字符串字面量

/*
定义函数的的四种方式
*/

//函数声明
function sayHello() {
    console.log('hello,JavaScript');

}  //定义了一个函数字面量

//函数表达式
const sayHello = function () {
    console.log('hello,JavaScript');
};//匿名函数表达式
console.log(sayHello);
sayHello();

const sayHello = function sayHi() {
    console.log('hello,js');
}//命名的函数表达式

//function 构造函数,不推荐使用
const sayHello = new Function("console.log('hello,js)");

//ES6 新增的语法，箭头函数
const sayHello = () => { console.log('hello,js') };

sayHello();

const sayHello = function () {
    let a = 1, b = 2;
    let c = a + b;
    return;
};
console.log(sayHello());//undefined;

const sayHello = function () {
    let a = 1, b = 2;
    let c = a + b;
};
console.log(sayHello());//undefined;

const sayHello = function () {
    let a = 1, b = 2;
    let c = a + b;
    return c;
};
console.log(sayHello());//3;

//函数参数

const add = function (a, b) {
    return a + b;
}

let a = add(2, 3)
console.log(a);//5

const add = function (a, b) {
    return a + b;
};

let b = add1();
console.log(b);//nan=not a number,undefined+undefined

let b1 = 1;
b = Infinity;
b = -Infinity;

let b = 1;
b = b + null;

let b2 = add1();//只传递一个参数
console.log(b1);//nan

let b3 = add1(1, 2, 3, 4);
console.log(b3);//3

const add2 = function (a, b) {
    let a1 = arguments.length;
    console.log(a1);
    console.log(arguments[5]);
    return a + b;
};

let b4 = add2(1, 2, 2, 2, 3, 4);
console.log(b4);

const add3 = function () {
    let sum = 0;
    for (const i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
};
let b5 = add3(1, 2, 4, 5, 6, 7, 8);
console.log(b5);

const add=function(...number){
    let sum=0;
    for(const num of number){
        sum=sun+num;
    }
    return sum;
}
let a1=add(1,2,3);
console.log(a1);

//默认函数
const sayHi =function(studentName='js'){
    console.log(`hello,${studentName}`);
}
sayHi();
sayHi('Java');

//箭头函数
const add1=(...number)=>{
    let sum=0;
    for(const num of number){
        sum=sun+num;
    }
    return sum;
}

console.log(add1(1,2,3));

const add2=function(a,b){
    return a+b;
}

const add2=(a,b)=>a+b;

const add3=()=>{return 3;}

const add4=a=>a+1;
const add4=function(a){
    return a+1;
}

//callback
function dance(){
    console.log('');
}

function sing(song,callback){
    console.log('现在跳舞');
    if ((typeof callback) =='function'){
        callback();
    }
}
sing('回调',dance);

//改写函数表达式
const dance=function(){
    console.log('现在跳舞');
}

const sing=function(song,callback){
    console.log()
}

//改写成箭头函数版本
const dance=()=>{console.log('现在跳舞')}

const sing=(song,callback)=>{
    console.log()
    if ((typeof callback) =='function'){
        callback();
    }
}

//回调函数的应用
//1.数组排序 Array.sort()

const oArray=[1,10,2,11,9,8];
console.log(oArray.sort());

const num=(a,b)=>a,b;
console.log(oArray.sort)


//forEach

const color=['Red','Green','Blue'];

colors=['Red','Green','Blue'];
colors.forEach(
    (color,index)=>console.log('位置$(index)处的颜色为$(color)')
);

const oArray1=[1,2,3,4]
a=oArray1.forEach((color)=>console.log('$(color)'))

//map
const oArray2=[1,2,3,4];
const oArray3=oArray2.map((x)=>x+2);
console.log(oArray3);

//改写：
//无定义一个数组，然后得到一个新数组。
//新数组中每个元素都是旧函数中每个元素的平方，不用map的版本
const a1=[1,2,3]

let a2=[]

for(let i=0;i<a1.length;i++){

}

//map版本
let a1=[1,2,3];
let a2=a1.map((x)=>x*x);
console.log(a2)

const oArray1 = [1,2,3,4,5].reduce((acc,val) => acc + val);
console.log(oArray1);

const oArray1 = [1,2,3,4,5]

const oArray2 = oArray1.reduce(
    (acc,curVal) => acc + curVal
)
console.log(oArray2)

const oArray3 = [1,2,3,4,5].reduce((acc,val) => acc + val, 10);
console.log(oArray3)


const sentence = 'The quick brown fox jumped over the lazy dog';
const words = sentence.split(" ");
console.log(words);
const total = words.reduce((acc, word) => acc + word.length, 0);
console.log(total);

// filter
const a1 = [1,2,3,12,8];

const a2 = a1.filter((x)=> x%2 ===0);
console.log(a2);

console.log([1,2,3].map( x => x*x ).reduce((acc,x) => acc + x ))










