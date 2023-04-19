class area{
    constructor(a)
    {
        //this.pi=pi;;
       // let cpi=3.14;
        //return cpi;
        this.a=a;
        console.log(a);
    }
    car()
    {
        let cpi=3.14;
        return cpi;
    }
}
class circle extends area
{
    constructor(a)
    {
         super(a);
        this.a=a;
        console.log(this.a);
    }
    
    carea()
    {
        console.log(this.car()*this.a*this.a);
    }
}
var c=new circle(3);
c.carea();