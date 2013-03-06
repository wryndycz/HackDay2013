
var sky_holders = [], cloud_layers = [];
var degrees = 0;

function reset()
{
	degrees = 0;
	
	cube_world.style.webkitTransition = "-webkit-transform 0.0s linear";
	cube_world.style.webkitTransform = "rotateY(0deg)";
	
	for(var k = 0; k < cloud_layers.length; k++) 
	{
        var cloud_layer = cloud_layers[k];
        
        cloud_layer.style.webkitTransition = "-webkit-transform 0.0s linear";
        cloud_layer.style.webkitTransform = 'translateX( ' + cloud_layer.data.x + 'px ) translateY( ' + cloud_layer.data.y + 'px ) translateZ( ' + cloud_layer.data.z + 'px ) rotateY(0deg )';
        
	}
	
	
	
}

function flip_right()
{
	degrees += 90;	
	
	cube_world.style.webkitTransition = "-webkit-transform 0.5s linear";	
	cube_world.style.webkitTransform = "rotateY(" + degrees + "deg)";
	
	
	for(var k = 0; k < cloud_layers.length; k++) 
	{
        var cloud_layer = cloud_layers[k];
        
        cloud_layer.style.webkitTransition = "-webkit-transform 0.5s linear";
        cloud_layer.style.webkitTransform = 'translateX( ' + cloud_layer.data.x + 'px ) translateY( ' + cloud_layer.data.y + 'px ) translateZ( ' + cloud_layer.data.z + 'px ) rotateY( -' + degrees + 'deg )';
        
	}
	
	if (degrees == 360)
    {
		setTimeout('reset()', 500);
    }

	//alert("Degrees = " + degrees);
	

}

function flip_left()
{
	degrees -= 90;
	
	//alert("Degrees = " + degrees);
	
	cube_world.style.webkitTransition = "-webkit-transform 0.5s linear";
	cube_world.style.webkitTransform = "rotateY(" + degrees + "deg)";
	
	for(var k = 0; k < cloud_layers.length; k++) 
	{
        var cloud_layer = cloud_layers[k];
        
        cloud_layer.style.webkitTransition = "-webkit-transform 0.5s linear";
        cloud_layer.style.webkitTransform = 'translateX( ' + cloud_layer.data.x + 'px ) translateY( ' + cloud_layer.data.y + 'px ) translateZ( ' + cloud_layer.data.z + 'px ) rotateY(' + (-degrees) + 'deg )';
        
	}
	
	if (degrees == -360)
    {
		setTimeout('reset()', 500);
    }

}


function generate_sky_holders()
{
	for(var x = 0; x < 10; x++) 
	{
		sky_holders.push(create_clould());
    }

}



function create_clould() {
	 
	var holder_X = Math.floor(Math.random()*380);
	var holder_Y = Math.floor(Math.random()*50) + 200;
	var holder_Z = Math.floor(Math.random()*360) - 175;
	
    var div = document.createElement('div' );    
    div.className = 'sky_holder';

    var holder_coords = 'translateX( ' + holder_X + 'px ) \ translateY( -' + holder_Y + 'px ) \ translateZ( ' + holder_Z + 'px )';
    
    div.style.webkitTransform = holder_coords;
    cube_world.appendChild(div);
    
    
    
    
    for(var k = 0; k < 2; k++) 
    {
        var cloud = document.createElement( 'div' );
        cloud.className = 'fluffy_clouds';
        
        var cloud_X = Math.floor(Math.random()*100);
        var cloud_Y = Math.floor(Math.random()*10);
        var cloud_Z = Math.floor(Math.random()*100) - 50;
        
        cloud.data = {x: cloud_X, y: cloud_Y, z: cloud_Z};
             
        var cloud_coords = 'translateX( ' + cloud_X + 'px ) \ translateY( -' + cloud_Y + 'px ) \ translateZ( ' + cloud_Z + 'px )';
        
        cloud.style.webkitTransform = cloud_coords;       
        div.appendChild(cloud);
        cloud_layers.push(cloud);
        
    }
    
  
    return div;
}
















