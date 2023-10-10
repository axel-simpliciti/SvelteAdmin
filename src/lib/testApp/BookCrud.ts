// src/lib/BookCrud.ts
import { type CrudAction, ListAction } from '$lib/admin/Crud/actions.ts';
import type { KeyValueObject } from '$lib/admin/generic_types.ts';
import { CrudDefinition } from '$lib/admin/Crud/definition.ts';
import { CallbackStateProcessor } from '$lib/admin/State/Processor.ts';
import { CallbackStateProvider } from '$lib/admin/State/Provider.ts';
import { TextField } from '$lib/admin/FieldDefinitions/Text.ts';
import { TextareaField } from '$lib/admin/FieldDefinitions/Textarea.ts';
import { UrlAction } from '$lib/admin/actions.ts';
import { Pen } from 'carbon-icons-svelte';

function process(data: any, operation: CrudAction, requestParameters: KeyValueObject) {
	console.info('TODO: process new, edit or delete actions', { data, operation, requestParameters });
}

function provide(operation: CrudAction, requestParameters: KeyValueObject): Array<any> {
	console.info('TODO: return actual data', { operation, requestParameters });

	// Sample data.
	return [
		{ id: 1, title: 'The Hobbit', description: 'Something' },
		{ id: 2, title: 'Dune', description: 'Something else' }
	];
}

const fields = [
	new TextField('title', 'Title', { placeholder: "Enter the book's title" }),
	new TextareaField('description', 'description', {
		placeholder: "Enter the book's descrption",
		help: "Please don't make a summary of the book, remember to not spoil your readers!"
	})
];

const actions = [new UrlAction('Edit', Pen, '/admin/book/edit/:id')];

export const bookCrud = new CrudDefinition('books', {
	label: { singular: 'Book', plural: 'Books' },
	actions: [new ListAction(fields, actions)],
	stateProcessor: new CallbackStateProcessor(process),
	stateProvider: new CallbackStateProvider(provide)
});