"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);

// src/register.ts
var vscode6 = __toESM(require("vscode"));

// package.json
var package_default = {
  name: "landle",
  publisher: "mutekey",
  displayName: "landle",
  description: "landle",
  version: "0.9.206",
  repository: {
    type: "git",
    url: "https://github.com/mute-key/landle"
  },
  content: {
    baseContentUrl: "https://github.com/mute-key/landle/blob/master/",
    baseImagesUrl: "https://github.com/mute-key/landle/raw/master/"
  },
  engines: {
    vscode: "^1.96.0"
  },
  categories: [
    "Other"
  ],
  activationEvents: [
    "onStartupFinished"
  ],
  main: "./dist/extension.js",
  extensionKind: ["ui", "workspace"],
  contributes: {
    commands: [
      {
        command: "landle.removeTrailingWhitespaceFromSelection",
        title: "Remove Trailing Whitespace From Selection"
      },
      {
        command: "landle.removeMulitpleEmptyLinesFromSelection",
        title: "Remove Mulitple Empty Lines From Selection"
      },
      {
        command: "landle.removeEmptyLinesFromSelection",
        title: "Remove Empty Lines From Selection"
      },
      {
        command: "landle.removeMultipleWhitespaceFromSelection",
        title: "Remove Multiple Whitespace From Selection"
      },
      {
        command: "landle.removeCommentedTextFromSelection",
        title: "Remove Commented Text From Selection"
      },
      {
        command: "landle.removeDuplicateLineFromSelection",
        title: "Remove Duplicate Line From Selection"
      },
      {
        command: "landle.printNowDateTimeOnSelection",
        title: "Print Now DateTime On Selection"
      },
      {
        command: "landle.cleanUBlockCommentCommand",
        title: "clean-up Block Comment From Selection"
      },
      {
        command: "landle.blockCommentWordCountJustifyAlign",
        title: "clean-up Block Comment From Selection"
      },
      {
        command: "landle.cleanUpDocumentCommand",
        title: "Clean-up Whitespace From Selection"
      },
      {
        command: "landle.cleanUpCodeCommand",
        title: "Clean-up Code From Selection"
      }
    ],
    keybindings: [
      {
        command: "landle.removeTrailingWhitespaceFromSelection",
        key: "ctrl+alt+w"
      },
      {
        command: "landle.removeMulitpleEmptyLinesFromSelection",
        key: "ctrl+alt+m"
      },
      {
        command: "landle.removeEmptyLinesFromSelection",
        key: "ctrl+alt+e"
      },
      {
        command: "landle.removeMultipleWhitespaceFromSelection",
        key: "ctrl+alt+space"
      },
      {
        command: "landle.removeCommentedTextFromSelection",
        key: "ctrl+alt+/"
      },
      {
        command: "landle.removeDuplicateLineFromSelection",
        key: "ctrl+alt+d"
      },
      {
        command: "landle.printNowDateTimeOnSelection",
        key: "ctrl+alt+n"
      },
      {
        command: "landle.blockCommentWordCountJustifyAlign",
        key: "ctrl+alt+a"
      },
      {
        command: "landle.cleanUBlockCommentCommand",
        key: "ctrl+alt+b"
      },
      {
        command: "landle.cleanUpDocumentCommand",
        key: "ctrl+alt+c"
      },
      {
        command: "landle.cleanUpCodeCommand",
        key: "ctrl+alt+x"
      }
    ],
    configuration: {
      title: "Landle Settings",
      properties: {
        "landle.addExtraLineAtEndOnBlockComment": {
          type: "boolean",
          default: true,
          description: "To add extra empty block comment line at the block ends"
        },
        "landle.deleteCommentAlsoDeleteBlockComment": {
          type: "boolean",
          default: true,
          description: "Enable delete comment command also delete block-comments"
        },
        "landle.blockCommentWordCountJustifyAlign": {
          type: "boolean",
          default: true,
          description: "Enable delete comment command also delete block-comments"
        },
        "landle.blockCommentCharacterBoundaryBaseLength": {
          type: "number",
          default: 70,
          description: "Block-comment auto length configuration for base length"
        },
        "landle.blockCommentCharacterBoundaryTolanceLength": {
          type: "number",
          default: 5,
          description: "Block-comment auto length configurations for tolance length"
        }
      }
    }
  },
  scripts: {
    "vscode:prepublish": "pnpm run package",
    compile: "pnpm run check-types && pnpm run lint && node esbuild.js",
    watch: "npm-run-all -p watch:*",
    "watch:esbuild": "node esbuild.js --watch",
    "watch:tsc": "tsc --noEmit --watch --project tsconfig.json",
    package: "pnpm run check-types && pnpm run lint && node esbuild.js --production",
    "compile-tests": "tsc -p . --outDir out",
    "watch-tests": "tsc -p . -w --outDir out",
    pretest: "pnpm run compile-tests && pnpm run compile && pnpm run lint",
    "check-types": "tsc --noEmit",
    lint: "eslint src",
    test: "vscode-test"
  },
  devDependencies: {
    "@types/vscode": "^1.96.0",
    "@types/mocha": "^10.0.10",
    "@types/node": "20.x",
    "@typescript-eslint/eslint-plugin": "^8.17.0",
    "@typescript-eslint/parser": "^8.17.0",
    eslint: "^9.16.0",
    esbuild: "^0.24.0",
    "npm-run-all": "^4.1.5",
    typescript: "^5.7.2",
    "@vscode/test-cli": "^0.0.10",
    "@vscode/test-electron": "^2.4.1"
  }
};

// src/editor/ActiveEditor.ts
var vscode2 = __toESM(require("vscode"));

