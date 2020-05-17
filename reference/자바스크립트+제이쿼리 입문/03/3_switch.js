//03 Chapter 72 page, 03-3

//switch는 if와 그 용도나 실행법이 비슷하다. 차이점은 if는 만족하는 데이터가 여러 개일 경우에 주로 사용하고, switch는 여러 경우의 값 중 일치하는 데이터를 찾아 그에 해당하는 코드를 실행시킬 때 사용한다. 

/* 

var 변수 = 초기값; 

switch(변수) {
    case 값1 : 코드1; 
    break;

    case 값2 : 코드2;
    break;

    case 값3 : 코드3;
    break;

    case 값4 : 코드4;
    break;

    //값 1,2,3,4 중 일치하는 것이 없다면 default의 코드 5가 항상 실행된다.
    default: 코드 5;
}

*/

var site = prompt("네이버, 다음, 네이트, 구글 중 즐겨 사용하는 포털 검색 사이트는?", "");
var url;

switch(site) {
    case "구글": url = "www.google.com";
    break;
    case "다음": url = "www.daum.net";
    break;
    case "네이버": url = "www.naver.com";
    break;
    case "네이트": url = "www.nate.com";
    break;
    default: alert("보기 중에 없는 사이트입니다.");
}

if(url) location.href = "http://" + url;