function UI(){

   
}

UI.prototype.addResultToUI = function(calc){

    const result = document.getElementById("results");

    result.innerHTML += `
    <table class="table">
    <thead class="thead-dark">
        <tr>
            <th scope="col">Ders Notu</th>
            <th scope="col">Yüzdelik</th>
            <th scope="col">Yıl Sonu Puanı</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Vize Sınavı</td>
            <td>${calc.vizeYuzde}</td>
            <td>${calc.vizeNot}</td>
        </tr>
        <tr>
            <td>Quiz 1</td>
            <td>${calc.quiz1Yuzde}</td>
            <td>${calc.quiz1Not}</td>
        </tr>
        <tr>
            <td>Quız 2</td>
            <td>${calc.quiz2Yuzde}</td>
            <td>${calc.quiz2Not}</td>
        </tr>
        <tr>
            <td>Ödev</td>
            <td>${calc.odevYuzde}</td>
            <td>${calc.odevNot}</td>
        </tr>
        <tr>
             <td>Final</td>
             <td>${calc.finalYuzde}</td>
             <td>${calc.finalNot}</td>
        </tr>
    </tbody>
</table>

    `
    var resultColor = "danger";
    var harf = "FF";
    if(calc.toplam < 40 && calc.toplam >= 0){
        harf == "FF";
    }
    else if(calc.toplam >= 40 && calc.toplam < 50){
        harf = "DD";
    }
    else if(calc.toplam >= 50 && calc.toplam < 55){
        harf = "DC";
    }
    else if(calc.toplam >= 55 && calc.toplam < 60){
        harf = "CC";
        resultColor = "warning";
    }
    else if(calc.toplam >= 60 && calc.toplam < 75){
        harf = "BC";
        resultColor = "warning";
    }
    else if(calc.toplam >= 75 && calc.toplam < 85){
        harf = "BB";
        resultColor = "success";
    }
    else if(calc.toplam >= 85 && calc.toplam < 90){
        harf = "BA"
        resultColor = "success";
    }
    else if(calc.toplam >= 90 && calc.toplam <= 100){
        harf = "AA"
        resultColor = "success";
    }

    const lastResult = document.getElementById("lastResult");

    lastResult.innerHTML = `
    <div class="card text-white bg-${resultColor} mb-3" style="width: 248px; font-size:20px; margin-top:40px;">
  <div class="card-header text-center">SONUCUNUZ</div>
  <div class="card-body text-center">
    <div class="row">
        <div class="col-6">
        <h5 class="card-title">${calc.toplam}</h5>
        </div>
        <div class="col-6">
        <h5 class="card-title">${harf}</h5>
        </div>
        </div>
  </div>
</div>
    `

}

UI.prototype.displayMessage = function(text, situation){
   
    const textSituation = situation;
    const textMessage = text;
    const message = document.getElementById("message");

    message.innerHTML = `
    <div class="alert alert-${textSituation}" role="alert">
    ${textMessage}
    </div>
    `
    setTimeout(function(){ 
        message.remove();
    }, 6000);
}