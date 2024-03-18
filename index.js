class calculater{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    add(){
        console.log(this.a+this.b);
    }
    sub(){
        console.log(this.a-this.b);
    }
    multi(){
        console.log(this.a*this.b);
    }
    divide(){
        console.log(this.a%this.b);
    }
}

class calculater03 extends calculater{
    constructor(a,b,c){
        super(a,b,c)
        this.c=c;
    }
    add(){
        console.log(this.a+this.b+this.c);
    }
    sub(){
        console.log(this.a-this.b-this.c);
    }
    multi(){
        console.log(this.a*this.b*this.c);
    }
    divide(){
        console.log(this.a%this.b%this.c);
    }
}





let cal=new calculater(3,5)
cal.add()
cal.sub()
cal.multi()
cal.divide()

let cal03=new calculater03(2,4,6)
cal03.add()
cal03.sub()
cal03.multi()
cal03.divide()
