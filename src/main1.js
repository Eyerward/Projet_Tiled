let gameConfig = {
    type: Phaser.AUTO,
    width: 1200,
    height: 720,
    backgroundColor: '#000000',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 2000},
            debug: true,
        },
    },
    scene: new Tableau1()
};
let game = new Phaser.Game(gameConfig);