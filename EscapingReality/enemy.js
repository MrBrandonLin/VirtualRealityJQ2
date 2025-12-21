class enemyModel{
    constructor(){
        this.enemy = document.createElement("a-entity");
        this.pecL = document.createElement("a-box"); this.pecR = document.createElement("a-box");
        this.pecM = document.createElement("a-box");
        this.abL1 = document.createElement("a-box"); this.abL2 = document.createElement("a-box");
        this.abL3 = document.createElement("a-box");
        this.abR1 = document.createElement("a-box"); this.abR2 = document.createElement("a-box");
        this.abR3 = document.createElement("a-box");
        this.backL1 = document.createElement("a-box"); this.backL2 = document.createElement("a-box");
        this.backR1 = document.createElement("a-box"); this.backR2 = document.createElement("a-box");
        this.shoulderL = document.createElement("a-box"); this.shoulderR = document.createElement("a-box");
        this.forearmL = document.createElement("a-box"); this.forearmR = document.createElement("a-box");

        this.enemy.setAttribute("position", "0 3x -1");
        this.pecL.setAttribute("position", "-.4 0 0"); this.pecL.setAttribute("rotation", "1 -20 .05");
        this.pecL.setAttribute("color", "#E5C298");
        this.pecR.setAttribute("position", ".4 0 .05"); this.pecR.setAttribute("rotation", "1 20 0");
        this.pecR.setAttribute("color", "#E5C298");
        this.pecM.setAttribute("position", "0 0 .4"); this.pecM.setAttribute("scale", ".3 1 .3");
        this.pecM.setAttribute("color", "#E5C298");
        this.abL1.setAttribute("position", "-.35 -.5 -.1"); this.abL1.setAttribute("rotation", "0 -10 0");
        this.abL1.setAttribute("color", "#E5C298"); 
        this.abL2.setAttribute("position", "-.35 -1 -.15"); this.abL2.setAttribute("rotation", "0 -11 0"); 
        this.abL2.setAttribute("color", "#E5C298");
        this.abL3.setAttribute("position", "-.35 -1.5 -.20"); this.abL3.setAttribute("rotation", "0 -12 0");
        this.abL3.setAttribute("color", "#E5C298");
        this.abR1.setAttribute("position", ".35 -.5 -.1"); this.abR1.setAttribute("rotation", "0 10 0");
        this.abR1.setAttribute("color", "#E5C298");
        this.abR2.setAttribute("position", ".35 -1 -.15"); this.abR2.setAttribute("rotation", "0 11 0");
        this.abR2.setAttribute("color", "#E5C298");
        this.abR3.setAttribute("position", ".35 -1.5 -.20"); this.abR3.setAttribute("rotation", "0 12 0");
        this.abR3.setAttribute("color", "#E5C298");
        this.backL1.setAttribute("position", "-.4 -.25 -.4"); this.backL1.setAttribute("rotation", "-5 0 5");
        this.backL1.setAttribute("scale", "1 1.5 1"); this.backL1.setAttribute("color", "#E5C298");
        this.backL2.setAttribute("position", "-.4 -1.5 -.4"); this.backL2.setAttribute("rotation", "5 0 -5");
        this.backL2.setAttribute("scale", "1 1 1"); this.backL2.setAttribute("color", "#E5C298");
        this.backR1.setAttribute("position", ".4 -.25 -.4"); this.backR1.setAttribute("rotation", "-5 0 -5");
        this.backR1.setAttribute("scale", "1 1.5 1"); this.backR1.setAttribute("color", "#E5C298");
        this.backR2.setAttribute("position", ".4 -1.5 -.4"); this.backR2.setAttribute("rotation", "5 0 5");
        this.backR2.setAttribute("scale", "1 1 1"); this.backR2.setAttribute("color", "#E5C298");
        this.shoulderL.setAttribute("position", "-1.3 .2 -.2"); this.shoulderL.setAttribute("rotation", "0 2 0");
        this.shoulderL.setAttribute("scale", "1 .5 1"); this.shoulderL.setAttribute("color", "#E5C298");
        this.shoulderR.setAttribute("position", "1.3 .2 -.2"); this.shoulderR.setAttribute("rotation", "0 -2 0");
        this.shoulderR.setAttribute("scale", "1 .5 1"); this.shoulderR.setAttribute("color", "#E5C298");


        this.enemy.append(this.pecL); this.enemy.append(this.pecR); this.enemy.append(this.pecM);
        this.enemy.append(this.abL1);  this.enemy.append(this.abL2); this.enemy.append(this.abL3);
        this.enemy.append(this.abR1); this.enemy.append(this.abR2); this.enemy.append(this.abR3);
        this.enemy.append(this.backL1); this.enemy.append(this.backL2);
        this.enemy.append(this.backR1); this.enemy.append(this.backR2);
        this.enemy.append(this.shoulderL); this.enemy.append(this.shoulderR);
        this.enemy.append(this.forearmL); this.enemy.append(this.forearmR)
        scene.append(this.enemy);
    }
}