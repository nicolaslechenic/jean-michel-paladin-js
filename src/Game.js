class Game {
  constructor (displayer) {
    this.displayer = displayer
    this.turn = 0
  }

  increaseTurn () { this.turn += 1 }
  displayOver () { this.displayer.innerHTML = 'Game Over !' }

  damage () {
    return Math.floor(Math.random() * Math.floor(15))
  }

  ask (hero, world) {
    if (this.turn === 0) {
      this.displayer.innerHTML = `<br/><br/>Ainsi débutent les aventures de ${hero.name}<br/><br/>`
    }

    this.displayer.innerHTML += `<br/>☰☰☰☰☰☰☰☰☰☰☰☰ Tour numéro ${this.turn} ☰☰☰☰☰☰☰☰☰☰☰☰<br/><br/>`
    this.displayActions(world)
    this.displayer.innerHTML += '<br/>QUELLE ACTION FAIRE ?'
  }

  displayActions (world) {
    this.displayer.innerHTML += 'ACTIONS POSSIBLES :<br/>'
    this.displayer.innerHTML += ' 0 ●●●● Se soigner<br/>'
    this.displayer.innerHTML += ' 1 ●●●● Améliorer son attaque<br/>'

    let i = 2
    world.enemies.forEach((enemy) => {
      this.displayer.innerHTML += ` ${i} ●●●● Attaquer ${enemy.info()}<br/>`
      i++
    })

    this.displayer.innerHTML += ' 99 ●●●● Quitter le jeu<br/>'
  }

  choose (hero, world, value) {
    let choice = Number(value)

    if (choice === 0) {
      hero.heal()
    } else if (choice === 1) {
      hero.improveBonus()
    } else if (choice === 99) {
      this.displayOver()
    } else {
      let target = world.enemies[choice - 2]
      hero.hit(target)
    }

    this.displayer.innerHTML = ''
    this.displayer.innerHTML += '<br/>LES ENNEMIS RIPOSTENT !'

    this.world.currentEnemies().forEach((enemy) => { enemy.hit(hero) })

    this.displayer.innerHTML += `<br/>Etat du héro: ${this.hero.info()}<br/>`

    if (Game.isOver(hero, world)) {
      this.displayOver()
    } else {
      this.increaseTurn()
      this.ask(hero, world)
    }
  }

  static isOver (hero, world) {
    // A faire:
    // - Déterminer la condition de fin du jeu
  }
}

export default Game
