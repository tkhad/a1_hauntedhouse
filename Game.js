// Assignment 1: Haunted House 
//Tiffany Khadim 
//ID:8199069
const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    EXPLORE:  Symbol("explore"),
    DOOR: Symbol("right"),
    DOOR: Symbol("left"),
    READ: Symbol("read"),
    STAIRS: Symbol("stairs"),
    LEAVE: Symbol("leave"),
    CONTINUE: Symbol("continue"),
    CONTINUE: Symbol("read"),
    CONTINUE: Symbol("inspect"),
    FOLLOW: Symbol("follow"),
    FOLLOW: Symbol("grab"),
    CHECK: Symbol("fridge"),
    CHECK: Symbol("sink"),
    WRONG: Symbol("downstairs"),
    WRONG: Symbol("fridge"),
    SPELL: Symbol("spells"),
    ESCAPE: Symbol("escape")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "You've reached the Finster House, you have been warned that it's haunted. You may choose to leave now, or explore if you're not daunted. Do you want to explore or leave?" ;
        switch(this.stateCur){
            case GameState.WELCOMING:
                this.stateCur = GameState.EXPLORE;
                break;
            case GameState.EXPLORE:
                if(sInput.toLowerCase().match("explore")){
                    sReply = "The door **SLAMS** behind you! This house seems full of deception! There's a door: one to your right and left. Choose one if you want leave the main reception.";
                    this.stateCur = GameState.DOOR;
                }else{
                    sReply = "Who knows what's inside of there, or what you might find. Though you've chosen to leave here, you may explore if you change your mind.";
                    this.stateCur=GameState.WELCOMING;
                }
                break;
            case GameState.DOOR:
                if(sInput.toLowerCase().match("right")){
                    sReply = "You walk into a quaint living room, decorated in victorian formal. A gust of wind blows a piece of paper to the ground, just when everything was starting to feel normal. Would you like to inspect the room or read the paper?";
                    this.stateCur= GameState.READ;
                }else if (sInput.toLowerCase().match("left")){
                    sReply = "You walk into a narrow hallway, and see a stairwell leading down. Towards the end of the hall there's a key-locked door. Should you take the stairs, or should you explore the other way around?";
                    this.stateCur = GameState.STAIRS;
                }else{
                    sReply="You've made your decision, you decided to explore. If you want to leave now, you must choose a right or left door.";
                }
                break;
            case GameState.READ:
                if (sInput.toLowerCase().match("read")){
                    sReply="You pick up the paper and discover a note reading warning: IF YOU WANT TO LEAVE, FIND A KEY AND A BOOK OF MAGIC! BRING THEM TO THE HIDDEN ROOM BEFORE MORNING! You hear a loud scream, towards the opening of the room. Inspect this one first, or continue through the house of doom.";
                    this.stateCur=GameState.CONTINUE;
                }else{
                    sReply="As you search the room, with a sigh of relief, you find a window opened ever so slightly. A floating figure in white walks towards the opening of the room. Read the note or continue to tread lightly.";
                    this.stateCur=GameState.CONTINUE;
                }
                break;
            case GameState.STAIRS:
                if (sInput.toLowerCase().match("stairs")){
                    sReply="The stairs lead to another locked door! There must be a key to be found. It seems you only have one choice, you should probably explore the other way around.";
                    this.stateCur=GameState.EXPLORE;
                }else{
                    this.stateCur=GameState.EXPLORE;
                }
                break;
            case GameState.CONTINUE:
                if (sInput.toLowerCase().match("continue")){
                    sReply= "You walk into a dining room filled with gloom and evidence of gore. There's a flashlight on the table next to a bowl of soup (huh?), and bloody footprints on the floor. Would you like to grab the flashlight first, or just follow the footprints?";
                    this.stateCur=GameState.FOLLOW;
                }else if (sInput.toLowerCase().match("inspect")){
                 sReply="As you search the room, with a sigh of relief, you find a window opened ever so slightly. A floating figure in white walks towards the opening of the room. Continue but tread lightly.";
                 this.stateCur=GameState.CONTINUE;
                }else if (sInput.toLowerCase().match("read")){
                    sReply="You pick up the paper and discover a note reading warning: IF YOU WANT TO LEAVE, FIND A KEY, BOOK OF MAGIC! BRING THEM TO THE HIDDEN ROOM BEFORE MORNING! You hear a loud scream, towards the opening of the room. Do you dare continue through the house of doom?";
                    this.stateCur=GameState.CONTINUE;
                }else{
                    sReply="If you've read the note, and inspected this room, there's not much to do here, but continue through the house of doom!";
                }
                break;
            case GameState.FOLLOW:
                if (sInput.toLowerCase().match("follow")){
                    sReply="You followed the bloody foorprints into the room where food is prepared. The lights turn out, perhaps with the flashight you would've been less scared. You hear a whistling coming from..something. You hear running water and dishes start to **clink**, I wonder where you should check, perhaps the fridge or the sink?";
                    this.stateCur=GameState.CHECK;
                }else if (sInput.toLowerCase().match("grab")){
                    sReply="As you grabbed the flashlight, you notice letters in the soup spell out WRONG KEY IN SINK. In the kitchen, your flashlight comes in handy as the lights turn out. You hear a whistling from the fridge and water from the sink spout. Do you want to check the fridge or the sink?";
                    this.stateCur=GameState.CHECK;
                }else {
                    sReply="You feel a sudden chill and a poke on your side! Quick! Grab the light or follow the footprints but be prompt with what you decide!";
                }
                break;
                case GameState.CHECK:
                if (sInput.toLowerCase().match("sink")){
                    sReply="You found a key in the sink! And lights turn on bright! You notice the whistliing from the fridge and the stairs on your right. Do you want to check the fridge, or check downstairs?";
                    this.stateCur=GameState.WRONG;
                }else if (sInput.toLowerCase().match("fridge")){
                    sReply="You found a key! Would you like to check downstairs to see if you're lucky?";
                    this.stateCur=GameState.DOWNSTAIRS;
                }
                break;
                case GameState.WRONG:
                if (sInput.toLowerCase().match("downstairs")){
                    sReply="There's a locked door downstairs. But your key isn't working. Should you go to the fridge to see if there's something else lurking?";
                    this.stateCur=GameState.CHECK;
                }else if (sInput.toLowerCase().match("fridge")){
                        sReply="You found a key! You can check the sink if you want, or go downstairs and hope you got lucky!";
                        this.stateCur=GameState.DOWNSTAIRS;
                }
                break;
                case GameState.DOWNSTAIRS:
                if (sInput.toLowerCase().match("downstairs")){
                    sReply="There's a locked door downstairs, your key opens the office dwelling! You see two books to choose from: a book of magic spells or magical book of spelling.";
                    this.stateCur=GameState.SPELL;
                }else{
                    sReply="A witches laughter and a blood curdling scream gives you a great big fright! There might be something useful downstairs, go quickly before you meet her sight!";
                }
                break;
            case GameState.SPELL:
                if(sInput.toLowerCase().match("spells")){
                    sReply = "You grab the book of magical spells, and the room shakes as a secret door opens wide. You have finally found the exit! Now make your escape to the great freedom of outside!"; 
                    this.stateCur=GameState.ESCAPE;  
                }else {
                    sReply="Hmmm.. Nothing happened. It seems as though you've grabbed the wrong book. Try the book of spells.";
                }
                break;
            case GameState.ESCAPE:
                if (sInput.toLowerCase().match("escape")){
                    sReply="Goodbye. Come again if you want.";
                    this.stateCur=GameState.WELCOMING;
                }else{
                    sReply="It seems you didn't choose to escape yet!";
                }
        }
        return(sReply);
    }
}