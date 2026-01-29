gdjs.GameScene3Code = {};
gdjs.GameScene3Code.localVariables = [];
gdjs.GameScene3Code.idToCallbackMap = new Map();
gdjs.GameScene3Code.GDEnemy23Objects1_1final = [];

gdjs.GameScene3Code.GDFireButtonObjects1= [];
gdjs.GameScene3Code.GDFireButtonObjects2= [];
gdjs.GameScene3Code.GDFireButtonObjects3= [];
gdjs.GameScene3Code.GDNewTiledSpriteObjects1= [];
gdjs.GameScene3Code.GDNewTiledSpriteObjects2= [];
gdjs.GameScene3Code.GDNewTiledSpriteObjects3= [];
gdjs.GameScene3Code.GDNewTiledSprite2Objects1= [];
gdjs.GameScene3Code.GDNewTiledSprite2Objects2= [];
gdjs.GameScene3Code.GDNewTiledSprite2Objects3= [];
gdjs.GameScene3Code.GDMoveJoystickObjects1= [];
gdjs.GameScene3Code.GDMoveJoystickObjects2= [];
gdjs.GameScene3Code.GDMoveJoystickObjects3= [];
gdjs.GameScene3Code.GDJumpButtonObjects1= [];
gdjs.GameScene3Code.GDJumpButtonObjects2= [];
gdjs.GameScene3Code.GDJumpButtonObjects3= [];
gdjs.GameScene3Code.GDFireJoystickObjects1= [];
gdjs.GameScene3Code.GDFireJoystickObjects2= [];
gdjs.GameScene3Code.GDFireJoystickObjects3= [];
gdjs.GameScene3Code.GDganadorObjects1= [];
gdjs.GameScene3Code.GDganadorObjects2= [];
gdjs.GameScene3Code.GDganadorObjects3= [];
gdjs.GameScene3Code.GDPlayerObjects1= [];
gdjs.GameScene3Code.GDPlayerObjects2= [];
gdjs.GameScene3Code.GDPlayerObjects3= [];
gdjs.GameScene3Code.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1= [];
gdjs.GameScene3Code.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2= [];
gdjs.GameScene3Code.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects3= [];
gdjs.GameScene3Code.GDPlayerAttackHitboxObjects1= [];
gdjs.GameScene3Code.GDPlayerAttackHitboxObjects2= [];
gdjs.GameScene3Code.GDPlayerAttackHitboxObjects3= [];
gdjs.GameScene3Code.GDPlatform_9595GroundObjects1= [];
gdjs.GameScene3Code.GDPlatform_9595GroundObjects2= [];
gdjs.GameScene3Code.GDPlatform_9595GroundObjects3= [];
gdjs.GameScene3Code.GDPinchosObjects1= [];
gdjs.GameScene3Code.GDPinchosObjects2= [];
gdjs.GameScene3Code.GDPinchosObjects3= [];
gdjs.GameScene3Code.GDEnemyKillCounterObjects1= [];
gdjs.GameScene3Code.GDEnemyKillCounterObjects2= [];
gdjs.GameScene3Code.GDEnemyKillCounterObjects3= [];
gdjs.GameScene3Code.GDPlayer2Objects1= [];
gdjs.GameScene3Code.GDPlayer2Objects2= [];
gdjs.GameScene3Code.GDPlayer2Objects3= [];
gdjs.GameScene3Code.GDHeart1Objects1= [];
gdjs.GameScene3Code.GDHeart1Objects2= [];
gdjs.GameScene3Code.GDHeart1Objects3= [];
gdjs.GameScene3Code.GDHeart2Objects1= [];
gdjs.GameScene3Code.GDHeart2Objects2= [];
gdjs.GameScene3Code.GDHeart2Objects3= [];
gdjs.GameScene3Code.GDHeart3Objects1= [];
gdjs.GameScene3Code.GDHeart3Objects2= [];
gdjs.GameScene3Code.GDHeart3Objects3= [];
gdjs.GameScene3Code.GDEnemy23Objects1= [];
gdjs.GameScene3Code.GDEnemy23Objects2= [];
gdjs.GameScene3Code.GDEnemy23Objects3= [];
gdjs.GameScene3Code.GDHealthPickupObjects1= [];
gdjs.GameScene3Code.GDHealthPickupObjects2= [];
gdjs.GameScene3Code.GDHealthPickupObjects3= [];
gdjs.GameScene3Code.GDBulletObjects1= [];
gdjs.GameScene3Code.GDBulletObjects2= [];
gdjs.GameScene3Code.GDBulletObjects3= [];
gdjs.GameScene3Code.GDcolisionObjects1= [];
gdjs.GameScene3Code.GDcolisionObjects2= [];
gdjs.GameScene3Code.GDcolisionObjects3= [];
gdjs.GameScene3Code.GDcolision2Objects1= [];
gdjs.GameScene3Code.GDcolision2Objects2= [];
gdjs.GameScene3Code.GDcolision2Objects3= [];
gdjs.GameScene3Code.GDcolision3Objects1= [];
gdjs.GameScene3Code.GDcolision3Objects2= [];
gdjs.GameScene3Code.GDcolision3Objects3= [];
gdjs.GameScene3Code.GDcolision4Objects1= [];
gdjs.GameScene3Code.GDcolision4Objects2= [];
gdjs.GameScene3Code.GDcolision4Objects3= [];
gdjs.GameScene3Code.GDcolision5Objects1= [];
gdjs.GameScene3Code.GDcolision5Objects2= [];
gdjs.GameScene3Code.GDcolision5Objects3= [];
gdjs.GameScene3Code.GDHeart4Objects1= [];
gdjs.GameScene3Code.GDHeart4Objects2= [];
gdjs.GameScene3Code.GDHeart4Objects3= [];
gdjs.GameScene3Code.GDHeart5Objects1= [];
gdjs.GameScene3Code.GDHeart5Objects2= [];
gdjs.GameScene3Code.GDHeart5Objects3= [];


gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.GameScene3Code.GDPlayer2Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDHealthPickupObjects1Objects = Hashtable.newFrom({"HealthPickup": gdjs.GameScene3Code.GDHealthPickupObjects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.GameScene3Code.GDPlayer2Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDEnemy23Objects1Objects = Hashtable.newFrom({"Enemy23": gdjs.GameScene3Code.GDEnemy23Objects1});
gdjs.GameScene3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameScene3Code.GDPlayer2Objects1, gdjs.GameScene3Code.GDPlayer2Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDPlayer2Objects2.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDPlayer2Objects2[i].getBehavior("Opacity").getOpacity() <= 128 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDPlayer2Objects2[k] = gdjs.GameScene3Code.GDPlayer2Objects2[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDPlayer2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects2 */
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects2[i].getBehavior("Tween").addObjectOpacityTween2("InvulnBlink", 255, "linear", 0.15, false);
}
}
}

}


{

/* Reuse gdjs.GameScene3Code.GDPlayer2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("Opacity").getOpacity() > 128 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDPlayer2Objects1[k] = gdjs.GameScene3Code.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDPlayer2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("Tween").addObjectOpacityTween2("InvulnBlink", 128, "linear", 0.15, false);
}
}
}

}


};gdjs.GameScene3Code.mapOfEmptyGDPlayer2Objects = Hashtable.newFrom({"Player2": []});
gdjs.GameScene3Code.mapOfEmptyGDEnemy23Objects = Hashtable.newFrom({"Enemy23": []});
gdjs.GameScene3Code.mapOfEmptyGDPlayer2Objects = Hashtable.newFrom({"Player2": []});
gdjs.GameScene3Code.mapOfEmptyGDEnemy23Objects = Hashtable.newFrom({"Enemy23": []});
gdjs.GameScene3Code.mapOfEmptyGDPlayer2Objects = Hashtable.newFrom({"Player2": []});
gdjs.GameScene3Code.mapOfEmptyGDEnemy23Objects = Hashtable.newFrom({"Enemy23": []});
gdjs.GameScene3Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDPlayer2Objects2.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDPlayer2Objects2[i].getX() < (( gdjs.GameScene3Code.GDEnemy23Objects2.length === 0 ) ? 0 :gdjs.GameScene3Code.GDEnemy23Objects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDPlayer2Objects2[k] = gdjs.GameScene3Code.GDPlayer2Objects2[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDPlayer2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects2 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects2.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects2[i].flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDPlayer2Objects1[i].getX() >= (( gdjs.GameScene3Code.GDEnemy23Objects1.length === 0 ) ? 0 :gdjs.GameScene3Code.GDEnemy23Objects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDPlayer2Objects1[k] = gdjs.GameScene3Code.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDPlayer2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].flipX(false);
}
}
}

}


};gdjs.GameScene3Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameScene3Code.GDEnemy23Objects1, gdjs.GameScene3Code.GDEnemy23Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects2.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects2[i].getBehavior("TopDownMovement").getXVelocity() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects2[k] = gdjs.GameScene3Code.GDEnemy23Objects2[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects2 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects2.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("TopDownMovement").getXVelocity() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


};gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.GameScene3Code.GDPlayer2Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDEnemy23Objects1Objects = Hashtable.newFrom({"Enemy23": gdjs.GameScene3Code.GDEnemy23Objects1});
gdjs.GameScene3Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameScene3Code.GDEnemy23Objects1, gdjs.GameScene3Code.GDEnemy23Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects2.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects2[i].getBehavior("TopDownMovement").getXVelocity() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects2[k] = gdjs.GameScene3Code.GDEnemy23Objects2[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects2 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects2.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("TopDownMovement").getXVelocity() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


};gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.GameScene3Code.GDBulletObjects2});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.GameScene3Code.GDBulletObjects2});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.GameScene3Code.GDBulletObjects2});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameScene3Code.GDBulletObjects1});
gdjs.GameScene3Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDPlayer2Objects2.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDPlayer2Objects2[i].getBehavior("Animation").getAnimationName() == "Right" ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDPlayer2Objects2[k] = gdjs.GameScene3Code.GDPlayer2Objects2[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDPlayer2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects2 */
gdjs.GameScene3Code.GDBulletObjects2.length = 0;

{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects2[i].getBehavior("FireBullet").Fire((gdjs.GameScene3Code.GDPlayer2Objects2[i].getCenterXInScene()), (gdjs.GameScene3Code.GDPlayer2Objects2[i].getCenterYInScene()), gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects2Objects, 0, 400, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDPlayer2Objects2.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDPlayer2Objects2[i].getBehavior("Animation").getAnimationName() == "Left" ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDPlayer2Objects2[k] = gdjs.GameScene3Code.GDPlayer2Objects2[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDPlayer2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects2 */
gdjs.GameScene3Code.GDBulletObjects2.length = 0;

{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects2[i].getBehavior("FireBullet").Fire((gdjs.GameScene3Code.GDPlayer2Objects2[i].getCenterXInScene()), (gdjs.GameScene3Code.GDPlayer2Objects2[i].getCenterYInScene()), gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects2Objects, 180, 400, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDPlayer2Objects2.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDPlayer2Objects2[i].getBehavior("Animation").getAnimationName() == "Up" ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDPlayer2Objects2[k] = gdjs.GameScene3Code.GDPlayer2Objects2[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDPlayer2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects2 */
gdjs.GameScene3Code.GDBulletObjects2.length = 0;

{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects2[i].getBehavior("FireBullet").Fire((gdjs.GameScene3Code.GDPlayer2Objects2[i].getCenterXInScene()), (gdjs.GameScene3Code.GDPlayer2Objects2[i].getCenterYInScene()), gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects2Objects, 270, 400, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("Animation").getAnimationName() == "Down" ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDPlayer2Objects1[k] = gdjs.GameScene3Code.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDPlayer2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects1 */
gdjs.GameScene3Code.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("FireBullet").Fire((gdjs.GameScene3Code.GDPlayer2Objects1[i].getCenterXInScene()), (gdjs.GameScene3Code.GDPlayer2Objects1[i].getCenterYInScene()), gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects1Objects, 90, 400, null);
}
}
}

}


};gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameScene3Code.GDBulletObjects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDEnemy23Objects1Objects = Hashtable.newFrom({"Enemy23": gdjs.GameScene3Code.GDEnemy23Objects1});
gdjs.GameScene3Code.mapOfEmptyGDEnemy23Objects = Hashtable.newFrom({"Enemy23": []});
gdjs.GameScene3Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameScene3Code.mapOfEmptyGDEnemy23Objects) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber((( gdjs.GameScene3Code.GDEnemy23Objects1.length === 0 ) ? 0 :gdjs.GameScene3Code.GDEnemy23Objects1[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.GameScene3Code.GDEnemy23Objects1.length === 0 ) ? 0 :gdjs.GameScene3Code.GDEnemy23Objects1[0].getPointY("")));
}
}

}


};gdjs.GameScene3Code.mapOfEmptyGDEnemy23Objects = Hashtable.newFrom({"Enemy23": []});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDEnemy23Objects2Objects = Hashtable.newFrom({"Enemy23": gdjs.GameScene3Code.GDEnemy23Objects2});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDEnemy23Objects1Objects = Hashtable.newFrom({"Enemy23": gdjs.GameScene3Code.GDEnemy23Objects1});
gdjs.GameScene3Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() != 0);
}
}
if (isConditionTrue_0) {
gdjs.GameScene3Code.GDEnemy23Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDEnemy23Objects2Objects, runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnEnemyTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.GameScene3Code.GDEnemy23Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDEnemy23Objects1Objects, gdjs.randomInRange(100, 1200), gdjs.randomInRange(100, 600), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnEnemyTimer");
}
}

}


};gdjs.GameScene3Code.mapOfEmptyGDEnemy23Objects = Hashtable.newFrom({"Enemy23": []});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDEnemy23Objects2Objects = Hashtable.newFrom({"Enemy23": gdjs.GameScene3Code.GDEnemy23Objects2});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDEnemy23Objects1Objects = Hashtable.newFrom({"Enemy23": gdjs.GameScene3Code.GDEnemy23Objects1});
gdjs.GameScene3Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() != 0);
}
}
if (isConditionTrue_0) {
gdjs.GameScene3Code.GDEnemy23Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDEnemy23Objects2Objects, runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnEnemyTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.GameScene3Code.GDEnemy23Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDEnemy23Objects1Objects, 800 / 2, 600 / 2, "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnEnemyTimer");
}
}

}


};gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameScene3Code.GDBulletObjects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameScene3Code.GDBulletObjects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameScene3Code.GDBulletObjects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameScene3Code.GDBulletObjects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.GameScene3Code.GDPlayer2Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolisionObjects1Objects = Hashtable.newFrom({"colision": gdjs.GameScene3Code.GDcolisionObjects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolisionObjects1Objects = Hashtable.newFrom({"colision": gdjs.GameScene3Code.GDcolisionObjects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.GameScene3Code.GDPlayer2Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision2Objects1Objects = Hashtable.newFrom({"colision2": gdjs.GameScene3Code.GDcolision2Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision2Objects1Objects = Hashtable.newFrom({"colision2": gdjs.GameScene3Code.GDcolision2Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.GameScene3Code.GDPlayer2Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision3Objects1Objects = Hashtable.newFrom({"colision3": gdjs.GameScene3Code.GDcolision3Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision3Objects1Objects = Hashtable.newFrom({"colision3": gdjs.GameScene3Code.GDcolision3Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.GameScene3Code.GDPlayer2Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision4Objects1Objects = Hashtable.newFrom({"colision4": gdjs.GameScene3Code.GDcolision4Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision4Objects1Objects = Hashtable.newFrom({"colision4": gdjs.GameScene3Code.GDcolision4Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.GameScene3Code.GDPlayer2Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision5Objects1Objects = Hashtable.newFrom({"colision5": gdjs.GameScene3Code.GDcolision5Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision5Objects1Objects = Hashtable.newFrom({"colision5": gdjs.GameScene3Code.GDcolision5Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.GameScene3Code.GDPlayer2Objects1});
gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDganadorObjects1Objects = Hashtable.newFrom({"ganador": gdjs.GameScene3Code.GDganadorObjects1});
gdjs.GameScene3Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "InvulnTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() < 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart3"), gdjs.GameScene3Code.GDHeart3Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDHeart3Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDHeart3Objects1[i].getBehavior("Animation").setAnimationName("Empty");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() >= 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart3"), gdjs.GameScene3Code.GDHeart3Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDHeart3Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDHeart3Objects1[i].getBehavior("Animation").setAnimationName("Full");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() < 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart2"), gdjs.GameScene3Code.GDHeart2Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDHeart2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDHeart2Objects1[i].getBehavior("Animation").setAnimationName("Empty");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() >= 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart2"), gdjs.GameScene3Code.GDHeart2Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDHeart2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDHeart2Objects1[i].getBehavior("Animation").setAnimationName("Full");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() < 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart1"), gdjs.GameScene3Code.GDHeart1Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDHeart1Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDHeart1Objects1[i].getBehavior("Animation").setAnimationName("Empty");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() >= 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart1"), gdjs.GameScene3Code.GDHeart1Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDHeart1Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDHeart1Objects1[i].getBehavior("Animation").setAnimationName("Full");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HealthPickup"), gdjs.GameScene3Code.GDHealthPickupObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects, gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDHealthPickupObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() < 3);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDHealthPickupObjects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDHealthPickupObjects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDHealthPickupObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(Math.min(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() + 1, 3));
}
{gdjs.evtTools.sound.playSound(runtimeScene, "\"heal.wav\"", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "InvulnTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "InvulnTimer") > 1.5;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("Tween").stopTween("InvulnBlink", false);
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("Tween").removeTween("InvulnBlink");
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects, gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDEnemy23Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("Health").Hit(1, true, true, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "damage.wav", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "InvulnTimer");
}
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("Tween").addObjectOpacityTween2("InvulnBlink", 128, "linear", 0.15, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("Health").IsJustDamaged(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDPlayer2Objects1[k] = gdjs.GameScene3Code.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDPlayer2Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).sub(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("Tween").hasFinished("InvulnBlink") ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDPlayer2Objects1[k] = gdjs.GameScene3Code.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDPlayer2Objects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameScene3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameScene3Code.mapOfEmptyGDPlayer2Objects) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameScene3Code.mapOfEmptyGDEnemy23Objects) > 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("TopDownMovement").setMaxSpeed(80);
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("TopDownMovement").simulateStick((gdjs.GameScene3Code.GDEnemy23Objects1[i].getAngleToObject((gdjs.GameScene3Code.GDPlayer2Objects1.length !== 0 ? gdjs.GameScene3Code.GDPlayer2Objects1[0] : null))), 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDPlayer2Objects1[k] = gdjs.GameScene3Code.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDPlayer2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("Animation").setAnimationName("Left");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDPlayer2Objects1[k] = gdjs.GameScene3Code.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDPlayer2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("Animation").setAnimationName("Right");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("TopDownMovement").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDPlayer2Objects1[k] = gdjs.GameScene3Code.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDPlayer2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("Animation").setAnimationName("Up");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("TopDownMovement").isUsingControl("Down") ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDPlayer2Objects1[k] = gdjs.GameScene3Code.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDPlayer2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("Animation").setAnimationName("Down");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameScene3Code.mapOfEmptyGDPlayer2Objects) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameScene3Code.mapOfEmptyGDEnemy23Objects) > 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("TopDownMovement").setMaxSpeed(80);
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("TopDownMovement").simulateStick(gdjs.evtTools.common.angleBetweenPositions((gdjs.GameScene3Code.GDEnemy23Objects1[i].getPointX("")), (gdjs.GameScene3Code.GDEnemy23Objects1[i].getPointY("")), (( gdjs.GameScene3Code.GDPlayer2Objects1.length === 0 ) ? 0 :gdjs.GameScene3Code.GDPlayer2Objects1[0].getPointX("")), (( gdjs.GameScene3Code.GDPlayer2Objects1.length === 0 ) ? 0 :gdjs.GameScene3Code.GDPlayer2Objects1[0].getPointY(""))), 1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameScene3Code.mapOfEmptyGDPlayer2Objects) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameScene3Code.mapOfEmptyGDEnemy23Objects) > 0;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameScene3Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.GameScene3Code.GDEnemy23Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameScene3Code.GDEnemy23Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects2);
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects2.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects2[i].getBehavior("Animation").getAnimationSpeedScale() > 0 ) {
        isConditionTrue_1 = true;
        gdjs.GameScene3Code.GDEnemy23Objects2[k] = gdjs.GameScene3Code.GDEnemy23Objects2[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameScene3Code.GDEnemy23Objects2.length; j < jLen ; ++j) {
        if ( gdjs.GameScene3Code.GDEnemy23Objects1_1final.indexOf(gdjs.GameScene3Code.GDEnemy23Objects2[j]) === -1 )
            gdjs.GameScene3Code.GDEnemy23Objects1_1final.push(gdjs.GameScene3Code.GDEnemy23Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects2);
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects2.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects2[i].getBehavior("TopDownMovement").getSpeed() > 5 ) {
        isConditionTrue_1 = true;
        gdjs.GameScene3Code.GDEnemy23Objects2[k] = gdjs.GameScene3Code.GDEnemy23Objects2[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameScene3Code.GDEnemy23Objects2.length; j < jLen ; ++j) {
        if ( gdjs.GameScene3Code.GDEnemy23Objects1_1final.indexOf(gdjs.GameScene3Code.GDEnemy23Objects2[j]) === -1 )
            gdjs.GameScene3Code.GDEnemy23Objects1_1final.push(gdjs.GameScene3Code.GDEnemy23Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameScene3Code.GDEnemy23Objects1_1final, gdjs.GameScene3Code.GDEnemy23Objects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariableNumber(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(3)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").setAnimationName("Idle Run");
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").resumeAnimation();
}
}

{ //Subevents
gdjs.GameScene3Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.GameScene3Code.GDEnemy23Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameScene3Code.GDEnemy23Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects2);
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects2.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects2[i].getBehavior("Animation").getAnimationSpeedScale() > 0 ) {
        isConditionTrue_1 = true;
        gdjs.GameScene3Code.GDEnemy23Objects2[k] = gdjs.GameScene3Code.GDEnemy23Objects2[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameScene3Code.GDEnemy23Objects2.length; j < jLen ; ++j) {
        if ( gdjs.GameScene3Code.GDEnemy23Objects1_1final.indexOf(gdjs.GameScene3Code.GDEnemy23Objects2[j]) === -1 )
            gdjs.GameScene3Code.GDEnemy23Objects1_1final.push(gdjs.GameScene3Code.GDEnemy23Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects2);
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects2.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects2[i].getBehavior("TopDownMovement").getSpeed() > 5 ) {
        isConditionTrue_1 = true;
        gdjs.GameScene3Code.GDEnemy23Objects2[k] = gdjs.GameScene3Code.GDEnemy23Objects2[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameScene3Code.GDEnemy23Objects2.length; j < jLen ; ++j) {
        if ( gdjs.GameScene3Code.GDEnemy23Objects1_1final.indexOf(gdjs.GameScene3Code.GDEnemy23Objects2[j]) === -1 )
            gdjs.GameScene3Code.GDEnemy23Objects1_1final.push(gdjs.GameScene3Code.GDEnemy23Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameScene3Code.GDEnemy23Objects1_1final, gdjs.GameScene3Code.GDEnemy23Objects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").pauseAnimation();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects, gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDEnemy23Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariableNumber(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(3)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").setAnimationName("Hit");
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").resumeAnimation();
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].returnVariable(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(3)).setNumber(1);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy_Hit_Timer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariableNumber(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(3)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").setAnimationName("Hit");
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Enemy_Hit_Timer") > 0.4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].returnVariable(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(3)).setNumber(0);
}
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "Enemy_Hit_Timer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").getAnimationName() == "Hit" ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariableNumber(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].returnVariable(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(3)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").setAnimationName("Idle Run");
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("TopDownMovement").getSpeed() > 5 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariableNumber(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(3)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").setAnimationName("Idle Run");
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").resumeAnimation();
}
}

{ //Subevents
gdjs.GameScene3Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "q");
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameScene3Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameScene3Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects1Objects, gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDEnemy23Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDBulletObjects1 */
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].returnVariable(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(1)).add(1);
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].returnVariable(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(3)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").setAnimationName("Hit");
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].resetTimer("Enemy_Hit_Timer");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariableNumber(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(1)) >= 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariableNumber(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(0)) != 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
gdjs.copyArray(runtimeScene.getObjects("EnemyKillCounter"), gdjs.GameScene3Code.GDEnemyKillCounterObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].returnVariable(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemyKillCounterObjects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemyKillCounterObjects1[i].getBehavior("Text").setText("Enemigos: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariableNumber(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(1)) >= 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariableNumber(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(1)) >= 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariableNumber(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].returnVariable(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(2)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Animation").setAnimationName("Hit");
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].resetTimer("EnemyDeathTimer");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariableNumber(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "EnemyDeathTimer") > 0.5;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnEnemyTimer");
}

{ //Subevents
gdjs.GameScene3Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SpawnEnemyTimer") > 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameScene3Code.mapOfEmptyGDEnemy23Objects) < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameScene3Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SpawnEnemyTimer") > 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameScene3Code.mapOfEmptyGDEnemy23Objects) < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameScene3Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("GameScene3");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOverScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
gdjs.GameScene3Code.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.GameScene3Code.GDPlayer2Objects1[i].getPointX("")), (gdjs.GameScene3Code.GDPlayer2Objects1[i].getPointY("")), gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 600, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FireButton"), gdjs.GameScene3Code.GDFireButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.GameScene3Code.GDMoveJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDFireButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDFireButtonObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDFireButtonObjects1[k] = gdjs.GameScene3Code.GDFireButtonObjects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDFireButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDMoveJoystickObjects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDMoveJoystickObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDMoveJoystickObjects1[k] = gdjs.GameScene3Code.GDMoveJoystickObjects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDMoveJoystickObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
gdjs.GameScene3Code.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.GameScene3Code.GDPlayer2Objects1[i].getPointX("")), (gdjs.GameScene3Code.GDPlayer2Objects1[i].getPointY("")), gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects1Objects, (gdjs.GameScene3Code.GDPlayer2Objects1[i].getPointX("")) + Math.cos(gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, 1, "Primary", null) * 3.14159 / 180) * 1000, (gdjs.GameScene3Code.GDPlayer2Objects1[i].getPointY("")) + Math.sin(gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, 1, "Primary", null) * 3.14159 / 180) * 1000, 600, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FireButton"), gdjs.GameScene3Code.GDFireButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.GameScene3Code.GDMoveJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDFireButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDFireButtonObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDFireButtonObjects1[k] = gdjs.GameScene3Code.GDFireButtonObjects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDFireButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDMoveJoystickObjects1.length;i<l;++i) {
    if ( !(gdjs.GameScene3Code.GDMoveJoystickObjects1[i].IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDMoveJoystickObjects1[k] = gdjs.GameScene3Code.GDMoveJoystickObjects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDMoveJoystickObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
gdjs.GameScene3Code.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.GameScene3Code.GDPlayer2Objects1[i].getPointX("")), (gdjs.GameScene3Code.GDPlayer2Objects1[i].getPointY("")), gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 600, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Escape");
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
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyKillCounter"), gdjs.GameScene3Code.GDEnemyKillCounterObjects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemyKillCounterObjects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemyKillCounterObjects1[i].getBehavior("Text").setText("Enemigos: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy23"), gdjs.GameScene3Code.GDEnemy23Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDEnemy23Objects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariableNumber(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(0)) != 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDEnemy23Objects1[k] = gdjs.GameScene3Code.GDEnemy23Objects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDEnemy23Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDEnemy23Objects1 */
gdjs.copyArray(runtimeScene.getObjects("EnemyKillCounter"), gdjs.GameScene3Code.GDEnemyKillCounterObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemy23Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemy23Objects1[i].returnVariable(gdjs.GameScene3Code.GDEnemy23Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.GameScene3Code.GDEnemyKillCounterObjects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDEnemyKillCounterObjects1[i].getBehavior("Text").setText("Enemigos: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 20);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "WinScene", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("TopDownMovement").simulateStick(gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, 1, "Primary", null), gdjs.evtsExt__SpriteMultitouchJoystick__StickForce.func(runtimeScene, 1, "Primary", null));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FireJoystick"), gdjs.GameScene3Code.GDFireJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDFireJoystickObjects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDFireJoystickObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDFireJoystickObjects1[k] = gdjs.GameScene3Code.GDFireJoystickObjects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDFireJoystickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene3Code.GDFireJoystickObjects1.length;i<l;++i) {
    if ( gdjs.GameScene3Code.GDFireJoystickObjects1[i].StickForce(null) > 0.2 ) {
        isConditionTrue_0 = true;
        gdjs.GameScene3Code.GDFireJoystickObjects1[k] = gdjs.GameScene3Code.GDFireJoystickObjects1[i];
        ++k;
    }
}
gdjs.GameScene3Code.GDFireJoystickObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDFireJoystickObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
gdjs.GameScene3Code.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("FireBullet").Fire((gdjs.GameScene3Code.GDPlayer2Objects1[i].getCenterXInScene()), (gdjs.GameScene3Code.GDPlayer2Objects1[i].getCenterYInScene()), gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDBulletObjects1Objects, (( gdjs.GameScene3Code.GDFireJoystickObjects1.length === 0 ) ? 0 :gdjs.GameScene3Code.GDFireJoystickObjects1[0].StickAngle(null)), 600, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("colision"), gdjs.GameScene3Code.GDcolisionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects, gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolisionObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects1 */
/* Reuse gdjs.GameScene3Code.GDcolisionObjects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].separateFromObjectsList(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolisionObjects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("colision2"), gdjs.GameScene3Code.GDcolision2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects, gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects1 */
/* Reuse gdjs.GameScene3Code.GDcolision2Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].separateFromObjectsList(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision2Objects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("colision3"), gdjs.GameScene3Code.GDcolision3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects, gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects1 */
/* Reuse gdjs.GameScene3Code.GDcolision3Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].separateFromObjectsList(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision3Objects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("colision4"), gdjs.GameScene3Code.GDcolision4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects, gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects1 */
/* Reuse gdjs.GameScene3Code.GDcolision4Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].separateFromObjectsList(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision4Objects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("colision5"), gdjs.GameScene3Code.GDcolision5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects, gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene3Code.GDPlayer2Objects1 */
/* Reuse gdjs.GameScene3Code.GDcolision5Objects1 */
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].separateFromObjectsList(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDcolision5Objects1Objects, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() < 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart4"), gdjs.GameScene3Code.GDHeart4Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDHeart4Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDHeart4Objects1[i].getBehavior("Animation").setAnimationName("Empty");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() >= 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart4"), gdjs.GameScene3Code.GDHeart4Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDHeart4Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDHeart4Objects1[i].getBehavior("Animation").setAnimationName("Full");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() < 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart5"), gdjs.GameScene3Code.GDHeart5Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDHeart5Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDHeart5Objects1[i].getBehavior("Animation").setAnimationName("Empty");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() >= 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart5"), gdjs.GameScene3Code.GDHeart5Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDHeart5Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDHeart5Objects1[i].getBehavior("Animation").setAnimationName("Full");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("GameScene3");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOverScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ganador"), gdjs.GameScene3Code.GDganadorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDPlayer2Objects1Objects, gdjs.GameScene3Code.mapOfGDgdjs_9546GameScene3Code_9546GDganadorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("GameScene3");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "WinScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameScene3Code.GDPlayer2Objects1);
{for(var i = 0, len = gdjs.GameScene3Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameScene3Code.GDPlayer2Objects1[i].getBehavior("TopDownMovement").setMaxSpeed(120);
}
}
}

}


};

gdjs.GameScene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene3Code.GDFireButtonObjects1.length = 0;
gdjs.GameScene3Code.GDFireButtonObjects2.length = 0;
gdjs.GameScene3Code.GDFireButtonObjects3.length = 0;
gdjs.GameScene3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameScene3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameScene3Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.GameScene3Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.GameScene3Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.GameScene3Code.GDNewTiledSprite2Objects3.length = 0;
gdjs.GameScene3Code.GDMoveJoystickObjects1.length = 0;
gdjs.GameScene3Code.GDMoveJoystickObjects2.length = 0;
gdjs.GameScene3Code.GDMoveJoystickObjects3.length = 0;
gdjs.GameScene3Code.GDJumpButtonObjects1.length = 0;
gdjs.GameScene3Code.GDJumpButtonObjects2.length = 0;
gdjs.GameScene3Code.GDJumpButtonObjects3.length = 0;
gdjs.GameScene3Code.GDFireJoystickObjects1.length = 0;
gdjs.GameScene3Code.GDFireJoystickObjects2.length = 0;
gdjs.GameScene3Code.GDFireJoystickObjects3.length = 0;
gdjs.GameScene3Code.GDganadorObjects1.length = 0;
gdjs.GameScene3Code.GDganadorObjects2.length = 0;
gdjs.GameScene3Code.GDganadorObjects3.length = 0;
gdjs.GameScene3Code.GDPlayerObjects1.length = 0;
gdjs.GameScene3Code.GDPlayerObjects2.length = 0;
gdjs.GameScene3Code.GDPlayerObjects3.length = 0;
gdjs.GameScene3Code.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1.length = 0;
gdjs.GameScene3Code.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2.length = 0;
gdjs.GameScene3Code.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects3.length = 0;
gdjs.GameScene3Code.GDPlayerAttackHitboxObjects1.length = 0;
gdjs.GameScene3Code.GDPlayerAttackHitboxObjects2.length = 0;
gdjs.GameScene3Code.GDPlayerAttackHitboxObjects3.length = 0;
gdjs.GameScene3Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.GameScene3Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.GameScene3Code.GDPlatform_9595GroundObjects3.length = 0;
gdjs.GameScene3Code.GDPinchosObjects1.length = 0;
gdjs.GameScene3Code.GDPinchosObjects2.length = 0;
gdjs.GameScene3Code.GDPinchosObjects3.length = 0;
gdjs.GameScene3Code.GDEnemyKillCounterObjects1.length = 0;
gdjs.GameScene3Code.GDEnemyKillCounterObjects2.length = 0;
gdjs.GameScene3Code.GDEnemyKillCounterObjects3.length = 0;
gdjs.GameScene3Code.GDPlayer2Objects1.length = 0;
gdjs.GameScene3Code.GDPlayer2Objects2.length = 0;
gdjs.GameScene3Code.GDPlayer2Objects3.length = 0;
gdjs.GameScene3Code.GDHeart1Objects1.length = 0;
gdjs.GameScene3Code.GDHeart1Objects2.length = 0;
gdjs.GameScene3Code.GDHeart1Objects3.length = 0;
gdjs.GameScene3Code.GDHeart2Objects1.length = 0;
gdjs.GameScene3Code.GDHeart2Objects2.length = 0;
gdjs.GameScene3Code.GDHeart2Objects3.length = 0;
gdjs.GameScene3Code.GDHeart3Objects1.length = 0;
gdjs.GameScene3Code.GDHeart3Objects2.length = 0;
gdjs.GameScene3Code.GDHeart3Objects3.length = 0;
gdjs.GameScene3Code.GDEnemy23Objects1.length = 0;
gdjs.GameScene3Code.GDEnemy23Objects2.length = 0;
gdjs.GameScene3Code.GDEnemy23Objects3.length = 0;
gdjs.GameScene3Code.GDHealthPickupObjects1.length = 0;
gdjs.GameScene3Code.GDHealthPickupObjects2.length = 0;
gdjs.GameScene3Code.GDHealthPickupObjects3.length = 0;
gdjs.GameScene3Code.GDBulletObjects1.length = 0;
gdjs.GameScene3Code.GDBulletObjects2.length = 0;
gdjs.GameScene3Code.GDBulletObjects3.length = 0;
gdjs.GameScene3Code.GDcolisionObjects1.length = 0;
gdjs.GameScene3Code.GDcolisionObjects2.length = 0;
gdjs.GameScene3Code.GDcolisionObjects3.length = 0;
gdjs.GameScene3Code.GDcolision2Objects1.length = 0;
gdjs.GameScene3Code.GDcolision2Objects2.length = 0;
gdjs.GameScene3Code.GDcolision2Objects3.length = 0;
gdjs.GameScene3Code.GDcolision3Objects1.length = 0;
gdjs.GameScene3Code.GDcolision3Objects2.length = 0;
gdjs.GameScene3Code.GDcolision3Objects3.length = 0;
gdjs.GameScene3Code.GDcolision4Objects1.length = 0;
gdjs.GameScene3Code.GDcolision4Objects2.length = 0;
gdjs.GameScene3Code.GDcolision4Objects3.length = 0;
gdjs.GameScene3Code.GDcolision5Objects1.length = 0;
gdjs.GameScene3Code.GDcolision5Objects2.length = 0;
gdjs.GameScene3Code.GDcolision5Objects3.length = 0;
gdjs.GameScene3Code.GDHeart4Objects1.length = 0;
gdjs.GameScene3Code.GDHeart4Objects2.length = 0;
gdjs.GameScene3Code.GDHeart4Objects3.length = 0;
gdjs.GameScene3Code.GDHeart5Objects1.length = 0;
gdjs.GameScene3Code.GDHeart5Objects2.length = 0;
gdjs.GameScene3Code.GDHeart5Objects3.length = 0;

gdjs.GameScene3Code.eventsList8(runtimeScene);
gdjs.GameScene3Code.GDFireButtonObjects1.length = 0;
gdjs.GameScene3Code.GDFireButtonObjects2.length = 0;
gdjs.GameScene3Code.GDFireButtonObjects3.length = 0;
gdjs.GameScene3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameScene3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameScene3Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.GameScene3Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.GameScene3Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.GameScene3Code.GDNewTiledSprite2Objects3.length = 0;
gdjs.GameScene3Code.GDMoveJoystickObjects1.length = 0;
gdjs.GameScene3Code.GDMoveJoystickObjects2.length = 0;
gdjs.GameScene3Code.GDMoveJoystickObjects3.length = 0;
gdjs.GameScene3Code.GDJumpButtonObjects1.length = 0;
gdjs.GameScene3Code.GDJumpButtonObjects2.length = 0;
gdjs.GameScene3Code.GDJumpButtonObjects3.length = 0;
gdjs.GameScene3Code.GDFireJoystickObjects1.length = 0;
gdjs.GameScene3Code.GDFireJoystickObjects2.length = 0;
gdjs.GameScene3Code.GDFireJoystickObjects3.length = 0;
gdjs.GameScene3Code.GDganadorObjects1.length = 0;
gdjs.GameScene3Code.GDganadorObjects2.length = 0;
gdjs.GameScene3Code.GDganadorObjects3.length = 0;
gdjs.GameScene3Code.GDPlayerObjects1.length = 0;
gdjs.GameScene3Code.GDPlayerObjects2.length = 0;
gdjs.GameScene3Code.GDPlayerObjects3.length = 0;
gdjs.GameScene3Code.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects1.length = 0;
gdjs.GameScene3Code.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects2.length = 0;
gdjs.GameScene3Code.GDBARRA_9595DE_9595VIDA_9595NUEVAObjects3.length = 0;
gdjs.GameScene3Code.GDPlayerAttackHitboxObjects1.length = 0;
gdjs.GameScene3Code.GDPlayerAttackHitboxObjects2.length = 0;
gdjs.GameScene3Code.GDPlayerAttackHitboxObjects3.length = 0;
gdjs.GameScene3Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.GameScene3Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.GameScene3Code.GDPlatform_9595GroundObjects3.length = 0;
gdjs.GameScene3Code.GDPinchosObjects1.length = 0;
gdjs.GameScene3Code.GDPinchosObjects2.length = 0;
gdjs.GameScene3Code.GDPinchosObjects3.length = 0;
gdjs.GameScene3Code.GDEnemyKillCounterObjects1.length = 0;
gdjs.GameScene3Code.GDEnemyKillCounterObjects2.length = 0;
gdjs.GameScene3Code.GDEnemyKillCounterObjects3.length = 0;
gdjs.GameScene3Code.GDPlayer2Objects1.length = 0;
gdjs.GameScene3Code.GDPlayer2Objects2.length = 0;
gdjs.GameScene3Code.GDPlayer2Objects3.length = 0;
gdjs.GameScene3Code.GDHeart1Objects1.length = 0;
gdjs.GameScene3Code.GDHeart1Objects2.length = 0;
gdjs.GameScene3Code.GDHeart1Objects3.length = 0;
gdjs.GameScene3Code.GDHeart2Objects1.length = 0;
gdjs.GameScene3Code.GDHeart2Objects2.length = 0;
gdjs.GameScene3Code.GDHeart2Objects3.length = 0;
gdjs.GameScene3Code.GDHeart3Objects1.length = 0;
gdjs.GameScene3Code.GDHeart3Objects2.length = 0;
gdjs.GameScene3Code.GDHeart3Objects3.length = 0;
gdjs.GameScene3Code.GDEnemy23Objects1.length = 0;
gdjs.GameScene3Code.GDEnemy23Objects2.length = 0;
gdjs.GameScene3Code.GDEnemy23Objects3.length = 0;
gdjs.GameScene3Code.GDHealthPickupObjects1.length = 0;
gdjs.GameScene3Code.GDHealthPickupObjects2.length = 0;
gdjs.GameScene3Code.GDHealthPickupObjects3.length = 0;
gdjs.GameScene3Code.GDBulletObjects1.length = 0;
gdjs.GameScene3Code.GDBulletObjects2.length = 0;
gdjs.GameScene3Code.GDBulletObjects3.length = 0;
gdjs.GameScene3Code.GDcolisionObjects1.length = 0;
gdjs.GameScene3Code.GDcolisionObjects2.length = 0;
gdjs.GameScene3Code.GDcolisionObjects3.length = 0;
gdjs.GameScene3Code.GDcolision2Objects1.length = 0;
gdjs.GameScene3Code.GDcolision2Objects2.length = 0;
gdjs.GameScene3Code.GDcolision2Objects3.length = 0;
gdjs.GameScene3Code.GDcolision3Objects1.length = 0;
gdjs.GameScene3Code.GDcolision3Objects2.length = 0;
gdjs.GameScene3Code.GDcolision3Objects3.length = 0;
gdjs.GameScene3Code.GDcolision4Objects1.length = 0;
gdjs.GameScene3Code.GDcolision4Objects2.length = 0;
gdjs.GameScene3Code.GDcolision4Objects3.length = 0;
gdjs.GameScene3Code.GDcolision5Objects1.length = 0;
gdjs.GameScene3Code.GDcolision5Objects2.length = 0;
gdjs.GameScene3Code.GDcolision5Objects3.length = 0;
gdjs.GameScene3Code.GDHeart4Objects1.length = 0;
gdjs.GameScene3Code.GDHeart4Objects2.length = 0;
gdjs.GameScene3Code.GDHeart4Objects3.length = 0;
gdjs.GameScene3Code.GDHeart5Objects1.length = 0;
gdjs.GameScene3Code.GDHeart5Objects2.length = 0;
gdjs.GameScene3Code.GDHeart5Objects3.length = 0;


return;

}

gdjs['GameScene3Code'] = gdjs.GameScene3Code;
