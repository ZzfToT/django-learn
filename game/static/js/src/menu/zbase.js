class AcGameMenu{
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class= "ac-game-menu">
    <div class= "ac-game-menu-filed">
        <div class= "ac-game-menu-filed-item ac-game-menu-filed-item-single-mode">
            单人模式
        </div>
        <br>
        <div class= "ac-game-menu-filed-item ac-game-menu-filed-item-multi-mode">
            多人模式
        </div>
        <br>
        <div class= "ac-game-menu-filed-item ac-game-menu-filed-item-settings-mode">
            设置
        </div>
        <br>
    </div>
</div>
`);
        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find(".ac-game-menu-filed-item-single-mode");
        this.$multi_mode = this.$menu.find(".ac-game-menu-filed-item-multi-mode");
        this.$settings_mode = this.$menu.find(".ac-game-menu-filed-item-settings-mode");
        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function() {
            outer.hide();
            outer.root.playground.show();
        });

        this.$multi_mode.click(function() {
            console.log("click multi mode");
        });

        this.$settings_mode.click(function() {
            console.log("click settings mode");
        });
    }

    show(){
        this.$menu.show();
    }

    hide(){
        this.$menu.hide();
    }
}
