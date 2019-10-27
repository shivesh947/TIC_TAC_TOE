if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
      console.log('Service worker registered!');
    });
}


	num=0;
	function fun(a)
	{
		
		if(num%2==1)
		{
			num++;
			document.getElementById(""+a).value ="X";
			document.getElementById("sund").play();
	        document.getElementById(""+a).disabled = true;
	    }
	    else
	    {
	     num++;
	     document.getElementById(""+a).value ="0";
	     document.getElementById("sund").play();
	     document.getElementById(""+a).disabled = true;
	    }

	    if(document.getElementById("win").value==" ")
	    	{
	    		checkwin();
	    	} 
	    	if(num==9)
	    	{
	    		checkwin();
	    	}
	}
	function checkwin()
	{
		var count;
		count=0;
		var ch1=document.getElementById("11").value;
	    var ch2=document.getElementById("12").value;
	    var ch3=document.getElementById("13").value;
	    var ch4=document.getElementById("21").value;
	    var ch5=document.getElementById("22").value;
	    var ch6=document.getElementById("23").value;
	    var ch7=document.getElementById("31").value;
	    var ch8=document.getElementById("32").value;
	    var ch9=document.getElementById("33").value;
	   
	    if (ch1==ch2&&ch1==ch3) 
	    {
	    	if(ch3=="X"||ch3=="0")
	    	{document.getElementById("win").value="win "+ch3+"";
	        count=1;
	         gameover();}
	    }
	    if(ch4==ch5&&ch4==ch6)
	    {
	    	if(ch5=="X"||ch5=="0")
	    	{document.getElementById("win").value="win "+ch5+"";
	        count=1;
	         gameover();}
	    }
	    if(ch7==ch8&&ch7==ch9)
	    {	
	    	if(ch8=="X"||ch8=="0")
	        {document.getElementById("win").value="win "+ch8+"";
	        count=1;
	         gameover();}
	    }
	    if(ch1==ch4&&ch1==ch7)
	    {
	    	if(ch4=="X"||ch4=="0")
	    	{document.getElementById("win").value="win "+ch4+"";
	        count=1;
	         gameover();}
	    }
	    if(ch2==ch5&&ch2==ch8)
	    {
	    	if(ch5=="X"||ch5=="0")
	    	{document.getElementById("win").value="win "+ch5+"";
	         count=1;
	          gameover();}
	    }
	    if(ch3==ch6&&ch3==ch9)
	    {
	    	if(ch6=="X"||ch6=="0")
	    	{document.getElementById("win").value="win "+ch6+"";
	        count=1;
	         gameover();}
	    }
	    if(ch1==ch5&&ch1==ch9)
	    {
	    	if(ch5=="X"||ch5=="0")
	    	{document.getElementById("win").value="win "+ch5+"";
	        count=1;
	        gameover();}
	    }
	    if(ch3==ch5&&ch3==ch7)
	    {
	    	if(ch5=="X"||ch5=="0")
	    	{document.getElementById("win").value="win "+ch5+"";
	        count=1;
	        gameover();}
	    }
	   
	    if(num>=9)
	    {
	    	if(count==0)
             {
	    		document.getElementById("win").value="Draw";
	    		document.getElementById("winner").play();
	    		num=1;
             }
	    }
	    if(num>3)
	    {
	    	if(document.getElementById("win").value=="win X"||document.getElementById("win").value=="win 0")
	    	document.getElementById("winner").play();
	    } 
	}
	function restart()
	{
		document.getElementById("gamestart").play();
		var ar=['11','12','13','21','22','23','31','32','33'];
		for(i=0;i<9;i++)
		{	
		document.getElementById(""+ar[i]).value =" ";
	    document.getElementById(""+ar[i]).disabled = false;
       	}
       	document.getElementById("win").value =" ";
       	num=0;  
	}
	function gameover()
	{
		var ar=['11','12','13','21','22','23','31','32','33'];
		for(i=0;i<9;i++)
		{	
	    document.getElementById(""+ar[i]).disabled = true;
       	} 
	}

	