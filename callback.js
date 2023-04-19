/*var dt=new Date();
for(i=0;i<1000;i++)
{
console.log("hello");
}

var diff=new Date()-dt;

console.log(diff);

function longt(millisec)
{
    var d=new Date();
    while((new Date-d)<=millisec)
    {
       // console.log("start");
    }
}
longt(4000);
console.log("stop");

var hey=function(callback)
{
    console.log(callback);
}
var hello=function(fcallback)
{
    fcallback('little');
}
hello(hey)
*/


/*function add(n1,n2,callback)
{
    err=false;
    if(n1==0)
    {
        err=true;
    }
    callback(n1+n2,err);
}
function mul(n1,n2,callback)
{
    callback(n1*n2);
}

add(40,10,(sum,err)=>
{
    if(err)
    {
        console.log("first no is zero");
    }
    else
    {
        console.log("sum is ",sum)
        mul(sum,sum,(product)=>{
            console.log(product);
        })
    }
})
*/
function div(n1,n2,callback)
{
    err=false;
    if(n1==0)
    {
        err=true;
    }
    callback(n1/n2,err);
}
div(0,2,(sum,err)=>{
    if(err)
    {
        console.log("first n is zero");
    }
    else
    {
        console.log(sum);
    }
})