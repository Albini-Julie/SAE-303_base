// Services d'appels Ajax via fetch
// les fonctions sont exportables
// afin de permettre leur utilisatin par un programme externe 
// (réutilisable par import)

// Promesse de recherche
export const getEnseign = () => {
    let rq = 'https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/'
    +'?dataset=fr-esr-taux-poursuite-enseignement-superieur-par-academie'
    +'&q='
    +'&rows=2154'
    +'&facet=rentree_session'
    +'&facet=serie_du_bac'
    +'&facet=genre'
    +'&facet=aca_lib'
    // Requête concernée
    return fetch(rq)    // on renvoie la requêteà qui la demande
        .then(response => {
            return response.json()  //résultat de la requête en json
        })
        .catch(error => { throw error}) // Cas d'erreur
}