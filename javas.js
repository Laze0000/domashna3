var n = ["пица","држава","куќа","риба","куче","милениче","автобус","точак","факултет","мечка","авион","патики",
"вести","мачка","слон","работа","книга","камера","чаша","дрво"];

var randomZbor=n[Math.floor(Math.random() * n.length)];
var bukvi = [];
var obidi=5;

for(var i = 0; i<randomZbor.length;i++){
    bukvi.push(randomZbor[i]);
}

var pokazhanZbor = [];
for(var i=0;i<bukvi.length;i++){
    pokazhanZbor[i]=" _ ";
}


for(var i=0;i<3;i++){
    var p = Math.floor(Math.random()*bukvi.length);
    do {
        p = Math.floor(Math.random() * bukvi.length);
    } while (pokazhanZbor[p] !== " _ ");
    pokazhanZbor[p]=bukvi[p];
}


function pogodi(){
    var b = document.getElementById('input').value;
    if (b == '') {
        alert('Внеси буква!');
        return;
    }

    var tochno = false;

    for (var i = 0; i < bukvi.length; i++) {
        if (bukvi[i] == b && pokazhanZbor[i] == " _ ") {
            pokazhanZbor[i] = b;
            tochno = true;
        }
    }

    var message = "";
    if (!tochno) {
        obidi--;
        if (obidi == 0) {
            alert("Не го погодивте зборот" + randomZbor);
        } else {
            alert("Погрешна буква" + "\nОстанати обиди: " + obidi);
        }
    } else if (pokazhanZbor.join('') === bukvi.join('')) {
        alert("Браво!");
    } else {
        alert("Останати обиди: " + obidi);
    }
    
    document.getElementById('bukvi').innerText = pokazhanZbor.join(' ');
    document.getElementById('obidi').innerText = "Останати обиди: " + obidi;
    document.getElementById('input').value = '';
}