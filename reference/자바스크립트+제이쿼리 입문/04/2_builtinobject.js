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

