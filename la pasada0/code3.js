gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.idToCallbackMap = new Map();
gdjs.winCode.GDMenuButtonObjects1= [];
gdjs.winCode.GDMenuButtonObjects2= [];
gdjs.winCode.GDNewSpriteObjects1= [];
gdjs.winCode.GDNewSpriteObjects2= [];


gdjs.winCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.winCode.GDMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.winCode.GDMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.winCode.GDMenuButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.winCode.GDMenuButtonObjects1[k] = gdjs.winCode.GDMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.winCode.GDMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.winCode.GDMenuButtonObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}
{for(var i = 0, len = gdjs.winCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.winCode.GDMenuButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDMenuButtonObjects1.length = 0;
gdjs.winCode.GDMenuButtonObjects2.length = 0;
gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;

gdjs.winCode.eventsList0(runtimeScene);
gdjs.winCode.GDMenuButtonObjects1.length = 0;
gdjs.winCode.GDMenuButtonObjects2.length = 0;
gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;
