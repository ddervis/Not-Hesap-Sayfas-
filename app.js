const vizeYuzdelik = document.getElementById("inputVizeYuzdelik");
const vizeNot = document.getElementById("inputVizeNot");
const quizYuzdelik1 = document.getElementById("inputQuizYuzdelik1");
const quizNot1 = document.getElementById("inputQuizNot1");
const quizYuzdelik2 = document.getElementById("inputQuizYuzdelik2");
const quizNot2 = document.getElementById("inputQuizNot2");
const odevYuzdelik = document.getElementById("inputOdevYuzdelik");
const odevNot = document.getElementById("inputOdevNot");
const finalYuzdelik = document.getElementById("inputFinalYuzdelik");
const finalNot = document.getElementById("inputFinalNot");
const form = document.getElementById("noteForm");

const ui = new UI();
const notCalc = new calculate();

eventListeners();

function eventListeners(){

    form.addEventListener("submit",hesapla);
}

function hesapla(e){

    const vizeYuzde = vizeYuzdelik.value;
    const vize = vizeNot.value;
    const quizYuzde1 = quizYuzdelik1.value;
    const quiz1 = quizNot1.value;
    const quizYuzde2 = quizYuzdelik2.value;
    const quiz2 = quizNot2.value;
    const odevYuzde = odevYuzdelik.value;
    const odeNot = odevNot.value;
    const finalYuzde = finalYuzdelik.value;
    const finaNot = finalNot.value;
    const toplamNot = 0;
    const toplamControl = parseInt(vizeYuzde) + parseInt(quizYuzde1) + parseInt(quizYuzde2) + parseInt(odevYuzde) + parseInt(finalYuzde);
    if(toplamControl<101 && toplamControl != ""){
        
        const calc = new calculate(vizeYuzde,vize,quizYuzde1,quiz1,quizYuzde2,quiz2,odevYuzde,odeNot,finalYuzde,finaNot);
        notCalc.calculater(vizeYuzde,vize,quizYuzde1,quiz1,quizYuzde2,quiz2,odevYuzde,odeNot,finalYuzde,finaNot,toplamNot);
        ui.addResultToUI(notCalc);
    }
    else {
        ui.displayMessage("Yüzdelik dilimlerinin toplam 100 olduğundan emin olup tekrar giriniz","danger");
    }

    e.preventDefault();
}

