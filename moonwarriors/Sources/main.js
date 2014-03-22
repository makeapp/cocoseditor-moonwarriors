/**
 * @GameName :
 * Moon Warriors
 *
 * @DevelopTool:
 * Cocos2d-x Editor  (CocosEditor)
 *
 * @time
 * 2014-03-20 am
 *
 * @Licensed:
 * This showcase is licensed under GPL.
 *
 *  @Authors:
 *  Program cleaner:  touchSnow
 *
 *  @Links:
 *  http://www.cocos2d-x.com/      (cocos官方)
 *  https://github.com/makeapp      （github）
 *  http://blog.csdn.net/touchsnow  (csdn博客)
 *  http://blog.makeapp.co/     （官方博客）
 *  http://www.cocoseditor.com/     （建设中官网）
 *
 *  @Contact
 *  邮箱：zuowen@makeapp.co
 *  qq群：232361142
 *
 */


//game resources
var dirImg = "res/";
var dirMusic = "res/Music/";

//image
var s_loading = dirImg + "loading.png";
var s_menu = dirImg + "menu.png";
var s_logo = dirImg + "logo.png";
var s_b01 = dirImg + "b01.png";
var s_cocos2dhtml5 = dirImg + "cocos2d-html5.png";
var s_gameOver = dirImg + "gameOver.png";
var s_menuTitle = dirImg + "menuTitle.png";
var s_flare = dirImg + "flare.jpg";
var s_explosion = dirImg + "explosion.png";
var s_arial14 = dirImg + "arial-14.png";
var s_arial14_fnt = dirImg + "arial-14.fnt";
var s_textureOpaquePack = dirImg + "textureOpaquePack.png";
var s_textureTransparentPack = dirImg + "textureTransparentPack.png";

//music
var s_bgMusic_mp3 = dirMusic + "bgMusic.mp3";
var s_mainMainMusic_mp3 = dirMusic + "mainMainMusic.mp3";

//effect
var s_buttonEffect_mp3 = dirMusic + "buttonEffet.mp3";
var s_explodeEffect_mp3 = dirMusic + "explodeEffect.mp3";
var s_fireEffect_mp3 = dirMusic + "fireEffect.mp3";
var s_shipDestroyEffect_mp3 = dirMusic + "shipDestroyEffect.mp3";

var s_bgMusic_ogg = dirMusic + "bgMusic.ogg";
var s_mainMainMusic_ogg = dirMusic + "mainMainMusic.ogg";

//effect
var s_buttonEffect_ogg = dirMusic + "buttonEffet.ogg";
var s_explodeEffect_ogg = dirMusic + "explodeEffect.ogg";
var s_fireEffect_ogg = dirMusic + "fireEffect.ogg";
var s_shipDestroyEffect_ogg = dirMusic + "shipDestroyEffect.ogg";

//tmx
var s_level01 = dirImg + "level01.tmx";

//plist
var s_explosion_plist = dirImg + "explosion.plist";
var s_textureOpaquePack_plist = dirImg + "textureOpaquePack.plist";
var s_textureTransparentPack_plist = dirImg + "textureTransparentPack.plist";

//res
var g_mainmenu = [
    {src: s_loading},
    {src: s_flare},
    {src: s_menu},
    {src: s_logo},
    {src: s_flare},
    {src: s_b01},
    {src: s_mainMainMusic_mp3},
    {src: s_mainMainMusic_ogg},
    {src: s_menuTitle},
    {src: s_textureTransparentPack_plist},
    {src: s_textureTransparentPack}
];

var g_maingame = [
    //image
    {src: s_cocos2dhtml5},
    {src: s_gameOver},
    {src: s_arial14},
    {src: s_explosion},
    {src: s_textureOpaquePack},

    //tmx
    {src: s_level01},

    //plist
    {src: s_explosion_plist},
    {src: s_textureOpaquePack_plist},

    //music
    {src: s_bgMusic_mp3},
    {src: s_bgMusic_ogg},

    //effect
    {src: s_buttonEffect_mp3},
    {src: s_explodeEffect_mp3},
    {src: s_fireEffect_mp3},
    {src: s_shipDestroyEffect_mp3},
    {src: s_buttonEffect_ogg},
    {src: s_explodeEffect_ogg},
    {src: s_fireEffect_ogg},
    {src: s_shipDestroyEffect_ogg},

    // FNT
    {src: s_arial14_fnt}
];

