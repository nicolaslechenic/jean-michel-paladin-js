import Hero from './src/Hero.js'
import Enemy from './src/Enemy.js'
import Game from './src/Game.js'
import World from './src/World.js'

const displayer = document.getElementById('displayer')
const submit = document.getElementById('button')

let world = new World()
let hero = new Hero('Jean-Michel Paladin')
let game = new Game(displayer)

world.enemies = [
  new Enemy('Balrog'),
  new Enemy('Goblin'),
  new Enemy('Squelette')
]

game.ask(hero, world)

submit.addEventListener('click', (event) => { game.choose(hero, world, event.target.value) })
