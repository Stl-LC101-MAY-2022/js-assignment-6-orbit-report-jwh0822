export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;
	changeColor: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
		this.changeColor = this.isSpaceDebris(this.type)
   }
	
   isSpaceDebris(x: string): boolean {
	if (x ==='Space Debris'){
		return true;
	} else {
		return false;
		}
}

}

// TODO 3a: fix isSpaceDebris check
