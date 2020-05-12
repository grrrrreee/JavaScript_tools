//02 Chapter 37 page, 02-2
//변수 선언

//  변수만 선언하거나 선언 후 바로 값을 부여한다. 
var variable;
var variable2 = 1;

// 변수는 주로 Camel 표기법으로 표기함, 2개의 단어가 합성되어있으면 2번째 단어의 첫 글자는 대문자로
var camelBack;

// 변수를 선언하면 변수명으로 데이터를 저장할 수 있는 공간이 생김. 선언만 하면 NULL.
// 변수에 100이라는 값을 대입하면 변수에 100이 저장된다. 
var box; // 이때는 NULL (확인필요 NULL인지 undefined인지)
box=100; // 이때는 100

// 이미 선언된 변수에 새로운 값을 다시 선언하면 기존의 값은 없어지게 된다. 
box=30; // 이때는 100에서 30으로 바뀜.

// 문자형
// 문자형은 "" 안에다가 쓴다. 숫자라도 "" 안에 들어가면 string으로 취급받는다.
var string = "string";
var num_str = "100";
// 아래와 같이 태그를 걸 수도 있다. 
var tag = <h1>H1</h1>

// 숫자형 
// 숫자형은 숫자를 바로 넣어도 되고, Number(안에다) 선언할 수도 있다. 
var num1 = 100;
var num2 = Number("100");

// 논리형
// 논리형(Boolean)은 참(True)과 거짓(False)이 있다. 데이터 존재의 유무 및 조건에 대한 만족 유무를 확인할 때 사용된다.
var b1 = true;              // true
var b2 = 10>100;            // false
var b3 = Boolean("hello");  // true
var b4 = Boolean(0);        // false 0도 false 값을 반환한다.

// null & undefined 
var nd1; //undefined
var nd2 = hello;   //hello값 
nd2 = null;        //null값, 변수에 저장된 데이터를 비우고자 할 때 사용됨.

// typeof, 지정한 데이터 또는 변수에 저장된 자료형을 알 고 싶을 때 사용된다. 

var t1 = 100;
var t2 = "javascript";

document.write(typeof t1, "<br>");  //number
document.write(typeof t2, t2);      //string

