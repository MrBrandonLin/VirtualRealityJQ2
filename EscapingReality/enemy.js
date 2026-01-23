class enemy{
    constructor(){
        this.character = document.getElementById("character");
        this.characterCopy = this.character.cloneNode(true);
        this.characterCopy.setAttribute("position", "6 4 0");
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
        this.characterCopy.addEventListener("click", ()=>{
            this.centerMass[0].object3D.rotation.x = radiator(attacks.pP.centerMass[0]);
            this.hipL[0].object3D.rotation.x = radiator(attacks.pP.hipJointL[0]);
            this.hipR[0].object3D.rotation.x = radiator(attacks.pP.hipJointR[0]);
            this.thighL[3].object3D.rotation.x = radiator(0);
            this.thighR[3].object3D.rotation.x = radiator(0);
            this.calfL[3].object3D.rotation.x = radiator(0);
            this.calfR[3].object3D.rotation.x = radiator(0);
            this.gut[0].object3D.rotation.x = radiator(0);
            this.shoulderL[0].object3D.rotation.x = radiator(0);
            this.shoulderR[0].object3D.rotation.x = radiator(0);
            this.upperarmL[2].object3D.rotation.x = radiator(0);
            this.upperarmR[2].object3D.rotation.x = radiator(0);
            this.forearmL[1].object3D.rotation.x = radiator(0);
            this.forearmR[1].object3D.rotation.x = radiator(0);
            this.chest[3].object3D.rotation.x = radiator(0);
            this.neck[4].object3D.rotation.x = radiator(0);
        })
    }
}