//src
var MW = MW || {};
var appFiles = [
    'src/config/GameConfig.js',
    'src/config/EnemyType.js',
    'src/config/Level.js',
    'src/Effect.js',
    'src/Bullet.js',
    'src/Enemy.js',
    'src/Explosion.js',
    'src/Ship.js',
    'src/LevelManager.js',
    'src/GameController.js',
    'src/GameControlMenu.js',
    'src/GameLayer.js',
    'src/GameOver.js',
    'src/AboutLayer.js',
    'src/SettingsLayer.js',
    'src/SysMenu.js',
    'src/SparkEffect.js',
    'src/HitEffect.js'
];

if (sys.platform == 'browser') {
    var require = function (file)
    {
        var d = document;
        var s = d.createElement('script');
        s.src = file;
        d.body.appendChild(s);
    }
}
else {
    require("jsb.js");
}

cc.debug = function (msg)
{
    cc.log(msg);
}

cc.BuilderReader.replaceScene = function (path, ccbName)
{
    var scene = cc.BuilderReader.loadAsSceneFrom(path, ccbName);
    cc.Director.getInstance().replaceScene(scene);
    return scene;
}

cc.BuilderReader.loadAsScene = function (file, owner, parentSize)
{
    var node = cc.BuilderReader.load(file, owner, parentSize);
    var scene = cc.Scene.create();
    scene.addChild(node);
    return scene;
};

cc.BuilderReader.loadAsSceneFrom = function (path, ccbName)
{
    if (path && path.length > 0) {
        cc.BuilderReader.setResourcePath(path + "/");
        return cc.BuilderReader.loadAsScene(path + "/" + ccbName);
    }
    else {
        return cc.BuilderReader.loadAsScene(ccbName);
    }
}

cc.BuilderReader.loadAsNodeFrom = function (path, ccbName, owner)
{
    if (path && path.length > 0) {
        cc.BuilderReader.setResourcePath(path + "/");
        return cc.BuilderReader.load(path + "/" + ccbName, owner);
    }
    else {
        return cc.BuilderReader.load(ccbName, owner);
    }
}

cc.BuilderReader.runScene = function (module, name)
{
    var director = cc.Director.getInstance();
    var scene = cc.BuilderReader.loadAsSceneFrom(module, name);
    var runningScene = director.getRunningScene();
    if (runningScene === null) {
        //cc.log("runWithScene");
        director.runWithScene(scene);
    }
    else {
        //cc.log("replaceScene");
        director.replaceScene(scene);
    }
};


cc.dumpConfig();

//require js
for (var i = 0; i < appFiles.length; i++) {
    require(appFiles[i]);
}

//ccb res
var ccb_resources = g_maingame.concat(g_mainmenu);


//platform
if (sys.platform == 'browser') {
    var Cocos2dXApplication = cc.Application.extend({
        config: document['ccConfig'],
        ctor: function ()
        {
            this._super();
            cc.COCOS2D_DEBUG = this.config['COCOS2D_DEBUG'];
            cc.initDebugSetting();
            cc.setup(this.config['tag']);
            cc.AppController.shareAppController().didFinishLaunchingWithOptions();
        },
        applicationDidFinishLaunching: function ()
        {
            var director = cc.Director.getInstance();
            director.setDisplayStats(true);
            director.setAnimationInterval(1.0 / 60); // set FPS.
            // director->enableRetinaDisplay(true);
            // set FPS. the default value is 1.0/60 if you don't call this
            // director.setAnimationInterval(1.0 / this.config['frameRate']);
            var glView = director.getOpenGLView();
            glView.setDesignResolutionSize(320, 480, cc.RESOLUTION_POLICY.SHOW_ALL);
            cc.Loader.preload(ccb_resources, function ()
            {
                var mainScene = SysMenu.scene();
                director.runWithScene(mainScene);
            }, this);
            return true;
        }
    });
    var myApp = new Cocos2dXApplication();
}
else {
    var director = cc.Director.getInstance();
    director.setDisplayStats(true);
    director.setAnimationInterval(1.0 / 60); // set FPS.
    var mainScene = SysMenu.scene();
    director.runWithScene(mainScene);
}