gdjs.WinSceneCode = {};
gdjs.WinSceneCode.localVariables = [];
gdjs.WinSceneCode.idToCallbackMap = new Map();
gdjs.WinSceneCode.GDWinMenuButtonObjects1= [];
gdjs.WinSceneCode.GDWinMenuButtonObjects2= [];
gdjs.WinSceneCode.GDWinMenuButtonObjects3= [];
gdjs.WinSceneCode.GDNextLevelButtonObjects1= [];
gdjs.WinSceneCode.GDNextLevelButtonObjects2= [];
gdjs.WinSceneCode.GDNextLevelButtonObjects3= [];
gdjs.WinSceneCode.GDPlayerObjects1= [];
gdjs.WinSceneCode.GDPlayerObjects2= [];
gdjs.WinSceneCode.GDPlayerObjects3= [];
gdjs.WinSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1= [];
gdjs.WinSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2= [];
gdjs.WinSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects3= [];
gdjs.WinSceneCode.GDPlayerAttackHitboxObjects1= [];
gdjs.WinSceneCode.GDPlayerAttackHitboxObjects2= [];
gdjs.WinSceneCode.GDPlayerAttackHitboxObjects3= [];
gdjs.WinSceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.WinSceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.WinSceneCode.GDPlatform_9595GroundObjects3= [];
gdjs.WinSceneCode.GDPinchosObjects1= [];
gdjs.WinSceneCode.GDPinchosObjects2= [];
gdjs.WinSceneCode.GDPinchosObjects3= [];
gdjs.WinSceneCode.GDEnemyKillCounterObjects1= [];
gdjs.WinSceneCode.GDEnemyKillCounterObjects2= [];
gdjs.WinSceneCode.GDEnemyKillCounterObjects3= [];
gdjs.WinSceneCode.GDPlayer2Objects1= [];
gdjs.WinSceneCode.GDPlayer2Objects2= [];
gdjs.WinSceneCode.GDPlayer2Objects3= [];
gdjs.WinSceneCode.GDHeart1Objects1= [];
gdjs.WinSceneCode.GDHeart1Objects2= [];
gdjs.WinSceneCode.GDHeart1Objects3= [];
gdjs.WinSceneCode.GDHeart2Objects1= [];
gdjs.WinSceneCode.GDHeart2Objects2= [];
gdjs.WinSceneCode.GDHeart2Objects3= [];
gdjs.WinSceneCode.GDHeart3Objects1= [];
gdjs.WinSceneCode.GDHeart3Objects2= [];
gdjs.WinSceneCode.GDHeart3Objects3= [];
gdjs.WinSceneCode.GDEnemy23Objects1= [];
gdjs.WinSceneCode.GDEnemy23Objects2= [];
gdjs.WinSceneCode.GDEnemy23Objects3= [];
gdjs.WinSceneCode.GDHealthPickupObjects1= [];
gdjs.WinSceneCode.GDHealthPickupObjects2= [];
gdjs.WinSceneCode.GDHealthPickupObjects3= [];
gdjs.WinSceneCode.GDBulletObjects1= [];
gdjs.WinSceneCode.GDBulletObjects2= [];
gdjs.WinSceneCode.GDBulletObjects3= [];
gdjs.WinSceneCode.GDcolisionObjects1= [];
gdjs.WinSceneCode.GDcolisionObjects2= [];
gdjs.WinSceneCode.GDcolisionObjects3= [];
gdjs.WinSceneCode.GDcolision2Objects1= [];
gdjs.WinSceneCode.GDcolision2Objects2= [];
gdjs.WinSceneCode.GDcolision2Objects3= [];
gdjs.WinSceneCode.GDcolision3Objects1= [];
gdjs.WinSceneCode.GDcolision3Objects2= [];
gdjs.WinSceneCode.GDcolision3Objects3= [];
gdjs.WinSceneCode.GDcolision4Objects1= [];
gdjs.WinSceneCode.GDcolision4Objects2= [];
gdjs.WinSceneCode.GDcolision4Objects3= [];
gdjs.WinSceneCode.GDcolision5Objects1= [];
gdjs.WinSceneCode.GDcolision5Objects2= [];
gdjs.WinSceneCode.GDcolision5Objects3= [];
gdjs.WinSceneCode.GDHeart4Objects1= [];
gdjs.WinSceneCode.GDHeart4Objects2= [];
gdjs.WinSceneCode.GDHeart4Objects3= [];
gdjs.WinSceneCode.GDHeart5Objects1= [];
gdjs.WinSceneCode.GDHeart5Objects2= [];
gdjs.WinSceneCode.GDHeart5Objects3= [];


