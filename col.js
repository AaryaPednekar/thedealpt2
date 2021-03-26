class Col {
    constructor(x,y,width,height){
        this.x = x,
        this.y = y
        this.image = loadImage("col.png")
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, 200, 150);

        if(!openedSuitcases.includes(this.index)){
            fill("black")
            text(arr[this.index],this.x,this.y)
        } else {
            
        }
    }
    }