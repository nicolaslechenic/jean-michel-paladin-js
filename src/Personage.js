class Personage {
  constructor (name) {
    this.name = name
    this.healthPoints = 100
  }

  isAlive () { return this.healthPoints > 0 }
  isDeadly (damage) { return this.healthPoints <= damage }

  info () {
    // A faire:
    // - Renvoie le nom et les points de vie si la personne est en vie
    // - Renvoie le nom et "vaincu" si la personne a été vaincue
  }

  hit (personage) {
    // A faire:
    // - Fait subir des dégats à la personne passée en paramètre
    // - Affiche ce qu'il s'est passé
  }

  sufferDamage (damage) {
    // A faire:
    // - Réduit les points de vie en fonction des dégats reçus
    // - Affiche ce qu'il s'est passé
    // - Détermine si la personne est toujours en_vie ou non
  }
}

export default Personage
