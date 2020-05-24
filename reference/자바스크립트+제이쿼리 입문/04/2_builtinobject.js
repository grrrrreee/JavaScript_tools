//04 Chapter 90 page, 04-2

//대표적인 내장 객체로는 문자(string), 날짜(Date), 배열(Array), 수학(Math) 그리고 정규 표현 객체(RegExp Object)등이 있다.

// 아래는 내장 객체를 생성하는 기본형이다. 객체를 생성할 때는 new라는 키워드와 생성함수를 사용한다. 

// 참조 변수(인스턴스 이름) = new 생성 함수()

// object_ex.1
var tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function() {
    document.write("tv 색상: " + this.color, "<br>" );
    document.write("tv 가격: " + this.price, "<br>");
}

var car = {
    color : "black",
    price : 50000000,
    info : function() {
        document.write("car 색상: " + this.color, "<br>");
        document.write("car 가격: " + this.color, "<br>");
    }
};

document.write("<h1> tv 객체 메서드 호출 </h1>");
tv.info();
document.write("<h1>car 객체 메서드 호출</h1>");
car.info();

/* 
**********
**********
**********
***date***
**********
**********
**********
*/

// 날짜 정보 객체 만들기 
// 먼저 날짜 객체(Date Object)를 생성한다. 대표적으로 개막일이나, D-day 설정 등을 할 수 있다. 

/*
참조 변수 = new Date(); var t = new Date();
참조 변수 = new Date("연/월/일"); var t = new Date("2002/5/31");
참조 변수 = new Date(연, 월-1, 일); var t = new Date(2002,4,31);
*/


/* 
getFullYear()      : 연도 정보를 가져옴                             setFullYear()       : 연도 정보만 수정함
getMonth()         : 월 정보를 가져옴(현재 월-1)                     setMonth()          : 월 정보만 수정힘(월 - 1)
getDate()          : 일 정보를 가져옴                              setDate()           : 일 정보만 수정
getDay()           : 요일 정보를 가져옴(일 : 0 ~ 토 : 6)   날짜에 따라서 자동으로 요일은 바뀜, setDay()는 없음.
getHours()         : 시 정보를 가져옴                              setHours()          : 시 정보를 수정함
getMinutes()       : 분 정보를 가져옴                              setMinutes()        : 분 정보를 수정함
getSeconds()       : 초 정보를 가져옴                              setSecondss()       : 초 정보를 수정함
getMilliseconds()  : 밀리 초 정보를 가져옴                          setMilliseconds()   : 밀리 초 정보를 수정함
getTime()          : 1970년 1월 1일부터 경과한 시간을 밀리초로 표기함    setTime()           : 1970년 1월 1일부터 경과한 시간을 밀리초로 수정함
toGMTString()      : GMT 표준 표기 방식으로 문자형 데이터로 반환함       toLocateString()    : 운영 시스템 표기 방식으로 문자형 데이터로 반환함
*/

// date_ex.1
var today = new Date();
var nowMonth = today.getMonth(),
nowDate = today.getDate(),
nowDay = today.getDay();

document.write("<h1>오늘 날짜 정보</h1>");
document.write("현재 월: " + nowMonth, "<br>");
document.write("현재 일: " + nowDate, "<br>");
document.write("현재 요일: " + nowDay, "<br>");

var worldcup = new Date(2002,4,31);
var theMonth = worldcup.getMonth(),
theDate = worldcup.getDate(),
theDay = worldcup.getDay();

document.write("<h1>월드컵 날짜 정보</h1>");
document.write("2002월드컵 몇 월: " + theMonth, "<br>");
document.write("2002월드컵 몇 일: " + theDate, "<br>");
document.write("2002월드컵 몇 요일: " + theDay, "<br>");

// 남은 시간이나 일수를 구하는 것 역시 가능합니다. 남은 일수는 밀리초(1/1000)단위로 계산한다.
// 남은 일 수(밀리초) = 특정 날짜 객체 - 햔제 닐찌 객체 

