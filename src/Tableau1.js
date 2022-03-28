

class Tableau1 extends Phaser.Scene {

    preload() {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('door', 'assets/images/door.png');
        this.load.image('key', 'assets/images/key.png');
        this.load.image('ladder', 'assets/images/ladder.png');
        this.load.image('enemy', 'assets/images/enemy.png');
        // At last image must be loaded with its JSON
        this.load.atlas('player', 'assets/images/kenney_player.png','assets/images/kenney_player_atlas.json');
        this.load.image('tiles', 'assets/tilesets/platformPack_tilesheet.png');
        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/levelTry.json');
    }


    create() {

        /**PRESETS**/
        //BG / Map / Player with anim
        const backgroundImage = this.add.image(0, 0,'background').setOrigin(0, 0);
        backgroundImage.setScale(2, 0.8);

        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('project_platformer', 'tiles');
        const platforms = map.createStaticLayer('Platforms', tileset, 0, 100);
        platforms.setCollisionByExclusion(-1, true);

        this.player = this.physics.add.sprite(50, 300, 'player');
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, platforms);

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('player', {
                prefix: 'robo_player_',
                start: 2,
                end: 3,
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            frames: [{ key: 'player', frame: 'robo_player_0' }],
            frameRate: 10,
        });
        this.anims.create({
            key: 'jump',
            frames: [{ key: 'player', frame: 'robo_player_1' }],
            frameRate: 10,
        });

        /**GAMEOBJECTS**/

        this.ladder = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Ladder').objects.forEach((ladder) => {
            // Add new spikes to our sprite group
            const spikeSprite = this.ladder.create(ladder.x,ladder.y + 100 - ladder.height, 'ladder').setOrigin(0);
        });

        this.initKeyboard();
    }

    initKeyboard()
     {
        let me = this;

        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.player.setVelocityX(200);
                    if (me.player.body.onFloor()) {
                        me.player.play('walk', true);
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.player.setVelocityX(-200);
                    if (me.player.body.onFloor()) {
                    me.player.play('walk', true);
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    if (me.player.body.onFloor()) {
                        me.player.setVelocityY(-1000);
                        me.player.play('jump', true);
                    }
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.D:
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.player.setVelocityX(0);
                    if (me.player.body.onFloor()) {
                        me.player.play('idle', true);
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    break;
            }
        });
    }

    disparait(obstacle){

        obstacle.body.setEnable(false);
        obstacle.setVisible(false);
    }


    update()
    {
        if (this.player.body.velocity.x > 0) {
            this.player.setFlipX(false);
        } else if (this.player.body.velocity.x < 0) {
            // otherwise, make them face the other side
            this.player.setFlipX(true);
        }
    }


}
