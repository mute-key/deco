import * as vscode from 'vscode';

import { LineSelection } from '../editor/Selection';

enum CommandId {
    removeTrailingWhitespaceFromSelection = "removeTrailingWhitespaceFromSelection",
    removeMulitpleEmptyLinesFromSelection = "removeMulitpleEmptyLinesFromSelection",
    removeEmptyLinesFromSelection = "removeEmptyLinesFromSelection",
    removeMultipleWhitespace = "removeMultipleWhitespace",
    cleanUpWhitespace = "cleanUpWhitespace",
    printNowDateTime = "printNowDateTime"
    
    // commentBlock = "commentBlock",
    // addToTitle = "addToTitle",
    // createSection = "createSection",
    // cleanWhiteSpaceLines = "cleanWhiteSpaceLines",
    // removeLine = "removeLine",
    // addDateStamp = "addDateStamp",
    // addTimeStamp = "addTimeStamp",
};

// export type CommandEntry = Record<CommandId, string>

export interface  CommandStruct {
    command: string;
    callback: (...args: any[]) => any
    args?: any;
}


// need two different command group, for line and selection
export const CommandList: {} = (() => {
    let lineSelection = new LineSelection();

    /**
     * prob make it auto iterate the object and funciton bindings
     */

    return { 
        [CommandId.removeTrailingWhitespaceFromSelection] : lineSelection.removeTrailingWhitespaceFromSelection,
        [CommandId.removeMulitpleEmptyLinesFromSelection] : lineSelection.removeMulitpleEmptyLinesFromSelection,
        [CommandId.removeEmptyLinesFromSelection] : lineSelection.removeEmptyLinesFromSelection,
        [CommandId.removeMultipleWhitespace] : lineSelection.removeMultipleWhitespace,
        [CommandId.cleanUpWhitespace] : lineSelection.cleanUpWhitespace,
        [CommandId.printNowDateTime] : lineSelection.printNowDateTime,
        
        // [CommandId.joinAllLines] : lineSelection.joinAllLines,
        // [CommandId.cleanWhiteSpaceLines] : LineSelection.cleanWhiteSpaceLines,
        // [CommandId.removeLine] : LineSelection.removeLine,
    };
})();




// need some kind of command definitions 




// export class Command implements ICommand {
//     private command; 
//     private callback;
//     private args; 

// }

// export class Command implements ICommand {
//     constructor(command: string, callback: (...args: any[]) => any, thisArg?: any ) {
//         return vscode.commands.registerCommand(command, callback);
//         // return this.returnDisposable(command, callback);
//     };

//     // private returnDisposable = (commandName: string, callback: () => {}): vscode.Disposable => {
        
//     // }
// }

// export class Event


