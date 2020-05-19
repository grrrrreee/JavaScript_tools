//04 Chapter 90 page, 04-2

import { reverse } from "dns";

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

// object_ex.2
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