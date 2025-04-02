export interface Core {
  core_serial: string;
  flight: number;
  land_success: boolean | null;
  landing_intent: boolean;
  landing_type: string | null;
  landing_vehicle: string | null;
}

export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: {
    cores: Core[];
  };
}
 
export interface Links {
  mission_patch: string;
  mission_patch_small: string;
  article_link: string;
  wikipedia: string;
  video_link: string;
}

export interface Launch {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_date_utc: string;
  details: string;
  launch_success: boolean | null;
  launch_site?: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  rocket: Rocket;
  links: Links;
  launch_failure_details?: {
    time: number;
    altitude: number | null;
    reason: string;
  };
}