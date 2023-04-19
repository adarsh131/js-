var promise=require('promise');
function add(n1,n2)
{
    return new promise((resolve,reject)=>
    {
        if(n1==0)
        {
            reject("first no is zero");
        }
        else
        {
            resolve(n1+n2);
        }
    });
}

add(0,20).then((sum)=>{
    console.log(sum);
}).catch((err)=>{
    console.log(err);
})

function mul(n1,n2)
{
    return new promise((resolve,reject)=>
    {
        if(n1==0)
        {
            reject("firt number is 0");
        }
        else
        {
            resolve(n1*n2);
        }
    });
}

mul(4,7).then((ult)=>{
    console.log(ult);
}).catch((err)=>
{
    console.log(err);
})