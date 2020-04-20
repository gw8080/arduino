/*
    Copyright (C) 2019 George Wagenknecht Qubox, Multiverse communications
    control protocol for electronic devices This program is free software; you 
    can redistribute it and/or modify it under the terms of the GNU General
    Public License as published by the Free Software Foundation; either
    version 2 of the License, or (at your option) any later version. This
    program is distributed in the hope that it will be useful, but WITHOUT ANY 
    WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
    details. You should have received a copy of the GNU General Public License 
    along with this program; if not, write to the Free Software Foundation,
    Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA */


var swi = 0;
var swi2 = 0;
var sensitivity = 70;
var longcyc = 2;
var longcyc2 = 3;				// +1 or 2
var minPeriod = 1;
var corr = 0;					// batch count
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
var qu = 0;
var rangeorig = 1;
var range = rangeorig;
var ghostprotocol = 0;
var prime = 0;
var output = "";
var ghostprotocollast = 0;
var GhostIterate = 0;
var testchecknum = 199736;
var qdata = 0;
var safe = 1;
var outputq = "";
var outputprocess = "";
var match = "";
var matchv2 = "";
var outputx = "";
var output2 = "";
var total = "";
var out = "";
var outputzen = "";
var qubox = 0;
var integer = 0;
var count = 0;
var b = 0;
var bb = 0;


   	
seed2 = Math.floor(Math.random() * (999)) + 0;

for (var a = 0; a < 99999; a++)
{
	var b = Math.floor(Math.random() * (2)) + 0;
	numa += b + ",";			// initialise test variable set
}

var check = numa.split(",");

var outputcheck = "";

var functionstring  = app.ReadFile("/sdcard/words.txt");

  	var  functionarr = functionstring.split("\n");
   functionstring ="";
    for(var fun = 0; fun < functionarr.length;fun++){
   fun = Math.floor(Math.random() * (functionarr.length-1)) + 0;
    functionstring += functionarr[fun] + ",";

    if (count == 200000){
    break;
    }
    count++;
    }
    functionarr = functionstring.split(",");
    	app.ShowPopup( "Database load complete" );
var augmentfull = "";
function OnStart()
{
  app.PreventScreenLock( true );
	app.SetOrientation("Landscape");
	lay = app.CreateLayout("Linear", "horizontal,FillXY");
	lay = app.CreateLayout("Frame");
	cam = app.CreateCameraView(x, y);
	lay.AddChild(cam);

	
	
	btnLoad = app.CreateButton( "Check", 0.23, 0.1 ); 
	btnLoad.SetOnTouch( btnLoad_OnTouch ); 
	btnLoad.SetMargins(0.2, 0.02, 0, 0);
	lay.AddChild( btnLoad ); 

	edt2 = app.CreateTextEdit( "", 0.1, 0.1 ); 
	edt2.SetBackColor( "#333333" );
	edt2.SetMargins(0.4, 0.02, 0, 0);
	
	lay.AddChild( edt2 ); 
	
	
	edtout = app.CreateTextEdit( "", 0.7, 0.6 ); 
	edtout.SetBackColor( "#333333" );
	edtout.SetTextSize(9);
	edtout.SetMargins(0, 0.3, 0, 0);
	lay.AddChild( edtout ); 
	
	edt = app.CreateTextEdit("edt", 0.2, 0.7);
	edt.SetBackColor("#333333");
	edt.SetTextSize(5);
	edt.SetMargins(0.8, 0.25, 0, 0);
	lay.AddChild(edt);
	

    spin = app.CreateSpinner( functionstring, 0.3 );
    spin.SetOnTouch( spin_OnChange );
    spin.SetMargins(0.5, 0.02, 0, 0);
    lay.AddChild( spin );


	app.AddLayout(lay);
	setTimeout("StartDetection()", 1000);	// initiate camera stream function
}



function spin_OnChange( item )
{
   
    for (var aaa = 0;aaa < functionarr.length;aaa++){
    if (item == functionarr[aaa]){
    integer = aaa;
    break;
    }
    }
     app.ShowPopup( integer);
    		if (integer < ghostprotocol * range)//flip less than or greater then
			{
				for (var a = 0; a < 5000; a++)
				{
					var b = 9;
					numa += b + ",";	// quantum disruption
				}
				check = numa.split(",");
			}
    
}
function btnLoad_OnTouch() 
{ 
var num = edt2.GetText();
app.ShowPopup(functionarr[num]);
}


function StartDetection()
{
	var w = cam.GetImageWidth();
	var h = cam.GetImageHeight();
	img = app.CreateImage(null, x, y, "Fix", w, h);
	img.SetAlpha(0.5);
	lay.AddChild(img);
	cam.MotionMosaic(30, 30, (100 - sensitivity) / 5, minPeriod, img);
	cam.SetOnMotion(OnMotion);
	cam.StartPreview();
}


