class Game {
  damage () {
    return Math.floor(Math.random() * Math.floor(15))
  }

  static displayActions (world, displayer) {
    displayer.innerHTML += 'ACTIONS POSSIBLES :<br/>'
    displayer.innerHTML += ' 0 ●●●● Se soigner<br/>'
    displayer.innerHTML += ' 1 ●●●● Améliorer son attaque<br/>'

    let i = 2
    world.enemies.forEach((enemy) => {
      displayer.innerHTML += ` ${i} ●●●● Attaquer ${enemy.info()}<br/>`
      i++
    })

    displayer.innerHTML += ' 99 ●●●● Quitter le jeu<br/>'
  }

  static isOver (hero, world) {
    // A faire:
    // - Déterminer la condition de fin du jeu
  }
}

export default Game
