export interface SkiObj {
  SkiArea: SkiAreaObj;
  Region: RegionObj;
}

interface SkiAreaObj {
    id: number;
    name: string;
    official_website: string;
    geo_lat: number;
    geo_lng: number;
    top_elevation: number;
    bottom_elevation: number;
}

interface RegionObj {
    name: string;
    id: number;
    RegionsSkiArea: RegionsSkiArea;
}

interface RegionsSkiArea {
  id: number;
  ski_area_id: number;
  region_id: number;
  temp_region: number;
  temp_country: number;
}
