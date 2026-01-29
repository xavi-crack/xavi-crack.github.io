gdjs.LevelsSceneCode = {};
gdjs.LevelsSceneCode.localVariables = [];
gdjs.LevelsSceneCode.idToCallbackMap = new Map();
gdjs.LevelsSceneCode.GDLevel1ButtonObjects1= [];
gdjs.LevelsSceneCode.GDLevel1ButtonObjects2= [];
gdjs.LevelsSceneCode.GDLevel2ButtonObjects1= [];
gdjs.LevelsSceneCode.GDLevel2ButtonObjects2= [];
gdjs.LevelsSceneCode.GDLevel3ButtonObjects1= [];
gdjs.LevelsSceneCode.GDLevel3ButtonObjects2= [];
gdjs.LevelsSceneCode.GDLevel4ButtonObjects1= [];
gdjs.LevelsSceneCode.GDLevel4ButtonObjects2= [];
gdjs.LevelsSceneCode.GDBackButtonObjects1= [];
gdjs.LevelsSceneCode.GDBackButtonObjects2= [];
gdjs.LevelsSceneCode.GDNewSpriteObjects1= [];
gdjs.LevelsSceneCode.GDNewSpriteObjects2= [];
gdjs.LevelsSceneCode.GDPlayerObjects1= [];
gdjs.LevelsSceneCode.GDPlayerObjects2= [];
gdjs.LevelsSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1= [];
gdjs.LevelsSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2= [];
gdjs.LevelsSceneCode.GDPlayerAttackHitboxObjects1= [];
gdjs.LevelsSceneCode.GDPlayerAttackHitboxObjects2= [];
gdjs.LevelsSceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.LevelsSceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.LevelsSceneCode.GDPinchosObjects1= [];
gdjs.LevelsSceneCode.GDPinchosObjects2= [];
gdjs.LevelsSceneCode.GDEnemyKillCounterObjects1= [];
gdjs.LevelsSceneCode.GDEnemyKillCounterObjects2= [];
gdjs.LevelsSceneCode.GDPlayer2Objects1= [];
gdjs.LevelsSceneCode.GDPlayer2Objects2= [];
gdjs.LevelsSceneCode.GDHeart1Objects1= [];
gdjs.LevelsSceneCode.GDHeart1Objects2= [];
gdjs.LevelsSceneCode.GDHeart2Objects1= [];
gdjs.LevelsSceneCode.GDHeart2Objects2= [];
gdjs.LevelsSceneCode.GDHeart3Objects1= [];
gdjs.LevelsSceneCode.GDHeart3Objects2= [];
gdjs.LevelsSceneCode.GDEnemy23Objects1= [];
gdjs.LevelsSceneCode.GDEnemy23Objects2= [];
gdjs.LevelsSceneCode.GDHealthPickupObjects1= [];
gdjs.LevelsSceneCode.GDHealthPickupObjects2= [];
gdjs.LevelsSceneCode.GDBulletObjects1= [];
gdjs.LevelsSceneCode.GDBulletObjects2= [];
gdjs.LevelsSceneCode.GDcolisionObjects1= [];
gdjs.LevelsSceneCode.GDcolisionObjects2= [];
gdjs.LevelsSceneCode.GDcolision2Objects1= [];
gdjs.LevelsSceneCode.GDcolision2Objects2= [];
gdjs.LevelsSceneCode.GDcolision3Objects1= [];
gdjs.LevelsSceneCode.GDcolision3Objects2= [];
gdjs.LevelsSceneCode.GDcolision4Objects1= [];
gdjs.LevelsSceneCode.GDcolision4Objects2= [];
gdjs.LevelsSceneCode.GDcolision5Objects1= [];
gdjs.LevelsSceneCode.GDcolision5Objects2= [];
gdjs.LevelsSceneCode.GDHeart4Objects1= [];
gdjs.LevelsSceneCode.GDHeart4Objects2= [];
gdjs.LevelsSceneCode.GDHeart5Objects1= [];
gdjs.LevelsSceneCode.GDHeart5Objects2= [];


