//04 Chapter 87 page, 04-1

/* 
자바스크립트는 객체 기반 언어이다.(object-oriented) 객체는 기능과 속성을 모두 가지고 있다. 
지금까지 사용해본 객체로는 도큐먼트가 있다. 그리고 그 객체의 기능 중 하나인 출력기능을 사용해보았다. 이러한 기능들은 method라고 불리운다. 
객체에는 또한 속성(Property)이 있다. 

코드 작성법은 아래와 같다. 
객체.메서드();
객체.속성; 객체.속성 = 값;

TV.켜다(); TV.끄다();

TV.전진()   -> 선언이 안되어있다면 옳지 않게 된다.
자동차.전진() -> 올바른 코드

TV.width; TV.color;
TV.color = black;

자바스크립트에 내장된 객체에는 2가지 종류가 있다.
브라우저 객체 모델(BOM, Browser Object Model) 그리고 문서 객체 모델(DOM, Document Object Model)이다.

내장된 객체들도 있다. 대표적으로는 문자(string), 날짜(date), 배열(array), 수학(math)등이 있다.
대표적으로 Date객체의 날짜를 알려주는 메서드 getDate()도 있다. 

브라우저 객체 모델은 브라우저에 계층 구조로 내장되어 있는 객체를 의미한다. 대표적으로는 window, screen, location, history, navigator가 있다. 
브라우저(window)는 document와 location 객체의 상위 객체이다.

현재 사이트에서 다른 사이트로 이동하기 위해서는 location 객체에 참조 주소(href)속성을 바꾸면 된다. 
window.location.href = "사이트 URL";

전체창이 window, 주소가 location 그리고 사이트 창 부분이 document이다.

문서 객체 모델 (DOM)은 HTML 문서 구조를 의미한다. 
HTML 문서 구조 최상단에는 html, 그 하위에는 head와 body가 있다. 

대표적으로 이미지의 src 속성을 바꿔야한다면. <img>를 선택하여 src 속성을 바꾼다. 
*/ 