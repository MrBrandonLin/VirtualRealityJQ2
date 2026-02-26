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

        secamMain.append(this.playerhealthbar);
        secamMain.append(this.playerstaminabar);
    }
    hudtrack(a, b){
        this.playerhealth -= 1;
        if(notas != "pP"){
            if(this.playerstamina > 0){
                this.playerstamina -= this.staminadrop;
            } else {
                this.playerstamina += 0;
            }
        } else if(this.playerstamina<100){
            this.playerstamina += 1;
        }
        
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
        if(this.playerstamina <= 0){
            this.staminaready = false;
        }
        if(this.playerhealth <= 0){
            this.healthgone = true;
        }
    }
}