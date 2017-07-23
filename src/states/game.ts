import * as Phaser from 'phaser'
import {Character} from '../sprites/character.ts'
import {setResponsiveWidth} from '../utils.ts'

export class GameState extends Phaser.State {
  mushroom: Mushroom
  character: Character

  init () {}
  preload () {}

  create () {
    this.game.physics.startSystem(Phaser.Physics.P2JS);

    //  Make things a bit more bouncey

    this.character = new Character({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY
    })
    this.game.physics.p2.enable(this.character);
    this.character.body.setZeroDamping();
    this.character.body.fixedRotation = true;



    this.game.add.existing(this.character)
  }

  render () {
    if (window['__DEV__']) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
