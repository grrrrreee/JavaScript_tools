// 체크한 값들 모두 반환하는 방법
function send() {
    var result="";
    var box = document.getElementsByName("box")
    for(i=0; i<box.length; i++) {
        if (box[i].checked == true){
            result += box[i].value + "\n";
        }
    }

    if(result==""){
        console.log("선택된 항목이 없습니다.");
    }
    else{
        console.log(result);
    }
}