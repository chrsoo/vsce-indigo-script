// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "indigo-script" is now active!');

	// Define custom bindings
	const customBindings = [
		{ label: 'indigo_error(message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_debug(message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_trace(message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_log(message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_log_with_property(message, property)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_send_message(message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_save_blob(file_name, blob_item)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_populate_blob(blob_item)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_enumerate_properties(device_name, property_name)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_enable_blob(device_name, property_name, state)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_change_text_property(device_name, property_name, items)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_change_number_property(device_name, property_name, items)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_change_switch_property(device_name, property_name, items)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_define_text_property(device_name, property_name, property_group, property_label, items, item_defs, state, perm, message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_define_number_property(device_name, property_name, property_group, property_label, items, item_defs, state, perm, message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_define_switch_property(device_name, property_name, property_group, property_label, items, item_defs, state, perm, rule, message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_define_light_property(device_name, property_name, property_group, property_label, items, item_defs, state, message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_update_text_property(device_name, property_name, items, state, message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_update_number_property(device_name, property_name, items, state, message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_update_switch_property(device_name, property_name, items, state, message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_update_light_property(device_name, property_name, items, state, message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_delete_property(device_name, property_name, message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_set_timer(function, delay);', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_cancel_timer(timer);', kind: vscode.CompletionItemKind.Function },

		{ label: 'indigo_on_define_property(device_name, property_name, items, item_defs, state, perm, message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_on_update_property(device_name, property_name, items, state, message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_on_delete_property(device_name, property_name, message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_on_send_message(device_name, message)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_on_enumerate_properties(device_name, property_name)', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_on_change_property(device_name, property_name, items, state)', kind: vscode.CompletionItemKind.Function },
		{ label: 'on_define', kind: vscode.CompletionItemKind.Function },
		{ label: 'on_update', kind: vscode.CompletionItemKind.Function },
		{ label: 'on_delete', kind: vscode.CompletionItemKind.Function },
		{ label: 'on_message', kind: vscode.CompletionItemKind.Function },
		{ label: 'on_enumerate_properties', kind: vscode.CompletionItemKind.Function },
		{ label: 'on_change_property', kind: vscode.CompletionItemKind.Function },
		{ label: 'indigo_devices ["Device Name"]', kind: vscode.CompletionItemKind.Variable },
		{ label: 'indigo_devices ["Imager Agent"]', kind: vscode.CompletionItemKind.Variable },
		{ label: 'indigo_devices ["Mount Agent"]', kind: vscode.CompletionItemKind.Variable },
		{ label: 'indigo_devices ["Guider Agent"]', kind: vscode.CompletionItemKind.Variable },
		{ label: 'indigo_devices ["Configuration Agent"]', kind: vscode.CompletionItemKind.Variable },
		{ label: 'indigo_devices ["Scripting Agent"]', kind: vscode.CompletionItemKind.Variable },
	];

	// Register the completion item provider
	vscode.languages.registerCompletionItemProvider('javascript', {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
			const completionItems: vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> = [];
			customBindings.forEach(binding => {
				completionItems.push(new vscode.CompletionItem(binding.label, binding.kind));
			});
			return completionItems;
		}
	});

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	// const disposable = vscode.commands.registerCommand('indigo-script.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from indigo-script!');
	// });

	// context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
