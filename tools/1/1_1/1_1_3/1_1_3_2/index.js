// 전체 해제기능
function uncheckAll(chk) {
    for(i=0; i<chk.length; i++){
        if(chk[i].checked == true){
            // chk[i].checked=false;
            chk[i].checked=false;
        }else{
            chk[i].checked = false;
        }
    }
}