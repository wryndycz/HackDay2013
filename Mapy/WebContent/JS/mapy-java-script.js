var degrees = 0;

function flip_right()
{
	degrees += 90;
	
	cube_holder.style.webkitTransform = "rotateY(" + degrees + "deg)";
	

}

function flip_left()
{
	degrees -= 90;
	
	cube_holder.style.webkitTransform = "rotateY(" + degrees + "deg)";

}