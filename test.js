//Qbox code - copyright - George Wagenknecht 2018
var swi = 0;
var swi2 = 0;
var sensitivity = 80;
var longcyc = 2;
var longcyc2 = 3;//+1 or 2
var minPeriod = 15;
var corr = 2;
var x = 0.2;
var y = 0.3;
var Do = 0;
var Do2 = 0;
var it = 0;
var test = 0;
var nul = 0;
var ack = 0;
var and = 0;
var or = 0;
var b = 0;
var cyc = 0;
var cycle = 0;
var numa = "";
var swif = "";
var qu = 0;
var range = 1;
var ghostprotocol = 0;
var prime = 0;
var output = "";
var ghostprotocollast = 0;
var GhostIterate = 0;
var testchecknum = 0;
function OnStart()
{   
	app.SetOrientation( "landscape" );
	lay = app.CreateLayout( "Linear", "horizontal,FillXY" );
	lay = app.CreateLayout( "Frame" );	
	cam = app.CreateCameraView( x, y);	
	lay.AddChild( cam );  
	edt = app.CreateTextEdit("", 0.96, 0.4);
	edt.SetMargins(0.0, 0.5, 0, 0);
	edt.SetTextSize(6);
		lay.AddChild( edt );  
		btnS = app.CreateButton( "Signal", 0.23, 0.1 ); 
		btnS.SetMargins(0.5, 0.0, 0, 0);
	btnS.SetOnTouch( btnS_OnTouch ); 
	lay.AddChild( btnS ); 
for(var a = 0; a < 1000;a++){
var b =  Math.floor(Math.random() * (2)) + 0;
 numa += b + ",";
}
	app.AddLayout( lay );
	setTimeout( "StartDetection()", 1000 ); 
}
function StartDetection()
{	
	var w = cam.GetImageWidth();
	var h = cam.GetImageHeight();
	img = app.CreateImage( null, x, y, "Fix", w, h );  
	img.SetAlpha( 0.5 );  
	lay.AddChild( img );    
	cam.MotionMosaic( 30, 30, (100-sensitivity)/5, minPeriod, img );
	cam.SetOnMotion( OnMotion );
	cam.StartPreview();

	player = app.CreateMediaPlayer();
	player.SetFile( "/Sys/Snd/Poing.ogg" );
}
var data2;
function OnMotion( data )
{
if (Do == 1){
Do2 = 1;
if (qu == 1 && it == 0){
qu = 0;
it++;
}
if (qu == 0 &&  it == 0){
qu = 1;
it++;
}
it = 0;
}
if (test == 0){
var b = 0;
var bb = 0;
data2 = data;
test++;
}
if (test == 1){
test = 0;
	for(var a = 0; a < data.length;a++){
if (data[a] > 10){
b++;
}
}
if (data2 !== undefined){
	for(var aa = 0; aa < data2.length;aa++){
if (data[aa] > 10){
if (data2[aa] > data[a] || data2[aa] < data[a] ){
bb++;
}
}
}
}
if (qu == 0){
if (b > 4 && b < 11 || bb > 4 && bb < 11 ){
or++;
}
if (b > 4 && b < 11 && bb > 4 && bb < 11 ){
and++;
if (Do == 1){
if (qu == 1 && it == 0){
qu = 0;
it++;
}
if (qu == 0 &&  it == 0){
qu = 1;
it++;
}
it = 0;
}
done = 1;
}
}
if (qu == 1){
if (b > 4 && b < 11 || bb > 4 && bb < 11 ){
if (Do2== 1){
if (qu == 1 && it == 0){
qu = 0;
it++;
}
if (qu == 0 &&  it == 0){
qu = 1;
Do2 = 0;
it++;
}
it = 0;
and++;
}
}
}
if (b > 4 && b < 11 && bb > 4 && bb < 11 ){
or++;
done = 1;
}
}
if (and > corr){
var check = numa.split(",");
check = numa.split(",");
if (check[cyc] == qu){
if (swi == longcyc){
qu =  Math.floor(Math.random() * (2)) + 0;
}
swi++;
Do = 1;
ack++;
and = 0;
cyc++;
}
//most of the time it knows the number before it matches...
if (check[cyc] == qu){
ack++;
if (qu == 1 && it == 0){
qu = 0;
it++;
}
if (qu == 0 &&  it == 0){
qu = 1;
it++;
}
it = 0;

if (swi2 == longcyc2){
qu =  Math.floor(Math.random() * (2)) + 0;
swi2 = 0;
}
swi2++;
and = 0;
or = 0;
cyc++;
}
app.ShowPopup( "stable" );
}
if (or > corr){
var check = numa.split(",");


//most of the time it knows the number before it matches...
if (check[cyc] == qu){
ack++;
if (qu == 1 && it == 0){
qu = 0;
it++;
}
if (qu == 0 &&  it == 0){
qu = 1;
it++;
}
it = 0;

if (swi2 == longcyc2){
qu =  Math.floor(Math.random() * (2)) + 0;
it = 0;
swi2 = 0;
}
swi2++;
code = 0;
or = 0;
cyc++;
}
if (check[cyc] != qu){
if (swi == longcyc){
qu =  Math.floor(Math.random() * (2)) + 0;
swi = 0;
}
swi++;
Do = 1;
nul++;
or = 0;
and = 0;
cyc++;
app.ShowPopup( "collapse" );

    
}
}
}


function btnS_OnTouch() 
{ 

		for (var a = 0; a < 5000; a++)
		{
			var b = 0;
			numa += b + ",";	// quantum disruption
		}
		check = numa.split(",");
	}