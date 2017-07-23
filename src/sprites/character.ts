import * as Phaser from 'phaser'

export class Character extends Phaser.Sprite {

  constructor({ game, x, y, asset }) {
    super(game, x, y, 'avt1_fr1')

    this.game = game
    window.dupa = this;
  }

  update() {
    let cursors = this.game.input.keyboard.createCursorKeys();
    this.body.setZeroVelocity();

    if(cursors.left.isDown) {
      this.body.moveLeft(this.movingSpeed());
    }
    else if(cursors.right.isDown) {
      this.body.moveRight(this.movingSpeed());
    }
    if(cursors.up.isDown) {
      this.body.moveUp(this.movingSpeed());
    }
    else if(cursors.down.isDown) {
      this.body.moveDown(this.movingSpeed());
    }
  }

  movingSpeed() {
    return 200;
  }
}
