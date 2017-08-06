jQuery(function($) {
	jQuery.extend({
		clock : function clock(target){
            var now  = new Date();
            var year = now.getFullYear();
            var month = now.getMonth()+1;
            var date = now.getDate();
            var day = now.getDay();
            var hour = now.getHours();
            var min = now.getMinutes();
            var sec = now.getSeconds();

            if(month < 10) {
                month = "0" + month;
            }
            if(date < 10) {
                date = "0" + date;
            }
            if(hour < 10) {
                hour = "0" + hour;
            }
            if(min < 10) {
                min = "0" + min;
            }
            if(sec < 10) {
                sec = "0" + sec;
            }
            var time_str = year + " оны " + month + "-р сарын " + date + ", "  + hour + ":" + min + ":" + sec;

            target.text(time_str);
            setTimeout(function(){
                clock(target)
            },1000);
        }
	});

    //jQuery.clock(jQuery("#jquerytime"));
});

