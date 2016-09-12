var ctx     = outcanvas.getContext('2d');
var dothemall=function(){
  var w=parseInt(width.value);
  var h=parseInt(height.value);
  var a=parseText(intext.value);
  var t=makeTree(a,w,h);
  drawCanvas(t);
  outImg();
};

var parseText=function(str){
  var a=[];
  var key=[];
  var indata=str.split("\n");
  for(var l=0;l<indata.length;l++){
    var row=indata[l].split(",");
    if(row.length==3){
      a.push([
        row[0].trim(),
        parseFloat(row[1]),
        row[2].trim()]);
      key.push(parseFloat(row[1]));
    }
  }
  if(howtosort[1].checked){
    var idx=key.sorti();
    var tmp=a.clone();
    for(var l=0;l<a.length;l++){
      a[l]=tmp[idx[l]];
    }
  }
  return a;
}

var makeTree=function(a,w,h){
}

var drawCanvas=function(){
  outcanvas.width =width .value;
  outcanvas.height=height.value;
  ctx.fillText("test", 10, 75);
}

var outImg=function(){
  outimg.width  = width.value;
  outimg.height = height.value;
  outimg.src = outcanvas.toDataURL('image/jpg');
}
Array.prototype.toString = function(){
  var s="[";
  var i=0;
  for(i=0;i<this.length-1;i++){
    s+=this[i].toString()+", ";
  }
  if(this.length==0){
    s+="]";
  }else{
    s+=this[i].toString()+"]";
  }
  return s;
}
