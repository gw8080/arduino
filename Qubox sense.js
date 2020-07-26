/* 
   Copyright (C) 2019 George Wagenknecht Qubox, Multiverse communications
   control protocol for electronic devices This program is free software; you
   can redistribute it and/or modify it under the terms of the GNU General
   Public License as published by the Free Software Foundation; either version 
   2 of the License, or (at your option) any later version. This program is
   distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
   without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
   PARTICULAR PURPOSE. See the GNU General Public License for more details.
   You should have received a copy of the GNU General Public License along
   with this program; if not, write to the Free Software Foundation, Inc., 59
   Temple Place, Suite 330, Boston, MA 02111-1307 USA */
var swi = 0;
var swi2 = 0;
var sensitivity = 70;
var longcyc = 2;
var longcyc2 = 3;	
var minPeriod = 1;
var corr = 0;
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
var range = 1;
var ghostprotocol = 0;
var prime = 0;
var output = "";
var ghostprotocollast = 0;
var GhostIterate = 0;
var testchecknum = 0;
function OnStart()
{
	app.SetOrientation("Landscape");
	lay = app.CreateLayout("Linear", "horizontal,FillXY");
	lay = app.CreateLayout("Frame");
	cam = app.CreateCameraView(x, y);
	lay.AddChild(cam);

	edt = app.CreateTextEdit("", 0.96, 0.4);
	edt.SetBackColor("#333333");
	edt.SetTextSize(6);
	edt.SetMargins(0.0, 0.5, 0, 0);
	lay.AddChild(edt);
	var functionstring  = app.ReadFile("/sdcard/10k.txt");
    var functionarr = functionstring.split("\n");
    var functionstring ="";
    var countx = 0
    for(var fun = 0; fun < functionarr.length;fun++){
    
		fun = Math.floor(Math.random() * (functionarr.length)) + 0;
    functionstring += functionarr[fun] + "," + countx + ",";
    if(countx > 20000  ){
    break;
    }
    countx++;
    }
    spin = app.CreateSpinner( functionstring, 0.3 );
    spin.SetOnTouch( spin_OnChange );
    spin.SetMargins(0.3, 0.3, 0, 0);
    lay.AddChild( spin );
	crypt = app.CreateCrypt();
	for (var a = 0; a < 10000; a++)
	{
		var b = Math.floor(Math.random() * (2)) + 0;
		numa += b + ",";
	}
	var check = numa.split(",");
	app.AddLayout(lay);
	setTimeout("StartDetection()", 1000);
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
	if (test == 0)
	{					
		var b = 0;
		var bb = 0;
		data2 = data;
		test++;
	}
	if (test == 1)
	{
		test = 0;
		for (var a = 0; a < data.length; a++)
		{
			if (data[a] > 10)
			{		
				b++;
			}
		}
		if (data2 !== undefined)
		{
			for (var aa = 0; aa < data2.length; aa++)
			{
				if (data[aa] > 10)
				{
					if (data2[aa] > data[a] || data2[aa] < data[a])
					{		
						bb++;	
					}
				}
			}
		}
		if (qu == 0)
		{
			if (b > 4 && b < 11 || bb > 4 && bb < 11)
			{		
				or++;
			}
			if (b > 4 && b < 11 && bb > 4 && bb < 11)
			{			
				and++;
				if (Do == 1)
				{
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
				done = 1;
			}
		}
		if (qu == 1)
		{
			if (b > 4 && b < 11 || bb > 4 && bb < 11)
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
		if (b > 4 && b < 11 && bb > 4 && bb < 11)
		{
			or++;
			done = 1;
		}
	}
	if (and > corr)
	{
		var check = numa.split(",");
		check = numa.split(",");
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
	if (or > corr)
	{
		var check = numa.split(",");
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
			app.ShowPopup("Ghost protocol++ ->" + ghostprotocol);
			prime++;
			if (prime > 1 && ghostprotocol > 10)
			{
				if (GhostIterate == 0)
				{
					ghostprotocollast = ghostprotocol;
					GhostIterate++;
				}
				if (ghostprotocol * range != ghostprotocollast + range)
				{
					ghostprotocollast = ghostprotocol * range;
					output += "~" + ghostprotocol * range + " ==" + testchecknum + "\n";
					edt.SetText(output);
				}
				if (ghostprotocol * range == ghostprotocollast + range)
				{
					ghostprotocollast = ghostprotocol;
					GhostIterate = 0;
					output += "******\n";
					edt.SetText(output);
				}
			}
			ghostprotocol++;	// This iterates multiverses supposedly...
		}
	}
}


function spin_OnChange( item )
{
    app.ShowPopup( "Item = " + item );
    
	integer = item;
	if (integer <= ghostprotocol * range)
	{
		for (var a = 0; a < 50000; a++)
		{
			var b = 0;
			numa += b + ",";	// quantum disruption
		}
		check = numa.split(",");
	}
}