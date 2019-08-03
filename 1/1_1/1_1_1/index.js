// 체크, 언체크 할 때마다 알람 뜸 즉, 상태가 변할때마다 console.log 가 실행됨
function check() {
    var chk = document.getElementsByName("box");
    if (chk.checked = true) {
        console.log("checked");
    }
}