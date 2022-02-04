/*---------------------------------------------------------
 * Based on: https://github.com/microsoft/vscode-extension-samples/blob/master/statusbar-sample
 *--------------------------------------------------------*/


import * as vscode from 'vscode';

let leftSidebarToggleBarItem: vscode.StatusBarItem;
let rightSidebarToggleBarItem: vscode.StatusBarItem;

export function activate({ subscriptions }: vscode.ExtensionContext) {
    const leftSidebarToggleId = "toggleSidebars.toggleLeftPanel";
    subscriptions.push(vscode.commands.registerCommand(leftSidebarToggleId, () => {
        // vscode.commands.executeCommand("workbench.action.toggleSidebarVisibility");
    }));
    leftSidebarToggleBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1500);
    leftSidebarToggleBarItem.command = leftSidebarToggleId;
    subscriptions.push(leftSidebarToggleBarItem);

    const rightSidebarToggleId = "toggleSidebars.toggleRightPanel";
    subscriptions.push(vscode.commands.registerCommand(rightSidebarToggleId, () => {
        vscode.commands.executeCommand("workbench.action.toggleAuxiliaryBar");
    }));
    rightSidebarToggleBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1500);
    rightSidebarToggleBarItem.command = rightSidebarToggleId;
    subscriptions.push(rightSidebarToggleBarItem);

    // update status bar item once at start
    updateStatusBarItem();
}

function updateStatusBarItem(): void {
    leftSidebarToggleBarItem.text = `$(three-bars)`;
    leftSidebarToggleBarItem.show();

    rightSidebarToggleBarItem.text = `$(three-bars)`;
    rightSidebarToggleBarItem.show();
}
