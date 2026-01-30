class player{
    constructor(){
        this.character = document.getElementById("character");
        this.characterCopy = this.character.cloneNode(true);
        this.characterCopy.setAttribute("position", "6 4 7");
        this.trueBase = this.characterCopy.children;
        this.centerMass = this.trueBase[0].children; this.centerMass2 = this.centerMass[0].children;
        this.hipL = this.centerMass2[0].children; this.hipR = this.centerMass2[1].children;
        this.thighL = this.hipL[0].children; this.thighR = this.hipR[0].children;
        this.calfL = this.thighL[3].children; this.calfR = this.thighR[3].children;
        this.gut = this.centerMass2[2].children; this.chest = this.gut[0].children;
        this.shoulderL = this.chest[1].children; this.shoulderR = this.chest[2].children;
        this.upperarmL = this.shoulderL[0].children; this.upperarmR = this.shoulderR[0].children;
        this.forearmL = this.upperarmL[2].children; this.forearmR = this.upperarmR[2].children;
        this.neck = this.chest[3].children;
        this.s = 5;
        console.log(this.calfL)

        scene.append(this.characterCopy);
    }
    stance(note){
        this.trueBase[0].setAttribute("position", {x:note.trueBasePos[0], y:note.trueBasePos[1], z:note.trueBasePos[2]})
        this.centerMass[0].setAttribute("rotation", {x:note.centerMass[0], y:note.centerMass[1], z:note.centerMass[2]})
        this.hipL[0].setAttribute("rotation", {x:note.hipJointL[0], y:note.hipJointL[1], z:note.hipJointL[2]})
        this.hipR[0].setAttribute("rotation", {x:note.hipJointR[0], y:note.hipJointR[1], z:note.hipJointR[2]})
        this.thighL[3].setAttribute("rotation", {x:note.leftThighJoint[0], y:note.leftThighJoint[1], z:note.leftThighJoint[2]})
        this.thighR[3].setAttribute("rotation", {x:note.rightThighJoint[0], y:note.rightThighJoint[1], z:note.rightThighJoint[2]})
        this.calfL[3].setAttribute("rotation", {x:note.leftCalfJoint[0], y:note.leftCalfJoint[1], z:note.leftCalfJoint[2]})
        this.calfR[3].setAttribute("rotation", {x:note.rightCalfJoint[0], y:note.rightCalfJoint[1], z:note.rightCalfJoint[2]})
        this.gut[0].setAttribute("rotation", {x:note.gut[0], y:note.gut[1], z:note.gut[2]})
        this.shoulderL[0].setAttribute("rotation", {x:note.leftShoulderJoint[0], y:note.leftShoulderJoint[1], z:note.leftShoulderJoint[2]})
        this.shoulderR[0].setAttribute("rotation", {x:note.rightShoulderJoint[0], y:note.rightShoulderJoint[1], z:note.rightShoulderJoint[2]})
        this.upperarmL[2].setAttribute("rotation", {x:note.leftUpperarmJoint[0], y:note.leftUpperarmJoint[1], z:note.leftUpperarmJoint[2]})
        this.upperarmR[2].setAttribute("rotation", {x:note.rightUpperarmJoint[0], y:note.rightUpperarmJoint[1], z:note.rightUpperarmJoint[2]})
        this.forearmL[1].setAttribute("rotation", {x:note.leftForearmJoint[0], y:note.leftForearmJoint[1], z:note.leftForearmJoint[2]})
        this.forearmR[1].setAttribute("rotation", {x:note.rightForearmJoint[0], y:note.rightForearmJoint[1], z:note.rightForearmJoint[2]})
        this.chest[3].setAttribute("rotation", {x:note.neckJoint[0], y:note.neckJoint[1], z:note.neckJoint[2]})
        this.neck[4].setAttribute("rotation", {x:note.headJoint[0], y:note.headJoint[1], z:note.headJoint[2]})
    }
    
        
}