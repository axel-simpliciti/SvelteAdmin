import type {
	DataTableHeader,
	DataTableRow
} from 'carbon-components-svelte/types/DataTable/DataTable.svelte';
import type { CrudAction } from '../Crud/actions.ts';
import type { Field } from '../FieldDefinitions/Field.ts';
import type { KeyValueObject } from '../generic_types.ts';

export type Header = DataTableHeader;
export type Headers = Array<Header>;

export type Row = DataTableRow;
export type Rows = Array<Row>;

export function createEmptyRow(action: CrudAction): Row {
	let fields: KeyValueObject = {};

	action.fields.forEach((field: Field<any>) => {
		fields[field.name] = '-';
	});

	return {
		id: 0,
		...fields
	};
}