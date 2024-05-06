let Nboutton = document.getElementById("Nboutton");
let creeBoutton = document.getElementById("creeBoutton");
let urlCree = "https://two243134-patate1.onrender.com/api/users";
let urlNouveau = "https://two243134-patate1.onrender.com/api/users/cle"

let NMessage = document.getElementById("Nmessage");
let Ncle = document.getElementById("Ncle-api");
let creeMessage = document.getElementById("creeMessage")
let creeCle = document.getElementById("creeCle-api")

Nboutton.onclick = nouveau;
creeBoutton.onclick = cree;

async function nouveau() {
    message = "";
    cour = document.getElementById("Ncourriel").value;
    mdp = document.getElementById("Nmdp").value;
    if (cour != "") {
        if (mdp != "") {
            let body = {
                courriel: cour,
                mot_de_passe: mdp
            }
            console.log(body)
            let reponse = await fetch(urlNouveau, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(body)
            });
            if (reponse.ok) {
                // Lecture de la réponse (ici en JSON)
                let resultat = await reponse.json();
                console.log("Resultat : ", resultat);
                NMessage.innerHTML = "Votre nouvelle cle d'api:";
                Ncle.innerHTML = resultat.cle_api;
            }
            else {
                console.log("Erreur code HTTP : ", reponse.status);
            }
        }
        else {
            NMessage.innerHTML = "il manque un mot de passe"
        }
    }
    else {
        NMessage.innerHTML = "il manque un courriel"
    }
}


async function cree() {
    message = "";
    cour = document.getElementById("creeCourriel").value;
    mdp = document.getElementById("creeMdp").value;
    prenom = document.getElementById("prenom").value;
    nom = document.getElementById("nom").value;
    if (cour != "") {
        if (mdp != "") {
            if (prenom != "") {
                if (nom != "") {
                    let body = {
                        nom: nom,
                        prenom: prenom,
                        courriel: cour,
                        mot_de_passe: mdp
                    }
                    console.log(body)
                    let reponse = await fetch(urlCree, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(body)
                    });
                    if (reponse.ok) {
                        // Lecture de la réponse (ici en JSON)
                        let resultat = await reponse.json();
                        console.log("Resultat : ", resultat);
                        creeMessage.innerHTML = "Votre nouvelle cle d'api:";
                        creeCle.innerHTML = resultat.cle_api;
                    }
                    else {
                        console.log("Erreur code HTTP : ", reponse.status);
                        if(reponse.status){
                            creeMessage.innerHTML = "ce courriel est deja utilisé"
                        }
                    }
                }
                else {
                    creeMessage.innerHTML = "il manque un nom"
                }
            }
            else {
                creeMessage.innerHTML = "il manque un prenom"
            }
        }
        else {
            creeMessage.innerHTML = "il manque un mot de passe"
        }
    }
    else {
        creeMessage.innerHTML = "il manque un courriel"
    }
}

