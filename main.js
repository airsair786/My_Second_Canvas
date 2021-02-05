var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    
    var width = screen.width;

    new_width = screen.width - 70;
    new_height = screen.height - 300;

    if(width < 992)

    {

    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;

    document.body.style.overflow = "hidden";

    }
    
    canvas.addEventListener("touch_start", my_touch_start);

    function my_touch_start(e)
    {
        console.log("my_touch_start");

        last_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        last_position_of_mouse_y = e.clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touch_move);
    function my_touchmove(e)
    {

        console.log("my_touch_move");

        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");

        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

