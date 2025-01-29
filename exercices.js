const nom_sorcier = "Archibald 🧙‍♂️";
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
 * Affiche dans la console un texte prédéfini avec le nom du sorcier que la personne aura défini dans son prompt.
 * @param {string} nom_sorcier -- Le nom du sorcier par défaut "Archibald"
 */
function salutations () {
    console.log(`​Salutations Aventurier ! Je me nomme ${nom_sorcier} pour vous servir.`);
}
console.log(salutations());