var data2;
function OnMotion(data)
{
	var nowa= new Date().getTime();
	if (Do == 1)
	{
		Do2 = 1;
		if (qu == 1 && it == 0)
		{
			qu = 0;
			it++;
		}
		if (qu == 0 && it == 0)
		{
			qu = 1;
			it++;
		}
		it = 0;
	}

		var b = 0;

		for (var a = 0; a < data.length; a++)
		{
			if (data[a] > 10)
			{
				b++;
			}
		}

		if (qu == 0)
		{
			if (b > 4 && b < 11)
			{
				or++;
			}
		}
		if (qu == 1)
		{
			if (b > 4 && b < 11)
			{
				if (Do2 == 1)
				{
					if (qu == 1 && it == 0)
					{
						qu = 0;
						it++;
					}
					if (qu == 0 && it == 0)
					{
						qu = 1;
						Do2 = 0;
						it++;
					}
					it = 0;
					and++;
				}
			}
		}

		if (and > corr && and > or)
		{
			if (check[cyc] == qu)
			{
				if (swi == longcyc)
				{
					qu = Math.floor(Math.random() * (2)) + 0;
				}
				swi++;
				Do = 1;
				ack++;
				and = 0;
				cyc++;
	prime = 0;
			}
			// most of the time it knows the number before it matches...
			if (check[cyc] == qu)
			{
				ack++;
				if (qu == 1 && it == 0)
				{
					qu = 0;
					it++;
				}
				if (qu == 0 && it == 0)
				{
					qu = 1;
					it++;
				}
				it = 0;

				if (swi2 == longcyc2)
				{
					qu = Math.floor(Math.random() * (2)) + 0;
					swi2 = 0;
				}
				swi2++;
				and = 0;
				or = 0;
				cyc++;
	prime = 0;
			}
		}

		if (or > corr && or > and)
		{
			// most of the time it knows the number before it matches...
			if (check[cyc] == qu)
			{
				ack++;
				if (qu == 1 && it == 0)
				{
					qu = 0;
					it++;
				}
				if (qu == 0 && it == 0)
				{
					qu = 1;
					it++;
				}
				it = 0;

				if (swi2 == longcyc2)
				{
					qu = Math.floor(Math.random() * (2)) + 0;
					it = 0;
					swi2 = 0;
				}
				swi2++;
				code = 0;
				or = 0;
				cyc++;
	prime = 0;
			}
			if (check[cyc] != qu)
			{
				if (swi == longcyc)
				{
					qu = Math.floor(Math.random() * (2)) + 0;
					swi = 0;
				}
				swi++;
				Do = 1;
				nul++;
				or = 0;
				and = 0;
				cyc++;
			// app.ShowPopup("Ghost protocol++ ->" + ghostprotocol );
			prime++;
			var calc = (ghostprotocol * range);
			if (prime > 1 && ghostprotocol > 3)
			{
				if (GhostIterate == 0)
				{
					ghostprotocollast = ghostprotocol;
					GhostIterate++;
				}
				if (calc != ghostprotocollast + range)
				{
					ghostprotocollast = calc;
					var newtimea = new Date().getTime();
					var spenttime = newtimea - nowa;
					var timearr = "";
				
					timearr += "(" + spenttime + ")";
					output +=
						"~" + ghostprotocol * range + " == ?" + "  \t\t\t Work= " + timearr + "\n";
					outputprocess += ghostprotocol * range + ",";
					edt.SetText(output);
					edt2.SetText(ghostprotocol*range);
				}
				if (calc == ghostprotocollast + range)
				{
					ghostprotocollast = ghostprotocol;
						output +=
						"~" + ghostprotocol * range + " == ?" + "\n";
				edt2.SetText(ghostprotocol*range);
					GhostIterate = 0;
					output += "******\n";
					
				//ghostprotocol = 0;
					var num = edt2.GetText();
					num = parseInt(num, 10)
					var augmentstring = functionarr[num];
augmentfull += augmentstring + "\n";
	var pitch = 1.0, speed = 1.0;
	app.TextToSpeech( augmentstring, pitch, speed );
edtout.SetText( augmentfull );
app.ShowPopup(augmentstring);
					edt.SetText(output);
				}
			}
			ghostprotocol++;	// This iterates multiverses supposedly...
		}
	}
		

}



	// do calculation, efficiency does not matter so we can do it again and
	// again.
	// in this space time essentially does not exist and we can do big
	// calculations 
	// in a fraction of the time, this function isn't classically called, yet
	// the potential 
	// of it being called is enough for it to be able to send information
	// forward and back along the time axis.



// convert ascii data into decimal then use the ghost protocol to check the
// number, then convert back to ascii.
// needs to be protected from poweroff to minimise noise