gdjs.MainMenuSceneCode = {};
gdjs.MainMenuSceneCode.localVariables = [];
gdjs.MainMenuSceneCode.idToCallbackMap = new Map();
gdjs.MainMenuSceneCode.GDLa_9595ciudad_9595PerdidaObjects1= [];
gdjs.MainMenuSceneCode.GDLa_9595ciudad_9595PerdidaObjects2= [];
gdjs.MainMenuSceneCode.GDPlayButtonObjects1= [];
gdjs.MainMenuSceneCode.GDPlayButtonObjects2= [];
gdjs.MainMenuSceneCode.GDLevelsButtonObjects1= [];
gdjs.MainMenuSceneCode.GDLevelsButtonObjects2= [];
gdjs.MainMenuSceneCode.GDfondnoObjects1= [];
gdjs.MainMenuSceneCode.GDfondnoObjects2= [];
gdjs.MainMenuSceneCode.GDPlayerObjects1= [];
gdjs.MainMenuSceneCode.GDPlayerObjects2= [];
gdjs.MainMenuSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1= [];
gdjs.MainMenuSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2= [];
gdjs.MainMenuSceneCode.GDPlayerAttackHitboxObjects1= [];
gdjs.MainMenuSceneCode.GDPlayerAttackHitboxObjects2= [];
gdjs.MainMenuSceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.MainMenuSceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.MainMenuSceneCode.GDPinchosObjects1= [];
gdjs.MainMenuSceneCode.GDPinchosObjects2= [];
gdjs.MainMenuSceneCode.GDEnemyKillCounterObjects1= [];
gdjs.MainMenuSceneCode.GDEnemyKillCounterObjects2= [];
gdjs.MainMenuSceneCode.GDPlayer2Objects1= [];
gdjs.MainMenuSceneCode.GDPlayer2Objects2= [];
gdjs.MainMenuSceneCode.GDHeart1Objects1= [];
gdjs.MainMenuSceneCode.GDHeart1Objects2= [];
gdjs.MainMenuSceneCode.GDHeart2Objects1= [];
gdjs.MainMenuSceneCode.GDHeart2Objects2= [];
gdjs.MainMenuSceneCode.GDHeart3Objects1= [];
gdjs.MainMenuSceneCode.GDHeart3Objects2= [];
gdjs.MainMenuSceneCode.GDEnemy23Objects1= [];
gdjs.MainMenuSceneCode.GDEnemy23Objects2= [];
gdjs.MainMenuSceneCode.GDHealthPickupObjects1= [];
gdjs.MainMenuSceneCode.GDHealthPickupObjects2= [];
gdjs.MainMenuSceneCode.GDBulletObjects1= [];
gdjs.MainMenuSceneCode.GDBulletObjects2= [];
gdjs.MainMenuSceneCode.GDcolisionObjects1= [];
gdjs.MainMenuSceneCode.GDcolisionObjects2= [];
gdjs.MainMenuSceneCode.GDcolision2Objects1= [];
gdjs.MainMenuSceneCode.GDcolision2Objects2= [];
gdjs.MainMenuSceneCode.GDcolision3Objects1= [];
gdjs.MainMenuSceneCode.GDcolision3Objects2= [];
gdjs.MainMenuSceneCode.GDcolision4Objects1= [];
gdjs.MainMenuSceneCode.GDcolision4Objects2= [];
gdjs.MainMenuSceneCode.GDcolision5Objects1= [];
gdjs.MainMenuSceneCode.GDcolision5Objects2= [];
gdjs.MainMenuSceneCode.GDHeart4Objects1= [];
gdjs.MainMenuSceneCode.GDHeart4Objects2= [];
gdjs.MainMenuSceneCode.GDHeart5Objects1= [];
gdjs.MainMenuSceneCode.GDHeart5Objects2= [];


