function creapagina(){
    var contenitore = localStorage.getItem("contenitore").split(",");
    for (var i = 0; i < contenitore.length; i++){
        if (i % 4 == 0){
            console.log(contenitore[i]);
            var tabella = document.getElementById("tabella2");
            var riga = document.createElement("tr");
            var ele_nome = document.createElement("th");
            ele_nome.innerHTML=contenitore[i];
            var ele_cognome = document.createElement("th");
            ele_cognome.innerHTML=contenitore[i+1];
            var ele_classe = document.createElement("th");
            ele_classe.innerHTML=contenitore[i+2];
            var ele_scuola = document.createElement("th");
            ele_scuola.innerHTML=contenitore[i+3];
            riga.appendChild(ele_nome);
            riga.appendChild(ele_cognome);
            riga.appendChild(ele_classe);
            riga.appendChild(ele_scuola);
            tabella.appendChild(riga);
        }
    }
}