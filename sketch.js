
var back, backImg;
var banker ,bankerImg ,player;
var no_deal, deal, phone, col;
var no_dealImg, dealImg, phoneImg, colImg;
var song, callRing;
var suitcaseSelected = false;
var selectedSuitcase = 0;
var openedSuitcases = "";
var unopenedSuitcase;
var shuffledAmountsArray = [];
var arr = [
  1,
  10,
  50,
  100,
  500,
  750,
  1000,
  5000,
  7000,
  10000,
  15000,
  20000

];

function preload(){
selectedSuitcase = loadImage("b2.png")
openedSuitcase = loadImage("box_open.png")
unopenedSuitcase = loadImage("box_close.png")
amtBox = loadImage("col.png")
backImg = loadImage("back_4.jpg")
phoneImg = loadImage("phone.png")
no_dealImg = loadImage("no_deal.png")
dealImg = loadImage("deal.png")
bankerImg = loadImage("banker.png")
song = loadSound("backmusic.mp3")
}

function setup() {
  createCanvas(1500,720);
 // form = new Form();

  shuffledAmountsArray = shuffle(arr);
  console.log(arr)
  console.log(shuffledAmountsArray)
  console.log(openedSuitcases)

  b1 = new Box(400,100,10,10)
  b1.addImage(unopenedSuitcase)
  b2 = new Box(600,100,10,10)
  b2.addImage(unopenedSuitcase)
  b3 = new Box(800,100,10,10)
  b3.addImage(unopenedSuitcase)
  b4 = new Box(1000,100,10,10)
  b4.addImage(unopenedSuitcase)
  b5 = new Box(400,300,10,10)
  b5.addImage(unopenedSuitcase)
  b6 = new Box(600,300,10,10)
  b6.addImage(unopenedSuitcase)
  b7 = new Box(800,300,10,10)
  b7.addImage(unopenedSuitcase)
  b8 = new Box(1000,300,10,10)
  b8.addImage(unopenedSuitcase)
  b9 = new Box(400,500,10,10)
  b9.addImage(unopenedSuitcase)
  b10 = new Box(600,500,10,10)
  b10.addImage(unopenedSuitcase)
  b11 = new Box(800,500,10,10)
  b11.addImage(unopenedSuitcase)
  b12 = new Box(1000,500,10,10)
  b12.addImage(unopenedSuitcase)
  
  col1 = new Col(1300,100,10,10)
  col1.addImage(amtBox)
  col2 = new Col(1300,200,10,10)
  col2.addImage(amtBox)
  col3 = new Col(1300,300,10,10)
  col3.addImage(amtBox)
  col4 = new Col(1300,400,10,10)
  col4.addImage(amtBox)
  col5 = new Col(1300,500,10,10)
  col5.addImage(amtBox)
  col6 = new Col(1300,600,10,10)
  col6.addImage(amtBox)
  col7 = new Col(150,100,10,10)
  col7.addImage(amtBox)
  col8 = new Col(150,200,10,10)
  col8.addImage(amtBox)
  col9 = new Col(150,300,10,10)
  col9.addImage(amtBox)
  col10 = new Col(150,400,10,10)
  col10.addImage(amtBox)
  col11 = new Col(150,500,10,10)
  col11.addImage(amtBox)
  col12 = new Col(150,600,10,10)
  col12.addImage(amtBox)
  
 
//song.play();

  
}