/*
1초 = 1000(msc)
1분(60초)= 1000 * 60
1시간(60분)= 1000 * 60 * 60
1일 (60분*24) = 1000 * 60 * 60 * 24 
*/

// date_ex.2
var today = new Date();
var nowYear = today.getFullYear();

var theDate = new Date(nowYear, 11, 31);
var diffDate = theDate.getTime() - today.getTime();

var result = Math.ceil(diffDate / (60*1000*60*24));
document.write("연말 D-day" + result + "일 남았습니다.");

/* 
**********
**********
**********
***math***
**********
**********
**********
*/

/* 
Math.abs(숫자) : 숫자의 절댓값을 반환합니다.
Math.max(숫자 1, 숫자 2, 숫자 3, 숫자 4) : 숫자 중 가장 큰 값을 반환합니다. 
Math.min(숫자 1, 숫자 2, 숫자 3, 숫자 4) : 숫자 중 가장 작은 값을 반환합니다.
Math.pow(숫자, 제곱값) : 숫자의 거듭제곱값을 반환합니다.
Math.random() : 0~1 사이의 난수를 반환합니다.
Math.round(숫자) : 소수점 첫째 자리에서 반올림하여 정수를 반환합니다.
Math.ceil(숫자) : 소수점 첫째 자리에서 무조건 올림하여 정수를 반환합니다.
Math.floor(숫자) : 소수점 첫째 자리에서 무조건 내림하여 정수를 반환합니다.
Math.sqrt(숫자) : 숫자의 제곱근값을 반환합니다.
Math.PI : 원주율 상수를 반환합니다.
*/

// math_ex.1
var num = 2.1234;
var maxNum = Math.max(10,5,8,30),
minNum = Math.min(10,5,8,30),
roundNum = Math.round(num),
floorNum = Math.floor(num),
ceilNum = Math.ceil(num),
rndNum = Math.random(),
piNum = Math.PI;

document.write(maxNum, "<br>");
document.write(minNum, "<br>");
document.write(roundNum, "<br>");
document.write(floorNum, "<br>");
document.write(ceilNum, "<br>");
document.write(rndNum, "<br>");
document.write(piNum, "<br>");

// 0 ~ 10 사이의 난수를 반환하는 방법은 아래에 있다. 
Math.random()*10; // 0 ~ 1을 반환하는 Math.random에 10을 곱하여 결과물을 반환한다.

// 0 ~ 10 사이 중 정수로만 난수를 반환하기 위해서는 floor()를 이용한다. floor() 메서드는 값을 내리기 때문에 11을 사용한다.
Math.floor(Math.random()*11); // 0부터 10까지 난수를 발생한 후에 내림으로 소수점 값을 제거
Math.floor(Math.random()*31); // 0부터 30까지 정수로 난수를 발생시킴.
Math.floor(Math.random()*31)+120; // 120부터 150까지 정수로 난수를 발생시킴.

// Math.floor(Math.random()*(최댓값 - 최솟값+1))+최솟값;

// math_ex.2
document.write("<h1>컴퓨터 가위, 바위, 보 맞추기</h1>");

var game = prompt("가위, 바위, 보 중 선택하세요?", "가위");
var gameNum;
switch(game) {
    case "가위":
            gameNum = 1; break;
    case "바위":
            gameNum = 2; break;
    case "보":
            gameNum = 3; break;
    default: alert("잘못 작성했습니다.");
        location.reaload();
}

var com = Math.ceil(Math.random() * 3);

document.write("<img src=\"images/math_img_" + com + ".jpg\" >");

if(gameNum == com) {
    document.write("<img src=\"images/game_1.jpg\">");
} else {
    document.write("<img src=\"images/game_2.jpg\">");
}

/* 
**********
**********
**********
array object
**********
**********
**********
*/

