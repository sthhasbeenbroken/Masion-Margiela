var iCount = 2;
window.onload = function (){
	    if(document.getElementById("a1")!=null){
	        document.getElementById("a1").onclick = function(){
	            iCount=1;
	            changebgcolor(iCount);}
	    }
	    if(document.getElementById("a2")!=null){
	        document.getElementById("a2").onclick = function(){
	            iCount=2;
	            changebgcolor(iCount);}
	    }
	    if(document.getElementById("a3")!=null){
	        document.getElementById("a3").onclick = function(){
	            iCount=3;
	            changebgcolor(iCount);}
	    }
	    if(document.getElementById("a4")!=null){
	        document.getElementById("a4").onclick = function(){
	            iCount=4;
	            changebgcolor(iCount);}
	    }
			    if(document.getElementById("a5")!=null){
		    document.getElementById("a5").onclick = function(){
		        iCount=5;
		        changebgcolor(iCount);}
		}
			    if(document.getElementById("a6")!=null){
		    document.getElementById("a6").onclick = function(){
		        iCount=6;
		        changebgcolor(iCount);}
		}
			    if(document.getElementById("a7")!=null){
		    document.getElementById("a7").onclick = function(){
		        iCount=7;
		        changebgcolor(iCount);}
		}
			    if(document.getElementById("a8")!=null){
		    document.getElementById("a8").onclick = function(){
		        iCount=8;
		        changebgcolor(iCount);}
		}
			    if(document.getElementById("a9")!=null){
		    document.getElementById("a9").onclick = function(){
		        iCount=9;
		        changebgcolor(iCount);}
		}
			    if(document.getElementById("a10")!=null){
		    document.getElementById("a10").onclick = function(){
		        iCount=10;
		        changebgcolor(iCount);}
		}
	    var iCarouselid = window.setInterval("carousel()", 2000);
	}
function carousel(){
	var simgsrc =eval("'images/show/b-ad'+iCount.toString()+'.jpg'");
	var sAchange=eval("'a'+iCount.toString()");
	var iA=iCount-1;
	if(iA==0){iA=10;}
	var sArestore =eval("'a'+iA.toString()");
	document.getElementById("banner").src=simgsrc;
	document.getElementById(sAchange).style.backgroundColor="gray";
	document.getElementById(sArestore).style.backgroundColor="black";
	iCount=iCount+1;
	if(iCount==11){iCount=1};
}

function changebgcolor(iNum){
    document.getElementsByClassName("banner").src=eval("'images/show/b-ad'+iNum.toString()+'.jpg'");
    for(var iC= 1;iC<=10;iC++){
        var sA=eval("'a'+iC.toString()");
        if(iC==iNum)
        {
            document.getElementById(sA).style.backgroundColor="gray";
        }
        else
        {
            document.getElementById(sA).style.backgroundColor="black";
        }
    }
}