// src/editor/Line.ts
var vscode = __toESM(require("vscode"));
var LineType;
((LineType2) => {
  let LineEditType;
  ((LineEditType2) => {
    LineEditType2[LineEditType2["APPEND"] = 1] = "APPEND";
    LineEditType2[LineEditType2["PREPEND"] = 2] = "PREPEND";
    LineEditType2[LineEditType2["REPLACE"] = 4] = "REPLACE";
    LineEditType2[LineEditType2["CLEAR"] = 8] = "CLEAR";
    LineEditType2[LineEditType2["DELETE"] = 16] = "DELETE";
  })(LineEditType = LineType2.LineEditType || (LineType2.LineEditType = {}));
  ;
  let LineEditBlockPriority;
  ((LineEditBlockPriority2) => {
    LineEditBlockPriority2[LineEditBlockPriority2["UNSET"] = 0] = "UNSET";
    LineEditBlockPriority2[LineEditBlockPriority2["LOW"] = 1] = "LOW";
    LineEditBlockPriority2[LineEditBlockPriority2["MID"] = 2] = "MID";
    LineEditBlockPriority2[LineEditBlockPriority2["HIGH"] = 3] = "HIGH";
    LineEditBlockPriority2[LineEditBlockPriority2["VERYHIGH"] = 4] = "VERYHIGH";
  })(LineEditBlockPriority = LineType2.LineEditBlockPriority || (LineType2.LineEditBlockPriority = {}));
})(LineType || (LineType = {}));
var Line = class {
  doc;
  editor;
  constructor() {
    this.editor = vscode.window.activeTextEditor;
    if (this.editor) {
      this.doc = this.editor.document;
    }
  }
  // =============================================================================
  // > PRIVATE FUNCTIONS:
  // =============================================================================
  /**
   * unused. for future reference.
   *
   * @param range unused
   * @returns unused
   * 
   */
  #getLineNumbersFromRange = (range) => {
    const startLine = range.start.line;
    const endLine = range.end.line;
    return { startLine, endLine };
  };
  /**
   * unused. staple for future reference.
   * 
   * @param range unused
   * @returns unused
   * 
   */
  #editLineBindOnCondition = (range, callback, cond) => {
    return cond ? {
      ...callback.func(this.lineFullRange(range)),
      type: callback.type
    } : void 0;
  };
  /**
   * this private function is a wrap and shape the return object for 
   * each callback for a line. the function will take current range with 
   * callback and execute to get the information how to edit the line, 
   * which described in object with type of LineEditInfo. this is where 
   * the default blocking value will be set to block additional edit 
   * on line; default for blocking the edit is true, and it is false 
   * if it is not defined in callback object. 
   *        
   * this means that only a function with block:true will be executed
   * and every other callbacks will be drop for the further. 
   * 
   * @param currntRange
   * @param fn
   * @param _lineEdit_
   * @returns LineType.LineEditInfo | undefined
   * 
   */
  #editedLineInfo = (currntRange, fn) => {
    const editInfo = fn.func(currntRange);
    if (editInfo) {
      if (fn.block || editInfo.block) {
        return {
          range: editInfo.range,
          string: editInfo?.string,
          type: editInfo.type ? editInfo.type : fn.type,
          block: {
            priority: editInfo.block?.priority ? editInfo.block?.priority : fn.block?.priority,
            lineSkip: editInfo.block?.lineSkip
          }
        };
      } else {
        return {
          ...editInfo,
          type: editInfo.type ? editInfo.type : fn.type
        };
      }
    }
  };
  /**
   * this is the mian loop to iterate the callbacks that are defined 
   * from command class. there is a object key named block. when the 
   * property block is true, it will drop all the added edit, and assign
   * itself and stops further iteration to prevent no more changes to 
   * be applied to when the for loop is finished, it will be stacked 
   * into _line_edit_ 
   * 
   * this iteration could well have been done in array.reduce but it 
   * does unnecessary exection in the iteartion. so thats why it is for 
   * loop. 
   *  
   * @param range
   * @param callback
   * @returns
   * 
   */
  #callbackIteration = (range, callback) => {
    let currentLineEdit = [];
    let priority = 0 /* UNSET */;
    let blockFlag = false;
    for (const fn of callback) {
      const result = this.#editedLineInfo(range, fn);
      if (result) {
        if (result.block) {
          if (result.block.priority > priority) {
            currentLineEdit = [result];
            priority = result.block.priority;
            blockFlag = true;
          }
        } else if (!blockFlag) {
          currentLineEdit.push(result);
        }
      }
    }
    return currentLineEdit;
  };
  /**
   * this funciton will iterate each line and stack the line edit object.
   * iteration will continue unitl the current line number is less than 
   * less than line number of the each selection. the range at this point 
   * of will represent a single range and not entire document. callback 
   * will be a list of callbacks to check/apply to each line. _lineEdit_ 
   * variable are being used as a references so no direct assignement 
   * becuase the is what this function will return upon the end of the 
   * iteration. 
   *       
   * there is a for loop that will iterate each every callback. the problem 
   * with js array api is it lacks handling the undefined value being 
   * in api functions rather, you have to chain them. using array api 
   * in object (becuase it is what it needs to iterate on), the type 
   * mismatch forces to return either a typed object or undefined becasuse 
   * the will have a return type. this means the reseult of the iteration 
   * will contain undefiend item if callback returns undefined and it 
   * makes to iterate twice to filter them for each every line. further 
   * explanation continues 
   *         
   * @param range
   * @param callback
   * @param currentLineNumber
   * @param _lineEdit_
   * @returns IterateLineType[]
   * 
   */
  #lineIteration = (range, callback, currentLineNumber, _lineEdit_, lineSkip) => {
    lineSkip = lineSkip ?? /* @__PURE__ */ new Set();
    while (currentLineNumber <= range.end.line) {
      if (lineSkip.has(currentLineNumber)) {
        currentLineNumber++;
        continue;
      }
      const currentLineEdit = this.#callbackIteration(this.lineFullRange(currentLineNumber), callback);
      if (currentLineEdit.length > 0) {
        if (currentLineEdit[0].block) {
          if (currentLineEdit[0].block.lineSkip) {
            currentLineEdit[0].block.lineSkip.forEach((line) => lineSkip.add(line));
          }
        }
        _lineEdit_.push(...currentLineEdit);
      }
      currentLineNumber++;
    }
    return _lineEdit_;
  };
  // =============================================================================
  // > PROTECTED FUNCTIONS:
  // =============================================================================
  /**
   * get EOL of current document set
   *
   * @returns
   * 
   */
  getEndofLine = () => this.editor?.document.eol === vscode.EndOfLine.CRLF ? "\r\n" : "\n";
  /**
   * get text as string from range
   *
   * @param range target range
   * @returns text as string
   * 
   */
  getText = (range) => {
    return this.doc.getText(range);
  };
  /**
   * get TextLine object from range or from line number.
   * 
   * @param range target range
   * @returns TextLine object of range or line.
   * 
   */
  getTextLineFromRange = (range, lineDelta = 0) => {
    if (typeof range === "number") {
      if (range + lineDelta >= this.doc.lineCount) {
        return this.doc.lineAt(range);
      }
      return this.doc.lineAt(range + lineDelta);
    }
    if (range.start.line + lineDelta < 0) {
      return this.doc.lineAt(range.start.line);
    }
    if (this.doc.lineCount > range.start.line + lineDelta) {
      return this.doc.lineAt(range.start.line + lineDelta);
    }
    return this.doc.lineAt(range.start.line);
  };
  /**
   * get the range of entire line including EOL.
   *
   * @param range target range
   * @returns
   * 
   */
  lineFullRangeWithEOL = (range) => {
    return this.getTextLineFromRange(range).rangeIncludingLineBreak;
  };
  /**
   * create new range with line number, starting position and end position
   *
   * @param lineNuber line number of new range object
   * @param startPosition starting position of range
   * @param endPosition end position of range
   * @returns
   * 
   */
  newRangeZeroBased = (lineNuber, startPosition, endPosition) => {
    return new vscode.Range(
      new vscode.Position(lineNuber, startPosition),
      new vscode.Position(lineNuber, endPosition)
    );
  };
  iterateNextLine = (range, lineCondition, extraBreakCallback, trueConditionCallback) => {
    let lineNumber = range.start.line;
    let newRange = void 0;
    let newTextLine;
    let condition = true;
    const lineSkip = [];
    while (lineNumber < this.doc.lineCount) {
      newTextLine = this.getTextLineFromRange(lineNumber);
      if (typeof lineCondition === "function") {
        condition = lineCondition(newTextLine.text);
      } else if (typeof lineCondition === "string") {
        condition = newTextLine[lineCondition];
      }
      if (extraBreakCallback) {
        if (extraBreakCallback(newTextLine.text)) {
          break;
        }
      }
      if (condition) {
        if (trueConditionCallback) {
          trueConditionCallback(newTextLine);
        }
        newRange = newTextLine.range;
        lineSkip.push(lineNumber);
        lineNumber++;
      } else {
        break;
      }
    }
    ;
    if (newRange) {
      return {
        lineNumber,
        lineSkip
      };
    }
  };
  // =============================================================================
  // > PUBLIC FUNCTIONS:
  // =============================================================================
  /**
   * get the range of line with any characters including whitespaces.
   *
   * @param range vscode.Range | number.
   * @returns first line of the range or whole line of the the line number.
   * 
   */
  lineFullRange = (range) => {
    if (typeof range === "number") {
      return this.doc?.lineAt(range).range;
    }
    return this.doc?.lineAt(range.start.line).range;
  };
  /**
   * take range as a single selection that could be a single line, empty
   * (cursor only) or mulitple lines. the callback will be defined in
   * Command.ts. this function will return either a single LineEditInfo
   * or array of them to schedule the document edit. if the selection
   * is either of empty (whitespaces only) or a single line, the range
   * should be the whole line.
   * 
   * @param range
   * @param callback
   * @returns
   * 
   */
  prepareLines = (range, callback) => {
    const targetLine = range.start.line;
    if (range.isEmpty || range.isSingleLine) {
      return this.#callbackIteration(this.lineFullRange(targetLine), callback);
    }
    return this.#lineIteration(
      range,
      callback,
      targetLine,
      []
    );
  };
  /**
   * @returns
   * 
   */
  setCurrentDocument = () => {
    this.editor = vscode.window.activeTextEditor;
    if (this.editor) {
      this.doc = this.editor.document;
    }
  };
};

