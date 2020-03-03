var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];

let ul = document.getElementById("dominio");//obtengo el id donde voy a trabajar(modificar algo).

for (let i = 0; i < pronoun.length; i++) { //creo los 3 ciclos q recorran los tres arreglos
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {

            let conca = document.createTextNode(pronoun[i] + adj[j] + noun[k] + ".com");//creo un texto dentro del documento con la informacion de los arreglos y lo almaceno en conca.
            let li = document.createElement("li");//creo un elemento list dentro del ul creado y lo almaceno en li.
            li.appendChild(conca);//agrego al elemento li(hijo) el contenido de conca
            ul.appendChild(li);//agrego al elemento ul(padre) el listado.

        }
    }
}