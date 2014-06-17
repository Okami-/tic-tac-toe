
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {
      var CELL_WIDTH, CELL_HEIGHT,
          CELL_COLS, CELL_ROWS;

          CELL_WIDTH = CELL_HEIGHT = 107;
          CELL_COLS = CELL_ROWS = 3;

      this.cells = this.game.add.group();
      this.player = 1;

      this.cells.physicsBodyType = Phaser.Physics.ARCADE;

      for (var i = 0; i < CELL_COLS; i++) {
        for (var j = 0; j < CELL_ROWS; j++) {
          var cell = this.cells.create(i * CELL_WIDTH, j * CELL_HEIGHT, 'cell');
          cell.frame = 0;
          cell.inputEnabled = true;
          cell.events.onInputDown.add(this.addPlayerMarker, this);
          this.game.physics.arcade.enable(cell);
        }
      }

      console.log(this.cells);

      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      // this.sprite = this.game.add.sprite(this.game.width/2, this.game.height/2, 'yeoman');
      // this.sprite.inputEnabled = true;

      // this.game.physics.arcade.enable(this.sprite);
      // this.sprite.body.collideWorldBounds = true;
      // this.sprite.body.bounce.setTo(1,1);
      // this.sprite.body.velocity.x = this.game.rnd.integerInRange(-500,500);
      // this.sprite.body.velocity.y = this.game.rnd.integerInRange(-500,500);
      //
      // this.sprite.events.onInputDown.add(this.clickListener, this);
    },
    update: function() {

    },
    clickListener: function() {
      this.game.state.start('gameover');
    },
    addPlayerMarker: function(sprite, pointer) {
      if(sprite.frame === 0) {
        sprite.frame = this.player;
        this.player = this.player === 1 ? 2 : 1;
      }
    }
  };

  module.exports = Play;
