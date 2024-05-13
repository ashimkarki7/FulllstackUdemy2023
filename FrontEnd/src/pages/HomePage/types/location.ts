export interface Location {
    lat: number;
    lng: number;
}

export interface LocationState {
    payload: Location[];
    error: string | undefined;
    loading: boolean;
}
