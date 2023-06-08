//Tableau d'objet contenant les etuduants: leurs prenom, leurs nom, leurs age et leurs note
const monTableau = [
    {Prenom: "Mamadou", Nom: "Ndiaye", Age: 18+" ans", Note: 06 +"/20"},
    {Prenom: "Fatou", Nom: "Gueye", Age: 19+" ans", Note: 16 +"/20"},
    {Prenom: "Ibrahima", Nom: "Diop", Age: 22+" ans", Note: 19 +"/20"},
    {Prenom: "Awa", Nom: "Sow", Age: 20+" ans", Note: 18 +"/20"},
    {Prenom: "Abdoulaye", Nom: "Dia", Age: 18+" ans", Note: 11 +"/20"},
    {Prenom: "Khady", Nom: "Sy", Age: 24+" ans", Note: 17 +"/20"},
    {Prenom: "Cheikh", Nom: "Beye", Age: 20+" ans", Note: 07 +"/20"},
    {Prenom: "Aida", Nom: "Fall", Age: 21+" ans", Note: 12 +"/20"},
    {Prenom: "Babacar", Nom: "Gueye", Age: 19+" ans", Note: 09 +"/20"},
    {Prenom: "Khadija", Nom: "Diawara", Age: 17+" ans", Note: 14 +"/20"}
]

//cree une fonction qui permet de remplire dynamiquement le tableau
function initTableau() {
 
    const tbody = document.querySelector( '#table-eleve' ).querySelector( 'tbody')
   
        for ( let i = 0; i < monTableau.length; i++ ){
        const ligne = tbody.insertRow()
   
        // cellules Prenom
        let cellPrenom = ligne.insertCell()
        cellPrenom.innerHTML = monTableau[i].Prenom;
   
        // cellules Nom
        let cellNom = ligne.insertCell()
        cellNom.innerHTML = monTableau[i].Nom;
   
        // cellules Age
        let cellAge = ligne.insertCell()
        cellAge.innerHTML = monTableau[i].Age;
   
        // cellules Note
        let cellNote = ligne.insertCell()
        cellNote.innerHTML = monTableau[i].Note;
    }
}
// initialise la fonction
initTableau()

// Fonction qui permet d'afficher l'etudiant avec la meilleur note
function afficherMeilleureNote() {
    let meilleureNote = 0;
    let eleveMeilleureNote = null;
  
    for (let i = 0; i < monTableau.length; i++) {
      const note = parseInt(monTableau[i].Note)
  
      if (note > meilleureNote) {
        meilleureNote = note
        eleveMeilleureNote = monTableau[i]
      }
    }
document.getElementById('meilleure-note').innerHTML = `${eleveMeilleureNote.Prenom} ${eleveMeilleureNote.Nom} - ${eleveMeilleureNote.Note}`;
}
  
// Fonction qui permet d'afficher l'etudiant avec la moin bonne note
function afficherMoinsBonneNote() {
    let moinsBonneNote = 20
    let eleveMoinsBonneNote
  
    for (let i = 0; i < monTableau.length; i++) {
      const note = parseInt(monTableau[i].Note)
  
      if (note < moinsBonneNote) {
        moinsBonneNote = note;
        eleveMoinsBonneNote = monTableau[i]
      }
    }
document.getElementById('moins-bonne-note').innerHTML = `${eleveMoinsBonneNote.Prenom} ${eleveMoinsBonneNote.Nom} - ${eleveMoinsBonneNote.Note}`;
}

// Fonction qui permet d'afficher l'etudiant le plus age
  function afficherElevePlusAge() {
    let ageMax = 0
    let elevePlusAge
  
    for (let i = 0; i < monTableau.length; i++) {
      const age = parseInt(monTableau[i].Age)
  
      if (age > ageMax) {
        ageMax = age
        elevePlusAge = monTableau[i]
      }
    }
  
document.getElementById('eleve-plus-age').innerHTML = `${elevePlusAge.Prenom} ${elevePlusAge.Nom} - ${elevePlusAge.Age}`
}
  
// Fonction qui permet d'afficher l'etudiant le plus jeune
  function afficherEleveMoinsAge() {
    let ageMin = Infinity
    let eleveMoinsAge
  
    for (let i = 0; i < monTableau.length; i++) {
      const age = parseInt(monTableau[i].Age)
  
      if (age < ageMin) {
        ageMin = age
        eleveMoinsAge = monTableau[i]
      }
    }
document.getElementById('eleve-moins-age').innerHTML = `${eleveMoinsAge.Prenom} ${eleveMoinsAge.Nom} - ${eleveMoinsAge.Age}`
}

// Fonction animation barre de recherche 
let icon = document.querySelector('.icon')
let search = document.querySelector('.search')
icon.onclick = function () {
    search.classList.toggle('active')
}

// Fonction filter recherche
document.getElementById('mysearch').addEventListener('input', filtrerNoms);

function filtrerNoms() {
  // Récupérer la valeur saisie dans la barre de recherche
  const recherche = document.getElementById('mysearch').value.toLowerCase();
  
  // Récupérer les lignes du tableau d'étudiants
  const lignes = document.getElementById('table-eleve').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  
  // Parcourir les lignes du tableau
  for (let i = 0; i < lignes.length; i++) {
    const prenom = lignes[i].getElementsByTagName('td')[0].innerText.toLowerCase(); // Récupérer le prénom de l'étudiant dans la première colonne
    const nom = lignes[i].getElementsByTagName('td')[1].innerText.toLowerCase(); // Récupérer le nom de l'étudiant dans la deuxième colonne
    
    // Vérifier si le prénom ou le nom correspond à la recherche
    if (prenom.includes(recherche) || nom.includes(recherche)) {
      lignes[i].style.display = ''; // Afficher la ligne si le prénom ou le nom correspond à la recherche
    } else {
      lignes[i].style.display = 'none'; // Masquer la ligne sinon
    }
  }
}