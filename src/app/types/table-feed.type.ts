export interface CustomProp {
  Group: string;
  Hidden: boolean;
  Name: string;
  Sequence: number;
  Value: string;
}

export interface Venue {
  Address1: string;
  Address2: string;
  City: string;
  Name: string;
  State: string;
  VenueID: number;
  Zip: string;
}

export interface Showing {
  DateTBD: boolean;
  Duration: string;
  EndDate: string;
  ID: number;
  LegacyPurchaseLink: string;
  SalesMessage: string;
  SalesState: string;
  ShortDescription: string;
  ShortDescriptive: string;
  StartDate: string;
  Venue: Venue;
}

export interface TableFeed {
  CurrentShowings: Showing[];
  CustomProperties: CustomProp[];
  DisplayColor: string;
  Duration: string;
  EventImage: string;
  ExternalID: string;
  ExtraHTML: string;
  ID: number;
  InfoLink: string;
  Name: string;
  OrgID: number;
  ShortDescription: string;
  ShortDescriptive1: string;
  ShortDescriptive2: string;
  ThumbImage: string;
  Image?: string;
}
