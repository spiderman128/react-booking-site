// Components
import { DataTable, IDataTableProps } from './index';

// Add DataTable component to storybook
export default {
  title: 'DataTable',
  component: DataTable,
};

// Constants
const headCells = [
  {
    dataKey: 'name',
    numeric: false,
    label: 'Name',
  },
  {
    dataKey: 'phone',
    numeric: false,
    label: 'Phone',
  },
  {
    dataKey: 'gender',
    numeric: false,
    label: 'Gender',
  },
  {
    dataKey: 'propertyType',
    numeric: false,
    label: 'Property Type',
  },
  {
    dataKey: 'status',
    numeric: false,
    label: 'Status',
  },
  {
    dataKey: 'date',
    numeric: false,
    label: 'Date',
  },
];

const rowActions = [
  {
    icon: 'document',
    label: 'Details',
    onClick: () => {},
  },
  {
    icon: 'user',
    label: 'Assign Broker',
    onClick: () => {},
  },
  {
    icon: 'add',
    label: 'Create Customer',
    onClick: () => {},
  },
  {
    icon: 'trash',
    label: 'Delete',
    onClick: () => {},
  },
];

const data = [
  {
    name: 'Andreas Haas',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Kerstin Fischer',
    phone: '030-901820',
    gender: 'Female',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Courtney Henry',
    phone: '030-901820',
    gender: 'Female',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Devon Lane',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Kristin Watson',
    phone: '030-901820',
    gender: 'Female',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Brooklyn Simmons',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Ralph Edwards',
    phone: '030-901820',
    gender: 'Female',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Jasob',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'KitKat',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Lollipop',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Marshmallow',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Nougat',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
  {
    name: 'Oreo',
    phone: '030-901820',
    gender: 'Male',
    propertyType: 'House',
    status: 'Assumed',
    date: '12.06.2022',
  },
];

// Default
export const Default = (args: IDataTableProps) => <DataTable {...args} />;
Default.args = {
  data,
  headCells,
  rowActions,
};
