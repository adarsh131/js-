var promise=require('promise');
var get=require('readline-sync');
function login(user,pass)
{
    return new promise((resolve,reject)=>
    {
        if(user=="adarsh" && pass=="12345")
        {
            resolve(1);
        }
        else
        {
            reject("failed to login");
        }
    });
}

a=get.question("enter user name : ");
b=get.question("enter password : ");

login(a,b).then((val)=>
{
    if(val==1)
    {
        console.log("sucessfully login");
    }
}).catch((err)=>
{
    console.log(err);
})
