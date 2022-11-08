// Fonction exportable pour être réutilisée
// Permet d'obtenir une liste de labels demandés sur un flux json
// lstData : le flux concerné
// label : la rubrique demandée
// Structure du label :
//  * nom complet de la rubrique notation objet
//  * séparateur : #
//  * nombre d'occurences : 
//      *1 : unique
//      * multi : occurences multiples
export const getLabels = (lstData, label) => {
    // nb d'occurences des valeurs du label
    let tl = label.split("#")
    let occurence = tl[1]
    //label concerné
    let lbl = tl[0]
    // noveau des informations du label
    let val = lbl.split(".")
    //Par exemple pour laSpecialité.nom
    // On a :
//        * val[0] :laSpecialite
//        * val[1] : nom
//        * val.length : 2
// Tableau de renvoi des résultats
let retour = []

// Set pour élimination des doublons
let set = new Set()

// Parcours des data
// Si occurrence multi, on utilise un tableau
// Pour stocker toutes les valeurs multiples
let tabObj = []
//Modification ce n'est plus une value de ref
//lsData.value.forEach((element) =>{
lstData.forEach( (element) => {
    //Suivant le niveau de profondeur du label
    switch (val.length) {
        // niveau arbo : 1
        //Par exemple : adresse#1
        // Il n'y a pas de point on récupère directement
        // la valeur dans val (let val = lbl.split("."))
        case 1 :
            // type d'occurence
            // unique (1) : on ajoute directement la valeur au set
            // Par exemple pour l'adresse
            // elt["adresse"] : pour la valeur de l'adresse
            // dans notre cas "adresse" est dans val[0] ]
            if(occurence == 1){set.add(element[val[0]])}
            // multiple (multi) : on parcourt toutes les valeurs mises dans le tableau
            if(occurence == 'multi'){
                element.forEach( (elt) => {
                    tabObj.push(elt[ val[0]])
                })
            }
            break

            // niveau arbo : 2
        //Par exemple : laSpecialite.nom#1
        // On obtient en faisant let val = lbl.split(".")
        // val[0] : "laSpecialite"
        // val[1] : "nom"
        case 2 :
            // type d'occurence
            // unique (1) : on ajoute directement la valeur au set
            // Par exemple pour laSpecialite
            // elt["laSpecialite"] ["nom"] : pour la valeur de la specialité
            // dans notre cas "laSpecialite" est dans val[0] et nom dans val[1]
            // On utilse donc : elt [val[0] ] [val[1]]]
            if(occurence == 1){set.add(element[val[0] ] [val[1]])}
            // multiple (multi) : on parcourt toutes les valeurs mises dans le tableau
            if(occurence == 'multi'){
                element[val[0]].forEach( (elt) => {
                    tabObj.push(elt[ val[1]])
                })
            }
            break

            case 3 :
                if(occurence == 1){set.add(element[val[0]] [val[1]] [val[2]])}
                if(occurence == "multi"){
                    element[ val[0]] [val[1]].forEach( (elt) =>{
                        tabObj.push(elt[val[2]])
                    })
                }
            break

            case 4 :
                if(occurence == 1){set.add(element[val[0]] [val[1]] [val[2]] [val[3]])}
                if(occurence == "multi"){
                    element[ val[0]] [val[1]] [val[2]].forEach( (elt) =>{
                        tabObj.push(elt[val[3]])
                    })
                }
                break
                // etc...
    } // fin switch
}) // fin boucle lstData

// Si multi on passe par le set pour éliminer les doublons
if(occurence == 'multi'){
    set = new Set(tabObj)
}
// Transfert du set dans le tableau de retour des résultats
retour = Array.from(set)
// Tri pour avoir en ordre croissant les labels
retour.sort()
//Transmission des labels
return retour
}

// fonction exportable
// 1er paramètre : les données
// 2eme paramètre : les labels
// 3eme paramètre : le libelle du label sur lequel l'opération est effectuée # occurence dans les données

export const countDatas = (lst, lstLabel, libLabel) => {
    // occurence et valeur du label
    let tl = libLabel.split("#")
    let lbl = tl[0]
    let occurence = tl[1]
    // valeur du label
    let val = lbl.split(".")
    // Tableau de comptage à retourner
    let retour = []
    //Boucle sur les labels
//Modification ce n'est plus une value de ref
//lsLabel.value.foreach(label) =>{
    // Boucle sur les labels
    lstLabel.forEach( (label) =>{
        // variable pour comptage pour son label
        let nb = 0
        // Boucle sur les données
        //Modification ce n'est plus une value de ref
        lst.forEach( (element) =>{
            switch (val.length) {
                case 1 :
                    //type d'occurence
                    if (occurence == 1){
                        if (element[ val[0] ]== label){nb++}
                    }
                    if(occurence == 'multi'){
                        element[ val[0]].forEach( (elt) =>{nb++})
                    }
                    break

                    case 2 :
                    //type d'occurence
                    if (occurence == 1){
                        if (element[ val[0]] [val[1]] == label){nb++}
                    }
                    if(occurence == 'multi'){
                        element[ val[0]].forEach( (elt) =>{
                            if(elt[val[1]] == label){nb++}
                        })
                    }
                    break

                    case 3 :
                    //type d'occurence
                    if (occurence == 1){
                        if (element[ val[0]] [val[1]] [val[2]]== label){nb++}
                    }
                    if(occurence == 'multi'){
                        element[ val[0]] [val[1]].forEach( (elt) =>{
                            if(elt[val[2]] == label){nb++}
                        })
                    }
                    break
                    // etc ...
                    } //Fin Switch
            }) // fin boucle données
            retour.push(nb)
        })// fin boucle labels
        return retour
    }