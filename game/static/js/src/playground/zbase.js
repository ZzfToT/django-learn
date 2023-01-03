class AcGamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $(`
<div class= "ac-game-playground">

</div>
`);
        this.root.$ac_game.append(this.$playground);
        this.width = this.$playground.width();
        this.height = this.$playground.height();

        this.start();
    };

    start() {

    }

    show() {
        this.$playground.show();
    }

    hide() {
        this.$playground.hide();
    }
}

