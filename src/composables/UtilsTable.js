// Fonction de linéarisation des données multi-niveaux

export const linearData = (fields, items) => {
    //Linéariser les éléments décomposés
    fields.forEach((field) => {
         let t = field.key.split(".")
            let lg = t.length
            //Récupération des informations
            items.forEach((item) => {
                if(lg == 1) {
                    if(Array.isArray(item[field.key])){ //si tableau
                    let value=''
                    item[field.key].forEach( (val) => {value += " "+val})
                    item[field.key] = value
                }else{
                    //Sinon rien valeur prise par défaut
                }
                }; //Niveau 1
                
                //Niveau2
                if(lg==2) {
                    if(Array.isArray(item[t[0]])){ //si tableau
                    let value=''
                    item[t[0]].forEach( (val) => {value += " "+val[ t[1]]})
                    item[field.key] = value
                }else{item[field.key] = item[t[0]] [t[1]]}
            }
                if(lg==3){
                //Niveau 3
                if(Array.isArray(item[t[0]] [t[1]])){ //si tableau
                    let value=''
                    item[t[0]] [t[1]].forEach( (val) => {value += " "+val[ t[2]]})
                    item[field.key] = value
                }else{item[field.key] = item[t[0]] [t[1]] [t[2]]}
                }
            })
            })
             return items
        }

        // tri sélectionné
export const sortCol = (items, field) =>{
    //Fonction de comparaison string
    const compareString = (a, b) => {
        if(a[field.key] && b[field.key]){
        //On fait une conversion en minuscule, car les débuts en minucscules seraient placées avant les majuscules'
        return a[field.key].toLowerCase() > b[field.key].toLowerCase() ? 1 * field.sort : -1 * field.sort
    }
    }
    //Fonction de comparaison numérique
    const compareNumber = (a, b) => {
        //Type number demandé, on fait une conversion un réel, si chiffre à virugle
        return parseFloat(a[field.key]) > parseFloat(b[field.key]) ? 1 * field.sort : -1 * field.sort
    }

console.log("field", field)

    //Suivant le type de tri
    if(field.type == 'number') {items = items.sort(compareNumber)}
    else{items = items.sort(compareString)}

    //Position du tri à l'inverse de ce qu'il est
    // pour le prochain click
    field.sort = field.sort * -1
}
       
// Filtrage général
export const filterColumn = (field, itemsSvg) => {
    return itemsSvg.filter((element) => {
        if(element[field.key]){
        return element[field.key].toLowerCase().includes(field.filter.toLowerCase())
        }
    })
}