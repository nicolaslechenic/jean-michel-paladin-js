import Personage from './Personage.js'

class Hero extends Personage {
  constructor (name, bonus = 0) {
    super(name)
    this.bonus = bonus
  }

  hitValue () {
    // A faire:
    // - Calculer les dégats
    // - Affiche ce qu'il s'est passé
  }

  heal () {
    // A faire:
    // - Gagner de la vie
    // - Affiche ce qu'il s'est passé
  }

  improveBonus () {
    // A faire:
    // - Augmenter les dégats bonus
    // - Affiche ce qu'il s'est passé
  }
}

export default Hero
