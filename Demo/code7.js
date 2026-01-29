gdjs.GameOverSceneCode = {};
gdjs.GameOverSceneCode.localVariables = [];
gdjs.GameOverSceneCode.idToCallbackMap = new Map();
gdjs.GameOverSceneCode.GDGameOverTextObjects1= [];
gdjs.GameOverSceneCode.GDGameOverTextObjects2= [];
gdjs.GameOverSceneCode.GDGameOverTextObjects3= [];
gdjs.GameOverSceneCode.GDRestartButtonObjects1= [];
gdjs.GameOverSceneCode.GDRestartButtonObjects2= [];
gdjs.GameOverSceneCode.GDRestartButtonObjects3= [];
gdjs.GameOverSceneCode.GDMainMenuButtonObjects1= [];
gdjs.GameOverSceneCode.GDMainMenuButtonObjects2= [];
gdjs.GameOverSceneCode.GDMainMenuButtonObjects3= [];
gdjs.GameOverSceneCode.GDEnemiesKilledFinalTextObjects1= [];
gdjs.GameOverSceneCode.GDEnemiesKilledFinalTextObjects2= [];
gdjs.GameOverSceneCode.GDEnemiesKilledFinalTextObjects3= [];
gdjs.GameOverSceneCode.GDNewSpriteObjects1= [];
gdjs.GameOverSceneCode.GDNewSpriteObjects2= [];
gdjs.GameOverSceneCode.GDNewSpriteObjects3= [];
gdjs.GameOverSceneCode.GDGame_9595Over_9595pantalla_95952Objects1= [];
gdjs.GameOverSceneCode.GDGame_9595Over_9595pantalla_95952Objects2= [];
gdjs.GameOverSceneCode.GDGame_9595Over_9595pantalla_95952Objects3= [];
gdjs.GameOverSceneCode.GDGamer_9595over_9595letrasObjects1= [];
gdjs.GameOverSceneCode.GDGamer_9595over_9595letrasObjects2= [];
gdjs.GameOverSceneCode.GDGamer_9595over_9595letrasObjects3= [];
gdjs.GameOverSceneCode.GDPlayerObjects1= [];
gdjs.GameOverSceneCode.GDPlayerObjects2= [];
gdjs.GameOverSceneCode.GDPlayerObjects3= [];
gdjs.GameOverSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1= [];
gdjs.GameOverSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2= [];
gdjs.GameOverSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects3= [];
gdjs.GameOverSceneCode.GDPlayerAttackHitboxObjects1= [];
gdjs.GameOverSceneCode.GDPlayerAttackHitboxObjects2= [];
gdjs.GameOverSceneCode.GDPlayerAttackHitboxObjects3= [];
gdjs.GameOverSceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.GameOverSceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.GameOverSceneCode.GDPlatform_9595GroundObjects3= [];
gdjs.GameOverSceneCode.GDPinchosObjects1= [];
gdjs.GameOverSceneCode.GDPinchosObjects2= [];
gdjs.GameOverSceneCode.GDPinchosObjects3= [];
gdjs.GameOverSceneCode.GDEnemyKillCounterObjects1= [];
gdjs.GameOverSceneCode.GDEnemyKillCounterObjects2= [];
gdjs.GameOverSceneCode.GDEnemyKillCounterObjects3= [];
gdjs.GameOverSceneCode.GDPlayer2Objects1= [];
gdjs.GameOverSceneCode.GDPlayer2Objects2= [];
gdjs.GameOverSceneCode.GDPlayer2Objects3= [];
gdjs.GameOverSceneCode.GDHeart1Objects1= [];
gdjs.GameOverSceneCode.GDHeart1Objects2= [];
gdjs.GameOverSceneCode.GDHeart1Objects3= [];
gdjs.GameOverSceneCode.GDHeart2Objects1= [];
gdjs.GameOverSceneCode.GDHeart2Objects2= [];
gdjs.GameOverSceneCode.GDHeart2Objects3= [];
gdjs.GameOverSceneCode.GDHeart3Objects1= [];
gdjs.GameOverSceneCode.GDHeart3Objects2= [];
gdjs.GameOverSceneCode.GDHeart3Objects3= [];
gdjs.GameOverSceneCode.GDEnemy23Objects1= [];
gdjs.GameOverSceneCode.GDEnemy23Objects2= [];
gdjs.GameOverSceneCode.GDEnemy23Objects3= [];
gdjs.GameOverSceneCode.GDHealthPickupObjects1= [];
gdjs.GameOverSceneCode.GDHealthPickupObjects2= [];
gdjs.GameOverSceneCode.GDHealthPickupObjects3= [];
gdjs.GameOverSceneCode.GDBulletObjects1= [];
gdjs.GameOverSceneCode.GDBulletObjects2= [];
gdjs.GameOverSceneCode.GDBulletObjects3= [];
gdjs.GameOverSceneCode.GDcolisionObjects1= [];
gdjs.GameOverSceneCode.GDcolisionObjects2= [];
gdjs.GameOverSceneCode.GDcolisionObjects3= [];
gdjs.GameOverSceneCode.GDcolision2Objects1= [];
gdjs.GameOverSceneCode.GDcolision2Objects2= [];
gdjs.GameOverSceneCode.GDcolision2Objects3= [];
gdjs.GameOverSceneCode.GDcolision3Objects1= [];
gdjs.GameOverSceneCode.GDcolision3Objects2= [];
gdjs.GameOverSceneCode.GDcolision3Objects3= [];
gdjs.GameOverSceneCode.GDcolision4Objects1= [];
gdjs.GameOverSceneCode.GDcolision4Objects2= [];
gdjs.GameOverSceneCode.GDcolision4Objects3= [];
gdjs.GameOverSceneCode.GDcolision5Objects1= [];
gdjs.GameOverSceneCode.GDcolision5Objects2= [];
gdjs.GameOverSceneCode.GDcolision5Objects3= [];
gdjs.GameOverSceneCode.GDHeart4Objects1= [];
gdjs.GameOverSceneCode.GDHeart4Objects2= [];
gdjs.GameOverSceneCode.GDHeart4Objects3= [];
gdjs.GameOverSceneCode.GDHeart5Objects1= [];
gdjs.GameOverSceneCode.GDHeart5Objects2= [];
gdjs.GameOverSceneCode.GDHeart5Objects3= [];