gdjs.WinSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "GameScene2");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene3", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "Game Scene");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene2", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "GameScene3");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene4", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "GameScene2");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "Game Scene");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "GameScene3");
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenuScene", false);
}
}

}


};gdjs.WinSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WinMenuButton"), gdjs.WinSceneCode.GDWinMenuButtonObjects1);
{for(var i = 0, len = gdjs.WinSceneCode.GDWinMenuButtonObjects1.length ;i < len;++i) {
    gdjs.WinSceneCode.GDWinMenuButtonObjects1[i].SetLabelTextOp("Volver al menú", null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WinMenuButton"), gdjs.WinSceneCode.GDWinMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinSceneCode.GDWinMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.WinSceneCode.GDWinMenuButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WinSceneCode.GDWinMenuButtonObjects1[k] = gdjs.WinSceneCode.GDWinMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.WinSceneCode.GDWinMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenuScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextLevelButton"), gdjs.WinSceneCode.GDNextLevelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinSceneCode.GDNextLevelButtonObjects1.length;i<l;++i) {
    if ( gdjs.WinSceneCode.GDNextLevelButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WinSceneCode.GDNextLevelButtonObjects1[k] = gdjs.WinSceneCode.GDNextLevelButtonObjects1[i];
        ++k;
    }
}
gdjs.WinSceneCode.GDNextLevelButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.WinSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.WinSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinSceneCode.GDWinMenuButtonObjects1.length = 0;
gdjs.WinSceneCode.GDWinMenuButtonObjects2.length = 0;
gdjs.WinSceneCode.GDWinMenuButtonObjects3.length = 0;
gdjs.WinSceneCode.GDNextLevelButtonObjects1.length = 0;
gdjs.WinSceneCode.GDNextLevelButtonObjects2.length = 0;
gdjs.WinSceneCode.GDNextLevelButtonObjects3.length = 0;
gdjs.WinSceneCode.GDPlayerObjects1.length = 0;
gdjs.WinSceneCode.GDPlayerObjects2.length = 0;
gdjs.WinSceneCode.GDPlayerObjects3.length = 0;
gdjs.WinSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1.length = 0;
gdjs.WinSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2.length = 0;
gdjs.WinSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects3.length = 0;
gdjs.WinSceneCode.GDPlayerAttackHitboxObjects1.length = 0;
gdjs.WinSceneCode.GDPlayerAttackHitboxObjects2.length = 0;
gdjs.WinSceneCode.GDPlayerAttackHitboxObjects3.length = 0;
gdjs.WinSceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.WinSceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.WinSceneCode.GDPlatform_9595GroundObjects3.length = 0;
gdjs.WinSceneCode.GDPinchosObjects1.length = 0;
gdjs.WinSceneCode.GDPinchosObjects2.length = 0;
gdjs.WinSceneCode.GDPinchosObjects3.length = 0;
gdjs.WinSceneCode.GDEnemyKillCounterObjects1.length = 0;
gdjs.WinSceneCode.GDEnemyKillCounterObjects2.length = 0;
gdjs.WinSceneCode.GDEnemyKillCounterObjects3.length = 0;
gdjs.WinSceneCode.GDPlayer2Objects1.length = 0;
gdjs.WinSceneCode.GDPlayer2Objects2.length = 0;
gdjs.WinSceneCode.GDPlayer2Objects3.length = 0;
gdjs.WinSceneCode.GDHeart1Objects1.length = 0;
gdjs.WinSceneCode.GDHeart1Objects2.length = 0;
gdjs.WinSceneCode.GDHeart1Objects3.length = 0;
gdjs.WinSceneCode.GDHeart2Objects1.length = 0;
gdjs.WinSceneCode.GDHeart2Objects2.length = 0;
gdjs.WinSceneCode.GDHeart2Objects3.length = 0;
gdjs.WinSceneCode.GDHeart3Objects1.length = 0;
gdjs.WinSceneCode.GDHeart3Objects2.length = 0;
gdjs.WinSceneCode.GDHeart3Objects3.length = 0;
gdjs.WinSceneCode.GDEnemy23Objects1.length = 0;
gdjs.WinSceneCode.GDEnemy23Objects2.length = 0;
gdjs.WinSceneCode.GDEnemy23Objects3.length = 0;
gdjs.WinSceneCode.GDHealthPickupObjects1.length = 0;
gdjs.WinSceneCode.GDHealthPickupObjects2.length = 0;
gdjs.WinSceneCode.GDHealthPickupObjects3.length = 0;
gdjs.WinSceneCode.GDBulletObjects1.length = 0;
gdjs.WinSceneCode.GDBulletObjects2.length = 0;
gdjs.WinSceneCode.GDBulletObjects3.length = 0;
gdjs.WinSceneCode.GDcolisionObjects1.length = 0;
gdjs.WinSceneCode.GDcolisionObjects2.length = 0;
gdjs.WinSceneCode.GDcolisionObjects3.length = 0;
gdjs.WinSceneCode.GDcolision2Objects1.length = 0;
gdjs.WinSceneCode.GDcolision2Objects2.length = 0;
gdjs.WinSceneCode.GDcolision2Objects3.length = 0;
gdjs.WinSceneCode.GDcolision3Objects1.length = 0;
gdjs.WinSceneCode.GDcolision3Objects2.length = 0;
gdjs.WinSceneCode.GDcolision3Objects3.length = 0;
gdjs.WinSceneCode.GDcolision4Objects1.length = 0;
gdjs.WinSceneCode.GDcolision4Objects2.length = 0;
gdjs.WinSceneCode.GDcolision4Objects3.length = 0;
gdjs.WinSceneCode.GDcolision5Objects1.length = 0;
gdjs.WinSceneCode.GDcolision5Objects2.length = 0;
gdjs.WinSceneCode.GDcolision5Objects3.length = 0;
gdjs.WinSceneCode.GDHeart4Objects1.length = 0;
gdjs.WinSceneCode.GDHeart4Objects2.length = 0;
gdjs.WinSceneCode.GDHeart4Objects3.length = 0;
gdjs.WinSceneCode.GDHeart5Objects1.length = 0;
gdjs.WinSceneCode.GDHeart5Objects2.length = 0;
gdjs.WinSceneCode.GDHeart5Objects3.length = 0;

gdjs.WinSceneCode.eventsList1(runtimeScene);
gdjs.WinSceneCode.GDWinMenuButtonObjects1.length = 0;
gdjs.WinSceneCode.GDWinMenuButtonObjects2.length = 0;
gdjs.WinSceneCode.GDWinMenuButtonObjects3.length = 0;
gdjs.WinSceneCode.GDNextLevelButtonObjects1.length = 0;
gdjs.WinSceneCode.GDNextLevelButtonObjects2.length = 0;
gdjs.WinSceneCode.GDNextLevelButtonObjects3.length = 0;
gdjs.WinSceneCode.GDPlayerObjects1.length = 0;
gdjs.WinSceneCode.GDPlayerObjects2.length = 0;
gdjs.WinSceneCode.GDPlayerObjects3.length = 0;
gdjs.WinSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1.length = 0;
gdjs.WinSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2.length = 0;
gdjs.WinSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects3.length = 0;
gdjs.WinSceneCode.GDPlayerAttackHitboxObjects1.length = 0;
gdjs.WinSceneCode.GDPlayerAttackHitboxObjects2.length = 0;
gdjs.WinSceneCode.GDPlayerAttackHitboxObjects3.length = 0;
gdjs.WinSceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.WinSceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.WinSceneCode.GDPlatform_9595GroundObjects3.length = 0;
gdjs.WinSceneCode.GDPinchosObjects1.length = 0;
gdjs.WinSceneCode.GDPinchosObjects2.length = 0;
gdjs.WinSceneCode.GDPinchosObjects3.length = 0;
gdjs.WinSceneCode.GDEnemyKillCounterObjects1.length = 0;
gdjs.WinSceneCode.GDEnemyKillCounterObjects2.length = 0;
gdjs.WinSceneCode.GDEnemyKillCounterObjects3.length = 0;
gdjs.WinSceneCode.GDPlayer2Objects1.length = 0;
gdjs.WinSceneCode.GDPlayer2Objects2.length = 0;
gdjs.WinSceneCode.GDPlayer2Objects3.length = 0;
gdjs.WinSceneCode.GDHeart1Objects1.length = 0;
gdjs.WinSceneCode.GDHeart1Objects2.length = 0;
gdjs.WinSceneCode.GDHeart1Objects3.length = 0;
gdjs.WinSceneCode.GDHeart2Objects1.length = 0;
gdjs.WinSceneCode.GDHeart2Objects2.length = 0;
gdjs.WinSceneCode.GDHeart2Objects3.length = 0;
gdjs.WinSceneCode.GDHeart3Objects1.length = 0;
gdjs.WinSceneCode.GDHeart3Objects2.length = 0;
gdjs.WinSceneCode.GDHeart3Objects3.length = 0;
gdjs.WinSceneCode.GDEnemy23Objects1.length = 0;
gdjs.WinSceneCode.GDEnemy23Objects2.length = 0;
gdjs.WinSceneCode.GDEnemy23Objects3.length = 0;
gdjs.WinSceneCode.GDHealthPickupObjects1.length = 0;
gdjs.WinSceneCode.GDHealthPickupObjects2.length = 0;
gdjs.WinSceneCode.GDHealthPickupObjects3.length = 0;
gdjs.WinSceneCode.GDBulletObjects1.length = 0;
gdjs.WinSceneCode.GDBulletObjects2.length = 0;
gdjs.WinSceneCode.GDBulletObjects3.length = 0;
gdjs.WinSceneCode.GDcolisionObjects1.length = 0;
gdjs.WinSceneCode.GDcolisionObjects2.length = 0;
gdjs.WinSceneCode.GDcolisionObjects3.length = 0;
gdjs.WinSceneCode.GDcolision2Objects1.length = 0;
gdjs.WinSceneCode.GDcolision2Objects2.length = 0;
gdjs.WinSceneCode.GDcolision2Objects3.length = 0;
gdjs.WinSceneCode.GDcolision3Objects1.length = 0;
gdjs.WinSceneCode.GDcolision3Objects2.length = 0;
gdjs.WinSceneCode.GDcolision3Objects3.length = 0;
gdjs.WinSceneCode.GDcolision4Objects1.length = 0;
gdjs.WinSceneCode.GDcolision4Objects2.length = 0;
gdjs.WinSceneCode.GDcolision4Objects3.length = 0;
gdjs.WinSceneCode.GDcolision5Objects1.length = 0;
gdjs.WinSceneCode.GDcolision5Objects2.length = 0;
gdjs.WinSceneCode.GDcolision5Objects3.length = 0;
gdjs.WinSceneCode.GDHeart4Objects1.length = 0;
gdjs.WinSceneCode.GDHeart4Objects2.length = 0;
gdjs.WinSceneCode.GDHeart4Objects3.length = 0;
gdjs.WinSceneCode.GDHeart5Objects1.length = 0;
gdjs.WinSceneCode.GDHeart5Objects2.length = 0;
gdjs.WinSceneCode.GDHeart5Objects3.length = 0;


return;

}

gdjs['WinSceneCode'] = gdjs.WinSceneCode;
