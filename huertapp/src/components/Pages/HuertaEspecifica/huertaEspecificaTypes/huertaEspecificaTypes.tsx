export interface IEventType {
  title: string;
  start: Date | null;
  end: Date | null;
}

export interface ICalendarTypes {
  id?: number;
  id_orchard: number;
  title: string;
  start_date: string;
  end_date: string;
}

export interface IEventInfoType {
  id: number;
  id_orchard: number;
  title: string;
  start_date: string;
  end_date: string;
}

export interface IPlantType {
  id?: number;
  id_orchard: number;
  name: string;
  description?: string;
  image?: string;
  start_date: string;
  end_date: string;
}

export interface IPlantListType {
  plantList: IPlantType[];
  setPlantList: (value: IPlantType[]) => void;
}

export interface ICalendarProps {
  allEvents: IEventType[];
  setAllEvents: (value: IEventType[]) => void;
  plantList: any;
}

export interface IAddPlantFormProps {
  plantList: IPlantType[];
  setPlantList: (value: IPlantType[]) => void;
  setNewEvent: (value: IEventType) => void;
}
