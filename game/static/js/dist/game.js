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
let AC_GAME_OBJECTS =[];


class AcGameObject {
    constructor(){
        AC_GAME_OBJECTS.push(this);
        this.has_called_start = false; //是否执行过start函数
        this.timedelta = 0; //相邻两帧的时间间隔
    }

    start() {
        this.has_called_start= true;

    }

    update() {

    }

    on_destroy () {

    }
    destroy() {
        this.on_destroy();
        for (let i = 0; i < AC_GAME_OBJECTS.length; ++i) {
            if (AC_GAME_OBJECTS[i] === this) {
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }

}

let last_timestamp = 0;
let AC_GAME_ANIMATION = function(timestamp) {
    for (let i = 0; i < AC_GAME_OBJECTS.length; ++i) {
        let obj = AC_GAME_OBJECTS[i];
        if (!obj.has_called_start) {
            obj.start();
        }
        else {
            obj.timedelta = timestamp - last_time_stamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(AC_GAME_ANIMATION);
}

requestAnimationFrame(AC_GAME_ANIMATION);
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

export class AcGame{
    constructor(id) {
        this.id = id;
        this.$ac_game = $('#' + id);
        this.menu = new AcGameMenu(this);
        this.playground = new AcGamePlayground(this);
        this.menu.hide();
        this.playground.show();
    }

    start() {

    }
}
