import { Http, Responses } from "@/util/http";

interface StoreListParameters {
    searchType: number;
    offset: number;
    lng: number;
    lat: number;
}

export default class Store extends Http {

    data!: Store[];
    id = 0;
    imgUrl = '';
    imgLogoUrl = '';
    name = '';
    description = '';
    location = '';
    distance = 0;
    star = '';
    priceRange = '';
    isBooking = false;
    isWaiting = false;
    isColumn = false;

    public storeList(parameters: {}, funcSuccess: (store: Store) => void) {
        this.fetch('StoreList', parameters, () => {
            funcSuccess(this);
        });
    }
}