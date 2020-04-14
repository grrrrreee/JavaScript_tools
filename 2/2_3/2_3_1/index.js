var bDisplay = true;
function doDisplay(){
    var con = document.getElementById("myDIV");
    if(con.style.display=='none'){
        con.style.display = 'block';
    }else{
        con.style.display = 'none';
    }
}