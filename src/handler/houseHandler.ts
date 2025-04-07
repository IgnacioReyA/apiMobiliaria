import { FakeService } from "../db/fake/fakeService";
import { HouseController } from "../controller/houseController";


export class HouseHandler {
    getHouses() {
        const ctrl = new HouseController(new FakeService());
    }
}