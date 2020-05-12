//02 Chapter 43 page, 02-3

var num1 = 15;
var num2 = 2;

var result;

// +, -, *, /는 각각 더하기 빼기 곱하기 나누기이다. %는 나머지이다. 
// result에는 계속 값이 덮여 쓰여지고 있다. 
result = num1 + num2;
document.write(result, "<br>");     //17
result = num1 - num2;
document.write(result, "<br>");     //13
result = num1 * num2;
document.write(result, "<br>");     //30
result = num1/num2;
document.write(result, "<br>");     //7.5
result = num1 % num2;
document.write(result, "<br>");     //1

// 문자형 더하기 
var t1 = "학교종이";
var t2 = " 땡땡땡 ";
var t3 = 8282;
var t4 = " 어서 모이자 ";
var result;

result = t1 + t2 + t3 + t4; // string 값들은 +를 하면 이어진다.
document.write(result);     // 학교종이 땡땡땡 8282 어서 모이자. 

//+=, -=, *=, /=, %= 연산자
//A+=B는 A = A+B, A-=B는 A = A-B, A*=B는 A = A*B, A/=B는 A = A/B, A%=B는 A = A%B 이다. 
var num1 = 10;
var num2 = 3;

num1 += num2; 
document.write(num1, "<br>");   // 10+3 = 13
num1 -= num2;                   // num1 = 13
document.write(num1, "<br>");   // 13-3 = 10
num1 *= num2;                   // num1 = 10
document.write(num1, "<br>");   // 10*3 = 30
num1 %= num2;                   // num1 = 30
document.write(num1, "<br>");   // 0, 30 나누기 3의 나머지는 0이다. 

//테두
var str = "<table border = '1'>";
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>";
document.write(str);

//증감 연산자
var num1 = 10;
var num2 = 20;

/* 
증감연산자 중 ++의 위치가 많은 것들에 차이를 낸다.
A = ++B; 이면 B값은 먼저 1이 증가하고, 그 값이 A에 적용된다. 
A = B++; 이면 B값이 먼저 A에 적용되고, 후에 B값은 1만큼 증가한다.
*/

num1--;
document.write(num1, "<br>");   //9

num1++;
document.write(num1, "<br>");   //10

result = num2++;
document.write(num1, "<br>");   //result : 20, num2 : 21

result = ++num2;
document.write(num1, "<br>");   //result : 22, num2 : 22

// 비교 연산자 
/* 
== 는 형태까지 따지지 않는다. 숫자 10과 문자 "10"이 같은 것으로 인식된다.
!= 는 형태까지 따지지 않는다. 숫자 10과 문자 "10"이 같은 것으로 인식되어 false를 반횐한다.
===는 형태까지 따진다. 숫자 10과 문자 "10"이 다른 것으로 인식된다. 
!==는 형태까지 따진다. 숫자 10과 문자 "10"이 다른 것으로 인식되어 true를 반환한다.
*/

var k = 10;
var m = "10";
k == 10;    // true
m == 10;    // true
k == m;     // true

k === 10;   // true
m === 10;   // false
k === m;    // false

var a = 10;
var b = 20;
var c = 30;
var f = "20";
var result;

result = a > b;
document.write(result, "<br>");     // false
result = a < b;
document.write(result, "<br>");     // true
result = a <= b;
document.write(result, "<br>");     // true
result = b == f;
document.write(result, "<br>");     // true
result = a != b;
document.write(result, "<br>");     // true
result = b===f;
document.write(result, "<br>");     // false

// 논리 연산자 
// ||, &&, !이 3가지가 주로 사용된다. ||는 or 연산자, &&는 and 연산자, !는 not 연산자이다. 

// 연산자의 다양한 종류가 있는데, 연산자에는 정해진 우선순위가 있다. 
// 1. () -> 2. 단항 연산자 ++. --. ! -> 3. 산술 연산자 *, /, %, +, - -> 4. 비교 연산자 >, >=, <, <=, ==, ===, !==, != -> 5. 논리 연산자 &&, || -> 6. 대입(복합 대입) 연산자 =, +=, -=, *=, /=, %=

var a = 10;
var b = 20;
var m = 30;
var n = 40;

var result;
result = a > b || b >= m || m > n;      // false || false || false
document.write(result, "<br>");         // false

result = a > b || b >= m || m <= n;     // false || false || true
document.write(result, "<br>");         // true, 1개라도 true면 최종 결과는 true

result = a <= b && b >= m && m <= n;    // true && false && true
document.write(result, "<br>");         // flase

result = a <= b && b <= m && m <= n;    // true && true && true
document.write(result, "<br>");         // true

result =!(a>b);                         // !false를 계산
document.write(result, "<br>");         // true

// 삼항 조건 연산자 
var a = 10;
var b = 3;
// (조건식) ? "A" : "B" 형식으로 작성된 상태에서 조건식의 결과가 true면 A, false면 B가 나오게 된다.
// 10 > 3 이 true이기 때문에 javascript가 결과로 나온다.
var result = a > b ? "javascript" : "hello";
document.write(result);

//prompt() 메서드
prompt("질문", "기본응답");
// 문자가 기본응답인 경우
var name = prompt("what is your name?", "");
// 숫자가 기본응답인 경우
var height = prompt("what is your height?", "0");
var weight = prompt("what is your weight?", "0");