/* 
var 참조 변수 = new Array();
참조 변수[0]= 값 1; 참조 변수[1] = 값 2; 참조 변수[2] = 값 3; .... 참조 변수[n-1] = 값 n;
var 참조 변수 = new Array(값 1, 값 2, 값 3, ... 값 n);
var 참조 변수 = [값 1, 값 2, 값 3, ... 값 n];
*/

// array object ex.1
var d = new Array();
d[0] = 30;
d[1] = "따르릉";
d[2] = true;

// array object ex.2
var d = new Array(30, "따르릉", true);

// array object ex.3
var d = [30, "따르릉", true];

// 배열 객체에 저장된 데이터를 불러올 때는 아래와 같은 기본형을 사용한다. 
// 참조 변수[인덱스 번호];

// array oject ex.4
var arr = [30, "따르릉", true];

document.write("<h3>배열값 가져오기 - 1</h3>");
document.write(arr[0], "<br>");
document.write(arr[1], "<br>");
document.write(arr[2], "<br>");

document.write("<h3>배열값 가져오기 - 2</h3>");
for(var i = 0; i < arr.length ; i++) {
    document.write(arr[i], "<br>");
}

document.write("<h3>배열값 가져오기 - 3</h3>");
for(i in arr) {
    document.write(arr[i], "<br>");
}

/*
join(연결 문자)              : 배열 객체의 데이터를 연결 문자 기준으로 1개의 문자형 데이터로 반환합니다.
reverse()                  : 배열 객체의 데이터 순서를 거꾸로 바꾼 후 반환합니다.
sort()                     : 배열 객체의 데이터를 오름차순으로 정렬합니다.
slice(index1, index2)      : 배열 객체의 데이터 중 원하는 인덱스 구간만큼 잘라서 배열 객체로 가져옵니다.
splice()                   : 배열 객체의 지정 데이터를 삭제하고 그 구간에 새 데이터를 삽입할 수 있습니다.
concat()                   : 2개의 배열 객체를 하나로 결합니다.
pop()                      : 배열에 저장된 데이터 중 마지막 인덱스에 저장된 데이터를 삭제합니다.
push(new data)             : 배열 객체의 마지막 인덱스에 새 데이터를 삽입합니다.
shift()                    : 배열 객체에 저장된 데이터 중 첫 번째 인덱스에 저장된 데이터를 삭제합니다.
unshift(new data)          : 배열 객체의 가장 앞의 인덱스에 새 데이터를 삽입합니다.
length                     : 배열에 저장된 총 데이터의 개수를 반환합니다.
*/

// array object ex.5
var arr_1 = ["사당", "교대", "방배", "강남"];
var arr_2 = ["신사", "압구정", "옥수"];

var result = arr_1.join("-");
console.log(result);        // 사당-교대-방배-강남

result = arr_1.concat(arr_2);
console.log(result);        // 사당, 교대, 방배, 강남, 신사, 압구정, 옥수

result = arr_1.slice(1, 3);
console.log(result);        // 교대, 방배

arr_1.sort();
console.log(arr_1);         // 강남, 교대, 방배, 사당

arr_2.reverse();
console.log(arr_2);         // 옥수, 압구정, 신사

// array object ex.6
var greenArr = ["교대", "방배", "강남"];
var yellowArr = ["미금", "정자", "수서"];

greenArr.splice(2, 1, "서초", "역삼");
console.log(greenArr);          // 교대, 방배, 서초, 역삼, 2 즉, 3번째 요소부터 새로운 요소들을 넣는다.

var data1 = yellowArr.pop();    // 수서를 data1에 넣고 제거함.
var data2 = yellowArr.shift();  // 미금을 data2에 넣고 제거함.

yellowArr.push(data2);          // 미금을 마지막에 넣기
console.log(yellowArr);         // 정자, 미금

yellowArr.unshift(data1);       // 수서를 제일 앞에
console.log(yellowArr);         // 수서, 정자, 미금

