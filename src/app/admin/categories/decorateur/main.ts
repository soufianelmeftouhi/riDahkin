export abstract class Car{
    public description: string;
    constructor(public price: number){}
    public abstract getPrice():number
    public getDescription(){
        return this.description;
    }
}

export class Ford extends Car{
    constructor(public price: number,public description="ford"){
        super(price);
    }
    
    getPrice(){
        return this.price;
    }


    
}

interface ConentCar{
    wheels:number,
    chairs:Array<string>
}

export class Citroin extends Car{

    content:ConentCar;

    constructor(public price: number,public description="Citroin"){
        super(price);
    }

    getPrice(){
        return this.price;
    }

    set setContent(value:ConentCar){
        this.content= {...value,wheels:value.wheels++};
    }

    get getContent():ConentCar{
        return this.content;
    }
}


abstract class CarDecorator extends Car{
    decoratedCar:Car
    public abstract getDescription():string;
    public abstract getPrice():number;
}

export class BigCar extends CarDecorator{

    constructor(private car:Car){
        super(car.price);
    }

    public getDescription(): string {
        return this.car.description +" biiiiig"
    }    
    
    public getPrice(): number {
        return this.car.price *2
    }
}

export class ColoredCar extends CarDecorator{

    constructor(private car:Car,private color:string){
        super(car.price);
    }

    public getDescription(): string {
        return this.car.description +" "+this.color
    }    
    
    public getPrice(): number {
        return this.car.price *9
    }
}