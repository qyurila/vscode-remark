import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as workspace from '../../utils/workspace';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('getWorkspaceConfig', async () => {
		const config = await workspace.getWorkspaceConfig();
		assert.notEqual(config, null);
	});
});
