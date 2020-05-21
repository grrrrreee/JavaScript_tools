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

