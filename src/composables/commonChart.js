//Fonction dde calcul sur une base de couleur avec densité
export const densite = (base, datas) => {
  //calcul des valeurs extrêmes des données
  //valeurs mini et maxi
  let valMax= 0
  let valMin = 9999

  // Parcours des données
  datas.forEach((val) => {
    if (val < valMin) {
      valMin = val;
    }
    if (val > valMax) {
      valMax = val;
    }
  });

  let nbVal = 0.8 / (valMax - valMin);

  let tabVal = []
    let tabBorder = []
    let deg = 0.1

  //Pacours des données
  datas.forEach((val) => {
    //calcul de la transparence pour cette valeur
    //echelle de découpage x valeur actuelle + 10% (départ)
    let transp
    //Cas où les valeurs sont différentes
    if(valMin < valMax){ transp = nbVal*val*0.8+deg}
    //Cas où toutes les valeurs sont les mêmes, on force à 0.7
    // let nbVal = 0.8 / (valMax - valMin) => infini (division par 0)
    else{transp = val*0.7}

        //Mise à jour de la transparence
        let color = base.replace("#deg#", transp)
        let border = base.replace('#deg#', 1)

        //Ajout dans le tableau des couleurs

        tabVal.push(color)
        tabBorder.push(border)
})
return [tabVal, tabBorder]
}

//Fonction de calcul aléatoire des couleurs type rgba
//Non exportable, car utilise par une fonction interne
const couleur = (max) => {
  return Math.round(Math.random() * (max), 0);
}

export const aleatoire = (labels) => {
  let bgColor = []
  let bdColor = []

  labels.forEach(function(val){
    //On calcul la couleur du secteur
    let c1 = couleur(255)
    let c2 = couleur(255)
    let c3 = couleur(255)
    let tr = 0.5
    //Couleur avec transporence
    let color = 'rgba(' + [c1, c2, c3, tr].join(',') +")"
    bgColor.push(color)
    //Bordure sans transparence
    let border = 'rgba(' + [c1, c2, c3].join(',') +")"
    bdColor.push(color)
  })

  return [bgColor, bdColor]
}