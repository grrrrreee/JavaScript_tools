// 전체 선택기능
function checkAll(chk) {
    for(i=0; i<chk.length; i++){
        if(chk[i].checked == true){
            // chk[i].checked=false;
            chk[i].checked=true;
        }else{
            chk[i].checked = true;
        }
    }
}