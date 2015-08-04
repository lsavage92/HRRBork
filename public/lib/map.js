// Room constructor
var Room = function(id, img, desc, head, btn1, btn2, op1, op2, audio, audioSrc){
  this.id = id;
  this.img = img;
  this.desc = desc;
  this.head = head;
  this.btns = { one: btn1, two: btn2 };
  this.options = [op1, op2]; // Room ids
  this.audio = audio || false; //defaults to false if no argument is passed
  this.audioSrc = audioSrc;
}

//--------------------------ROOT ROOM-------------------------------------------------//
var rm0 = new Room(0, '/img/forest_path.png', 'You find yourself at the beginning of a long, grueling journey that will lead to untold riches and recognition. Do you wish to continue?',
  'Hack Reactor Forest', 'Yes', 'No', 1, 2);

//--------------------------DEPTH 1--------------------------------------------------//
var rm1 = new Room(1, '/img/jsclearing.png', 'As you continue forth, your legs grow tired and your stomach rumbles. You see a strange object glowing off in the distance.',
  'Clear() Your Mind','Inspect', 'Continue Walking', 3, 4);

var rm2 = new Room(2, '/img/nggyu.gif', 'DEAL WITH IT', 'DEAL WITH IT', 'Okay, fine', 'nuuuuuuuuuuuuuu', 0, 2);

//-----------------------SUCCESS ROOM----------------------------------------------//
//Depth 1
var rm3 = new Room(3, '/img/js.png', 'You easily brush off your feelings of apprehension towards the unknown and uncover your most useful tool: Vanilla JS!',
 'A new weapon!', 'Continue', 'Eh, I\'m bored', 5, 2, true, './sound/OOT_Fanfare_Item.wav');

//--------------------------DEPTH 2--------------------------------------------------//
var rm4 = new Room(4, '/img/gibberish.png', 'Upon receiving your first assignment, you realize you know nothing and are forced to mulligan.',
  'I thought Javascript was a coffee brewing method...', 'Retry', 'Quit', 0, 2, true, './sound/Sad_Trombone.mp3');

var rm5 = new Room(5, '/img/small_village.png', 'With your newfound skills ready for battle, you find a small Village for some much needed rest.',
  'Peace at last', 'Rest', 'Continue Adventuring', 6, 7);

//--------------------------DEPTH 3--------------------------------------------------//
var rm6 = new Room(6, '/img/skeleton_sleep.png', 'Once your head hit the pillow, you felt such a calm wash over you that you slept through your alarm... And the next one... And the next one...',
  'RIP at last', 'Retry', 'Quit', 0, 2, true, './sound/Sad_Trombone.mp3');

var rm7 = new Room(7, '/img/gate.png', 'You continue on valiantly to the edge of the Village, reluctantly passing a noisy pub. Upon reaching the edge of town, you notice a gate is blocking your path. In a moment of reflection, you realize you still are quite tired.',
  'Exhausted', 'Go back for a beer', 'Brute force the gate', 8, 9);

//--------------------------DEPTH 4--------------------------------------------------//
var rm8 = new Room(8, '/img/pub_roboschep.png', '"Oi! Come o\'er \'ere and drink!", shouts the robotic man across the room.',
  'A Pub?', 'Join Roboschep for a Beer', 'Exit the pub', 10, 7);

var rm10 = new Room(10, '/img/pub_roboschep_zoom1.png', 'Roboschep informs you that he is shedding manly tears of despair because his beer is too large for him to lift. He says there is something beneath the pub that could help him do the heavy lifting.',
  'Uhhhh...', 'Help Roboschep lift his beer', 'I.. Uh.. Gotta go', 11, 7);

var rm9 = new Room(9, '/img/flower_field_octoadam.png', 'Steping outside the gate you are blinded by the beauty of an unknown creature in a remarkable landscape.',
  'Wh-where am I?', 'Maybe I do want that beer', 'Befriend the creature', 8, 12);

var rm12 = new Room(12, '/img/flower_field_octoadam_zoom1.png', 'Stepping closer to the shimmering creature, he begins to speak. He informs you of a man in dire need of help and he is not too far from here. The creature says he can transport you for free and with magic.',
'I definitely should have gotten that beer', 'How could I say no to... you.', 'Sorry, I have an adventure to be on', 8, 15 )

//---------------------------FAIL ROOM-----------------------------------------------//
var rm15 = new Room(15, '/img/trapdoor.png', 'Angered by your sudden disinterest, Octoadam banishes you to an eternity in a trap door with this guy.',
  'Why would you ignore an octopus with a man\'s head?', 'Retry', 'Quit', 0, 2, true, './sound/Sad_Trombone.mp3');
//--------------------------DEPTH 5--------------------------------------------------//

var rm11 = new Room(11, '/img/dungeon1.png', 'After descending down the winding stairs you find yourself at the entrance to a dungeon.',
  'Can robots even drink beer?', 'Roboschep needs his beer!', 'On second thought...', 13, 14);
//---------------------------FAIL ROOM-----------------------------------------------//
var rm14 = new Room(14, '/img/dungeonDoor.png', 'The door is locked and you were slain by something lurking behind you.',
  'Did you get any liquid courage?', 'Retry', 'Quit', 0, 2, true, './sound/Sad_Trombone.mp3');

//--------------------------DEPTH 5--------------------------------------------------//
var rm13 = new Room(13, '/img/dungeon1enemy.png', 'Startled by the arrival of JQuery, you are unsure how to proceed.',
  'Suddenly, JQuery appears!', 'Ask JQuery kindly for a favor', 'Throw spaghetti at JQuery and hope for the best', 17, 16); //Should switch these rooms at some point to continue with pattern

var rm16 = new Room(16, '/img/dungeon1enemyspaghetti.png', 'It worked! You threw all the spaghetti you had with you at JQuery and now it will help lift Roboscheps beer!',
  'Success!', 'Continue', 'Eh, I\'m bored', 18, 2, true, './sound/OOT_Fanfare_Item.wav');

var rooms = [rm0, rm1, rm2, rm3, rm4, rm5, rm6, rm7, rm8, rm9, rm10, rm11, rm12, rm13, rm14, rm15, rm16];