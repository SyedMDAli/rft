$(document).ready(function(){
	/* The following code is executed once the DOM is loaded */
	
	$('.sponsorFlip').bind("click",function(){
		
		// $(this) point to the clicked .sponsorFlip element (caching it in elem for speed):
		
		var elem = $(this);
		
		// data('flipped') is a flag we set when we flip the element:
		
		if(elem.data('flipped'))
		{
			// If the element has already been flipped, use the revertFlip method
			// defined by the plug-in to revert to the default state automatically:
			
			elem.revertFlip();
			
			// Unsetting the flag:
			elem.data('flipped',false)
		}
		else
		{
			// Using the flip method defined by the plugin:
			
			elem.flip({
				direction:'lr',
				speed: 650,
				onBefore: function(){
					// Insert the contents of the .sponsorData div (hidden from view with display:none)
					// into the clicked .sponsorFlip div before the flipping animation starts:
					
					elem.html(elem.siblings('.sponsorData').html());
				}
			});
			
			// Setting the flag:
			elem.data('flipped',true);
		}
	});
	
});

$(document).ready(function() {
 $("#image4,#image1,#image3,#image2,#image5,#image6,#image7,#image8,#image9,#image10").rotate({ 
   bind: 
     { 
        mouseover : function() { 
            $(this).rotate({animateTo:360})
        },
        mouseout : function() { 
            $(this).rotate({animateTo:0})
        }
     } 
   
});
})

