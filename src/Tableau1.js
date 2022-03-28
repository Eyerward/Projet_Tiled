

class Tableau1 extends Phaser.Scene {

    preload() {
        this.load.image('background', 'assets/images/background.png');
        // At last image must be loaded with its JSON
        this.load.atlas('player', 'assets/images/kenney_player.png','assets/images/kenney_player_atlas.json');
        this.load.image('tiles', 'assets/tilesets/platformPack_tilesheet.png');
        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/levelTry.json');
    }


    create() {
        const backgroundImage = this.add.image(0, 0,'background').setOrigin(0, 0);
        backgroundImage.setScale(2, 0.8);

        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('project_platformer', 'tiles');
        const platforms = map.createStaticLayer('Platforms', tileset, 0, 200);
        platforms.setCollisionByExclusion(-1, true);

    }

    /**initKeyboard()
     {
        let me = this;

        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.D:
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    break;
                case Phaser.Input.Keyboard.KeyCodes.SPACE:
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.D:
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    break;
                case Phaser.Input.Keyboard.KeyCodes.SPACE:
                    break;
            }
        });
    }**/

    disparait(obstacle){

        obstacle.body.setEnable(false);
        obstacle.setVisible(false);
    }


    update()
    {

    }


}