gdjs.LevelsSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level1Button"), gdjs.LevelsSceneCode.GDLevel1ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsSceneCode.GDLevel1ButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelsSceneCode.GDLevel1ButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelsSceneCode.GDLevel1ButtonObjects1[k] = gdjs.LevelsSceneCode.GDLevel1ButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelsSceneCode.GDLevel1ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level2Button"), gdjs.LevelsSceneCode.GDLevel2ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsSceneCode.GDLevel2ButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelsSceneCode.GDLevel2ButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelsSceneCode.GDLevel2ButtonObjects1[k] = gdjs.LevelsSceneCode.GDLevel2ButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelsSceneCode.GDLevel2ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level3Button"), gdjs.LevelsSceneCode.GDLevel3ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsSceneCode.GDLevel3ButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelsSceneCode.GDLevel3ButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelsSceneCode.GDLevel3ButtonObjects1[k] = gdjs.LevelsSceneCode.GDLevel3ButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelsSceneCode.GDLevel3ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene3", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level4Button"), gdjs.LevelsSceneCode.GDLevel4ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsSceneCode.GDLevel4ButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelsSceneCode.GDLevel4ButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelsSceneCode.GDLevel4ButtonObjects1[k] = gdjs.LevelsSceneCode.GDLevel4ButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelsSceneCode.GDLevel4ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene4", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.LevelsSceneCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsSceneCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelsSceneCode.GDBackButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LevelsSceneCode.GDBackButtonObjects1[k] = gdjs.LevelsSceneCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelsSceneCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenuScene", false);
}
}

}


};

gdjs.LevelsSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelsSceneCode.GDLevel1ButtonObjects1.length = 0;
gdjs.LevelsSceneCode.GDLevel1ButtonObjects2.length = 0;
gdjs.LevelsSceneCode.GDLevel2ButtonObjects1.length = 0;
gdjs.LevelsSceneCode.GDLevel2ButtonObjects2.length = 0;
gdjs.LevelsSceneCode.GDLevel3ButtonObjects1.length = 0;
gdjs.LevelsSceneCode.GDLevel3ButtonObjects2.length = 0;
gdjs.LevelsSceneCode.GDLevel4ButtonObjects1.length = 0;
gdjs.LevelsSceneCode.GDLevel4ButtonObjects2.length = 0;
gdjs.LevelsSceneCode.GDBackButtonObjects1.length = 0;
gdjs.LevelsSceneCode.GDBackButtonObjects2.length = 0;
gdjs.LevelsSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.LevelsSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.LevelsSceneCode.GDPlayerObjects1.length = 0;
gdjs.LevelsSceneCode.GDPlayerObjects2.length = 0;
gdjs.LevelsSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1.length = 0;
gdjs.LevelsSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2.length = 0;
gdjs.LevelsSceneCode.GDPlayerAttackHitboxObjects1.length = 0;
gdjs.LevelsSceneCode.GDPlayerAttackHitboxObjects2.length = 0;
gdjs.LevelsSceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.LevelsSceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.LevelsSceneCode.GDPinchosObjects1.length = 0;
gdjs.LevelsSceneCode.GDPinchosObjects2.length = 0;
gdjs.LevelsSceneCode.GDEnemyKillCounterObjects1.length = 0;
gdjs.LevelsSceneCode.GDEnemyKillCounterObjects2.length = 0;
gdjs.LevelsSceneCode.GDPlayer2Objects1.length = 0;
gdjs.LevelsSceneCode.GDPlayer2Objects2.length = 0;
gdjs.LevelsSceneCode.GDHeart1Objects1.length = 0;
gdjs.LevelsSceneCode.GDHeart1Objects2.length = 0;
gdjs.LevelsSceneCode.GDHeart2Objects1.length = 0;
gdjs.LevelsSceneCode.GDHeart2Objects2.length = 0;
gdjs.LevelsSceneCode.GDHeart3Objects1.length = 0;
gdjs.LevelsSceneCode.GDHeart3Objects2.length = 0;
gdjs.LevelsSceneCode.GDEnemy23Objects1.length = 0;
gdjs.LevelsSceneCode.GDEnemy23Objects2.length = 0;
gdjs.LevelsSceneCode.GDHealthPickupObjects1.length = 0;
gdjs.LevelsSceneCode.GDHealthPickupObjects2.length = 0;
gdjs.LevelsSceneCode.GDBulletObjects1.length = 0;
gdjs.LevelsSceneCode.GDBulletObjects2.length = 0;
gdjs.LevelsSceneCode.GDcolisionObjects1.length = 0;
gdjs.LevelsSceneCode.GDcolisionObjects2.length = 0;
gdjs.LevelsSceneCode.GDcolision2Objects1.length = 0;
gdjs.LevelsSceneCode.GDcolision2Objects2.length = 0;
gdjs.LevelsSceneCode.GDcolision3Objects1.length = 0;
gdjs.LevelsSceneCode.GDcolision3Objects2.length = 0;
gdjs.LevelsSceneCode.GDcolision4Objects1.length = 0;
gdjs.LevelsSceneCode.GDcolision4Objects2.length = 0;
gdjs.LevelsSceneCode.GDcolision5Objects1.length = 0;
gdjs.LevelsSceneCode.GDcolision5Objects2.length = 0;
gdjs.LevelsSceneCode.GDHeart4Objects1.length = 0;
gdjs.LevelsSceneCode.GDHeart4Objects2.length = 0;
gdjs.LevelsSceneCode.GDHeart5Objects1.length = 0;
gdjs.LevelsSceneCode.GDHeart5Objects2.length = 0;

