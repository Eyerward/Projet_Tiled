

class Tableau1 extends Phaser.Scene {

    preload() {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('spike', 'assets/images/spike.png');
        // At last image must be loaded with its JSON
        this.load.atlas('player', 'assets/images/kenney_player.png','assets/images/kenney_player_atlas.json');
        this.load.image('tiles', 'assets/tilesets/platformPack_tilesheet.png');
        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/level1.json');
    }


    create() {


    }

    initKeyboard()
     {
        let me = this;

        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.D:

                    me.warrior.x +=10;
                    /**me.knight.body.setVelocityX(200);
                    me.sword.body.setVelocityX(200);**/
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.warrior.x -=10;
                    /**me.knight.body.setVelocityX(-200);
                    me.sword.body.setVelocityX(-200);**/
                    break;
                case Phaser.Input.Keyboard.KeyCodes.SPACE:
                    me.sword.body.setEnable(true);
                    me.sword.setVisible(true);
                    me.choung.play();
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.D:
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    /**me.sword.body.setVelocityX(0);
                    me.knight.body.setVelocityX(0);**/
                    break;
                case Phaser.Input.Keyboard.KeyCodes.SPACE:
                    me.sword.body.setEnable(false);
                    me.sword.setVisible(false);
            }
        });
    }

    disparait(obstacle){

        obstacle.body.setEnable(false);
        obstacle.setVisible(false);
    }


    update()
    {

    }


}
