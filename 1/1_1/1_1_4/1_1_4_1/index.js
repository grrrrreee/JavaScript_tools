// 체크된 박스들 개수를 반화하는 것
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