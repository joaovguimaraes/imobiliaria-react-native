export class Animal {
  constructor(
    id,
    address,
    type,
    price,
    condominiumPrice,
    rooms,
    bathrooms,
    image,
    occupied
  ) {
    this.id = id;
    this.address = address;
    this.type = type;
    this.price = price;
    this.condominiumPrice = condominiumPrice;
    this.rooms = rooms;
    this.bathrooms = bathrooms;
    this.image = image;
    this.occupied = occupied;
  }

  id;
  address;
  type;
  price;
  condominiumPrice;
  rooms;
  bathrooms;
  image;
  occupied;
}
