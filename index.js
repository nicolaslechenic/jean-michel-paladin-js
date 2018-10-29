import Hero from './src/Hero.js'
import Enemy from './src/Enemy.js'
import Game from './src/Game.js'
import World from './src/World.js'

const displayer = document.getElementById('displayer')
const submit = document.getElementById('button')

let turn = 0
let world = new World()
let hero = new Hero('Jean-Michel Paladin')

submit.addEventListener('click', (event) => { choose(event.target.value) })

world.enemies = [
  new Enemy('Balrog'),
  new Enemy('Goblin'),
  new Enemy('Squelette')
]

function show () {
  if (turn === 0) {
    displayer.innerHTML = `<br/><br/>Ainsi débutent les aventures de ${hero.name}<br/><br/>`
  }

  displayer.innerHTML += `<br/>☰☰☰☰☰☰☰☰☰☰☰☰ Tour numéro ${turn} ☰☰☰☰☰☰☰☰☰☰☰☰<br/><br/>`
  Game.displayActions(world, displayer)
  displayer.innerHTML += '<br/>QUELLE ACTION FAIRE ?'
}

function gameIsOver () { displayer.innerHTML = 'Game Over !' }

function choose (value) {
  let choice = Number(value)

  if (choice === 0) {
    hero.heal()
  } else if (choice === 1) {
    hero.improveBonus()
  } else if (choice === 99) {
    gameIsOver()
  } else {
    let target = world.enemies[choice - 2]
    hero.hit(target)
  }

  displayer.innerHTML = ''
  displayer.innerHTML += '<br/>LES ENNEMIS RIPOSTENT !'

  world.currentEnemies().forEach((enemy) => { enemy.hit(hero) })

  displayer.innerHTML += `<br/>Etat du héro: ${hero.info()}<br/>`

  if (Game.isOver(hero, world)) {
    gameIsOver()
  } else {
    turn++
    show()
  }
}

show()
