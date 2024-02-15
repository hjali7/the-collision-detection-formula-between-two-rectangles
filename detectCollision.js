// the collision detection formula between two rectangles

function detectCollision (a , b) {

    return a.x < b.x + b.width &&  //a's top left corner doesn't reach b's top right corner
           a.x + a.width > b.x &&  //a's top right corner passes b's top left corner
           a.y < b.y + b.height && //a's top left corner doesn't reach b's bottom left corner
           a.y + a.height > b.y; // a's bottom left corner passes b's top left corner
}