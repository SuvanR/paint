var mouseEvent ="empty";
var last_position_of_x,last_position_of_y;

canvas =document.getElementById("myCanvas");
ctx =canvas.getContext("2d");

color ="black";
width_of_line =1;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent ="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    curent_position_of_mouse_x =e.clientX-canvas.offsetLeft;
    curent_position_of_mouse_y =e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle =color;
        ctx.line_width =width_of_line;
        console.log("last position of x and y cordinates =");
        console.log("X ="+last_position_of_x+" Y ="+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("curent position of x and y cordinates =");
        console.log("X ="+curent_position_of_mouse_x+" Y ="+curent_position_of_mouse_y);
        ctx.lineTo(curent_position_of_mouse_x,curent_position_of_mouse_y);
        ctx.stroke();
        
    } 
    last_position_of_x =curent_position_of_mouse_x;
    last_position_of_y =curent_position_of_mouse_y;
    
}

canvas.addEventListener("mouseup",my_mouseup)

function my_mouseup(e){
    mouseEvent ="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent ="mouseleave";
}