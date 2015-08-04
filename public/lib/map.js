// Room constructor
var Room = function(id, img, desc, head, btn1, btn2, op1, op2){
  this.id = id;
  this.img = img;
  this.desc = desc;
  this.head = head;
  this.btns = { one: btn1, two: btn2 };
  this.options = [op1, op2]; // Room ids
}

var rm0 = new Room(0, '/img/forest_path.png', 'You find yourself at the beginning of a long, grueling journey that will lead to untold riches and recognition. Do you wish to continue?',
  'Hack Reactor Forest', 'Yes', 'No', 1, 2);

var rm1 = new Room(1, '/img/jsclearing.png', 'As you continue forth, your legs grow tired and your stomach rumbles. You see a strange object glowing off in the distance.',
  'Clear() Your Mind', {one: 'Inspect', two: 'Continue Walking'}, 3, 4);

var rooms = [rm0, rm1];