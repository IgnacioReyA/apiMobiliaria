import {House} from "../../types/db/house"

const FAKE_HOUSES = [
    {
        id: 1,
        price: 100,
        name: "Casa con 1 pisos",
        description: "bla",
        terrainArea: 100,
        constructionArea: 150,
        type: "Rent"
    },
    {
        id: 2,
        price: 200,
        name: "Casa con 2 pisos",
        description: "bla bla",
        terrainArea: 200,
        constructionArea: 250,
        type: "Sell"
    },
    {
        id: 3,
        price: 300,
        name: "Casa con 3 pisos",
        description: "bla bla bla",
        terrainArea: 300,
        constructionArea: 350,
        type: "Rent"
    },
    {
        id: 4,
        price: 400,
        name: "Casa con 4 pisos",
        description: "bla bla bla bla",
        terrainArea: 400,
        constructionArea: 450,
        type: "Sell"
    },
    {
        id: 5,
        price: 500,
        name: "Casa con 5 pisos",
        description: "bla bla bla bla bla",
        terrainArea: 500,
        constructionArea: 550,
        type: "Rent"
    }
]

export class FakeService {
    async getHouses(type: string, minPrice: number, maxPrice: number): Promise<House[]> {
        return FAKE_HOUSES;
    }

    async getHouseById(id: number): Promise<House>{
        return FAKE_HOUSES[id];
    }
}