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
    if(text.value=='giao'){
        giao.style.display='flex';
       
    }
    if(text.value=='thang'){
        thang.style.display='flex';
     
    }
    if(text.value=='can'){
        can.style.display='flex';
       
    }
}
