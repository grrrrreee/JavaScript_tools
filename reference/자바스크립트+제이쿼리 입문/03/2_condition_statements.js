//03 Chapter 61 page, 03-2

// 조건문은 조건식의 결과가 true, false 

/* 
**********
**********
**********
***if문***
**********
**********
**********
*/ 

/* 
if(조건식) {
    자바스크립트 코드; 
}
*/

// if_ex.1
var num= 10;
if(num<500){    //true 반환
    document.write("hello")''
}

// if_ex.2
if(0){      //false 반환
    document.write("hello");
}

// 조건에 따라 다른 결과 도출
// if_ex.3
var walkAmount = prompt("당신의 하루 걷는 양은 몇 보인가요?", "0");

if(walkAmount>=10000) {
    document.write("매우 좋은 습관을 지니고 계시는군요!!", "<br>");
} 

document.write("============The End============");

// if_ex.4, prompt의 뒤에 "0"을 넣어 답변이 숫자형임을 알 수 있다.
var min = prompt("당신의 하루 통화량은 몇 분인가요?", "0");
if(min >= 60) {
    document.write("많이 사용하는 편이네요", "<br>");
}
document.write("============The End============");

// 특정 값들이 조건식에 입력되면 false를 반환하게 된다. 
// 0, null, ""(빈문자), undefined 이 값들이 입력되면 false를 반환한다. 

var num = 3;
if(num) {   //3은 true를 반환한다.
    document.write(num);
}

var num = 0;
if(num) {   //0은 false를 반환한다.
    document.write(num);
}

// prompt의 뒤에 들어가는 부분은 0, "" 이다. 이들은 결국, false를 반환하는 값들이다. 
// userName에 아무 값을 넣지 않으면 false 즉, 아무것도 나타나지 않는다. 특정 값을 넣으면 그에 맞게 나타난다.
var userName = prompt("방문자의 이름은?", "");
if(userName) {
    document.write(userName + "님 반갑습니다! 방문을 환영합니다.");
}

/* 
**********
**********
**********
**else 문**
**********
**********
**********
*/ 

// else_ex.1
var num = prompt("당신이 좋아하는 숫자는?", "0");

if(num % 2 == 0) {      // 짝수일 경우에 실행
    document.write("당신이 좋아하는 숫자는 짝수입니다.");
} else {                // 홀수일 경우에 실행
    document.write("당신이 좋아하는 숫자는 홀수입니다.");
}

// else_ex.2
var result = confirm("정말로 회원을 탈퇴하시겠습니까?"); // 확인과 취소 둘 중 하나를 선택한다.

if(result) {    // 확인을 누르면 실행된다.
    document.write("탈퇴 처리되었습니다!");
} else {        // 취소를 누르면 실행된다. 
    document.write("탈퇴 취소되었습니다!");
}

/* 
**********
**********
**********
*else  if*
**********
**********
**********
*/ 

var mon = prompt("현재는 몇 월입니까?", "0");

if(mon >=9 && mon <=11) {               //9~11
    document.write("독서의 계절 가을이네요!!");
} else if (mon >=6 && mon <=8) {        //6~8
    document.write("여행가기 좋은 여름이네요!!");
} else if (mon >=3 && mon <=5) {        //3~5
    document.write("햇살 가득한 봄이네요!!");
} else {                                //나머지
    document.write("스키의 계절 겨울이네요!!");
}

// 중첩 if문
var id = "easy1004";
var pw = "112233";

var user_id = prompt("아이디는?", "");
var user_pw = prompt("비밀번호는?", "");
// id가 일치한 경우
if(id == user_id) {
    if(pw == user_pw) {
        document.write(user_id + "님 반갑습니다!");
    } else {
        //id는 일치하지만, 비밀번호는 아닌 경우
        alert("비밀번호가 일치하지 않습니다.");
        location.reload();
    }
// id가 일치하지 않은 경우
} else {
    alert("아이디가 일치하지 않습니다.");
    location.reload();
}