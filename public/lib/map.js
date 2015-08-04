// Room constructor
var Room = function(id, img, desc, head, btn1, btn2, op1, op2, audio){
  this.id = id;
  this.img = img;
  this.desc = desc;
  this.head = head;
  this.btns = { one: btn1, two: btn2 };
  this.options = [op1, op2]; // Room ids
  this.audio = audio || false; //defaults to false if no argument is passed
}

//--------------------------ROOT ROOM-------------------------------------------------//
var rm0 = new Room(0, '/img/forest_path.png', 'You find yourself at the beginning of a long, grueling journey that will lead to untold riches and recognition. Do you wish to continue?',
  'Hack Reactor Forest', 'Yes', 'No', 1, 2);

//--------------------------DEPTH 1--------------------------------------------------//
var rm1 = new Room(1, '/img/jsclearing.png', 'As you continue forth, your legs grow tired and your stomach rumbles. You see a strange object glowing off in the distance.',
  'Clear() Your Mind','Inspect', 'Continue Walking', 3, 4);

var rm2 = new Room(2, '/img/nggyu.gif', 'DEAL WITH IT', 'DEAL WITH IT', 'Okay, fine', 'nuuuuuuuuuuuuuu', 0, 2);

//-----------------------SUCCESS ROOMS----------------------------------------------//
//Depth 1
var rm3 = new Room(3, '/img/js.png', 'You easily brush off your feelings of apprehension towards the unknown and uncover your most useful tool. Vanilla JS!',
 'A new weapon!', 'Continue', 'Eh, I\'m bored', 5, 2, true);

var rooms = [rm0, rm1, rm2, rm3];