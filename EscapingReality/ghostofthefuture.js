class ghostofthefuture{
    constructor(){
        this.character = document.getElementById("character");
        this.characterCopy = this.character.cloneNode(true);
        this.characterCopy.setAttribute("position", "3.5 13 5");
        this.characterCopy.setAttribute("scale", ".08 .08 .08");
        this.trueBase = this.characterCopy.children;
        this.centerMass = this.trueBase[0].children; this.centerMass2 = this.centerMass[0].children;
        this.hipL = this.centerMass2[0].children; this.hipR = this.centerMass2[1].children;
        this.thighL = this.hipL[0].children; this.thighR = this.hipR[0].children;
        this.calfL = this.thighL[3].children; this.calfR = this.thighR[3].children;
        this.footL = this.calfL[3].children; this.footR = this.calfR[3].children;
        this.gut = this.centerMass2[2].children; this.chest = this.gut[0].children;
        this.shoulderL = this.chest[1].children; this.shoulderR = this.chest[2].children;
        this.upperarmL = this.shoulderL[0].children; this.upperarmR = this.shoulderR[0].children;
        this.forearmL = this.upperarmL[2].children; this.forearmR = this.upperarmR[2].children;
        this.wristL = this.forearmL[1].children; this.wristR = this.forearmR[1].children;
        this.neck = this.chest[3].children; this.head = this.neck[4].children;
        this.s = 5;

        this.centerMass2[0].setAttribute("color", "#CDDEEC")
        this.centerMass2[1].setAttribute("color", "#CDDEEC")
        this.thighL[0].setAttribute("color", "#CDDEEC"); this.thighR[0].setAttribute("color", "#CDDEEC")
        this.thighL[1].setAttribute("color", "#CDDEEC"); this.thighR[1].setAttribute("color", "#CDDEEC")
        this.thighL[2].setAttribute("color", "#CDDEEC"); this.thighR[2].setAttribute("color", "#CDDEEC")
        this.calfL[0].setAttribute("color", "#CDDEEC"); this.calfR[0].setAttribute("color", "#CDDEEC")
        this.calfL[1].setAttribute("color", "#CDDEEC"); this.calfR[1].setAttribute("color", "#CDDEEC")
        this.calfL[2].setAttribute("color", "#CDDEEC"); this.calfR[2].setAttribute("color", "#CDDEEC")
        this.centerMass2[2].setAttribute("color", "#CDDEEC")
        this.chest[0].setAttribute("color", "#CDDEEC")
        this.chest[1].setAttribute("color", "#CDDEEC"); this.chest[2].setAttribute("color", "#CDDEEC")
        this.upperarmL[0].setAttribute("color", "#CDDEEC"); this.upperarmR[0].setAttribute("color", "#CDDEEC")
        this.upperarmL[1].setAttribute("color", "#CDDEEC"); this.upperarmR[1].setAttribute("color", "#CDDEEC")
        this.forearmL[0].setAttribute("color", "#CDDEEC"); this.forearmR[0].setAttribute("color", "#CDDEEC")
        this.wristL[0].setAttribute("color", "#CDDEEC"); this.wristR[0].setAttribute("color", "#CDDEEC");
        this.footL[0].setAttribute("color", "#CDDEEC"); this.footR[0].setAttribute("color", "#CDDEEC"); 
        this.neck[0].setAttribute("color", "#CDDEEC"); this.neck[1].setAttribute("color", "#CDDEEC");
        this.neck[2].setAttribute("color", "#CDDEEC"); this.neck[3].setAttribute("color", "#CDDEEC");
        this.head[0].setAttribute("color", "#CDDEEC"); this.head[1].setAttribute("color", "#CDDEEC");

        this.centerMass2[0].setAttribute("opacity", "1")
        this.centerMass2[1].setAttribute("opacity", "1")
        this.thighL[0].setAttribute("opacity", "1"); this.thighR[0].setAttribute("opacity", "1")
        this.thighL[1].setAttribute("opacity", "1"); this.thighR[1].setAttribute("opacity", "1")
        this.thighL[2].setAttribute("opacity", "1"); this.thighR[2].setAttribute("opacity", "1")
        this.calfL[0].setAttribute("opacity", "1"); this.calfR[0].setAttribute("opacity", "1")
        this.calfL[1].setAttribute("opacity", "1"); this.calfR[1].setAttribute("opacity", "1")
        this.calfL[2].setAttribute("opacity", "1"); this.calfR[2].setAttribute("opacity", "1")
        this.centerMass2[2].setAttribute("opacity", "1")
        this.chest[0].setAttribute("opacity", "1")
        this.chest[1].setAttribute("opacity", "1"); this.chest[2].setAttribute("opacity", "1")
        this.upperarmL[0].setAttribute("opacity", "1"); this.upperarmR[0].setAttribute("opacity", "1")
        this.upperarmL[1].setAttribute("opacity", "1"); this.upperarmR[1].setAttribute("opacity", "1")
        this.forearmL[0].setAttribute("opacity", "1"); this.forearmR[0].setAttribute("opacity", "1")
        this.wristL[0].setAttribute("opacity", "1"); this.wristR[0].setAttribute("opacity", "1");
        this.footL[0].setAttribute("opacity", "1"); this.footR[0].setAttribute("opacity", "1"); 
        this.neck[0].setAttribute("opacity", "1"); this.neck[1].setAttribute("opacity", "1");
        this.neck[2].setAttribute("opacity", "1"); this.neck[3].setAttribute("opacity", "1");
        this.head[0].setAttribute("opacity", "1"); this.head[1].setAttribute("opacity", "0");

        //
        //Hip Joint L is this.hipL[0], Hip Joint R is this.hipR[0]
        //Left Knee Joint is this.thighL[3], Right Knee Joint is this.thighR[3]
        //Left Foot Joint is this.calfL[3], Right Foot Joint is this.calfR[3]
        //Gut Joint is this.gut[0]
        //Left Shoulder Joint is this.shoulderL[0], Right Shoulder Joint is this.shoulderR[0]
        //Left Upper Arm Joint is this.upperarmL[2], Right Upper Arm Joint is this.upperarmR[2]
        //Left Fore Arm Joint is this.forearmL[1], Right Fore Arm Joint is this.forearmR[1]
        //Neck Joint is this.chest[3], Head Joint is this.neck[4]

        scene.append(this.characterCopy);
    }
    stance(note){
        this.trueBase[0].setAttribute("position", {x:note.trueBasePos[0], y:note.trueBasePos[1], z:note.trueBasePos[2]})
        this.trueBase[0].setAttribute("rotation", {x:note.trueBase[0], y:note.trueBase[1], z:note.trueBase[2]})
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