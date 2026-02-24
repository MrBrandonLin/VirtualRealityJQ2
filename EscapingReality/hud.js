class headsupdisplay{
    constructor(){
        this.playerhealthbar = document.createElement("a-text");
        this.playerhealthbar.setAttribute("value", "<#]#]#]#]#]#]#]#]>")
        this.playerhealthbar.setAttribute("position", "-1.5 -.6 -1")
        secamMain.append(this.playerhealthbar);
    }
}