function GetRequest(txt = location.search) { 
   var url = txt; //获取url中"?"符后的字串
   var theRequest = new Object(); 
   if (url.indexOf("?") != -1) { 
      var str = url.substr(1); 
      strs = str.split("&"); 
      for(var i = 0; i < strs.length; i ++) { 
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
      } 
   } 
   return theRequest; 
};
function loadXMLDoc(url)
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
};
