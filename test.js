var butt;
var butt2;
var butt3;
var butt4;
var para;
var m;
var ver=[];
var edges=[];
var mst=[];
var x=0;

function setup(){
 	var c=createCanvas(650, 500);
  	background("#222343");
  	butt = createButton("PRIMS'S MST");
  	butt.mousePressed(prims);
  	butt2 = createButton("KRUSKAL'S MST");
  	butt2.mousePressed(kruskals);
  	butt3 = createButton("RESET");
  	butt3.mousePressed(reset);
  	butt4 = createButton("CLEAR");
  	butt4.mousePressed(clean);

  	butt.position(750,20);
  	butt2.position(750,70);
  	butt3.position(750,120);
  	butt4.position(750,170);

  	para = select("div");
  	para.position(750,220);
  	m = select("#mst");
  	m.position(90,550);
}

function msg(){
  	fill(255,150);
	textSize(20);
	textAlign(CENTER);
  	text("please touch and hold for 2 sec to add vertices in mobile mode", 325, 50);
}

function clean(){
	background("#222343");
	msg();
	x=0;
	edges=[];
	mst=[];
	ver=[];
}

function reset(){
	background("#222343");
	msg();
	x=0;
	edges=[];
	mst=[];
}

function mousePressed(){
	if(mouseX<width && mouseY<height){
	ver.push(createVector(mouseX, mouseY));
	}
}

function prims(){
	var unvisit=[];
	var visit=[];
	for (var i = 0; i < ver.length; i++) unvisit.push(ver[i]);
	visit.push(unvisit[0]);
	unvisit.splice(0,1);
	while(unvisit.length>0){
		var maxind=1000;
		var u,v;
		for (var i = 0; i < visit.length; i++) {
			for (var j = 0; j < unvisit.length; j++) {
				var a=visit[i], b=unvisit[j];
				var d=dist(a.x,a.y,b.x,b.y);
				if(d<maxind){
					maxind=d;
					v=i; u=j;
				}
			}
		}
		var e=new edge(visit[v].x,visit[v].y,unvisit[u].x,unvisit[u].y);
		edges.push(e);
		visit.push(unvisit[u]);
		unvisit.splice(u,1);
	}

	(function loop() {
    	edges[x].display();
    	if (++x < edges.length) {
        	setTimeout(loop, 500);  
    	}
	})(); 
}

function mySort(a,b) {
  if (a.wt < b.wt)
    return -1;
  if (a.wt > b.wt)
    return 1;
  return 0;
}

function kruskals(){
	for (var i = 0; i < ver.length-1; i++) {
		for (var j = i+1; j < ver.length; j++) {
			var e=new edge(ver[i].x,ver[i].y,ver[j].x,ver[j].y);
			edges.push(e);
		}
	}
	edges.sort(mySort);
	var uf = new UnionFind(ver);
	while(edges.length>0){
		var e=edges[0];
		edges.splice(0,1);
		var a=createVector(e.x1, e.y1);
		var b=createVector(e.x2, e.y2);
		if(!uf.connected(a,b)){
			mst.push(e);
			uf.union(a,b);
		}
	}
	(function loop() {
    	mst[x].display();
    	if (++x < mst.length) {
        	setTimeout(loop, 500);  
    	}
	})(); 
}

function draw(){
	for(var i=0; i<ver.length; i++){
		stroke("#1b0708");
		fill("#e5a918");
		ellipse(ver[i].x,ver[i].y,12,12);
	}
}
