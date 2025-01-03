// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { Register } from './register';
import { CommandList } from './common/command';
// import { ToTitle, ToBlock, createSection } from './editor/Line';
// import { Selection } from './editor/Selection';


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Hi, your extension "deco" is now active!');
	// vscode.window.showInformationMessage("function route!");

	// const commends: Command[] = [
	// 	ToTitle,
	// 	ToBlock,
	// 	createSection
	// ];

	console.log(CommandList);

	await Register(context, CommandList);

	// Register();

	// Set the storage path to be used by history files
	// Globals.extensionStoragePath = context.globalStorageUri.fsPath;

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

}

// This method is called when your extension is deactivated
export function deactivate() { }
