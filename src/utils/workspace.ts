'use strict';

import * as vscode from 'vscode';
import { fileRead } from './fs';

export async function getWorkspaceConfig() {
	const files = await vscode.workspace.findFiles('**/*remarkrc*', '**/node_modules/**');
	console.log('Workspace name', vscode.workspace.name);

	if (files.length === 0) {
		return null;
	}
	if (files[0].fsPath.endsWith('.js')) {
		try {
			return require(files[0].fsPath);
		}
		catch (err) {
			return 'SyntaxError';
		}
	}
	const content = await fileRead(files[0].fsPath);
	try {
		return JSON.parse(content);
	}
	catch (err) {
		return 'SyntaxError';
	}
}