/* 
**********
**********
**********
string object
**********
**********
**********
*/

// 묹열 객체는 문자형 데이터를 객체로 취급하는 것으로, 가장 많이 사용되는 것이다. 

/* 
문자열 객체를 생성하는 기본형은 아래와 같이 new 키워드와 String() 메서드를 사용한다.

var 참조 변수 = new String(문자형 데이터)
var t = new String("hello javascript");

var 참조 변수 = 문자형 데이터
var t = "hello javascript";
*/ 

/*
charAt(index)                 : 문자열에서 인덱스 번호에 해당하는 문자를 반환함. var str = "web he she"; str.charAt(2); <- "b"를 반환함.
indexOf("찾을 문자")            : 문자열에서 왼쪽부터 찾을 문자와 일치하는 문자를 찾아 제일 먼저 일치하는 문자의 인덱스 번호를 반환함. 만일 찾는 문자가 없으면 -1을 반환함. var str = "web he she he"; str.indexOf("he"); <- 4를 반환함.
lastIndexOf("찾을 문자")        : 문자열에서 오른쪽부터 찾을 문자와 일치하는 문자를 찾아 제일 먼저 일치하는 문자의 인덱스 번호를 반환함. 만일 찾는 문자가 없으면 -1을 반환함. var str = "web he she he"; str.lastIndexOf("he"); <- 11을 반환함.
match("찾을 문자")              : 문자열에서 왼쪽부터 찾을 문자와 일치하는 문자를 찾아 제일 제일 먼저 찾은 문자를 반환함. 만일 찾는 문자가 없으면 null을 반환함. var str = "web he she he"; str.match("boy"); <- null을 반환함.
replace("바꿀 문자", "새 문자")   : 문자열에서 왼쪽부터 바꿀 문자와 일치하는 문자를 찾아 제일 먼저 찾은 문자를 새 문자로 치환함. var str = "web he she"; str.replace("web", "html"); "htnk he she"를 반환함.
search("찾을 문자")             : 문자열에서 왼쪽부터 찾을 문자와 일치하는 만자를 찾아 제일 먼저 일치하는 인덱스 번호를 반환함. var str = "web he she"; str.search("he"); <- 4를 반환함.
slice(a, b)                   : a개의 문자를 자르고 b번째 이후에 문자를 자른 후 남은 문자를 반환함. var str = "hello javascript" str.slice(3,7); <- "lo j"를 반환함 str.slice(3,7);은 문자열에서 3글자 "hel"까지 자르고 7번째 이후 글자인 "j" 이후부터 "avascript"를 나머지 "lo j"를 반한홤. var str = "hello javascript" str.slice(3, -3); <- "llo javascr"를 반환함. 여기에서 -1은 뒤에서부터 첫 번째 글자를 가리킴.
substring(a, b)               : a 인덱스부터 b 인덱스 이전 구간의 문자를 반환함. var str = "hello javscript" str.substring(3,7); <- "lo j"를 반환함. var str = "hello javscript" str.substring(3, -3) <- "hel"을 반환함. 여기에서 -3은 인덱스 0을 가리킴. 그러므로 인데스 0부터 인데스 3 이전 구간의 문자를 반환함.
substr(a, 문자 개수)            : 문자열에 a 인덱스부터 지정한 문자 개수만큼 문자열을 반환함, var str = "hello javascript" str.substring(3, 2); <- "lo"를 반환함 str.str(3,2);은 문자열에서 인덱스 3인 "l"부터 2글자를 가져와서 "lo"를 반환합니다.
split("문자")                  : 지정한 문자를 기준으로 문자 데이터를 나누어 배열에 저장하여 반환함. var str = "webmobilek2002"; var arr = str.split("k");
toLowerCase()                 : 문자열에서 영문 대문자를 모두 소문자로 바꿈. var str = "ABC"; str.toLowerCase(); <- "abc"를 반환함
toUpperCase()                 : 문자열에서 영문 소문자를 모두 대문자로 바꿈. var str = "abc"; str.toUpperCase(); <- "ABC"를 반환함
length                        : 문자열에서 문자의 개수를 반환함. var str = "hello welcome"; str.length <- 13을 반환함.
concat("새로운 문자")            : 문자열에 새로운 문자열을 결합합니다. var str = "hello"; str.concat("web"); <- "hello web"을 반환함.
charCodeAt(index)             : 문자열 index에 해당 문자의 아스키 코드값을 반환합니다. var str = "ABC", str.charCodeAt(0) <- "A"의 아스키 코드값 65를 반환함. 
fromCharCode(아스키 코드 값)     : 아스키 코드값에 해당하는 문자를 반환함. String.fromCharCode(65); <- "A"를 반환함.
trim()                        : 문자의 앞 또는 뒤에 공백 문자열을 삭제함. (" hello" -> "hello") str = "hello", str.trim(); <- 공백이 제거된 "hello"를 반환함. 
*/

