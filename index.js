function fa(){ 
    if(username.value=="" || psssword.value==""){ 
    f() 
    document.getElementById("username").style.border="3px solid red" 
    document.getElementById("password").style.border="3px solid red" 
    bt.value="Enter credentials" 
    } 
    else{ 
    document.getElementById("username").style.border="3px solid green" 
    document.getElementById("password").style.border="3px solid green" 
    bt.value="Login" 
    bt.style.left="120px"; 
    } 
    } 
    flag=1 
    function f(){ 
    if(flag==1){ 
    bt.style.left="210px" 
    flag=2 
    } 
    else if(flag==2){ 
    bt.style.left="80px" 
    flag=1 
    } 
    } 