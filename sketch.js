var ver=[];
var button_1;
function setup(){
  createCanvas(400, 400);
  	background(51);
  	button_1 = createButton('prims');
  	button_1.mousePressed(prims);
}

function mousePressed(){
	ver.push(createVector(mouseX, mouseY));
}

function prims(){
	var visit=[];
	var unvisit=[];
	for (var i = 0; i < ver.length; i++) {
		unvisit.push(ver[i]);
	}
	visit.push(unvisit[0]);
	unvisit.splice(0,1);
	while(unvisit.length>0){
		var md=10000;
		var vindx;
		var uindx;
		for (var i = 0; i < visit.length; i++) {
			for (var j = 0; j < unvisit.length; j++) {
				var v=visit[i];
				var u=unvisit[j];
				var d=dist(v.x,v.y,u.x,u.y);
				if(d<md){
					md=d;
					vindx=i;
					uindx=j;
				}
			}
		}
		line(visit[vindx].x,visit[vindx].y,unvisit[uindx].x,unvisit[uindx].y);
		visit.push(unvisit[uindx]);
		unvisit.splice(uindx,1);
	}
}

function draw() {
	background(51);
		for(var i=0; i<ver.length; i++){
		fill(200);
		ellipse(ver[i].x,ver[i].y,10,10);
	}
}

// 	button_1.mousePressed(function(){
// 	var visit=[];
// 	var unvisit=[];
// 	for (var i = 0; i < ver.length; i++) {
// 		unvisit.push(ver[i]);
// 	}
// 	visit.push(unvisit[0]);
// 	unvisit.splice(0,1);
// 	while(unvisit.length>0){
// 		var md=10000;
// 		var vindx;
// 		var uindx;
// 		for (var i = 0; i < visit.length; i++) {
// 			for (var j = 0; j < unvisit.length; j++) {
// 				var v=visit[i];
// 				var u=unvisit[j];
// 				var d=dist(v.x,v.y,u.x,u.y);
// 				if(d<md){
// 					md=d;
// 					vindx=i;
// 					uindx=j;
// 				}
// 			}
// 		}
// 		line(visit[vindx].x,visit[vindx].y,unvisit[uindx].x,unvisit[uindx].y);
// 		visit.push(unvisit[uindx]);
// 		unvisit.splice(uindx,1);
// 	}

// 	})
// 	// var visit=[];
// 	// var unvisit=[];
// 	// for (var i = 0; i < ver.length; i++) {
// 	// 	unvisit.push(ver[i]);
// 	// }
// 	// visit.push(unvisit[0]);
// 	// unvisit.splice(0,1);
// 	// while(unvisit.length>0){
// 	// 	var md=10000;
// 	// 	var vindx;
// 	// 	var uindx;
// 	// 	for (var i = 0; i < visit.length; i++) {
// 	// 		for (var j = 0; j < unvisit.length; j++) {
// 	// 			var v=visit[i];
// 	// 			var u=unvisit[j];
// 	// 			var d=dist(v.x,v.y,u.x,u.y);
// 	// 			if(d<md){
// 	// 				md=d;
// 	// 				vindx=i;
// 	// 				uindx=j;
// 	// 			}
// 	// 		}
// 	// 	}
// 	// 	line(visit[vindx].x,visit[vindx].y,unvisit[uindx].x,unvisit[uindx].y);
// 	// 	visit.push(unvisit[uindx]);
// 	// 	unvisit.splice(uindx,1);
// 	// }

// }

