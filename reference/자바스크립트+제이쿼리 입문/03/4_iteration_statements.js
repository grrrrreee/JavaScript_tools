//03 Chapter 74 page, 03-4

import { readlink } from "fs";

/* 
**********
**********
**********
*  while *
**********
**********
**********
*/ 

/* 
var 변수 = 초기값;
while(조건식){
    자바스크립트 코드;
    증감식;
}
*/

// while_ex.1
var i = 1;
while(i<10){
    document.write("안녕하세요" + i, "<br />");
    i++;
}

document.write("==== The End ====");

// while_ex.2
var i = 1;
while(i<=30){
    // 1부터 30중에 2의 배수이자 6의 배수일 때만 i값을 출력헌다.
    if(i % 2 == 0 && i % 6 == 0) {
        document.write(i, "<br />");
    }
    i++;
}

// while_ex.3
var i = 20;
while(i>=10){
    if(i % 2 ==0){
        // 짝수는 파랑색으로 출력된다.
        document.write("<p class = 'blue'>" + i + "</p>");
    } else {
        // 홀수는 빨강색으로 출력된다.
        document.write("<p class = 'red'>" + i + "</p>");
    }
    i--;
}

/* 
**********
**********
**********
*do while*
**********
**********
**********
*/ 

/* 
var 변수 = 초기값;
do {
    자바스크립트 코드;
    증감식;
} while(조건식)
*/

// do while_ex.1
var i = 10;
do {
    // 중괄호 안에 있는 코드를 먼저 실행하고 그 후에 조건식을 검사한다.
    document.write("hello!");
} while(i < 3)

/* 
**********
**********
**********
**  for **
**********
**********
**********
*/ 

/* 
for(초깃값; 조건식; 증감식){
    자바스크립트 코드;
}
*/

// 실행순서 : 초깃값 -> 조건식 -> 자바스크립트 코드 -> 증감식 -> 조건식

// for_ex.1
for(var i = 1; i <= 10; i++){
    document.write("반복" + i, "<br>");
}

// for_ex.2
for(var i = 1; i <= 100; i++){
    if(i % 5 == 0 && i % 7 !=0) {
        document.write("<p class = 'red>" + i + "</p>");
    } else if (i % 7 == 0 && i % 5 != 0) {
        document.write("<p class = 'green>" + i + "</p>");
    } else if (i % 7 == 0 && i % 5 == 0) {
        document.write("<p class = 'aqua'>" + i + "</p>");
    }
}

/* 
**********
**********
**********
** break**
**********
**********
**********
*/

/* 
for(초깃값; 조건식; 증감식){
    break;
    자바스크립트 코드;
}
*/

// for_break_ex.1
for(var i=1; i <= 10; i++){
    if(i==6) break;
    document.write(i, "<br>");
}
document.write("===The End ===");

/* 
**********
**********
**********
*continue*
**********
**********
**********
*/

/* 
for(초깃값; 조건식; 증감식){
    continue;
    자바스크립트 코드;
}
*/

// for_continue_ex.1
for(var i = 0; i <= 10; i++) {
    if(i % 2 == 0) continue;
    document.write(i, "<br>");
}
document.write("=== The End ===");

/* 
**********
**********
**********
double for
**********
**********
**********
*/

/* 
for(초깃값; 조건식; 증감식){
    for(초깃값; 조건식; 증감식) {
        자바스크립트 코드;
    }
}
*/

// doule_for_ex.1
for(var i = 1; i <= 3; i++){
    for(var k = 1; k <= 2; k++){
        document.write(i + "행" + k + "열", "<br>");
    }
    document.write("<br>");
}