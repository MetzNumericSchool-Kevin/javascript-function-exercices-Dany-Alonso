
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
// createPotion("potion_force");
// createPotion("potion_mana", 5, 2);


// Exercice 4 - Ajout de nouvelles potions dans l'inventaire

/**
 * Ajout d'une potion à l'inventaire si elle n'existe pas, si elle existe mettre * à jour le prix et son stock puis faire un tri du plus au moins cher.
 * 
 * @param {Array} inventaire - La liste des potions disponibles.
 * @param {object} - Renvoi un objet (potion).
 * @returns {Array} - L'inventaire mis à jour.
 */
function addPotionInventaire(inventaire, potion,) {
    const index = inventaire.findIndex(pot => pot.id === potion.id); // Fonction fléchée
    // function compareId(pot){                                       // Fonction standard
    //   return pot.id === potion.id;
    // }    
    // const index = inventaire.findIndex(compareId)

    if (index !== -1) {
      // Si la potion existe déjà, met à jour le prix et le stock
      inventaire[index].prix = potion.prix;
      inventaire[index].stock += potion.stock;
      console.log(`Potion "${potion.id}" mise à jour : Prix = ${potion.prix}, Nouveau stock = ${inventaire[index].stock}`);
    } else {
      // Si la potion n'existe pas, l'ajoute à l'inventaire
      inventaire.push(potion);
      console.log(`Potion "${potion.id}" ajoutée avec succès : Prix = ${potion.prix}, Stock = ${potion.stock}`);
    }
  
    // Tri de l'inventaire du plus cher au moins cher
    inventaire.sort((a, b) => b.prix - a.prix)  // Fonction fléchée
    // inventaire.sort(function(a, b) {         // Fonction standard
    //   return b.prix - a.prix;
    // });
  
    // Retourner l'inventaire mis à jour
    return inventaire;
    
  }

// inventaire = addPotionInventaire(inventaire, createPotion("potion_xp"));
// inventaire = addPotionInventaire(inventaire, { id: 'potion_force', prix: 15, stock: 3 });
// inventaire = addPotionInventaire(inventaire, { id: 'potion_mana', prix: 13, stock: 3 });
// console.log(inventaire); 


// Exercice 5 - Cherche moi les potions qui...

/**
 * Fais un tri dans le tableau inventaire des potions en stock
 * 
 * @param {Array} inventaire - La liste des potions disponibles.
 * @returns {Array}          - Inventaire filtrer
 */
function potionInStock(inventaire){  
  return inventaire.filter(potion => potion.stock > 0);  
}
let stockPotion = potionInStock(inventaire);
console.log(stockPotion);


/**
 * Fais un tri dans le tableau inventaire des potions avec un stock à 0
 * 
 * @param {Array} inventaire - La liste des potions disponibles.
 * @returns {Array}          - Inventaire filtrer
 */
function potionOutOfStock(inventaire){  
  return inventaire.filter(potion => potion.stock = 0);  
}
let zeroStockPotion = potionOutOfStock(inventaire);
console.log(zeroStockPotion);

console.log(inventaire);


// Exercice 6 - Allons faire de la cueillette, nous avons besoin de plus de potions !

/**
 * vérifie les ingrédients fournis avec ceux du manuel de fabrication pour créer ou non la potion demandé puis l'ajoute à l'inventaire. Si la potion n'existe pas, l'ajoute à l'inventaire et ajoute ça recette au manuel de fabrication.
 * 
 * @param {string} id - L'identifiant unique de la potion.
 * @param {string[]} ingredients - Les ingrédients fournis pour fabriquer la potion.
 * @param {number} [prix=10] - Le prix de la potion (par défaut 10).
 * @param {number} [stock = 1] - Le stock disponible de la potion (par défaut 1).
 * @returns {Object|Error} - Retourne un objet représentant la potion si les ingrédients sont complets, sinon une erreur.
 */
function newCreatePotion(id , ingredients = [], prix = 10, stock = 1) {
  // Stock l'index des objets du manuel de fabrication en variable pour pouvoir filtrer dedans.
  const recipe = manuel_de_fabrication[id]

  // Si l'id n'est pas dans le manuel, l'ajoute à l'inventaire et au manuel de recettes
  if (!recipe) {
    manuel_de_fabrication[id] = {
      ingredients,
      temps_de_fabrication: 3, // Temps par défaut en secondes
    };
    console.log(`Nouvelle recette "${id}" ajoutée au manuel.`, manuel_de_fabrication[id]);

    return {
      id,
      prix,
      stock,
    };
  }

  // Stock dans un tableau les éléments manquants grâce à un filtre dans les ingrédients du manuel de fabrication qui retourne une valeur true si l'ingrédients n'est pas présent dans le tableau de paramètre ingrédients[] de la fonction.
  const ingredientsManquants = recipe.ingredients.filter(ingredient => !ingredients.includes(ingredient));

  // Si la taille du tableau des ingrédients manquants est strictement supérieur à 0.
  if (ingredientsManquants.length > 0) {

    // Renvoi un message d'erreur avec l'id de la potion et les ingrédients manquants .join() créait et renvoi en string toutes les valeurs du tableau.
    return new Error(`Il manque des ingrédients à la potion "${id}" : ${ingredientsManquants.join(", ")}`);
  }

  // Si tout va bien, retourne un objet potion
  return {
    id,
    prix,
    stock,
  };
}

// Test de création et ajout de potions

// Déclare les caractéristiques d'une potion à créer dans un tableau d'objets.
const potionsATester = [
  { id: "potion_soin", ingredients: ["eau_de_source", "ecaille_de_dragon"], prix: 15, stock: 3 },
  { id: "potion_soin", ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"], prix: 20, stock: 2 },
  { id: "potion_force", ingredients: ["sang_de_licorne", "racine_d_or", "larmes_de_phoenix"], prix: 25, stock: 4 },
  { id: "potion_force", ingredients: ["sang_de_licorne", "racine_d_or"], prix: 30, stock: 1 },
];

// Test de la fabrication et ajout des potions dans l'inventaire
potionsATester.forEach(({ id, ingredients, prix, stock }) => {
  const resultatCreation = newCreatePotion(id, ingredients, prix, stock);

  // Si la potion renvoi une instance d'erreur.
  if (resultatCreation instanceof Error) {
    // Affiche le message d'erreur correspond.
    console.error(resultatCreation.message);
  // Sinon l'ajoute à l'inventaire.
  } else {
    addPotionInventaire(inventaire, resultatCreation);
  }
});

console.log("Inventaire final :", inventaire);
console.log("Manuel de fabrication mis à jour :", manuel_de_fabrication);