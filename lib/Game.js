class Game {
  damage () {
    return Math.floor(Math.random() * Math.floor(15))
  }

  static displayActions (world) {
    console.log('ACTIONS POSSIBLES :\n')
    console.log(' 0 ●●●● Se soigner\n')
    console.log(' 1 ●●●● Améliorer son attaque\n')

    let i = 2
    world.enemies.forEach((enemy) => {
      console.log(` ${i} ●●●● Attaquer ${enemy.info()}\n`)
      i++
    })

    console.log(' 99 ●●●● Quitter le jeu\n')
  }

  static isOver (hero, world) {
    // A faire:
    // - Déterminer la condition de fin du jeu
  }
}

export default Game
