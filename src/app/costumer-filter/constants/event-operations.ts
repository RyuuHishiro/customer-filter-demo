import { FilterSelect } from '../models/filter-group-select';

const StringEventOperations = [
  { value: 'EQUALS', viewValue: 'equals' },
  { value: 'DOES NOT EQUAL', viewValue: 'does not equal' },
  { value: 'CONTAINS', viewValue: 'contains' },
  { value: 'DOES NOT CONTAIN', viewValue: 'does not contain' },
];
const NumberEventOperations = [
  { value: 'EQUAL TO', viewValue: 'equal to' },
  { value: 'IN BETWEEN', viewValue: 'in between' },
  { value: 'LESS THAN', viewValue: 'less than' },
  { value: 'GREATER THAN', viewValue: 'greater than' },
];

export const EventOperations: FilterSelect[] = [
  {
    name: 'number',
    operations: NumberEventOperations,
  },
  {
    name: 'string',
    operations: StringEventOperations,
  },
];
