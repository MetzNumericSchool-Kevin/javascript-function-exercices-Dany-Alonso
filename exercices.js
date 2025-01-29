
const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3, // exprimé en secondes
  },
};
let inventaire = [
  {
    id: "potion_soin", // identifiant unique de la potion
    prix: 10,
    stock: 0,
  },
];

// Exercice 1 - Salutation Aventurier

/**
 * Nom du sorcier par défaut.
 * @constant {string}
 */
const nom_sorcier = "Archibald 🧙‍♂️";
/**
 * Affiche dans la console un message de salutations avec le nom du sorcier.
 * @param {string} [nom=nom_sorcier] _ Le nom du sorcier à afficher, utilise la constante globale par défaut.
 */
function salutations (nom = nom_sorcier) {
    console.log(`​Salutations Aventurier ! Je me nomme ${nom} pour vous servir.`);
}
salutations();


// Exercice 2 - Quel est le tarif d'une potion ?

/**
 * Calcule le prix total d'une potion en fonction de la quantité demandée.
 *
 * @param {string} id - L'identifiant unique de la potion.
 * @param {Array} inventaire - La liste des potions disponibles.
 * @param {number} [quantite=1] - La quantité demandée (par défaut 1).
 * @returns {number} - Le prix total de la commande.
 */
function calculerPrixPotion(id, inventaire, quantite = 1) {
    // Recherche de la potion dans l'inventaire avec .find() qui cherche le premier élément correspondant à une condition.
    const potion = inventaire.find(item => item.id === id); // Fonction fléchée
    // const potion = inventaire.find(function(item){          // Fonction standard
    //   return item.id === id;
    // });
    
    // Retourne avec un opérateur ternaire si la potion existe, calculer le prix total, sinon affiche 0. (on pourrait le faire avec if ... else)
    return potion ? potion.prix * quantite : 0;
}

// Exemple d'utilisation : calculer le prix de 3 potions de soin
const prixTotal = calculerPrixPotion("potion_soin", inventaire, 3);
console.log(`Le prix total pour 3 potions est de ${prixTotal} 🪙.`);


// Exercice 3 - Fabrication de potion

/**
 * Créer une nouvelle potion et l'ajoute dans l'inventaire.
 * 
 * @param {string} id - L'identifiant unique de la potion.
 * @param {number} [prix=10] - Le prix de la potion (par défaut 10).
 * @param {number} [stock = 1] - Le stock disponible de la potion (par défaut 1).
 * @returns {object} - Renvoi un objet (içi une potion).
 */
function createPotion(id , prix = 10, stock = 1) {
    // Création de la potion dans une constante dans laquel sera stocké le nouvel objet (la potion) avec ses paramètres
    const newPotion = {
      id: id,
      prix: prix,
      stock: stock
    };
    console.log(`Nouvelle potion créée : ${id}, Prix : ${prix}, Stock : ${stock}`);
    return newPotion;
}
createPotion("potion_force");
createPotion("potion_mana", 5, 2);


// Exercice 4 - Ajout de nouvelles potions dans l'inventaire

/**
 * Ajout d'une potion à l'inventaire si elle n'existe pas, si elle existe mettre * à jour le prix et son stock puis faire un tri du plus au moins cher.
 * 
 * @param {Array} inventaire - La liste des potions disponibles.
 * @param {object} - Renvoi un objet (potion).
 * @returns {Array} - L'inventaire mis à jour.
 */
function addPotionInventaire(inventaire, potion) {
    const index = inventaire.findIndex(pot => pot.id === potion.id); // Fonction fléchée
    // function compareId(pot){                                       // Fonction standard
    //   return pot.id === potion.id;
    // }    
    // const index = inventaire.findIndex(compareId)

    if (index !== -1) {
      // Si la potion existe déjà, met à jour le prix et le stock
      inventaire[index].prix = potion.prix;
      inventaire[index].stock += potion.stock;
      console.log(`Potion ${potion.id} mise à jour : Prix = ${potion.prix}, Nouveau stock = ${inventaire[index].stock}`);
    } else {
      // Si la potion n'existe pas, l'ajoute à l'inventaire
      inventaire.push(potion);
      console.log(`Potion ${potion.id} ajoutée avec succès : Prix = ${potion.prix}, Stock = ${potion.stock}`);
    }
  
    // Tri de l'inventaire du plus cher au moins cher
    inventaire.sort((a, b) => b.prix - a.prix)  // Fonction fléchée
    // inventaire.sort(function(a, b) {         // Fonction standard
    //   return b.prix - a.prix;
    // });
  
    // Retourner l'inventaire mis à jour
    return inventaire;
    
  }

inventaire = addPotionInventaire(inventaire, createPotion("potion_xp"));
inventaire = addPotionInventaire(inventaire, { id: 'potion_force', prix: 15, stock: 3 });
inventaire = addPotionInventaire(inventaire, { id: 'potion_mana', prix: 13, stock: 3 });
console.log(inventaire);
