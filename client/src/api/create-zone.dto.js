export default class CreateZoneDto {

    CreateZoneDto({name, desc, location, address}) {
        this.name = name;
        this.desc = desc;
        this.location = location;
        this.address = address;
    }
}