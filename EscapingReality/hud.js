class headsupdisplay{
    constructor(){
        this.playerhealthbar = document.createElement("a-text");
        this.playerstaminabar = document.createElement("a-text");
        this.statusupdates = document.createElement("a-image");
        this.playerhealth = 100;
        this.playerstamina = 100;
        this.staminadrain = 2;
        this.staminarecovery = 1;
        this.staminaready = true;
        this.healthgone = false;

        this.playerhealthbar.setAttribute("value", `${this.playerhealth}%`)
        this.playerhealthbar.setAttribute("position", "-.85 -.30 -.5")
        this.playerhealthbar.setAttribute("color", "#00c90d")
        this.playerstaminabar.setAttribute("value", `${this.playerstamina}%`)
        this.playerstaminabar.setAttribute("position", "-.85 -.22 -.6")
        this.playerstaminabar.setAttribute("color", "#00a7f5")
        this.statusupdates.setAttribute("src", "#deathScreen")
        this.statusupdates.setAttribute("position", "0 -10 -.49"); this.statusupdates.setAttribute("scale", "1.75 1"); 
        secamMain.append(this.playerhealthbar);
        secamMain.append(this.playerstaminabar);
        secamMain.append(this.statusupdates);
    }
    hudtrack(){
        if(notas != "pP"){
            if(this.playerstamina > 0){ this.playerstamina -= this.staminadrop; } 
            else { this.playerstamina += 0; }
        } else if(this.playerstamina<100){ this.playerstamina += 1; }
        
        this.playerhealthbar.setAttribute("value", `${this.playerhealth}%`)
        this.playerstaminabar.setAttribute("value", `${this.playerstamina}%`)
        if(this.playerstamina < 20){
            this.playerstaminabar.setAttribute("color", `#ff0000`)
            this.staminadrop = 4;
        } else {
            this.playerstaminabar.setAttribute("color", `#00a7f5`)
            this.staminadrop = 2;
            this.staminaready = true;
        }
        if(this.playerstamina <= 0){ this.staminaready = false; }
        if(this.playerhealth <= 0){
            this.statusupdates.setAttribute("position", "0 0 -.49");
            this.healthgone = true;
        } else {
            this.healthgone = false;
            this.statusupdates.setAttribute("position", "0 -10 -.49");
        }
        if(stage=="eU"){
            jinsen.statusupdates.setAttribute("src", "#transferAttack1");
            jinsen.statusupdates.setAttribute("position", "0 0 -.55");
        } else if(stage=="uE"){
            jinsen.statusupdates.setAttribute("src", "#transferDefend2");
            jinsen.statusupdates.setAttribute("position", "0 0 -.55");
        } else {
            jinsen.statusupdates.setAttribute("position", "0 -10 -.49");
        }
    }
}