// src/editor/ActiveEditor.ts
var ActiveEditor = class {
  // unused. for future reference.
  #editorText;
  #editor;
  #lineHandler;
  constructor() {
    this.#editor = vscode2.window.activeTextEditor;
    this.#documentSnapshot();
  }
  /**
   * get current active text editor
   * @returns
   * 
   */
  #setActiveEditor = () => {
    this.#editor = vscode2.window.activeTextEditor;
    this.#lineHandler.setCurrentDocument();
    if (!this.#editor) {
      return;
    }
  };
  /**
   * reset cursor position as well as the selection.
   * 
   */
  #selectionReset = () => {
    if (this.#editor) {
      const range = this.#editor.selections[0];
      this.#editor.selection = new vscode2.Selection(
        new vscode2.Position(range.start.line, 0),
        new vscode2.Position(range.start.line, 0)
      );
    }
  };
  /**
   * force selection range to cover entire document.
   * 
   */
  #selectionEntireDocument = () => {
    if (this.#editor) {
      this.#editor.selection = new vscode2.Selection(
        new vscode2.Position(0, 0),
        new vscode2.Position(this.#editor.document.lineCount - 1, 0)
      );
    }
  };
  /**
   * function that store current document if no arugment is supplied.
   * if arguement supplied in function call; it compares last cached
   * document with argument and comparing if the document has been
   * modified.
   * 
   * @param editorText
   * @returns boolean
   * - true when no argument supplied indicate the editor has been cached.
   * - true when argument supplied indicate document has not been modified.
   * - false when arguement supplied indiciate document has been modified.
   * 
   */
  #documentSnapshot = (editorText = void 0) => {
    if (this.#editor) {
      if (editorText === void 0) {
        if (editorText !== this.#editorText) {
          this.#editorText = this.#editor.document.getText();
        }
        return true;
      } else {
        return editorText === this.#editorText;
      }
    }
    return false;
  };
  /**
   * this function will perform edit with it's given range with string.
   * 
   * @param edit :LineType.LineEditType will have the;
   * - range
   * - type
   * - string
   * @param editBuilder as it's type.
   * 
   */
  #editSwitch = (edit, editBuilder) => {
    if (edit.type) {
      if (edit.type & LineType.LineEditType.DELETE) {
        editBuilder.delete(edit.range);
      }
      if (edit.type & LineType.LineEditType.CLEAR) {
        editBuilder.delete(this.#lineHandler.lineFullRange(edit.range));
      }
      if (edit.type & LineType.LineEditType.APPEND) {
        editBuilder.insert(edit.range.start, edit.string ?? "");
      }
      if (edit.type & LineType.LineEditType.REPLACE) {
        editBuilder.replace(edit.range, edit.string ?? "");
      }
      if (edit.type & LineType.LineEditType.PREPEND) {
      }
    }
    ;
  };
  // =============================================================================
  // > PUBLIC FUNCTIONS:
  // =============================================================================
  /**
   * returns object literal of class linHandler with it's method.
   * @return private instance of lineHandler
   * 
   */
  setLineHandler = (lineHandler) => {
    this.#lineHandler = lineHandler;
  };
  /**
   * it picks up current editor then, will iterate for each selection range in the
   * curernt open editor, and stack the callback function references.
   * each selection could be either; empty or singleline or multiple lines but
   * they will be handled in the Line class.
   * 
   * it could have not started to ieterate if the selection is not a multiple line,
   * however then it more conditions need to be checked in this class function.
   * beside, if choose not to iterate, means, will not use array, the arugment and
   * it's type will not be an array or either explicitly use array with a single entry.
   * that will end up line handling to either recieve array or an single callback
   * object which is inconsistance. plus, it is better to handle at one execution point
   * and that would be not here.
   * 
   * @param callback line edit function and there could be more than one edit required.
   * @param includeCursorLine unused. for future reference.
   * 
   */
  prepareEdit = (callback, selectWholeEditor) => {
    if (selectWholeEditor) {
      this.#selectionEntireDocument();
    }
    this.#setActiveEditor();
    const editSchedule = [];
    if (this.#editor) {
      const selections = this.#editor.selections;
      selections.forEach((range) => {
        editSchedule.push(...this.#lineHandler.prepareLines(range, callback));
      });
      this.editInRange(editSchedule);
    }
  };
  /**
   * performes aysnc edit and aplit it all at once they are complete.
   * 
   * @param lineCallback collecion of edits for the document how and where to edit.
   * 
   */
  editInRange = async (lineCallback) => {
    try {
      if (!this.#documentSnapshot(vscode2.window.activeTextEditor?.document.getText())) {
        const success = await this.#editor?.edit((editBuilder) => {
          lineCallback.forEach((edit) => this.#editSwitch(edit, editBuilder));
        });
        if (success) {
          this.#selectionReset();
          this.#documentSnapshot();
          console.log("Edit applied successfully!");
        } else {
          console.log("Failed to apply edit.");
        }
      } else {
        console.log("Duplicate edit entry");
      }
    } catch (err) {
      console.log("Error applying edit:", err);
    }
  };
};

