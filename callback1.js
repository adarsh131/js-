var get=require('readline-sync');

function login(name,pass,callback)
{
    err=false;
    if(name=="tom" && pass=="12345")
    {
      var v=1;

    }
    else
    {
        err=true;
    }
    callback(v,err);
}

a=get.question("enter user name : ");
b=get.question("enter password : ");

login(a,b,(v1,err)=>
{
    if(v1==1)
    {
        console.log("sucessfully login");
    }
    else if(err){
        console.log("failed to login");
    }
})