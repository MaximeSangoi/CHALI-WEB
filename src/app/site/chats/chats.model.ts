export class Chat {
  id: string;
  name: string;
  birthdate: Date;
  knownBirthdate: boolean;
  coat: boolean;
  tatooed: string;
  tatoo: boolean;
  microchip: boolean;
  fiv: string;
  status: boolean;

  constructor(
    id: string,
    name: string,
    birthdate: Date,
    knownBirthdate: boolean,
    coat: boolean,
    tatooed: string,
    tatoo: boolean,
    microchip: boolean,
    fiv: string,
    status: boolean
  ) {
    this.id = id;
    this.name = name;
    this.birthdate = birthdate;
    this.knownBirthdate = knownBirthdate;
    this.coat = coat;
    this.tatooed = tatooed;
    this.tatoo = tatoo;
    this.microchip = microchip;
    this.fiv = fiv;
    this.status = status;
  }
}
