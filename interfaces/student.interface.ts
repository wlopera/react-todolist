export interface Column {
  header: string;
  accessor: string;
  show: boolean;
}

export interface Row {
  id: string;
  name: string;
  course: string;
  gender: string;
  language: string;
}

export interface Action {
  image: string;
  handleClick: (data: Row) => void;
  style: string;
}

export interface group {
  text: string;
  option: string;
}

export interface option {
  key: string;
  value: string;
}
