export interface SkiObj {
    SkiArea: {
        id: number;
        name: string;
        official_website: string;
        geo_lat: number;
        geo_lng: number;
        top_elevation: number | null;
        bottom_elevation: number | null;
        vertical_drop: number | null;
        operating_status: number;
        has_downhill: boolean;
        has_nordic: boolean;
    };
    Region: Array<{
        name: string;
        id: number;
        RegionsSkiArea: {
            id: number;
            ski_area_id: number;
            region_id: number;
            temp_region: number;
            temp_country: number;
        };
    }>;
}