function draw() {
  background(backImg);  
   
 
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  col1.display();
  col2.display();
  col3.display();
  col4.display();
  col5.display();
  col6.display();
  col7.display();
  col8.display();
  col9.display();
  col10.display();
  col11.display();
  col12.display();

  drawSprites();
  stroke("black")
  textSize(25)
  fill("white")
  text("CHOOSE YOUR CASE",600,40)

  stroke("black")
  textSize(15)
  fill("black")
  text("MY CASE :",50,610)

  textSize(30)
  fill("black")
  if(openedSuitcases.includes(",1,")){
    text(shuffledAmountsArray[0],b1.x,b1.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),false)
  } else {
    text("1",b1.x,b1.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),true)
  }
  if(openedSuitcases.includes(",2,")){
    text(shuffledAmountsArray[0],b2.x,b2.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),false)
  } else {
    text("2",b2.x,b2.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),true)
  }
  if(openedSuitcases.includes(",3,")){
    text(shuffledAmountsArray[0],b3.x,b3.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),false)
  } else {
    text("3",b3.x,b3.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),true)
  }
  if(openedSuitcases.includes(",4,")){
    text(shuffledAmountsArray[0],b4.x,b4.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),false)
  } else {
    text("4",b4.x,b4.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),true)
  }
  if(openedSuitcases.includes(",5,")){
    text(shuffledAmountsArray[0],b5.x,b5.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),false)
  } else {
    text("5",b5.x,b5.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),true)
  }
  if(openedSuitcases.includes(",6,")){
    text(shuffledAmountsArray[0],b6.x,b6.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),false)
  } else {
    text("6",b6.x,b6.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),true)
  }
  if(openedSuitcases.includes(",7,")){
    text(shuffledAmountsArray[0],b7.x,b7.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),false)
  } else {
    text("7",b7.x,b7.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),true)
  }
  if(openedSuitcases.includes(",8,")){
    text(shuffledAmountsArray[0],b8.x,b8.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),false)
  } else {
    text("8",b8.x,b8.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),true)
  }
  if(openedSuitcases.includes(",9,")){
    text(shuffledAmountsArray[0],b9.x,b9.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),false)
  } else {
    text("9",b9.x,b9.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),true)
  }
  if(openedSuitcases.includes(",10,")){
    text(shuffledAmountsArray[0],b10.x,b10.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),false)
  } else {
    text("10",b10.x,b10.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),true)
  }
  if(openedSuitcases.includes(",11,")){
    text(shuffledAmountsArray[0],b11.x,b11.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),false)
  } else {
    text("11",b11.x,b11.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),true)
  }
  if(openedSuitcases.includes(",12,")){
    text(shuffledAmountsArray[0],b12.x,b12.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),false)
  } else {
    text("12",b12.x,b12.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]),true)
  }

  if(suitcaseSelected === false){
    if(mousePressedOver(b1)){
      text("1",width/2+60,height-40)
      b1.addImage(selectedSuitcase)
      suitcaseSelected = true
      selectedSuitcase = 1
    } else if (mousePressedOver(b2)){
      text("2",width/2+60,height-40)
      b2.addImage(selectedSuitcase)
      suitcaseSelected = true
      selectedSuitcase = 2
    } else if(mousePressedOver(b3)){
      text("3",width/2+60,height-40)
      b3.addImage(selectedSuitcase)
      suitcaseSelected = true
      selectedSuitcase = 3
    }else if (mousePressedOver(b4)){
      text("4",width/2+60,height-40)
      b4.addImage(selectedSuitcase)
      suitcaseSelected = true
      selectedSuitcase = 4
    }else if (mousePressedOver(b5)){
      text("5",width/2+60,height-40)
      b5.addImage(selectedSuitcase)
      suitcaseSelected = true
      selectedSuitcase = 5
    }else if (mousePressedOver(b6)){
      text("6",width/2+60,height-40)
      b6.addImage(selectedSuitcase)
      suitcaseSelected = true
      selectedSuitcase = 6
    }else if (mousePressedOver(b7)){
      text("7",width/2+60,height-40)
      b7.addImage(selectedSuitcase)
      suitcaseSelected = true
      selectedSuitcase = 7
    }else if (mousePressedOver(b8)){
      text("8",width/2+60,height-40)
      b8.addImage(selectedSuitcase)
      suitcaseSelected = true
      selectedSuitcase = 8
    }else if (mousePressedOver(b9)){
      text("9",width/2+60,height-40)
      b9.addImage(selectedSuitcase)
      suitcaseSelected = true
      selectedSuitcase = 9
    }else if (mousePressedOver(b10)){
      text("10",width/2+60,height-40)
      b10.addImage(selectedSuitcase)
      suitcaseSelected = true
      selectedSuitcase = 10
    }else if (mousePressedOver(b11)){
      text("11",width/2+60,height-40)
      b11.addImage(selectedSuitcase)
      suitcaseSelected = true
      selectedSuitcase = 11
    }else if (mousePressedOver(b12)){
      text("12",width/2+60,height-40)
      b12.addImage(selectedSuitcase)
      suitcaseSelected = true
      selectedSuitcase = 12
    }
  } else {
    if(mousePressedOver(b1) && selectedSuitcase!=1 && !openedSuitcases.includes(",1,")){
     b1.addImage(openedSuitcase)
     openedSuitcases = openedSuitcases + ",1,";
     text(shuffledAmountsArray[0],b1.x,b1.y)
    }else if (mousePressedOver(b2) && selectedSuitcase!=2 && !openedSuitcases.includes(",2,")){
      b2.addImage(openedSuitcase)
      openedSuitcases = openedSuitcases + ",2,";
      text(shuffledAmountsArray[1],b2.x,b2.y)
     }else if (mousePressedOver(b3) && selectedSuitcase!=3 && !openedSuitcases.includes(",3,")){
      b3.addImage(openedSuitcase)
      openedSuitcases = openedSuitcases + ",3,";
      text(shuffledAmountsArray[2],b3.x,b3.y)
     }else if (mousePressedOver(b4) && selectedSuitcase!=4 && !openedSuitcases.includes(",4,")){
      b4.addImage(openedSuitcase)
      openedSuitcases = openedSuitcases + ",4,";
      text(shuffledAmountsArray[3],b4.x,b4.y)
     }else if (mousePressedOver(b5) && selectedSuitcase!=5 && !openedSuitcases.includes(",5,")){
      b5.addImage(openedSuitcase)
      openedSuitcases = openedSuitcases + ",5,";
      text(shuffledAmountsArray[4],b5.x,b5.y)
     }else if (mousePressedOver(b6) && selectedSuitcase!=6 && !openedSuitcases.includes(",6,")){
      b6.addImage(openedSuitcase)
      openedSuitcases = openedSuitcases + ",6,";
      text(shuffledAmountsArray[5],b6.x,b6.y)
     }else if (mousePressedOver(b1) && selectedSuitcase!=7 && !openedSuitcases.includes(",7,")){
      b7.addImage(openedSuitcase)
      openedSuitcases = openedSuitcases + ",7,";
      text(shuffledAmountsArray[6],b7.x,b7.y)
     }else if (mousePressedOver(b8) && selectedSuitcase!=8 && !openedSuitcases.includes(",8,")){
      b8.addImage(openedSuitcase)
      openedSuitcases = openedSuitcases + ",8,";
      text(shuffledAmountsArray[7],b8.x,b8.y)
     }else if (mousePressedOver(b9) && selectedSuitcase!=9 && !openedSuitcases.includes(",9,")){
      b1.addImage(openedSuitcase)
      openedSuitcases = openedSuitcases + ",9,";
      text(shuffledAmountsArray[8],b9.x,b9.y)
     }else if (mousePressedOver(b10) && selectedSuitcase!=10 && !openedSuitcases.includes(",10,")){
      b10.addImage(openedSuitcase)
      openedSuitcases = openedSuitcases + ",10,";
      text(shuffledAmountsArray[9],b10.x,b10.y)
     }else if (mousePressedOver(b11) && selectedSuitcase!=11 && !openedSuitcases.includes(",11,")){
      b11.addImage(openedSuitcase)
      openedSuitcases = openedSuitcases + ",11,";
      text(shuffledAmountsArray[10],b11.x,b11.y)
     } else if (mousePressedOver(b12) && selectedSuitcase!=12 && !openedSuitcases.includes(",12,")){
      b12.addImage(openedSuitcase)
      openedSuitcases = openedSuitcases + ",12,";
      text(shuffledAmountsArray[11],b12.x,b12.y)
     }
  }

}


  function makeColInvisible(index,visible){
  switch(index){
    case 0 : col1.visible = visible ; if(visible) text(arr[index],col1.x,col1.y);
            break;
    case 1 : co2.visible = visible ; if(visible) text(arr[index],col2.x,col2.y);
            break;   
    case 2 : col3.visible = visible ; if(visible) text(arr[index],col3.x,col3.y);
            break;
    case 3 : col4.visible = visible ; if(visible) text(arr[index],col4.x,col4.y);
            break;
    case 4 : col5.visible = visible ; if(visible) text(arr[index],col5.x,col5.y);
            break;
    case 5 : col6.visible = visible ; if(visible) text(arr[index],col6.x,col6.y);
            break;
    case 6 : col7.visible = visible ; if(visible) text(arr[index],col7.x,col7.y);
            break;
    case 7 : col8.visible = visible ; if(visible) text(arr[index],col8.x,col8.y);
            break;
    case 8 : col9.visible = visible ; if(visible) text(arr[index],col9.x,col9.y);
            break;
    case 9 : col10.visible = visible ; if(visible) text(arr[index],col10.x,col10.y);
            break;
    case 10 : col11.visible = visible ; if(visible) text(arr[index],col11.x,col11.y);
            break;  
    case 11 : col12.visible = visible ; if(visible) text(arr[index],col12.x,col12.y);
            break;
  }
  }


