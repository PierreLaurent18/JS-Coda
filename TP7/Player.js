const selectedSkin = document.getElementById("selectedskin");
class player {
    constructor(pseudo, skin, positionX, positionY) {
        this.pseudo = pseudo;
        this.skin = skin;
        this.positionX = positionX;
        this.positionY = positionY;

        this.HP = 100;
        this.attaque = 1;
        this.cooldown = 0;
        this.vitesse = 1;
        this.regen = 0;
        this.lvl = 1;
        this.IsAttacking = false;
        this.IsWalking = false;
        this.IsDying = true;
        this.isDead = false;

        this.walkSpriteIndex = 0;
        this.walkSpriteNumber = 9;
        this.currentWalkSpriteStep = 0;
        this.walkSpriteDuration = 2;

        this.attaqueSpriteIndex = 0;
        this.attaqueSpriteNumber = 6;
        this.currentAttaqueSpriteStep = 0;
        this.attaqueSpriteDuration = 2;

        this.dyingSpriteIndex = 0;
        this.dyingpriteNumber = 6;
        this.currentDyingSpriteStep = 0;
        this.dyingSpriteDuration = 2;
    }

    update(updateData) {
        this.positionX = updateData.positionX;
        this.positionY = updateData.positionY;
        this.HP = updateData.HP;
        this.attaque = updateData.attaque;
        this.cooldown = updateData.cooldown;
        this.vitesse = updateData.vitesse;
        this.regen = updateData.regen;
        this.lvl = updateData.lvl;
        this.IsWalking = updateData.IsWalking;
        this.IsDying = updateData.IsDying;
        this.IsAttacking = updateData.IsAttacking;
        this.isDead = updateData.isDead
    }
    animate() {
        if (this.IsWalking) {

            this.walkSpriteIndex++;
            if (this.walkSpriteIndex >= this.walkSpriteNumber) {
                this.walkSpriteIndex = 0;
                this.currentWalkSpriteStep;
                this.walkSpriteDuration++;
            }
            if (this.walkSpriteIndex >= this.walkSpriteNumber) {
                this.walkSpriteIndex = 0;
            }
        }
        else if (this.IsAttacking) {

            this.attaqueSpriteIndex++;
            if (this.attaqueSpriteIndex >= this.attaqueSpriteNumber) {
                this.attaqueSpriteIndex = 0;
                this.currentAttaqueSpriteStep;
                this.attaqueSpriteDuration++;
            }
            if (this.attaqueSpriteIndex >= this.attaqueSpriteNumber) {
                this.attaqueSpriteIndex = 0;
            }
        }

        else if (this.IsDying) {

            this.dyingSpriteIndex++;
            if (this.dyingSpriteIndex >= this.dyingSpriteNumber) {
                this.dyingSpriteIndex = 0;
                this.currentDyingSpriteStep;
                this.attaqueSpriteDuration++;
            }
            if (this.attaqueSpriteIndex >= this.attaqueSpriteNumber) {
                this.attaqueSpriteIndex = 0;
            }

        }
        else {

        }

        console.log("Walk Animation : \n");
        console.log("isWalking = ", this.IsWalking);
        console.log("walkSpriteIndex = ", this.walkSpriteIndex);
        console.log("this.currentWalkSpriteStep = ", this.currentWalkSpriteStep)

        console.log("attack Animation : \n");
        console.log("isattacking = ", this.IsAttacking);
        console.log("attackSpriteIndex = ", this.attaqueSpriteIndex);
        console.log("currentattackSpriteStep = ", this.currentAttaqueSpriteStep)

        console.log("Dying Animation : \n");
        console.log("isDying = ", this.IsDying);
        console.log("DyingSpriteIndex = ", this.dyingSpriteIndex);
        console.log("currentdyingSpriteStep = ", this.currentDyingSpriteStep)
    }
}

const joueur = new player("pseudo", "skin", 0, 0);

// for (let i = 0; i<10; i++){
//     pierre.animate();
// }
