//Calculate Constructor
function calculate(vizeYuzde, vizeNot, quiz1Yuzde, quiz1Not, quiz2Yuzde, quiz2Not, odevYuzde, odevNot, finalYuzde, finalNot, toplamNot){
    this.vizeYuzde = vizeYuzde;
    this.vizeNot = vizeNot;
    this.quiz1Yuzde= quiz1Yuzde;
    this.quiz2Yuzde = quiz2Yuzde;
    this.quiz1Not = quiz1Not;
    this.quiz2Not = quiz2Not;
    this.odevYuzde = odevYuzde;
    this.odevNot = odevNot;
    this.finalYuzde = finalYuzde;
    this.finalNot = finalNot;
    this.toplam = toplamNot;


}

calculate.prototype.calculater = function(vizeYuzde, vizeNot, quiz1Yuzde, quiz1Not, quiz2Yuzde, quiz2Not, odevYuzde, odevNot, finalYuzde, finalNot,toplamNot){
    
    this.vizeYuzde = vizeYuzde;
    this.vizeNot = vizeNot;
    this.quiz1Yuzde= quiz1Yuzde;
    this.quiz2Yuzde = quiz2Yuzde;
    this.quiz1Not = quiz1Not;
    this.quiz2Not = quiz2Not;
    this.odevYuzde = odevYuzde;
    this.odevNot = odevNot;
    this.finalYuzde = finalYuzde;
    this.finalNot = finalNot;
    this.toplam = toplamNot;



    this.vizeNot = (this.vizeYuzde * this.vizeNot)/100;
    this.quiz1Not = (this.quiz1Yuzde * this.quiz1Not)/100;
    this.quiz2Not = (this.quiz2Yuzde * this.quiz2Not)/100;
    this.odevNot = (this.odevYuzde * this.odevNot)/100;
    this.finalNot = (this.finalYuzde * this.finalNot)/100;
    this.toplam = this.vizeNot + this.quiz1Not + this.quiz2Not + this.odevNot + this.finalNot ;
 
}