var t = "Hello Thank you good luck to you";
document.write(t.charAt(16), "<br/>");                  // 16 즉, 17번째(빈칸포함) 글자인 g를 반환한다. 
document.write(t.indexOf("you"), "<br/>");              // 첫 you의 시작은 13번째 즉, 인덱스가 12가 반환된다.

document.write(t.indexOf("you", 16), "<br/>");          // 16 즉, 17번째(빈칸포함) 이후에 첫 you는 30번째 즉, 인덱스가 29가 반환된다.
document.write(t.lastIndexOf("you"), "<br/>");          // 뒤에서부터 보이는 첫 you는 30번째 즉, 인덱스 29가 반환된다. 
document.write(t.lastIndexOf("you", 25), "<br/>");      // 인덱스 25 즉, 26번째 문자 기준으로 가장 첫 왼쪽에 있는 you의 위치 13번째 즉, 인덱스 12가 반환된다.
document.write(t.match("luck"), "<br/>");               // 문자열 앞에서부터 luck과 일치하는 문자열을 반환함.
document.write(t.search("you"), "<br/>");               // 문자열 앞에서부터 제일 먼저 발견된 "you"의 인덱스 값을 반환함. -> 12
document.write(t.substr(21, 4), "<br/>");               // 문자열 인덱스 21 즉, 22번째 글자부터 4개의 글자를 가져옴 -> luck
document.write(t.substring(6, 12), "<br/>");            // 문자열 인덱스 6부터 12 즉, 7번째 글자부터 13번째 글자를 가져옴 -> Thank
document.write(t.replace("you", "me"), "<br/>");        // 문자열 왼쪽에서부터 제일 먼저 발견된 "you"를 "me"로 치환함. 
document.write(t.toLowerCase(), "<br/>");               // 문자열의 영문자가 모두 소문자로 바뀐 문자열을 반환함.
document.write(t.toUpperCase(), "<br/>");               // 문자열의 영문자가 모두 대문자로 바뀐 문자열을 반환함.
document.write(t.length, "<br/>");                      // 문자열의 문자 총 개수를 반환함. 이때 공백도 문자로 취급함 -> 32

var s = t.split(" ");                                   // 공백 문자를 기준으로 문자를 분리함. 분리된 문자열은 배열에 저장되어 s에 할당.

document.write(s[0], "<br/>");                          // s의 인덱스 0에 저장된 문자열을 출력함. -> "Hello"
document.write(s[4], "<br/>");                          // s의 인덱스 4에 저장된 문자열을 출력함 -> "luck"

var str = "A";
var t = str.charCodeAt(0);                              // 문자에 저장된 문자열 중 0번 인덱스의 문자 "A"의 아스키 코드값을 반환함.

document.write(t);                                      // "A"의 아스키 코드값 65를 출력함.
document.write(String.fromCharCode(65), "<br/>");       // 코드값 65에 해당하는 문자를 반환함. 