gdjs.LevelsSceneCode.eventsList0(runtimeScene);
gdjs.LevelsSceneCode.GDLevel1ButtonObjects1.length = 0;
gdjs.LevelsSceneCode.GDLevel1ButtonObjects2.length = 0;
gdjs.LevelsSceneCode.GDLevel2ButtonObjects1.length = 0;
gdjs.LevelsSceneCode.GDLevel2ButtonObjects2.length = 0;
gdjs.LevelsSceneCode.GDLevel3ButtonObjects1.length = 0;
gdjs.LevelsSceneCode.GDLevel3ButtonObjects2.length = 0;
gdjs.LevelsSceneCode.GDLevel4ButtonObjects1.length = 0;
gdjs.LevelsSceneCode.GDLevel4ButtonObjects2.length = 0;
gdjs.LevelsSceneCode.GDBackButtonObjects1.length = 0;
gdjs.LevelsSceneCode.GDBackButtonObjects2.length = 0;
gdjs.LevelsSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.LevelsSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.LevelsSceneCode.GDPlayerObjects1.length = 0;
gdjs.LevelsSceneCode.GDPlayerObjects2.length = 0;
gdjs.LevelsSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1.length = 0;
gdjs.LevelsSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2.length = 0;
gdjs.LevelsSceneCode.GDPlayerAttackHitboxObjects1.length = 0;
gdjs.LevelsSceneCode.GDPlayerAttackHitboxObjects2.length = 0;
gdjs.LevelsSceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.LevelsSceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.LevelsSceneCode.GDPinchosObjects1.length = 0;
gdjs.LevelsSceneCode.GDPinchosObjects2.length = 0;
gdjs.LevelsSceneCode.GDEnemyKillCounterObjects1.length = 0;
gdjs.LevelsSceneCode.GDEnemyKillCounterObjects2.length = 0;
gdjs.LevelsSceneCode.GDPlayer2Objects1.length = 0;
gdjs.LevelsSceneCode.GDPlayer2Objects2.length = 0;
gdjs.LevelsSceneCode.GDHeart1Objects1.length = 0;
gdjs.LevelsSceneCode.GDHeart1Objects2.length = 0;
gdjs.LevelsSceneCode.GDHeart2Objects1.length = 0;
gdjs.LevelsSceneCode.GDHeart2Objects2.length = 0;
gdjs.LevelsSceneCode.GDHeart3Objects1.length = 0;
gdjs.LevelsSceneCode.GDHeart3Objects2.length = 0;
gdjs.LevelsSceneCode.GDEnemy23Objects1.length = 0;
gdjs.LevelsSceneCode.GDEnemy23Objects2.length = 0;
gdjs.LevelsSceneCode.GDHealthPickupObjects1.length = 0;
gdjs.LevelsSceneCode.GDHealthPickupObjects2.length = 0;
gdjs.LevelsSceneCode.GDBulletObjects1.length = 0;
gdjs.LevelsSceneCode.GDBulletObjects2.length = 0;
gdjs.LevelsSceneCode.GDcolisionObjects1.length = 0;
gdjs.LevelsSceneCode.GDcolisionObjects2.length = 0;
gdjs.LevelsSceneCode.GDcolision2Objects1.length = 0;
gdjs.LevelsSceneCode.GDcolision2Objects2.length = 0;
gdjs.LevelsSceneCode.GDcolision3Objects1.length = 0;
gdjs.LevelsSceneCode.GDcolision3Objects2.length = 0;
gdjs.LevelsSceneCode.GDcolision4Objects1.length = 0;
gdjs.LevelsSceneCode.GDcolision4Objects2.length = 0;
gdjs.LevelsSceneCode.GDcolision5Objects1.length = 0;
gdjs.LevelsSceneCode.GDcolision5Objects2.length = 0;
gdjs.LevelsSceneCode.GDHeart4Objects1.length = 0;
gdjs.LevelsSceneCode.GDHeart4Objects2.length = 0;
gdjs.LevelsSceneCode.GDHeart5Objects1.length = 0;
gdjs.LevelsSceneCode.GDHeart5Objects2.length = 0;


return;

}

gdjs['LevelsSceneCode'] = gdjs.LevelsSceneCode;