gdjs.MainMenuSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuSceneCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuSceneCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuSceneCode.GDPlayButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuSceneCode.GDPlayButtonObjects1[k] = gdjs.MainMenuSceneCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuSceneCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelsButton"), gdjs.MainMenuSceneCode.GDLevelsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuSceneCode.GDLevelsButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuSceneCode.GDLevelsButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuSceneCode.GDLevelsButtonObjects1[k] = gdjs.MainMenuSceneCode.GDLevelsButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuSceneCode.GDLevelsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelsScene", false);
}
}

}


};

gdjs.MainMenuSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuSceneCode.GDLa_9595ciudad_9595PerdidaObjects1.length = 0;
gdjs.MainMenuSceneCode.GDLa_9595ciudad_9595PerdidaObjects2.length = 0;
gdjs.MainMenuSceneCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuSceneCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuSceneCode.GDLevelsButtonObjects1.length = 0;
gdjs.MainMenuSceneCode.GDLevelsButtonObjects2.length = 0;
gdjs.MainMenuSceneCode.GDfondnoObjects1.length = 0;
gdjs.MainMenuSceneCode.GDfondnoObjects2.length = 0;
gdjs.MainMenuSceneCode.GDPlayerObjects1.length = 0;
gdjs.MainMenuSceneCode.GDPlayerObjects2.length = 0;
gdjs.MainMenuSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1.length = 0;
gdjs.MainMenuSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2.length = 0;
gdjs.MainMenuSceneCode.GDPlayerAttackHitboxObjects1.length = 0;
gdjs.MainMenuSceneCode.GDPlayerAttackHitboxObjects2.length = 0;
gdjs.MainMenuSceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.MainMenuSceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.MainMenuSceneCode.GDPinchosObjects1.length = 0;
gdjs.MainMenuSceneCode.GDPinchosObjects2.length = 0;
gdjs.MainMenuSceneCode.GDEnemyKillCounterObjects1.length = 0;
gdjs.MainMenuSceneCode.GDEnemyKillCounterObjects2.length = 0;
gdjs.MainMenuSceneCode.GDPlayer2Objects1.length = 0;
gdjs.MainMenuSceneCode.GDPlayer2Objects2.length = 0;
gdjs.MainMenuSceneCode.GDHeart1Objects1.length = 0;
gdjs.MainMenuSceneCode.GDHeart1Objects2.length = 0;
gdjs.MainMenuSceneCode.GDHeart2Objects1.length = 0;
gdjs.MainMenuSceneCode.GDHeart2Objects2.length = 0;
gdjs.MainMenuSceneCode.GDHeart3Objects1.length = 0;
gdjs.MainMenuSceneCode.GDHeart3Objects2.length = 0;
gdjs.MainMenuSceneCode.GDEnemy23Objects1.length = 0;
gdjs.MainMenuSceneCode.GDEnemy23Objects2.length = 0;
gdjs.MainMenuSceneCode.GDHealthPickupObjects1.length = 0;
gdjs.MainMenuSceneCode.GDHealthPickupObjects2.length = 0;
gdjs.MainMenuSceneCode.GDBulletObjects1.length = 0;
gdjs.MainMenuSceneCode.GDBulletObjects2.length = 0;
gdjs.MainMenuSceneCode.GDcolisionObjects1.length = 0;
gdjs.MainMenuSceneCode.GDcolisionObjects2.length = 0;
gdjs.MainMenuSceneCode.GDcolision2Objects1.length = 0;
gdjs.MainMenuSceneCode.GDcolision2Objects2.length = 0;
gdjs.MainMenuSceneCode.GDcolision3Objects1.length = 0;
gdjs.MainMenuSceneCode.GDcolision3Objects2.length = 0;
gdjs.MainMenuSceneCode.GDcolision4Objects1.length = 0;
gdjs.MainMenuSceneCode.GDcolision4Objects2.length = 0;
gdjs.MainMenuSceneCode.GDcolision5Objects1.length = 0;
gdjs.MainMenuSceneCode.GDcolision5Objects2.length = 0;
gdjs.MainMenuSceneCode.GDHeart4Objects1.length = 0;
gdjs.MainMenuSceneCode.GDHeart4Objects2.length = 0;
gdjs.MainMenuSceneCode.GDHeart5Objects1.length = 0;
gdjs.MainMenuSceneCode.GDHeart5Objects2.length = 0;