// src/editor/LineHandler.ts
var vscode5 = __toESM(require("vscode"));

// src/common/LineUtil.ts
var vscode3 = __toESM(require("vscode"));
var LineUtil = class {
  constructor() {
  }
  static removeTrailingWhiteSpaceString = (line) => line.replace(/[ \t]+$/, " ");
  static findTrailingWhiteSpaceString = (line) => line.search(/\s+$/s);
  static findNonWhitespaceIndex = (line) => line.search(/\S/g);
  static findReverseNonWhitespaceIndex = (line) => line.search(/\S(?=\s*$)/g);
  static removeMultipleWhiteSpaceString = (line) => line.replace(/\s\s+/g, " ");
  static findMultipleWhiteSpaceString = (line) => line.search(/(?<=\S)\s+\s(?=\S)/) !== -1;
  static isLineCommented = (line) => line.search(/^\s*\/\//g) !== -1;
  static isEmptyBlockComment = (line) => line.search(/^\s*\*\s*$/s) !== -1;
  static isBlockComment = (line) => line.search(/^\s*\*+\s+\S+/s) !== -1;
  static isBlockCommentStartingLine = (line) => line.search(/^\s*\/.*\s*$/) !== -1;
  static isBlockCommentEndingLine = (line) => line.search(/^\s*\*\//) !== -1;
  static isJSdocTag = (line) => line.search(/^\s*\*?\s*\@.*/s) !== -1;
  static cleanBlockComment = (line) => line.replace(/(?<=\*).*/, "");
  static getlineCommentIndex = (line) => line.indexOf("//");
  static removeLineComment = (line) => line.substring(0, line.indexOf("//"));
  static pushMessage = (message) => {
    return vscode3.window.showInformationMessage(message);
  };
  static splitStringOn(slicable, ...indices) {
    return [0, ...indices].map((n, i, m) => slicable.slice(n, m[i + 1]));
  }
  static getNowDateTimeStamp = /* @__PURE__ */ (() => ({
    custom: () => {
      function formatDate(date) {
        const options = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        };
        const locale = Intl.DateTimeFormat().resolvedOptions().locale;
        const formatter = new Intl.DateTimeFormat(locale, options);
        const parts = formatter.formatToParts(date);
        let year = "", month = "", day = "", hour = "", minute = "", ampm = "";
        parts.forEach((part) => {
          switch (part.type) {
            case "year":
              year = part.value;
              break;
            case "month":
              month = part.value;
              break;
            case "day":
              day = part.value;
              break;
            case "hour":
              hour = part.value;
              break;
            case "minute":
              minute = part.value;
              break;
            case "dayPeriod":
              ampm = part.value.toUpperCase();
              break;
          }
        });
        return `${year}-${month}-${day} (${hour}:${minute} ${ampm})`;
      }
      const currentDate = /* @__PURE__ */ new Date();
      return formatDate(currentDate);
    },
    locale: () => (/* @__PURE__ */ new Date()).toLocaleString(),
    iso: () => (/* @__PURE__ */ new Date()).toISOString()
  }))();
};

// src/common/config.ts
var vscode4 = __toESM(require("vscode"));
var config = vscode4.workspace.getConfiguration(package_default.name);
var addExtraLineAtEndOnBlockComment = config.get("addExtraLineAtEndOnBlockComment", true);
var deleteCommentAlsoDeleteBlockComment = config.get("deleteCommentAlsoDeleteBlockComment", true);
var blockCommentWordCountAutoLengthAlign = config.get("blockCommentWordCountAutoLengthAlign", true);
var BaseLength = config.get("blockCommentCharacterBoundaryBaseLength", 70);
var ToleanceLength = config.get("blockCommentCharacterBoundaryTolanceLength", 5);

// src/editor/LineHandler.ts
var LineHandler = class extends Line {
  constructor() {
    super();
  }
  /**
   * check if the document is starting
   * 
   * @param range
   * @returns
   * 
   */
  removeDocumentStartingEmptyLine = (range) => {
    let lineNumber = range.start.line;
    if (lineNumber === 0) {
      const lineIteration = this.iterateNextLine(range, "isEmptyOrWhitespace");
      if (lineIteration) {
        return {
          range: new vscode5.Range(
            new vscode5.Position(0, 0),
            new vscode5.Position(lineIteration.lineNumber, 0)
          ),
          block: {
            lineSkip: lineIteration.lineSkip,
            priority: LineType.LineEditBlockPriority.HIGH
          }
        };
      }
    }
    return;
  };
  /**
   * remove trailing whitespace lines from range if there is non-whitespace-character present.
   * 
   * @param range target range
   * @returns object descripting where/how to edit the line or undefined if no condition is met.
   * 
   */
  removeTrailingWhiteSpace = (range) => {
    const textline = this.getTextLineFromRange(range);
    let whitespacePos = LineUtil.findTrailingWhiteSpaceString(textline.text);
    if (LineUtil.isEmptyBlockComment(textline.text)) {
      whitespacePos += 1;
    }
    if (whitespacePos > 0) {
      const textLineLength = textline.text.length;
      return {
        range: this.newRangeZeroBased(range.start.line, whitespacePos, textLineLength)
      };
    }
    return;
  };
  /**
   * remove continous whitespaces that are longer than 1 from line when there is non-whitespace
   * -character present in line. this will ignore indentation and edtiing range will start from
   * fisrt non whitespace character in the line. this funciton will keep the pre-edit range
   * to overwrite with whitespaces otherwise pre-edit characters will be left in the line
   * otherwise this callback would need to perform 2 edit to achieve removing the whitespaces in
   * delta bigger than 1. resizing range will only affact to target range but not out or range.
   * 
   * @param range target range
   * @returns object descripting where/how to edit the line or undefined if no condition is met.
   * 
   */
  removeMultipleWhitespace = (range) => {
    const lineText = this.getText(range);
    if (LineUtil.findMultipleWhiteSpaceString(lineText) && !this.getTextLineFromRange(range).isEmptyOrWhitespace) {
      const newLineText = LineUtil.removeMultipleWhiteSpaceString(lineText);
      const startPos = this.getTextLineFromRange(range).firstNonWhitespaceCharacterIndex;
      const endPos = LineUtil.findReverseNonWhitespaceIndex(lineText);
      return {
        range: this.newRangeZeroBased(range.start.line, startPos, endPos + 1),
        string: newLineText.padEnd(endPos, " ").trim()
      };
    }
    return;
  };
  /**
   * check if the current cursor or selected range is empty line and next.
   * if both current and next is emtpy, remove current line.
   * 
   * @param range target range
   * @returns object descripting where/how to edit the line or undefined if no condition is met.
   * 
   */
  removeMulitpleEmptyLine = (range) => {
    const currentLine = this.getTextLineFromRange(range).isEmptyOrWhitespace;
    const nextLine = this.getTextLineFromRange(range, 1).isEmptyOrWhitespace;
    if (currentLine && nextLine) {
      return {
        range: this.lineFullRangeWithEOL(range)
      };
    }
    return;
  };
  /**
   * remove line if the line is commented
   * 
   * @param range target range
   * @returns object descripting where/how to edit the line or undefined if no condition is met.
   * 
   */
  removeCommentedLine = (range) => {
    const lineText = this.getText(range);
    const commentIndex = LineUtil.getlineCommentIndex(lineText);
    if (LineUtil.isLineCommented(lineText)) {
      return {
        range: this.lineFullRangeWithEOL(range)
      };
    } else if (commentIndex !== -1) {
      return {
        range: this.newRangeZeroBased(range.start.line, commentIndex - 1, lineText.length)
      };
    }
    return;
  };
  /**
   * remove line if the line is empty without characters.
   * 
   * @param range target range
   * @returns object descripting where/how to edit the line or undefined if no condition is met.
   * 
   */
  removeEmptyLine = (range) => {
    const currentLine = this.getTextLineFromRange(range).isEmptyOrWhitespace;
    if (currentLine) {
      return {
        range: this.lineFullRangeWithEOL(range)
      };
    }
    return;
  };
  /**
   * check if the current cursor or selected range is empty line and next.
   * if both current and next is emtpy, remove current line.
   * 
   * @param range target range
   * @returns object descripting where/how to edit the line or undefined if no condition is met.
   * 
   */
  removeDuplicateLine = (range) => {
    const currentLine = this.getTextLineFromRange(range);
    const nextLine = this.getTextLineFromRange(range, 1);
    if (currentLine.text === nextLine.text) {
      return {
        range: this.lineFullRangeWithEOL(range)
      };
    }
    return;
  };
  /**
   * remove empty block comment line if the previous line is block comment start
   * 
   * @param range
   * @returns
   * 
   */
  removeEmptyBlockCommentLineOnStart = (range) => {
    const currentLine = this.getTextLineFromRange(range);
    const beforeLine = this.getTextLineFromRange(range, -1);
    const blockCommentStart = LineUtil.isBlockCommentStartingLine(beforeLine.text);
    if (blockCommentStart && LineUtil.isEmptyBlockComment(currentLine.text)) {
      const lineIteration = this.iterateNextLine(range, LineUtil.isEmptyBlockComment);
      if (lineIteration) {
        return {
          range: new vscode5.Range(
            new vscode5.Position(range.start.line, 0),
            new vscode5.Position(lineIteration.lineNumber, 0)
          ),
          block: {
            priority: LineType.LineEditBlockPriority.MID,
            lineSkip: lineIteration.lineSkip
          }
        };
      }
    }
    return;
  };
  /**
   * remove current empty block comment line if next line is also
   * empty block comment line.
   * 
   * @param range
   * @returns
   * 
   */
  removeMultipleEmptyBlockCommentLine = (range) => {
    const currentLine = this.getTextLineFromRange(range);
    const nextLine = this.getTextLineFromRange(range, 1);
    const nextLineIsBlockCommend = LineUtil.isEmptyBlockComment(nextLine.text);
    const LineIsBlockCommend = LineUtil.isEmptyBlockComment(currentLine.text);
    const beforeLine = this.getTextLineFromRange(range, -1);
    const blockCommentStart = LineUtil.isBlockCommentStartingLine(beforeLine.text);
    if (LineIsBlockCommend && nextLineIsBlockCommend && !blockCommentStart) {
      return {
        range: this.lineFullRangeWithEOL(range)
      };
    }
    return;
  };
  /**
   * insert empty block comment line if next line is block comment end
   * 
   * @param range
   * @returns
   * 
   */
  insertEmptyBlockCommentLineOnEnd = (range) => {
    const EOL = this.getEndofLine();
    const currentLine = this.getTextLineFromRange(range);
    const nextLine = this.getTextLineFromRange(range, 1);
    const NextLineblockCommentEnd = LineUtil.isBlockCommentEndingLine(nextLine.text);
    if (NextLineblockCommentEnd && LineUtil.isBlockComment(currentLine.text)) {
      return {
        range: this.newRangeZeroBased(range.start.line, currentLine.text.length, currentLine.text.length),
        string: EOL + LineUtil.cleanBlockComment(currentLine.text) + " "
      };
    }
    return;
  };
  /**
   * funciton removes empty-lines next block-comment lines.
   * 
   * @param range range of the line.
   * @returns LineEditInfo or undefined
   * 
   */
  removeEmptyLinesBetweenBlockCommantAndCode = (range) => {
    const currentTextLine = this.getTextLineFromRange(range);
    const previousTextLine = this.getTextLineFromRange(range, -1);
    if (currentTextLine.isEmptyOrWhitespace && LineUtil.isBlockCommentEndingLine(previousTextLine.text)) {
      const lineIteration = this.iterateNextLine(range, "isEmptyOrWhitespace");
      if (lineIteration) {
        return {
          range: new vscode5.Range(
            new vscode5.Position(range.start.line, 0),
            new vscode5.Position(lineIteration.lineNumber, 0)
          ),
          block: {
            lineSkip: lineIteration.lineSkip,
            priority: LineType.LineEditBlockPriority.HIGH
          }
        };
      }
    }
    return;
  };
  /**
   * this function needs to do 2 edit, 1 is to add new string at position 0,0
   * and delete rest of the un-justified strings.
   * 
   * @param range
   * @returns
   * 
   */
  blockCommentWordCountJustifyAlign = (range) => {
    const currentTextLine = this.getTextLineFromRange(range);
    const lineTextInArray = [];
    if (LineUtil.isBlockComment(currentTextLine.text) && !LineUtil.isJSdocTag(currentTextLine.text)) {
      const indentIndex = currentTextLine.text.indexOf("*");
      const indentString = currentTextLine.text.substring(0, indentIndex + 1);
      if (currentTextLine.text.length < BaseLength || currentTextLine.text.length > BaseLength + ToleanceLength) {
        const trueConditionCallback = (line) => {
          lineTextInArray.push(...line.text.replaceAll("*", "").trim().split(/\s+/));
        };
        const lineIteration = this.iterateNextLine(
          range,
          LineUtil.isBlockComment,
          LineUtil.isJSdocTag,
          trueConditionCallback
        );
        let newString = "";
        let newLine = indentString + " ";
        for (const [index, str] of lineTextInArray.entries()) {
          if (str.length > 0) {
            newLine += str + " ";
            if (newLine.length > BaseLength) {
              newString += newLine + this.getEndofLine();
              newLine = indentString + " ";
            }
          }
          if (index === lineTextInArray.length - 1) {
            newString += newLine + this.getEndofLine();
          }
        }
        if (lineIteration) {
          return {
            range: new vscode5.Range(
              new vscode5.Position(range.start.line, 0),
              new vscode5.Position(lineIteration.lineNumber, 0)
            ),
            type: LineType.LineEditType.DELETE + LineType.LineEditType.APPEND,
            string: newString,
            block: {
              lineSkip: lineIteration.lineSkip,
              priority: LineType.LineEditBlockPriority.HIGH
            }
          };
        }
      }
    }
    return;
  };
  /**
   * funciton to print current datetime where the cursor is.
   * - locale
   * - iso
   * - custom
   * 
   * @param range target range, whichi will be the very starting of line.
   * @returns object descripting where/how to edit the line or undefined if no condition is met.
   * 
   */
  setNowDateTimeOnLine = (range) => {
    return {
      range,
      string: LineUtil.getNowDateTimeStamp.custom()
    };
  };
};

// src/editor/EditorCommand.ts
var EditorCommandId = /* @__PURE__ */ ((EditorCommandId2) => {
  EditorCommandId2[EditorCommandId2["removeDocumentStartingEmptyLine"] = 0] = "removeDocumentStartingEmptyLine";
  EditorCommandId2[EditorCommandId2["removeTrailingWhitespaceFromSelection"] = 1] = "removeTrailingWhitespaceFromSelection";
  EditorCommandId2[EditorCommandId2["removeMulitpleEmptyLinesFromSelection"] = 2] = "removeMulitpleEmptyLinesFromSelection";
  EditorCommandId2[EditorCommandId2["removeMultipleWhitespaceFromSelection"] = 3] = "removeMultipleWhitespaceFromSelection";
  EditorCommandId2[EditorCommandId2["removeEmptyLinesFromSelection"] = 4] = "removeEmptyLinesFromSelection";
  EditorCommandId2[EditorCommandId2["removeCommentedTextFromSelection"] = 5] = "removeCommentedTextFromSelection";
  EditorCommandId2[EditorCommandId2["removeDuplicateLineFromSelection"] = 6] = "removeDuplicateLineFromSelection";
  EditorCommandId2[EditorCommandId2["removeEmptyBlockCommentLineOnStart"] = 7] = "removeEmptyBlockCommentLineOnStart";
  EditorCommandId2[EditorCommandId2["removeMultipleEmptyBlockCommentLine"] = 8] = "removeMultipleEmptyBlockCommentLine";
  EditorCommandId2[EditorCommandId2["insertEmptyBlockCommentLineOnEnd"] = 9] = "insertEmptyBlockCommentLineOnEnd";
  EditorCommandId2[EditorCommandId2["removeEmptyLinesBetweenBlockCommantAndCode"] = 10] = "removeEmptyLinesBetweenBlockCommantAndCode";
  EditorCommandId2[EditorCommandId2["printNowDateTimeOnSelection"] = 11] = "printNowDateTimeOnSelection";
  EditorCommandId2[EditorCommandId2["blockCommentWordCountJustifyAlign"] = 12] = "blockCommentWordCountJustifyAlign";
  return EditorCommandId2;
})(EditorCommandId || {});
var EditorCommand = class {
  #activeEditor;
  #lineHandler;
  constructor() {
    this.#lineHandler = new LineHandler();
    this.#activeEditor = new ActiveEditor();
    this.#activeEditor.setLineHandler(this.#lineHandler);
  }
  // =============================================================================
  // > PUBLIC FUNCTIONS:
  // =============================================================================
  execute = (command, includeFullEdiotr) => {
    this.#activeEditor.prepareEdit(command, includeFullEdiotr);
  };
  /**
   * @returns
   * 
   */
  removeDocumentStartingEmptyLine = () => {
    return {
      func: this.#lineHandler.removeDocumentStartingEmptyLine,
      type: LineType.LineEditType.DELETE
    };
  };
  /**
   * removes trailing whitespace from the line.
   *
   * @param editor unused, future reference
   * @param edit unused, future reference
   * @param args unused, future reference
   * 
   */
  removeTrailingWhitespaceFromSelection = (editor, edit, args) => {
    return {
      func: this.#lineHandler.removeTrailingWhiteSpace,
      type: LineType.LineEditType.DELETE
    };
  };
  /**
   * removes multiple empty lines with EOL.
   * this function will check if the currnt range and next range are
   * both whitespace lines and if true, delete current range with EOL.
   * function type is; line.delete.
   * 
   */
  removeMulitpleEmptyLinesFromSelection = () => {
    return {
      func: this.#lineHandler.removeMulitpleEmptyLine,
      type: LineType.LineEditType.DELETE,
      block: {
        priority: LineType.LineEditBlockPriority.MID
      }
    };
  };
  /**
   * removes whitespaces that are longer than 1.
   * this function will ignore indentation and keep the indent.
   * 
   */
  removeMultipleWhitespaceFromSelection = () => {
    return {
      func: this.#lineHandler.removeMultipleWhitespace,
      type: LineType.LineEditType.REPLACE
    };
  };
  /**
   * remove all empty whitespace lines from selection
   * function type is line.delete.
   * 
   */
  removeEmptyLinesFromSelection = () => {
    return {
      func: this.#lineHandler.removeEmptyLine,
      type: LineType.LineEditType.DELETE,
      block: {
        priority: LineType.LineEditBlockPriority.LOW
      }
    };
  };
  /**
   * remove all commented lines from selection
   * function type is line.delete with EOL.
   * 
   */
  removeCommentedTextFromSelection = () => {
    return {
      func: this.#lineHandler.removeCommentedLine,
      type: LineType.LineEditType.DELETE
    };
  };
  /**
   * remove the current line if next line is identical as the current one.
   * 
   */
  removeDuplicateLineFromSelection = () => {
    return {
      func: this.#lineHandler.removeDuplicateLine,
      type: LineType.LineEditType.DELETE,
      block: {
        priority: LineType.LineEditBlockPriority.LOW
      }
    };
  };
  removeEmptyBlockCommentLineOnStart = () => {
    return {
      func: this.#lineHandler.removeEmptyBlockCommentLineOnStart,
      type: LineType.LineEditType.DELETE,
      block: {
        priority: LineType.LineEditBlockPriority.VERYHIGH
      }
    };
  };
  removeMultipleEmptyBlockCommentLine = () => {
    return {
      func: this.#lineHandler.removeMultipleEmptyBlockCommentLine,
      type: LineType.LineEditType.DELETE,
      block: {
        priority: LineType.LineEditBlockPriority.HIGH
      }
    };
  };
  insertEmptyBlockCommentLineOnEnd = () => {
    return addExtraLineAtEndOnBlockComment ? {
      func: this.#lineHandler.insertEmptyBlockCommentLineOnEnd,
      type: LineType.LineEditType.APPEND,
      block: {
        priority: LineType.LineEditBlockPriority.LOW
      }
    } : void 0;
  };
  blockCommentWordCountJustifyAlign = () => {
    return blockCommentWordCountAutoLengthAlign ? {
      func: this.#lineHandler.blockCommentWordCountJustifyAlign,
      type: LineType.LineEditType.REPLACE,
      block: {
        priority: LineType.LineEditBlockPriority.HIGH
      }
    } : void 0;
  };
  removeEmptyLinesBetweenBlockCommantAndCode = () => {
    return {
      func: this.#lineHandler.removeEmptyLinesBetweenBlockCommantAndCode,
      type: LineType.LineEditType.DELETE,
      block: {
        priority: LineType.LineEditBlockPriority.HIGH
      }
    };
  };
  printNowDateTimeOnSelection = () => {
    return {
      func: this.#lineHandler.setNowDateTimeOnLine,
      type: LineType.LineEditType.APPEND
    };
  };
};

// src/editor/EditorCommandGroup.ts
var EditorCommandGroupId = /* @__PURE__ */ ((EditorCommandGroupId2) => {
  EditorCommandGroupId2[EditorCommandGroupId2["cleanUBlockCommentCommand"] = 0] = "cleanUBlockCommentCommand";
  EditorCommandGroupId2[EditorCommandGroupId2["cleanUpCodeCommand"] = 1] = "cleanUpCodeCommand";
  EditorCommandGroupId2[EditorCommandGroupId2["cleanUpDocumentCommand"] = 2] = "cleanUpDocumentCommand";
  return EditorCommandGroupId2;
})(EditorCommandGroupId || {});
var EditorCommandGroup = class extends EditorCommand {
  constructor() {
    super();
  }
  cleanUBlockCommentCommand = () => {
    return [
      this.removeEmptyBlockCommentLineOnStart(),
      this.removeMultipleEmptyBlockCommentLine(),
      this.insertEmptyBlockCommentLineOnEnd(),
      this.blockCommentWordCountJustifyAlign(),
      this.removeEmptyLinesBetweenBlockCommantAndCode()
    ].filter((fn) => fn !== void 0);
  };
  cleanUpCodeCommand = () => {
    return [
      this.removeDocumentStartingEmptyLine(),
      this.removeTrailingWhitespaceFromSelection(),
      this.removeMulitpleEmptyLinesFromSelection(),
      this.removeMultipleWhitespaceFromSelection()
    ];
  };
  cleanUpDocumentCommand = () => {
    return [
      this.removeDocumentStartingEmptyLine(),
      this.removeTrailingWhitespaceFromSelection(),
      this.removeMulitpleEmptyLinesFromSelection(),
      this.removeMultipleWhitespaceFromSelection(),
      this.removeEmptyBlockCommentLineOnStart(),
      this.removeMultipleEmptyBlockCommentLine(),
      this.insertEmptyBlockCommentLineOnEnd(),
      this.blockCommentWordCountJustifyAlign(),
      this.removeEmptyLinesBetweenBlockCommantAndCode()
    ].filter((fn) => fn !== void 0);
  };
  cleanUpComments = () => {
    return [
      this.removeDocumentStartingEmptyLine(),
      this.removeTrailingWhitespaceFromSelection(),
      this.removeMulitpleEmptyLinesFromSelection(),
      this.removeMultipleWhitespaceFromSelection(),
      this.removeCommentedTextFromSelection()
    ].filter((fn) => fn !== void 0);
  };
};

// src/register.ts
var bindEditorCommands = () => {
  return filterMapIds(EditorCommandId, (key) => {
    const editorCommand = new EditorCommand();
    if (key in editorCommand) {
      return vscode6.commands.registerTextEditorCommand(package_default.name + "." + key, (editor, edit) => {
        const args = {
          lineEditFlag: EditorCommandId[key]
        };
        editorCommand.execute([editorCommand[key]()], false);
      });
    } else {
      console.log("command ", key, "has no implementation");
    }
  });
};
var bindEditorCommandGroups = () => {
  const editorCommandGroup = new EditorCommandGroup();
  return filterMapIds(EditorCommandGroupId, (key) => {
    if (key in editorCommandGroup) {
      return vscode6.commands.registerTextEditorCommand(package_default.name + "." + key, (editor, edit) => {
        const args = {
          lineEditFlag: EditorCommandGroupId[key]
        };
        editorCommandGroup.execute(editorCommandGroup[key](), false);
      });
    } else {
      console.log("command ", key, "has no implementation");
    }
  });
};
var filterMapIds = (ids, mapCallback) => {
  return Object.keys(ids).filter((key) => !/^[+-]?\d+(\.\d+)?$/.test(key)).map(mapCallback);
};
var Register = (context, handleLocal = true) => {
  const disposable = [];
  disposable.push(...bindEditorCommands());
  disposable.push(...bindEditorCommandGroups());
  disposable.push(vscode6.window.onDidChangeActiveTextEditor((editor) => {
    if (editor) {
      bindEditorCommands();
      bindEditorCommandGroups();
    }
  }));
  context.subscriptions.push(...disposable);
};

// src/extension.ts
function activate(context) {
  Register(context);
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
