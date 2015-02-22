// JavaScript Document
function LettersWithSpaceOnly (evt) 
{
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
    ((evt.which) ? evt.which : 0));
    if (charCode > 32 && (charCode < 65 || charCode > 90) &&
        (charCode < 97 || charCode > 122)) {
            return false;
        }
    return true;
}
function LettersWithDigitOnly (evt) 
{
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
    ((evt.which) ? evt.which : 0));
    if ((charCode >= 48 && charCode <= 57) || (charCode==8) || (charCode==9)){
            return true;
        }
    return false;
}
function LettersWithDecimalOnly (evt) 
{
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
    ((evt.which) ? evt.which : 0));
    if ((charCode >= 48 && charCode <= 57) || (charCode==8) || (charCode==9) || (charCode==46)){
            return true;
        }
    return false;
}

function checkfreetrial()
{
	//var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	var frm=document.freetrialform;
	var name=frm.name;
	var mob=frm.mno;
	var city=frm.city;
	var terms=frm.terms;
		var chks = document.getElementsByName('product[]');
		var hasChecked1 = false;
		var hasChecked = false;
		for (var i = 0; i < chks.length; i++)
		{
		if (chks[i].checked)
		{
		hasChecked = true;
		break;
		}
		}
		
		if(name.value=='')
		{
			alert("Please Enter Conatct Name");
			name.focus();
			return false
		}
		else if(mob.value=='')
	   {
			alert("Please enter the mobile number");
			mob.focus();
			return false;
		}
	else if(mob.value.length<10 || mob.value.length>10 )
	   {
			alert("Please enter the 10 digit mobile number");
			mob.focus();
			return false;
		}
		
	else if(city.value=='')
	{
		alert("Please enter your city");
		city.focus();
		return false
	}
	else if (hasChecked == false)
{
alert("Please select at least one Product.");
return false;
}
 else if (terms.checked == false)
{
alert("Please select Term And Conditions.");
return false;
}
	else return true;	
}
function checkquery()
{
	//var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	var frm=document.queryform;
	var name=frm.name;
	var mob=frm.mno;
	var city=frm.city;
	var query=frm.query;
		if(name.value=='')
		{
			alert("Please Enter Conatct Name");
			name.focus();
			return false
		}
		else if(mob.value=='')
	   {
			alert("Please enter the mobile number");
			mob.focus();
			return false;
		}
	else if(mob.value.length<10 || mob.value.length>10 )
	   {
			alert("Please enter the 10 digit mobile number");
			mob.focus();
			return false;
		}
		
	else if(city.value=='')
	{
		alert("Please enter your city");
		city.focus();
		return false
	}
	else if(query.value=='')
	{
		alert("Please enter your Query");
		query.focus();
		return false
	}
		else return true;	
}
function checkpaynowform()
{
	//var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	var frm=document.paynow;
	var amount=frm.amount;
	var mob=frm.mno;
	var name=frm.name;
	var email=frm.email;
	var city=frm.city;
	var pincode=frm.pincode;
	if(amount.value=='')
		{
			alert("Please Enter Amount");
			amount.focus();
			return false
		}
		else if(mob.value=='')
	   {
			alert("Please enter the mobile number");
			mob.focus();
			return false;
		}
	else if(mob.value.length<10 || mob.value.length>10 )
	   {
			alert("Please enter the 10 digit mobile number");
			mob.focus();
			return false;
		}
		else if(name.value=='')
		{
			alert("Please Enter Conatct Name");
			name.focus();
			return false
		}
		else if(email.value=='')
		{
			alert("Please Enter Email Id");
			email.focus();
			return false
		}
	else if(city.value=='')
	{
		alert("Please enter your city");
		city.focus();
		return false
	}
	else if(pincode.value=='')
	{
		alert("Please enter your Pincode");
		pincode.focus();
		return false
	}
		else return true;	
}
function checkcustompay()
{
	//var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	var frm=document.custompay;
	var amount=frm.amount;
	if(amount.value=='')
		{
			alert("Please Enter Amount");
			amount.focus();
			return false
		}
		else
		{
			return true;
			}
}
function checkcustompayr()
{
	//var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	var frm=document.custompayr;
	var radios=frm.amount;
	for (var i = 0, len = radios.length; i < len; i++) {
         	 if (radios[i].checked) {
              return true;
          		}
     			}
				alert('please Select At least one');
    		 return false;
}
function checkclicktocall()
{
	//var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	var frm=document.clicktocall;
	var mob=frm.mno;
	if(mob.value=='')
	   {
			alert("Please enter the mobile number");
			mob.focus();
			return false;
		}
	else if(mob.value.length<10 || mob.value.length>10 )
	   {
			alert("Please enter the 10 digit mobile number");
			mob.focus();
			return false;
		}
		else 
		return true;
}
function checkclicktobank(frm)
{
	//var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	var mob=frm.mno;
	if(mob.value=='')
	   {
			alert("Please enter the mobile number");
			mob.focus();
			return false;
		}
	else if(mob.value.length<10 || mob.value.length>10 )
	   {
			alert("Please enter the 10 digit mobile number");
			mob.focus();
			return false;
		}
		else 
		return true;
}

