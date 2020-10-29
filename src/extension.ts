/*---------------------------------------------------------
 * Based on: https://github.com/microsoft/vscode-extension-samples/blob/master/statusbar-sample
 *--------------------------------------------------------*/


import * as vscode from 'vscode';

let toggleSidebarStatusBarItem: vscode.StatusBarItem;

export function activate({ subscriptions }: vscode.ExtensionContext) {

	// register a command that is invoked when the status bar
	// item is selected
	const myCommandId = 'sample.showSelectionCount';
	subscriptions.push(vscode.commands.registerCommand(myCommandId, () => {
		vscode.commands.executeCommand("workbench.action.toggleSidebarVisibility");
	}));

	// create a new status bar item that we can now manage
	toggleSidebarStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1500);
	toggleSidebarStatusBarItem.command = myCommandId;
	subscriptions.push(toggleSidebarStatusBarItem);

	// register some listener that make sure the status bar 
	// item always up-to-date
	subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem));
	subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem));

	// update status bar item once at start
	updateStatusBarItem();
}

function updateStatusBarItem(): void {
	toggleSidebarStatusBarItem.text = `$(three-bars)`;
	toggleSidebarStatusBarItem.show();
}