gdjs.GameOverSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "GameScene3");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene3", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "GameScene4");
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
{isConditionTrue_1 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "GameScene3");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "GameScene4");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


};gdjs.GameOverSceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameOverSceneCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverSceneCode.GDRestartButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverSceneCode.GDRestartButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverSceneCode.GDRestartButtonObjects1[k] = gdjs.GameOverSceneCode.GDRestartButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverSceneCode.GDRestartButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameOverSceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameOverSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.GameOverSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "click_sound", false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(100);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}

{ //Subevents
gdjs.GameOverSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.GameOverSceneCode.GDMainMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverSceneCode.GDMainMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverSceneCode.GDMainMenuButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverSceneCode.GDMainMenuButtonObjects1[k] = gdjs.GameOverSceneCode.GDMainMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverSceneCode.GDMainMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenuScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemiesKilledFinalText"), gdjs.GameOverSceneCode.GDEnemiesKilledFinalTextObjects1);
{for(var i = 0, len = gdjs.GameOverSceneCode.GDEnemiesKilledFinalTextObjects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDEnemiesKilledFinalTextObjects1[i].getBehavior("Text").setText("Enemigos eliminados: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}
}
}

}


};

gdjs.GameOverSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverSceneCode.GDGameOverTextObjects1.length = 0;
gdjs.GameOverSceneCode.GDGameOverTextObjects2.length = 0;
gdjs.GameOverSceneCode.GDGameOverTextObjects3.length = 0;
gdjs.GameOverSceneCode.GDRestartButtonObjects1.length = 0;
gdjs.GameOverSceneCode.GDRestartButtonObjects2.length = 0;
gdjs.GameOverSceneCode.GDRestartButtonObjects3.length = 0;
gdjs.GameOverSceneCode.GDMainMenuButtonObjects1.length = 0;
gdjs.GameOverSceneCode.GDMainMenuButtonObjects2.length = 0;
gdjs.GameOverSceneCode.GDMainMenuButtonObjects3.length = 0;
gdjs.GameOverSceneCode.GDEnemiesKilledFinalTextObjects1.length = 0;
gdjs.GameOverSceneCode.GDEnemiesKilledFinalTextObjects2.length = 0;
gdjs.GameOverSceneCode.GDEnemiesKilledFinalTextObjects3.length = 0;
gdjs.GameOverSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverSceneCode.GDNewSpriteObjects3.length = 0;
gdjs.GameOverSceneCode.GDGame_9595Over_9595pantalla_95952Objects1.length = 0;
gdjs.GameOverSceneCode.GDGame_9595Over_9595pantalla_95952Objects2.length = 0;
gdjs.GameOverSceneCode.GDGame_9595Over_9595pantalla_95952Objects3.length = 0;
gdjs.GameOverSceneCode.GDGamer_9595over_9595letrasObjects1.length = 0;
gdjs.GameOverSceneCode.GDGamer_9595over_9595letrasObjects2.length = 0;
gdjs.GameOverSceneCode.GDGamer_9595over_9595letrasObjects3.length = 0;
gdjs.GameOverSceneCode.GDPlayerObjects1.length = 0;
gdjs.GameOverSceneCode.GDPlayerObjects2.length = 0;
gdjs.GameOverSceneCode.GDPlayerObjects3.length = 0;
gdjs.GameOverSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1.length = 0;
gdjs.GameOverSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2.length = 0;
gdjs.GameOverSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects3.length = 0;
gdjs.GameOverSceneCode.GDPlayerAttackHitboxObjects1.length = 0;
gdjs.GameOverSceneCode.GDPlayerAttackHitboxObjects2.length = 0;
gdjs.GameOverSceneCode.GDPlayerAttackHitboxObjects3.length = 0;
gdjs.GameOverSceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.GameOverSceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.GameOverSceneCode.GDPlatform_9595GroundObjects3.length = 0;
gdjs.GameOverSceneCode.GDPinchosObjects1.length = 0;
gdjs.GameOverSceneCode.GDPinchosObjects2.length = 0;
gdjs.GameOverSceneCode.GDPinchosObjects3.length = 0;
gdjs.GameOverSceneCode.GDEnemyKillCounterObjects1.length = 0;
gdjs.GameOverSceneCode.GDEnemyKillCounterObjects2.length = 0;
gdjs.GameOverSceneCode.GDEnemyKillCounterObjects3.length = 0;
gdjs.GameOverSceneCode.GDPlayer2Objects1.length = 0;
gdjs.GameOverSceneCode.GDPlayer2Objects2.length = 0;
gdjs.GameOverSceneCode.GDPlayer2Objects3.length = 0;
gdjs.GameOverSceneCode.GDHeart1Objects1.length = 0;
gdjs.GameOverSceneCode.GDHeart1Objects2.length = 0;
gdjs.GameOverSceneCode.GDHeart1Objects3.length = 0;
gdjs.GameOverSceneCode.GDHeart2Objects1.length = 0;
gdjs.GameOverSceneCode.GDHeart2Objects2.length = 0;
gdjs.GameOverSceneCode.GDHeart2Objects3.length = 0;
gdjs.GameOverSceneCode.GDHeart3Objects1.length = 0;
gdjs.GameOverSceneCode.GDHeart3Objects2.length = 0;
gdjs.GameOverSceneCode.GDHeart3Objects3.length = 0;
gdjs.GameOverSceneCode.GDEnemy23Objects1.length = 0;
gdjs.GameOverSceneCode.GDEnemy23Objects2.length = 0;
gdjs.GameOverSceneCode.GDEnemy23Objects3.length = 0;
gdjs.GameOverSceneCode.GDHealthPickupObjects1.length = 0;
gdjs.GameOverSceneCode.GDHealthPickupObjects2.length = 0;
gdjs.GameOverSceneCode.GDHealthPickupObjects3.length = 0;
gdjs.GameOverSceneCode.GDBulletObjects1.length = 0;
gdjs.GameOverSceneCode.GDBulletObjects2.length = 0;
gdjs.GameOverSceneCode.GDBulletObjects3.length = 0;
gdjs.GameOverSceneCode.GDcolisionObjects1.length = 0;
gdjs.GameOverSceneCode.GDcolisionObjects2.length = 0;
gdjs.GameOverSceneCode.GDcolisionObjects3.length = 0;
gdjs.GameOverSceneCode.GDcolision2Objects1.length = 0;
gdjs.GameOverSceneCode.GDcolision2Objects2.length = 0;
gdjs.GameOverSceneCode.GDcolision2Objects3.length = 0;
gdjs.GameOverSceneCode.GDcolision3Objects1.length = 0;
gdjs.GameOverSceneCode.GDcolision3Objects2.length = 0;
gdjs.GameOverSceneCode.GDcolision3Objects3.length = 0;
gdjs.GameOverSceneCode.GDcolision4Objects1.length = 0;
gdjs.GameOverSceneCode.GDcolision4Objects2.length = 0;
gdjs.GameOverSceneCode.GDcolision4Objects3.length = 0;
gdjs.GameOverSceneCode.GDcolision5Objects1.length = 0;
gdjs.GameOverSceneCode.GDcolision5Objects2.length = 0;
gdjs.GameOverSceneCode.GDcolision5Objects3.length = 0;
gdjs.GameOverSceneCode.GDHeart4Objects1.length = 0;
gdjs.GameOverSceneCode.GDHeart4Objects2.length = 0;
gdjs.GameOverSceneCode.GDHeart4Objects3.length = 0;
gdjs.GameOverSceneCode.GDHeart5Objects1.length = 0;
gdjs.GameOverSceneCode.GDHeart5Objects2.length = 0;
gdjs.GameOverSceneCode.GDHeart5Objects3.length = 0;