gdjs.MainMenuSceneCode.eventsList0(runtimeScene);
gdjs.MainMenuSceneCode.GDLa_9595ciudad_9595PerdidaObjects1.length = 0;
gdjs.MainMenuSceneCode.GDLa_9595ciudad_9595PerdidaObjects2.length = 0;
gdjs.MainMenuSceneCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuSceneCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuSceneCode.GDLevelsButtonObjects1.length = 0;
gdjs.MainMenuSceneCode.GDLevelsButtonObjects2.length = 0;
gdjs.MainMenuSceneCode.GDfondnoObjects1.length = 0;
gdjs.MainMenuSceneCode.GDfondnoObjects2.length = 0;
gdjs.MainMenuSceneCode.GDPlayerObjects1.length = 0;
gdjs.MainMenuSceneCode.GDPlayerObjects2.length = 0;
gdjs.MainMenuSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1.length = 0;
gdjs.MainMenuSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2.length = 0;
gdjs.MainMenuSceneCode.GDPlayerAttackHitboxObjects1.length = 0;
gdjs.MainMenuSceneCode.GDPlayerAttackHitboxObjects2.length = 0;
gdjs.MainMenuSceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.MainMenuSceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.MainMenuSceneCode.GDPinchosObjects1.length = 0;
gdjs.MainMenuSceneCode.GDPinchosObjects2.length = 0;
gdjs.MainMenuSceneCode.GDEnemyKillCounterObjects1.length = 0;
gdjs.MainMenuSceneCode.GDEnemyKillCounterObjects2.length = 0;
gdjs.MainMenuSceneCode.GDPlayer2Objects1.length = 0;
gdjs.MainMenuSceneCode.GDPlayer2Objects2.length = 0;
gdjs.MainMenuSceneCode.GDHeart1Objects1.length = 0;
gdjs.MainMenuSceneCode.GDHeart1Objects2.length = 0;
gdjs.MainMenuSceneCode.GDHeart2Objects1.length = 0;
gdjs.MainMenuSceneCode.GDHeart2Objects2.length = 0;
gdjs.MainMenuSceneCode.GDHeart3Objects1.length = 0;
gdjs.MainMenuSceneCode.GDHeart3Objects2.length = 0;
gdjs.MainMenuSceneCode.GDEnemy23Objects1.length = 0;
gdjs.MainMenuSceneCode.GDEnemy23Objects2.length = 0;
gdjs.MainMenuSceneCode.GDHealthPickupObjects1.length = 0;
gdjs.MainMenuSceneCode.GDHealthPickupObjects2.length = 0;
gdjs.MainMenuSceneCode.GDBulletObjects1.length = 0;
gdjs.MainMenuSceneCode.GDBulletObjects2.length = 0;
gdjs.MainMenuSceneCode.GDcolisionObjects1.length = 0;
gdjs.MainMenuSceneCode.GDcolisionObjects2.length = 0;
gdjs.MainMenuSceneCode.GDcolision2Objects1.length = 0;
gdjs.MainMenuSceneCode.GDcolision2Objects2.length = 0;
gdjs.MainMenuSceneCode.GDcolision3Objects1.length = 0;
gdjs.MainMenuSceneCode.GDcolision3Objects2.length = 0;
gdjs.MainMenuSceneCode.GDcolision4Objects1.length = 0;
gdjs.MainMenuSceneCode.GDcolision4Objects2.length = 0;
gdjs.MainMenuSceneCode.GDcolision5Objects1.length = 0;
gdjs.MainMenuSceneCode.GDcolision5Objects2.length = 0;
gdjs.MainMenuSceneCode.GDHeart4Objects1.length = 0;
gdjs.MainMenuSceneCode.GDHeart4Objects2.length = 0;
gdjs.MainMenuSceneCode.GDHeart5Objects1.length = 0;
gdjs.MainMenuSceneCode.GDHeart5Objects2.length = 0;


return;

}

gdjs['MainMenuSceneCode'] = gdjs.MainMenuSceneCode;
