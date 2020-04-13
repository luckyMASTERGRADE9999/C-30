class Pyramid{
    constructor(_x,_y,_noRows,_noCols){
        var options={
    
        }
    this.x=_x,
    this.y=_y,
    this.rows=_noRows,
    this.cols=_noCols
    }
    
    conPyramid(){
        var noofCols=this.cols;
        for (let  i = 0; i < this.rows; i++) {  
            for (let j=0; j<noofCols; j++) {
            item = new PyrItem(this.x+31*j,this.y-37*i,25,35);
            itemsA.push (item);
            }
        this.x=this.x+15;  //  noCols=noCols-1;
        noofCols=noofCols-1;
        } 
    }

    display(){
    
         for (let i = 0; i <itemsA.length; i++) {  
        item = itemsA[i];
         var ranR=floor(random(10,255));
          var ranB=floor(random(25,100));
          var ranG=floor(random(100,250));
         fill(ranR,ranB,ranG); 
        item.display();

        for(let i=0; i<itemsA.length;i++){
            if(itemsA[i].motion>0.002){
                itemsA[i].delete;
                
            }
        }
    } 
}

 
 
 
    


 




}