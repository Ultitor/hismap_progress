export interface HistoricalEvent {
  id: string;
  title: string;
  year: number;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  wikipediaUrl?: string;
}