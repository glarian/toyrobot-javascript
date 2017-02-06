function runCommand(line) {
  let command = line.split(" ");
  if (command.length > 0) {
    if (command[0] === "PLACE") {
      let placement = command[1].split(",");
      if (placement.length == 3) {
        place(placement[0],placement[1],placement[2]);
      }
    } else if (command[0] === "MOVE" && isPlaced) {
      move();
    } else if (command[0] === "LEFT" && isPlaced) {
      left();
    } else if (command[0] === "RIGHT" && isPlaced) {
      right();
    } else if (command[0] === "REPORT" && isPlaced) {
      output(report());
    }
  }
}

function place(x,y,f) {
  if (x >= 0 && x < 5 && y >= 0 && y < 5) {
    if (f === "NORTH" || f === "SOUTH" || f === "EAST" || f === "WEST") {
      pos_x = x;
      pos_y = y;
      face = f;
      isPlaced = true;
    }
  }
}

function move() {
  let cur_pos_x = pos_x;
  let cur_pos_y = pos_y;

  if (face === "NORTH") cur_pos_y++;
  else if (face === "EAST") cur_pos_x++;
  else if (face === "SOUTH") cur_pos_y--;
  else if (face === "WEST") cur_pos_x--;

  place(cur_pos_x,cur_pos_y,face);
}

function left() {
  let cur_face = face;

  if (face === "NORTH") cur_face = "WEST";
  else if (face === "EAST") cur_face = "NORTH";
  else if (face === "SOUTH") cur_face = "EAST";
  else if (face === "WEST") cur_face = "SOUTH";

  place(pos_x,pos_y,cur_face);
}

function right() {
  let cur_face = face;

  if (face === "NORTH") cur_face = "EAST";
  else if (face === "EAST") cur_face = "SOUTH";
  else if (face === "SOUTH") cur_face = "WEST";
  else if (face === "WEST") cur_face = "NORTH";

  place(pos_x,pos_y,cur_face);
}

function report() {
  let ta_output = $("#ta_output");
  return "Output: " + pos_x + "," + pos_y + "," + face;
}
