// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "focus-on-click.focus",
    function () {
      const activeEditor = vscode.window.activeTextEditor;

      if (activeEditor) {
        vscode.commands.executeCommand(
          "workbench.files.action.showActiveFileInExplorer"
        );
      } else {
        vscode.window.showInformationMessage("No active file to focus");
      }
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
