
const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3, // exprimé en secondes
  },
};
const inventaire = [
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
    const potion = inventaire.find(item => item.id === id);
    
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
    const potion = {
      id: id,
      prix: prix,
      stock: stock
    };
    console.log(`Nouvelle potion créée : ${id}, Prix : ${prix}, Stock : ${stock}`);
    return potion;
}
createPotion("potion de force");
createPotion("potion de mana", 5, 2);


