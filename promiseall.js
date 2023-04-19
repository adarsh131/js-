var promise=require('promise');

function getname()
{
    return new promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve("adarsh");
        },3000);
        

    })
}
function getnum()
{
    return new promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve("112121");
        },2000);
        

    })
}

/*promise.all([getname(),getnum()]).then((result)=>
{
    console.log(result);
})*/

async function user()
{
    let n=await getname();
    console.log(n);
}
user()