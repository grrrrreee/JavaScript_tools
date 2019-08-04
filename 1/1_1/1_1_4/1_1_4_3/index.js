// 체크된 박스들 개수를 반환하고 보여주는 것
function send() {
    var count =0;
    var box = document.getElementsByName("box")
    for(i=0; i<box.length; i++) {
        if(box[i].checked == true) {
            count ++;
        }
    }
    console.log(count);
}

function send2() {
    var count =0;
    var box = document.getElementsByName("box")
    for(i=0; i<box.length; i++) {
        if(box[i].checked == true) {
            count ++;
        }
    }
    document.write ("최종 결과는 : " + count);
}