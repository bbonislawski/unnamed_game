import * as Phaser from 'phaser'

export class Character extends Phaser.Sprite {

  constructor({ game, x, y, asset }) {
    super(game, x, y, 'avt1_fr1')

    this.game = game
  }

  update() {
    let cursors = this.game.input.keyboard.createCursorKeys();

    if(cursors.left.isDown) {
      this.x += -this.movingSpeed();
    }
    else if(cursors.right.isDown) {
      this.x += this.movingSpeed();
    }
    if(cursors.up.isDown) {
      this.y += -this.movingSpeed();
    }
    else if(cursors.down.isDown) {
      this.y += this.movingSpeed();
    }
  }

  movingSpeed() {
    return 2;
  }
}
