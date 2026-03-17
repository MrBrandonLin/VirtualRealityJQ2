class headsupdisplay{
    constructor(){
        this.playerhealthbar = document.createElement("a-text");
        this.playerstaminabar = document.createElement("a-text");
        this.enemyhealthbar = document.createElement("a-text");
        this.statusupdates = document.createElement("a-image");
        this.playerhealth = 301;
        this.playerhealthpercent = (this.playerhealth/301)*100;
        this.playerstamina = 251;
        this.playerstaminapercent = (this.playerstamina/251)*100;
        this.enemyhealth = 201;
        this.enemyhealthpercent = (this.enemyhealth/201)*100;
        this.staminadrain = 2;
        this.staminarecovery = 1;
        this.staminaready = true;
        this.healthgone = false; this.gamewin = false;

        this.playerhealthbar.setAttribute("value", `${this.playerhealthpercent}%`)
        this.playerhealthbar.setAttribute("position", "-.85 -.30 -.5")
        this.playerhealthbar.setAttribute("color", "#00c90d")
        this.playerstaminabar.setAttribute("value", `${this.playerstaminapercent}%`)
        this.playerstaminabar.setAttribute("position", "-.85 -.22 -.6")
        this.playerstaminabar.setAttribute("color", "#00a7f5")
        this.enemyhealthbar.setAttribute("position", ".45 .30 -.6")
        this.enemyhealthbar.setAttribute("value", `${this.enemyhealthpercent}%`)
        this.statusupdates.setAttribute("src", "#deathScreen")
        this.statusupdates.setAttribute("position", "0 -10 -.49"); this.statusupdates.setAttribute("scale", "1.75 1"); 
        secamMain.append(this.playerhealthbar);
        secamMain.append(this.playerstaminabar);
        secamMain.append(this.enemyhealthbar);
        secamMain.append(this.statusupdates);
    }
    hudtrack(){
        this.playerhealthpercent = (this.playerhealth/301)*100;
        this.playerstaminapercent = (this.playerstamina/251)*100;
        this.enemyhealthpercent = (this.enemyhealth/201)*100;
        if(notas != "pP"){
            if(this.playerstamina > 0){ this.playerstamina -= this.staminadrop; } 
            else { this.playerstamina += 0; }
        } else if(this.playerstamina<251){ this.playerstamina += 2; }
        
        this.playerhealthbar.setAttribute("value", `${this.playerhealthpercent.toFixed(2)}%`)
        this.playerstaminabar.setAttribute("value", `${this.playerstaminapercent.toFixed(2)}%`)
        this.enemyhealthbar.setAttribute("value", `${this.enemyhealthpercent.toFixed(2)}%`)
        if(this.playerstamina < 38){
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
            jinsen.statusupdates.setAttribute("src", "#deathScreen");
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
        if(this.enemyhealth <= 0){
            this.enemyhealthbar.setAttribute("value", `Radical! Now finish the song!`);
            this.enemyhealthbar.setAttribute("position", `-1.4 .65 -1.2`);
            this.gamewin == true;
        } else {
            this.enemyhealthbar.setAttribute("position", ".45 .30 -.6")
            this.enemyhealthbar.setAttribute("value", `${this.enemyhealthpercent.toFixed(2)}%`)
        }
        if(timin.songend == true && this.gamewin == true){
            this.statusupdates.setAttribute("src", "#winScreen");
            this.statusupdates.setAttribute("position", "0 -0 -.49");
        }
    }
}