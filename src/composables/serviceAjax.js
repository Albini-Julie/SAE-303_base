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
    return fetch(rq)    // on renvoie la requête à qui la demande
        .then(response => {
            return response.json()  //résultat de la requête en json
        })
        .catch(error => { throw error}) // Cas d'erreur
}

export const getEcoles = () => {
    let rq = 'https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/'
    +'?dataset=fr-esr-principaux-etablissements-enseignement-superieur'
    +'&q='
    +'&rows=255'
    +'&facet=type_d_etablissement'
    +'&facet=typologie_d_universites_et_assimiles'
    +'&facet=secteur_d_etablissement'
    +'&facet=vague_contractuelle'
    +'&facet=localisation'
    +'&facet=uai'
    +'&facet=siret'
    +'&facet=siren'
    +'&facet=identifiant_ror'
    +'&facet=identifiant_grid'
    +'&facet=identifiant_dataesr'
    +'&facet=anciens_codes_uai'
    +'&facet=com_nom'
    +'&facet=dep_nom'
    +'&facet=aca_nom'
    +'&facet=reg_nom'
    +'&facet=pays_etranger_acheminement'
    +'&facet=statut_juridique_court'
    +'&facet=qualification_long'
    +'&facet=uai_rgp_loi_esr_2013'
    +'&facet=universites_fusionnees'
    +'&facet=etablissement_experimental'
    +'&facet=statut_operateur_lolf'
    +'&facet=identifiant_programme_lolf_chef_de_file'
    // Requête concernée
    return fetch(rq)    // on renvoie la requête à qui la demande
        .then(response => {
            return response.json()  //résultat de la requête en json
        })
        .catch(error => { throw error}) // Cas d'erreur
}
