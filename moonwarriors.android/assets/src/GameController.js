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


MW.GameController = cc.Class.extend({
    _curScene: null,
    _gameState: MW.GAME_STATE.HOME,
    _isNewGame: true,
    _curLevel: MW.LEVEL.STAGE1,
    _selectLevel: MW.LEVEL.STAGE1,
    init: function ()
    {
        return true;
    },
    setCurScene: function (s)
    {
        if (this._curScene != s) {
            if (this._curScene !== null) {
                this._curScene.onExit();
            }
            this._curScene = s;
            if (this._curScene) {
                this._curScene.onEnter();
                cc.Director.getInstance().replaceScene(s);
            }
        }
    },
    getCurScene: function ()
    {
        return this._curScene;
    },
    runGame: function ()
    {

    },
    newGame: function ()
    {

    },
    option: function ()
    {

    },
    about: function ()
    {

    }
});

MW.GameController.getInstance = function ()
{
    cc.Assert(this._sharedGame, "Havn't call setSharedGame");
    if (!this._sharedGame) {
        this._sharedGame = new MW.GameController();
        if (this._sharedGame.init()) {
            return this._sharedGame;
        }
    }
    else {
        return this._sharedGame;
    }
    return null;
};

MW.GameController._sharedGame = null;
