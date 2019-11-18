$(document).ready(function(e) {

   

    function animatethis(targetElement, speed) {
        $(targetElement).animate({ marginLeft: "+=1500px"},
        {
            duration: speed,
            complete: function ()
            {
                targetElement.animate({ marginLeft: "-=1500px" },
                {
                    duration: speed,
                    complete: function ()
                    {
                        animatethis(targetElement, speed);
                    }
                });
            }
        });
    };
    
    animatethis($('#animate1'), 5000);
    animatethis($('#animate2'), 2000);
    animatethis($('#animate3'), 2000);
    animatethis($('#animate4'), 5000);

});
