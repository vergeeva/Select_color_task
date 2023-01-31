function button1click()
{
r=0;
for( i=1; i<=9;i++)
{

	b1=document.getElementById(i);
	if(b1.checked)
	{

		r=i;
	}
}

b1=document.getElementById(22);
bb2=document.getElementById(60);
bb3=document.getElementById(61);
bb4=document.getElementById(62);


if(r==1)
{

	b12=document.getElementById(22);
	b12.style.background="rgb(0,0,0)";
	document.getElementById("9").selectedIndex=0;
	bb2.checked=false;
	bb3.checked=false;
	bb4.checked=false;
}
if(r==2)
{
	b12=document.getElementById(22);
	b12.style.background="Red";
	document.getElementById("9").selectedIndex=1;
	bb2.checked=true;
	bb3.checked=false;
	bb4.checked=false;
}
if(r==3)
{

	b12=document.getElementById(22);
	b12.style.background="Green";
	document.getElementById("9").selectedIndex=2;
	bb2.checked=false;
	bb3.checked=true;
	bb4.checked=false;
}
if(r==4)
{

	b12=document.getElementById(22);
	b12.style.background="Yellow";
	document.getElementById("9").selectedIndex=3;
	bb2.checked=true;
	bb3.checked=true;
	bb4.checked=false;
}
if(r==5)
{

b12=document.getElementById(22);
b12.style.background="Blue";
document.getElementById("9").selectedIndex=4;
bb2.checked=false;
bb3.checked=false;
bb4.checked=true;
}
if(r==6)
{

b12=document.getElementById(22);
b12.style.background="#8b00ff";
document.getElementById("9").selectedIndex=5;
bb2.checked=true;
bb3.checked=false;
bb4.checked=true;
}
if(r==7)
{

b12=document.getElementById(22);
b12.style.background="aqua";
document.getElementById("9").selectedIndex=6;
bb2.checked=false;
bb3.checked=true;
bb4.checked=true;
}
if(r==8)
{

b12=document.getElementById(22);
b12.style.background="white";
document.getElementById("9").selectedIndex=7;
bb2.checked=true;
bb3.checked=true;
bb4.checked=true;
}
}


function Colorited()
{

b2=document.getElementById(60);
b3=document.getElementById(61);
b4=document.getElementById(62);
if(b2.checked==true && b3.checked==true && b4.checked==true)
{

b22=document.getElementById(22);
b22.style.background ="rgb(255,255,255)";
document.getElementById("9").selectedIndex=7;
b5=document.getElementById(8);
b5.checked=true;
}

else if(b2.checked==true && b3.checked==true)
{

b22=document.getElementById(22);
b22.style.background ="rgb(255,255,0)";
document.getElementById("9").selectedIndex=3;
b6=document.getElementById(4);
b6.checked=true;

}


else if(b3.checked==true && b4.checked==true)
{

b22=document.getElementById(22);
b22.style.background ="rgb(0,255,255)";
document.getElementById("9").selectedIndex=6;
b7=document.getElementById(7);
b7.checked=true;

}

else if(b2.checked==true && b4.checked==true)
{

b22=document.getElementById(22);
b22.style.background ="#8b00ff";
document.getElementById("9").selectedIndex=5;
b7=document.getElementById(6);
b7.checked=true;

}
else if(b2.checked==true)
{

b22=document.getElementById(22);
b22.style.background ="rgb(255,0,0)";
document.getElementById("9").selectedIndex=1;
b7=document.getElementById(2);
b7.checked=true;

}
else if(b3.checked==true)
{

b22=document.getElementById(22);
b22.style.background ="rgb(0,255,0)";
document.getElementById("9").selectedIndex=2;
b7=document.getElementById(3);
b7.checked=true;

}
else if(b4.checked==true)
{

b22=document.getElementById(22);
b22.style.background ="rgb(0,0,255)";
document.getElementById("9").selectedIndex=4;
b7=document.getElementById(5);
b7.checked=true;

}
else
{
b22=document.getElementById(22);
b22.style.background ="rgb(0,0,0)";
document.getElementById("9").selectedIndex=0;
b7=document.getElementById(1);
b7.checked=true;

}

}
function Change_color()
{
b1=document.getElementById(22);
el = document.getElementById(9);
bb2=document.getElementById(60);
bb3=document.getElementById(61);
bb4=document.getElementById(62);



if(el.value=="Черный")
{
b1.style.background="Black";

bb5=document.getElementById(1)
bb5.checked=true;
bb2.checked=false;
bb3.checked=false;
bb4.checked=false;
}
else if(el.value=="Красный")
	
{
b1.style.background="Red";
bb5=document.getElementById(2)
bb5.checked=true;
bb2.checked=true;
bb3.checked=false;
bb4.checked=false;
}
else if(el.value=="Зеленый")
{
b1.style.background="Green";
bb5=document.getElementById(3)
bb5.checked=true;
bb2.checked=false;
bb3.checked=true;
bb4.checked=false;
}
else if(el.value=="Желтый")
{
b1.style.background="yellow";
bb5=document.getElementById(4)
bb5.checked=true;
bb2.checked=true;
bb3.checked=true;
bb4.checked=false;
}
else if(el.value=="Синий")
{
b1.style.background="blue";
bb5=document.getElementById(5)
bb5.checked=true;
bb2.checked=false;
bb3.checked=false;
bb4.checked=true;
}
else if(el.value=="Фиолетовый")
{
b1.style.background="#8b00ff";

bb5=document.getElementById(6)
bb5.checked=true;
bb2.checked=true;
bb3.checked=false;
bb4.checked=true;
}
else if(el.value=="Голубой")
{
b1.style.background="aqua";
bb5=document.getElementById(7)
bb5.checked=true;
bb2.checked=false;
bb3.checked=true;
bb4.checked=true;
}
else
{
b1.style.background="white";
bb5=document.getElementById(8)
bb5.checked=true;
bb2.checked=true;
bb3.checked=true;
bb4.checked=true;
}

}