gdjs.GameOverSceneCode.eventsList1(runtimeScene);
gdjs.GameOverSceneCode.GDGameOverTextObjects1.length = 0;
gdjs.GameOverSceneCode.GDGameOverTextObjects2.length = 0;
gdjs.GameOverSceneCode.GDGameOverTextObjects3.length = 0;
gdjs.GameOverSceneCode.GDRestartButtonObjects1.length = 0;
gdjs.GameOverSceneCode.GDRestartButtonObjects2.length = 0;
gdjs.GameOverSceneCode.GDRestartButtonObjects3.length = 0;
gdjs.GameOverSceneCode.GDMainMenuButtonObjects1.length = 0;
gdjs.GameOverSceneCode.GDMainMenuButtonObjects2.length = 0;
gdjs.GameOverSceneCode.GDMainMenuButtonObjects3.length = 0;
gdjs.GameOverSceneCode.GDEnemiesKilledFinalTextObjects1.length = 0;
gdjs.GameOverSceneCode.GDEnemiesKilledFinalTextObjects2.length = 0;
gdjs.GameOverSceneCode.GDEnemiesKilledFinalTextObjects3.length = 0;
gdjs.GameOverSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverSceneCode.GDNewSpriteObjects3.length = 0;
gdjs.GameOverSceneCode.GDGame_9595Over_9595pantalla_95952Objects1.length = 0;
gdjs.GameOverSceneCode.GDGame_9595Over_9595pantalla_95952Objects2.length = 0;
gdjs.GameOverSceneCode.GDGame_9595Over_9595pantalla_95952Objects3.length = 0;
gdjs.GameOverSceneCode.GDGamer_9595over_9595letrasObjects1.length = 0;
gdjs.GameOverSceneCode.GDGamer_9595over_9595letrasObjects2.length = 0;
gdjs.GameOverSceneCode.GDGamer_9595over_9595letrasObjects3.length = 0;
gdjs.GameOverSceneCode.GDPlayerObjects1.length = 0;
gdjs.GameOverSceneCode.GDPlayerObjects2.length = 0;
gdjs.GameOverSceneCode.GDPlayerObjects3.length = 0;
gdjs.GameOverSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1.length = 0;
gdjs.GameOverSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2.length = 0;
gdjs.GameOverSceneCode.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects3.length = 0;
gdjs.GameOverSceneCode.GDPlayerAttackHitboxObjects1.length = 0;
gdjs.GameOverSceneCode.GDPlayerAttackHitboxObjects2.length = 0;
gdjs.GameOverSceneCode.GDPlayerAttackHitboxObjects3.length = 0;
gdjs.GameOverSceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.GameOverSceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.GameOverSceneCode.GDPlatform_9595GroundObjects3.length = 0;
gdjs.GameOverSceneCode.GDPinchosObjects1.length = 0;
gdjs.GameOverSceneCode.GDPinchosObjects2.length = 0;
gdjs.GameOverSceneCode.GDPinchosObjects3.length = 0;
gdjs.GameOverSceneCode.GDEnemyKillCounterObjects1.length = 0;
gdjs.GameOverSceneCode.GDEnemyKillCounterObjects2.length = 0;
gdjs.GameOverSceneCode.GDEnemyKillCounterObjects3.length = 0;
gdjs.GameOverSceneCode.GDPlayer2Objects1.length = 0;
gdjs.GameOverSceneCode.GDPlayer2Objects2.length = 0;
gdjs.GameOverSceneCode.GDPlayer2Objects3.length = 0;
gdjs.GameOverSceneCode.GDHeart1Objects1.length = 0;
gdjs.GameOverSceneCode.GDHeart1Objects2.length = 0;
gdjs.GameOverSceneCode.GDHeart1Objects3.length = 0;
gdjs.GameOverSceneCode.GDHeart2Objects1.length = 0;
gdjs.GameOverSceneCode.GDHeart2Objects2.length = 0;
gdjs.GameOverSceneCode.GDHeart2Objects3.length = 0;
gdjs.GameOverSceneCode.GDHeart3Objects1.length = 0;
gdjs.GameOverSceneCode.GDHeart3Objects2.length = 0;
gdjs.GameOverSceneCode.GDHeart3Objects3.length = 0;
gdjs.GameOverSceneCode.GDEnemy23Objects1.length = 0;
gdjs.GameOverSceneCode.GDEnemy23Objects2.length = 0;
gdjs.GameOverSceneCode.GDEnemy23Objects3.length = 0;
gdjs.GameOverSceneCode.GDHealthPickupObjects1.length = 0;
gdjs.GameOverSceneCode.GDHealthPickupObjects2.length = 0;
gdjs.GameOverSceneCode.GDHealthPickupObjects3.length = 0;
gdjs.GameOverSceneCode.GDBulletObjects1.length = 0;
gdjs.GameOverSceneCode.GDBulletObjects2.length = 0;
gdjs.GameOverSceneCode.GDBulletObjects3.length = 0;
gdjs.GameOverSceneCode.GDcolisionObjects1.length = 0;
gdjs.GameOverSceneCode.GDcolisionObjects2.length = 0;
gdjs.GameOverSceneCode.GDcolisionObjects3.length = 0;
gdjs.GameOverSceneCode.GDcolision2Objects1.length = 0;
gdjs.GameOverSceneCode.GDcolision2Objects2.length = 0;
gdjs.GameOverSceneCode.GDcolision2Objects3.length = 0;
gdjs.GameOverSceneCode.GDcolision3Objects1.length = 0;
gdjs.GameOverSceneCode.GDcolision3Objects2.length = 0;
gdjs.GameOverSceneCode.GDcolision3Objects3.length = 0;
gdjs.GameOverSceneCode.GDcolision4Objects1.length = 0;
gdjs.GameOverSceneCode.GDcolision4Objects2.length = 0;
gdjs.GameOverSceneCode.GDcolision4Objects3.length = 0;
gdjs.GameOverSceneCode.GDcolision5Objects1.length = 0;
gdjs.GameOverSceneCode.GDcolision5Objects2.length = 0;
gdjs.GameOverSceneCode.GDcolision5Objects3.length = 0;
gdjs.GameOverSceneCode.GDHeart4Objects1.length = 0;
gdjs.GameOverSceneCode.GDHeart4Objects2.length = 0;
gdjs.GameOverSceneCode.GDHeart4Objects3.length = 0;
gdjs.GameOverSceneCode.GDHeart5Objects1.length = 0;
gdjs.GameOverSceneCode.GDHeart5Objects2.length = 0;
gdjs.GameOverSceneCode.GDHeart5Objects3.length = 0;


return;

}

gdjs['GameOverSceneCode'] = gdjs.GameOverSceneCode;
