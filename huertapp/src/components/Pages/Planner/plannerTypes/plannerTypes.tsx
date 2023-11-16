export interface IGridCellType {
  background: string;
  plant: string | null;
}

export interface IPlantType {
  id: string;
  name: string;
  url: string;
}

export interface ISizeInputProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
}

export interface IPlantPickerProps {
  setCurrentItem: (value: IPlantType | null) => void;
  isBigScreen: boolean;
}
