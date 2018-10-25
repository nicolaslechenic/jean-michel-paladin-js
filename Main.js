import Hero from './lib/Hero.js'
import Enemy from './lib/Enemy.js'
import Game from './lib/Game.js'
import World from './lib/World.js'

let turn = 0
let world = new World()
let hero = new Hero('Jean-Michel Paladin')

world.enemies = [
  new Enemy('Balrog'),
  new Enemy('Goblin'),
  new Enemy('Squelette')
]

console.log(`\n\nAinsi débutent les aventures de ${hero.name}\n\n`)

for (;;) {
  console.log(`\n☰☰☰☰☰☰☰☰☰☰☰☰ Tour numéro ${turn} ☰☰☰☰☰☰☰☰☰☰☰☰\n\n`)
  Game.displayActions(world)
  let choice = Number(window.prompt('\nQUELLE ACTION FAIRE ?'))

  if (choice === 0) {
    hero.heal()
  } else if (choice === 1) {
    hero.improveBonus()
  } else if (choice === 99) {
    break
  } else {
    let target = world.enemies[choice - 2]
    hero.hit(target)
  }

  console.log('\nLES ENNEMIS RIPOSTENT !')

  world.currentEnemies().forEach((enemy) => { enemy.hit(hero) })

  console.log(`\nEtat du héro: ${hero.info()}\n`)

  if (Game.isOver(hero, world)) { break }

  turn++
}

console.log('\nGame Over !\n')

// A faire:
// - Afficher le résultat de la partie
//   - Vous avez gagné
//   - Vous venez de fuire
//   - Vous avez perdu
