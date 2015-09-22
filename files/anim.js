$(document).ready(function(){
            //window.setInterval(countdown_tick, 1000);
            $(".tooltip_trigger").mouseover(function(event) {
            
                // set the tooltip HTML contents
                content = "";
                if ($(event.target).attr('data-tooltip-value')) {
                    content = $(event.target).data('tooltip-value');
                } else {
                    content = $('#' + $(event.target).data('tooltip')).html();
                }
                
                $tooltip.html(content);
                $tooltip.show();
            });

            $(".tooltip_trigger").mousemove(function(e) {
                // set the positioning with offset
                x = e.pageX;
                y = e.pageY;

                x_over = 0;//(x + $tooltip.width()) - ($(window).width() - 50);
                if(x_over > 0) {
                    x -= (x_over);
                }

                y_over = 0;//(y + $tooltip.height()) - ($(window).height() - 50);
                if(y_over > 0) {
                    y -= (y_over);
                }

                $tooltip.css({left: x + offset.x, top: y + offset.y});
            });

            $(".tooltip_trigger").mouseout(function() {
                $tooltip.hide();
                $tooltip.html("");
            });

            $(".tooltip_trigger2").mouseover(function(event) {
                // set the tooltip HTML contents
                content = "";
                if ($(event.target).attr('data-tooltip-value')) {
                    content = $(event.target).data('tooltip-value');
                } else {
                    content = $('#' + $(event.target).data('tooltip')).html();
                }
                
                if ($(event.target).attr('data-tooltip-y-offset')) {
                    $tooltip2_y_offset = $(event.target).data('tooltip-y-offset');
                }
                
                $tooltip2.html(content);
                $tooltip2.show();
            });

            $(".tooltip_trigger2").mousemove(function(e) {
                // set the positioning with offset
                xPage = e.pageX;
                yPage = e.pageY;
                yClient = e.clientY;

                //x_over = 0;//(x + $tooltip.width()) - ($(window).width() - 50);
                //if(x_over > 0) {
                //    xPage -= (x_over);
                //}
                
                yPosition = yPage + $tooltip2_y_offset;
                

                y_overBottom = (yClient + $tooltip2.height() + $tooltip2_y_offset) - (window.innerHeight);
                if(y_overBottom > 0) {
                    yPosition -= (y_overBottom); //+20
                } else {
                    y_overTop = (yClient + $tooltip2_y_offset);
                    if(y_overTop < 0) {
                        yPosition -= (y_overTop); //-20
                    }
                }
                
                //alert('page: ' + yPage + ' client: ' + yClient);

                $tooltip2.css({left: xPage + offset.x, top: yPosition});
            });

            $(".tooltip_trigger2").mouseout(function() {
                $tooltip2.hide();
                $tooltip2.html("");
            });
            var $tooltip = $('#tooltip'), // reusable jQuery obj
                offset = {x: 30, y: -10}; // tooltip offset from the cursor
            var $tooltip2 = $('#tooltip2');
            var $tooltip2_y_offset = 0;
            function countdown_tick() {
                var elements = document.getElementsByClassName('countdown');
                for (i = 0; i < elements.length; i++) {
                    number = parseInt(elements[i].innerHTML);
                    if(number !== NaN && number > 0) {
                        elements[i].innerHTML = (number - 1);
                    }
                }
            }
});

