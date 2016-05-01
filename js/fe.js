/*===================================================



----------------------  FE.JS  ---------------------- 

	

===================================================*/



/*===================================================



----------------------  FEO  ----------------------- 



===================================================*/



var fe = 
{

	g : function(type,value)
	{
	
		switch(type)
		{

			case "i" : return document.getElementById(value);

			case "c" : return document.getElementsByClassName(value);

			case "t" : return document.getElementsByTagName(value);
		
			case "n" : return document.getElementsByName(value);

			case "s" : return document.querySelectorAll(value);

			default : alert("fe.g(type) is not valid");
		
		}

	},


	c : function(element)
	{

		return document.createElement(element);	

	},


	open : function(oElement)
	{

	 	oElement.style.display = "block";

	 	return true;

	},


	close : function(oElement)
	{

		oElement.style.display = "none";

		return false;

	},


	click : function(oElement)
	{

		if(oElement.style.display == "block") fe.close(oElement);

		else fe.open(oElement);

	},


	point : function(id,point,fun)
	{

		var elem  = fe.g("i",id);
		var start = innerHeight - point;
		
		if(start >= elem.getBoundingClientRect().top)
		{
			
			fun(elem);
			
		}
		
	}


};



/*-------- FE-SETTING --------*/


var fe_s = 
{

	loadSpeed : "0.8"

};


/*-------- FE-GLOBAL --------*/


var fe_g = 
{
	
	logoDeg : 0

}


/*-------- FE-EVENT-HANDLER --------*/


var fe_eh = 
{

	/*======== Main ========*/
	


	/* Click */

	

};


/*===================================================


	
------------------ FE-INIT  ---------------



===================================================*/


function fe_init () {
	
	var loader = fe.g("i","loader");
	
	loader.style.display = "none";


	/* Плавная загрузка страницы */


	var feWrapper              = fe.g("i","fe-wrapper");

	feWrapper.style.transition = "opacity " + fe_s.loadSpeed + "s";
	feWrapper.style.opacity    = "1";



	/*======== Пользовательские события ========*/
	
	
	if(screen.height < 800)
	{
		
		var headerLogo = fe.g("i","header_logo");
		
		headerLogo.style.padding = "25px 0px 22px";
		
	}
	
	
	
	// menu 

	
	/*---	
	headerLogo.addEventListener("mouseover",function()
	{
			
		 fe.close( fe.g("i","category"));
			
	});
	
	
	
	var smallMenuButtton = fe.g("i","small-menu-buttton"); 
	
	smallMenuButtton.addEventListener("click",function()
	{
			
		 fe.click( fe.g("i","menu-small"));
			
	});
	
	---*/
	
	var headerLogoImage = fe.g("i","header_logo_image");
	
	headerLogoImage.addEventListener("mouseover",function()
	{
		var value = fe_g.logoDeg + 360;
		headerLogoImage.style.transform = "rotate(" + value.toString() + "deg)";
		
		fe_g.logoDeg = fe_g.logoDeg + 360 ;
		
	});

}
	



