function showMenu(){
    var showbtn=document.getElementsByClassName('collapse-btn');
    var cancelbtn=document.getElementsByClassName('cancel-btn');
    var links=document.getElementsByTagName("ul");
    links[0].style.display="block";
    links[0].style.textAlign="left";
    var item=document.getElementsByClassName('link-item');
    for(var i=0; i<item.length; i++){
        item[i].style.display="block";
    }
    
    showbtn[0].style.display="none";
    cancelbtn[0].style.display="inline";
}

function closeMenu(){
    var showbtn=document.getElementsByClassName('collapse-btn');
    var cancelbtn=document.getElementsByClassName('cancel-btn');
    var links=document.getElementsByTagName("ul");
    links[0].style.display="none";
    cancelbtn[0].style.display="none";
    showbtn[0].style.display="inline";
}