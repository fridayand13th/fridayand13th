var xacnhan= document.getElementById('but');
xacnhan.onclick = function(){
    var text = document.getElementById('nhap');
    var main = document.getElementById('maincontent');
    var thu = document.getElementById('thu');
    var fmain=  document.getElementById('showup');
    var giao = document.getElementById('giao');
    var thang = document.getElementById('thang');
    var can = document.getElementById('can');
    
    main.style.display='none';
   fmain.style.display='flex';
  
    if(text.value=='thu'){
        thu.style.display='flex';
       
    }
    else if(text.value=='giao'){
        giao.style.display='flex';
       
    }
    else if(text.value=='thắng'){
        thang.style.display='flex';
     
    }
    else if(text.value=='cần'){
        can.style.display='flex';
       
    }
    else{
        main.style.display='flex';
        fmain.style.display='none';
        tb.style.display='flex';
    }
}
var text = document.getElementById('nhap');
    text.onclick=function(){
        var tb= document.getElementById('tb');
        tb.style.display='none';
    }
