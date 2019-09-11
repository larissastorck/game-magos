function contain(sprite, container) {

  if (sprite.x > container.width) {
    sprite.x = 0;
  } else if (sprite.x < 0) {
    sprite.x = container.width;
  }
  if (sprite.y > container.height) {
    sprite.y= 0;
  } else if (sprite.y< 0) {
    sprite.y = container.height;
  }



    /*let collision = undefined;
    if (sprite.x < container.x) {
      console.log("left");
      sprite.x = container.x;
      collision = "left";
    }
    //Top
    if (sprite.y < container.y) {
      sprite.y = container.y;
      collision = "top";
    }
    //Right
    if (sprite.x > container.width) {
      sprite.x = sprite.width / 2;
      collision = "right";
    }
    //Bottom
    if (sprite.y + sprite.height > container.height) {
      sprite.y = container.height - sprite.height;
      collision = "bottom";
    }
    //Return the `collision` value
    return collision; */
  }