class circle{
    constructor(){
        this.radius=1.0;
        this.colour="red";
    }
    
}
const circle1=new circle();
console.log(circle1);
console.log(circle1.radius);
console.log(circle1.radius,circle1.colour);


class circle{
    constructor(radius,colour){
        this.radius=radius;
        this.colour=colour;
    }
    getInfo(){
        return `${this.radius} is getting`
    }
    
    getInfoe(){
        return `${this.colour} is getting`
    }
    setradius(radius) {
        this.radius = radius;
      }
      setcolour(colour) {
        this.colour = colour;
      }
      displayinfo(){
        return `Circle[radius=${this.radius},colour=${this.colour}]`
}
   

}
const circle2= new circle(1.0,"red");
console.log(circle2);
console.log(circle2.getInfo());
console.log(circle2.getInfoe());
console.log(circle2.setradius(3));
console.log(circle2)
console.log(circle2.setcolour("blue"));
console.log(circle2)


