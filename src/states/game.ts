import * as Phaser from 'phaser'
import {Character} from '../sprites/character.ts'
import {setResponsiveWidth} from '../utils.ts'

export class GameState extends Phaser.State {
  mushroom: Mushroom
  character: Character

  init () {}
  preload () {}

  create () {

    this.character = new Character({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY
    })

    this.game.add.existing(this.character)
  }

  render () {
    if (window['__DEV__']) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
