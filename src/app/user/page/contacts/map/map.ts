export interface Map {
    lat: number;
    lng: number;
    zoom: number ;
    marker?: Marker;

}
interface Marker {
    lat: number;
    lng: number;
}
