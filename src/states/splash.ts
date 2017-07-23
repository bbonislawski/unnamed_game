import * as Phaser from 'phaser'
import {centerGameObjects} from '../utils.ts'

export class SplashState extends Phaser.State {
  loaderBg: Phaser.Sprite
  loaderBar: Phaser.Sprite

  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('mushroom', 'assets/images/mushroom2.png')

    this.load.image('avt1_bk1', 'assets/images/avt1_bk1.gif')
    this.load.image('avt1_bk2', 'assets/images/avt1_bk2.gif')
    this.load.image('avt1_fr1', 'assets/images/avt1_fr1.png')
    this.load.image('avt1_fr2', 'assets/images/avt1_fr2.gif')
    this.load.image('avt1_lf1', 'assets/images/avt1_lf1.gif')
    this.load.image('avt1_lf2', 'assets/images/avt1_lf2.gif')
    this.load.image('avt1_rt1', 'assets/images/avt1_rt1.gif')
    this.load.image('avt1_rt2', 'assets/images/avt1_rt1.gif')
  }

  create () {
    this.game.state.start('Game')
  }

}
