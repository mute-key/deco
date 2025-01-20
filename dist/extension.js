"use strict";var A=Object.create;var v=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var H=Object.getOwnPropertyNames;var U=Object.getPrototypeOf,$=Object.prototype.hasOwnProperty;var j=(i,e)=>{for(var t in e)v(i,t,{get:e[t],enumerable:!0})},B=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of H(e))!$.call(i,o)&&o!==t&&v(i,o,{get:()=>e[o],enumerable:!(n=N(e,o))||n.enumerable});return i};var f=(i,e,t)=>(t=i!=null?A(U(i)):{},B(e||!i||!i.__esModule?v(t,"default",{value:i,enumerable:!0}):t,i)),G=i=>B(v({},"__esModule",{value:!0}),i);var Y={};j(Y,{activate:()=>K,deactivate:()=>V});module.exports=G(Y);var E=f(require("vscode"));var S={name:"landle",publisher:"mutekey",displayName:"landle",description:"landle",version:"0.9.202",repository:{type:"git",url:"https://github.com/mute-key/landle"},content:{baseContentUrl:"https://github.com/mute-key/landle/blob/master/",baseImagesUrl:"https://github.com/mute-key/landle/raw/master/"},engines:{vscode:"^1.96.0"},categories:["Other"],activationEvents:["onStartupFinished"],main:"./dist/extension.js",contributes:{commands:[{command:"landle.removeTrailingWhitespaceFromSelection",title:"Remove Trailing Whitespace From Selection"},{command:"landle.removeMulitpleEmptyLinesFromSelection",title:"Remove Mulitple Empty Lines From Selection"},{command:"landle.removeEmptyLinesFromSelection",title:"Remove Empty Lines From Selection"},{command:"landle.removeMultipleWhitespaceFromSelection",title:"Remove Multiple Whitespace From Selection"},{command:"landle.removeCommentedTextFromSelection",title:"Remove Commented Text From Selection"},{command:"landle.removeDuplicateLineFromSelection",title:"Remove Duplicate Line From Selection"},{command:"landle.cleanUBlockCommentCommand",title:"clean-up Block Comment From Selection"},{command:"landle.cleanUpDocumentCommand",title:"Clean-up Whitespace From Selection"},{command:"landle.printNowDateTimeOnSelection",title:"Print Now DateTime On Selection"}],keybindings:[{command:"landle.removeTrailingWhitespaceFromSelection",key:"ctrl+alt+w"},{command:"landle.removeMulitpleEmptyLinesFromSelection",key:"ctrl+alt+m"},{command:"landle.removeEmptyLinesFromSelection",key:"ctrl+alt+e"},{command:"landle.removeMultipleWhitespaceFromSelection",key:"ctrl+alt+space"},{command:"landle.removeCommentedTextFromSelection",key:"ctrl+alt+/"},{command:"landle.removeDuplicateLineFromSelection",key:"ctrl+alt+d"},{command:"landle.cleanUBlockCommentCommand",key:"ctrl+alt+b"},{command:"landle.cleanUpDocumentCommand",key:"ctrl+alt+c"},{command:"landle.printNowDateTimeOnSelection",key:"ctrl+alt+n"}]},scripts:{"vscode:prepublish":"pnpm run package",compile:"pnpm run check-types && pnpm run lint && node esbuild.js",watch:"npm-run-all -p watch:*","watch:esbuild":"node esbuild.js --watch","watch:tsc":"tsc --noEmit --watch --project tsconfig.json",package:"pnpm run check-types && pnpm run lint && node esbuild.js --production","compile-tests":"tsc -p . --outDir out","watch-tests":"tsc -p . -w --outDir out",pretest:"pnpm run compile-tests && pnpm run compile && pnpm run lint","check-types":"tsc --noEmit",lint:"eslint src",test:"vscode-test"},devDependencies:{"@types/vscode":"^1.96.0","@types/mocha":"^10.0.10","@types/node":"20.x","@typescript-eslint/eslint-plugin":"^8.17.0","@typescript-eslint/parser":"^8.17.0",eslint:"^9.16.0",esbuild:"^0.24.0","npm-run-all":"^4.1.5",typescript:"^5.7.2","@vscode/test-cli":"^0.0.10","@vscode/test-electron":"^2.4.1"}};var d=f(require("vscode"));var L=f(require("vscode")),r;(t=>{let i;(c=>(c[c.APPEND=1]="APPEND",c[c.PREPEND=2]="PREPEND",c[c.REPLACE=4]="REPLACE",c[c.CLEAR=8]="CLEAR",c[c.DELETE=16]="DELETE"))(i=t.LineEditType||={});let e;(c=>(c[c.UNSET=0]="UNSET",c[c.LOW=1]="LOW",c[c.MID=2]="MID",c[c.HIGH=3]="HIGH",c[c.VERYHIGH=4]="VERYHIGH"))(e=t.LineEditBlockPriority||={})})(r||={});var y=class{doc;editor;constructor(){this.editor=L.window.activeTextEditor,this.editor&&(this.doc=this.editor.document)}#t=e=>{let t=e.start.line,n=e.end.line;return{startLine:t,endLine:n}};#e=(e,t,n)=>n?{...t.func(this.lineFullRange(e)),type:t.type}:void 0;#n=(e,t)=>{let n=t.func(e);if(n)return t.block||n.block?{range:n.range,string:n?.string,type:n.type?n.type:t.type,block:{priority:n.block?.priority?n.block?.priority:t.block?.priority,lineSkip:n.block?.lineSkip}}:{...n,type:n.type?n.type:t.type}};#i=(e,t)=>{let n=[],o=0,s=!1;for(let a of t){let p=this.#n(e,a);p&&(p.block?p.block.priority>o&&(n=[p],o=p.block.priority,s=!0):s||n.push(p))}return n};#o=(e,t,n,o,s)=>{for(s=s??new Set;n<=e.end.line;){if(s.has(n)){n++;continue}let a=this.#i(this.lineFullRange(n),t);a.length>0&&(a[0].block&&a[0].block.lineSkip&&a[0].block.lineSkip.forEach(p=>s.add(p)),o.push(...a)),n++}return o};getEndofLine=()=>this.editor?.document.eol===L.EndOfLine.CRLF?`\r
`:`
`;getText=e=>this.doc.getText(e);getTextLineFromRange=(e,t=0)=>typeof e=="number"?e+t>=this.doc.lineCount?this.doc.lineAt(e):this.doc.lineAt(e+t):e.start.line+t<0?this.doc.lineAt(e.start.line):this.doc.lineCount>e.start.line+t?this.doc.lineAt(e.start.line+t):this.doc.lineAt(e.start.line);lineFullRangeWithEOL=e=>this.getTextLineFromRange(e).rangeIncludingLineBreak;newRangeZeroBased=(e,t,n)=>new L.Range(new L.Position(e,t),new L.Position(e,n));lineFullRange=e=>typeof e=="number"?this.doc?.lineAt(e).range:this.doc?.lineAt(e.start.line).range;prepareLines=(e,t)=>{let n=e.start.line;return e.isEmpty||e.isSingleLine?this.#i(this.lineFullRange(n),t):this.#o(e,t,n,[])};setCurrentDocument=()=>{this.editor=L.window.activeTextEditor,this.editor&&(this.doc=this.editor.document)}};var T=class{#t;#e;#n;constructor(){this.#e=d.window.activeTextEditor,this.#s()}#i=()=>{this.#e=d.window.activeTextEditor,this.#n.setCurrentDocument(),this.#e};#o=()=>{if(this.#e){let e=this.#e.selections[0];this.#e.selection=new d.Selection(new d.Position(e.start.line,0),new d.Position(e.start.line,0))}};#r=()=>{this.#e&&(this.#e.selection=new d.Selection(new d.Position(0,0),new d.Position(this.#e.document.lineCount-1,0)))};#s=(e=void 0)=>this.#e?e===void 0?(e!==this.#t&&(this.#t=this.#e.document.getText()),!0):e===this.#t:!1;#c=(e,t)=>{if(e)switch(e.type){case r.LineEditType.APPEND:t.insert(e.range.start,e.string??"");break;case r.LineEditType.CLEAR:t.delete(this.#n.lineFullRange(e.range));break;case r.LineEditType.DELETE:t.delete(e.range);break;case r.LineEditType.REPLACE:t.replace(e.range,e.string??"");break;case r.LineEditType.PREPEND:break;default:}};setLineHandler=e=>{this.#n=e};prepareEdit=(e,t)=>{t&&this.#r(),this.#i();let n=[];this.#e&&(this.#e.selections.forEach(s=>{n.push(...this.#n.prepareLines(s,e))}),this.editInRange(n))};editInRange=async e=>{try{this.#s(d.window.activeTextEditor?.document.getText())?console.log("Duplicate edit entry"):await this.#e?.edit(n=>{e.forEach(o=>this.#c(o,n))})?(this.#o(),this.#s(),console.log("Edit applied successfully!")):console.log("Failed to apply edit.")}catch(t){console.log("Error applying edit:",t)}}};var u=f(require("vscode"));var I=f(require("vscode")),m=class{constructor(){}static removeTrailingWhiteSpaceString=e=>e.replace(/[ \t]+$/," ");static findTrailingWhiteSpaceString=e=>e.search(/\s+$/s);static findNonWhitespaceIndex=e=>e.search(/\S/g);static findReverseNonWhitespaceIndex=e=>e.search(/\S(?=\s*$)/g);static removeMultipleWhiteSpaceString=e=>e.replace(/\s\s+/g," ");static findMultipleWhiteSpaceString=e=>e.search(/(?<=\S)\s+\s(?=\S)/)!==-1;static isLineCommented=e=>e.search(/^\s*\/\//g)!==-1;static isEmptyBlockComment=e=>e.search(/^\s*\*\s*$/s)!==-1;static isBlockComment=e=>e.search(/^\s*\*+\s+\S+/s)!==-1;static isBlockCommentStartingLine=e=>e.search(/^\s*\/.*\s*$/)!==-1;static isBlockCommentEndingLine=e=>e.search(/^\s*\*\//)!==-1;static cleanBlockComment=e=>e.replace(/(?<=\*).*/,"");static pushMessage=e=>I.window.showInformationMessage(e);static splitStringOn(e,...t){return[0,...t].map((n,o,s)=>e.slice(n,s[o+1]))}static getNowDateTimeStamp={custom:()=>{function e(n){let o={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0},s=Intl.DateTimeFormat().resolvedOptions().locale,p=new Intl.DateTimeFormat(s,o).formatToParts(n),c="",D="",w="",C="",l="",F="";return p.forEach(h=>{switch(h.type){case"year":c=h.value;break;case"month":D=h.value;break;case"day":w=h.value;break;case"hour":C=h.value;break;case"minute":l=h.value;break;case"dayPeriod":F=h.value.toUpperCase();break}}),`${c}-${D}-${w} (${C}:${l} ${F})`}return e(new Date)},locale:()=>new Date().toLocaleString(),iso:()=>new Date().toISOString()}};var b=class extends y{constructor(){super()}removeDocumentStartingEmptyLine=e=>{let t=e.start.line;if(t===0){let n,o,s=[];for(;t<this.doc.lineCount&&(n=this.getTextLineFromRange(t),n.isEmptyOrWhitespace);)o=n.range,s.push(t),t++;return{range:new u.Range(new u.Position(0,0),new u.Position(t,0)),block:{lineSkip:s,priority:r.LineEditBlockPriority.HIGH}}}};removeTrailingWhiteSpace=e=>{let t=this.getTextLineFromRange(e),n=m.findTrailingWhiteSpaceString(t.text);if(m.isEmptyBlockComment(t.text)&&(n+=1),n>0){let o=t.text.length;return{range:this.newRangeZeroBased(e.start.line,n,o)}}};removeMultipleWhitespace=e=>{let t=this.getText(e);if(m.findMultipleWhiteSpaceString(t)&&!this.getTextLineFromRange(e).isEmptyOrWhitespace){let n=m.removeMultipleWhiteSpaceString(t),o=this.getTextLineFromRange(e).firstNonWhitespaceCharacterIndex,s=m.findReverseNonWhitespaceIndex(t);return{range:this.newRangeZeroBased(e.start.line,o,s+1),string:n.padEnd(s," ").trim()}}};removeMulitpleEmptyLine=e=>{let t=this.getTextLineFromRange(e).isEmptyOrWhitespace,n=this.getTextLineFromRange(e,1).isEmptyOrWhitespace;if(t&&n)return{range:this.lineFullRangeWithEOL(e)}};removeCommentedLine=e=>{let t=this.getText(e);if(m.isLineCommented(t))return{range:this.lineFullRangeWithEOL(e)}};removeEmptyLine=e=>{if(this.getTextLineFromRange(e).isEmptyOrWhitespace)return{range:this.lineFullRangeWithEOL(e)}};removeDuplicateLine=e=>{let t=this.getTextLineFromRange(e),n=this.getTextLineFromRange(e,1);if(t.text===n.text)return{range:this.lineFullRangeWithEOL(e)}};removeEmptyBlockCommentLineOnStart=e=>{let t=this.getTextLineFromRange(e),n=this.getTextLineFromRange(e,-1);if(m.isBlockCommentStartingLine(n.text)&&m.isEmptyBlockComment(t.text)){let s=e.start.line,a,p,c=[];for(;s&&(p=this.getTextLineFromRange(s),m.isEmptyBlockComment(p.text));)a=p.range,c.push(s),s++;if(a)return{range:new u.Range(new u.Position(e.start.line,0),new u.Position(s,0)),block:{priority:r.LineEditBlockPriority.MID,lineSkip:c}}}};removeMultipleEmptyBlockCommentLine=e=>{let t=this.getTextLineFromRange(e),n=this.getTextLineFromRange(e,1),o=m.isEmptyBlockComment(n.text),s=m.isEmptyBlockComment(t.text),a=this.getTextLineFromRange(e,-1),p=m.isBlockCommentStartingLine(a.text);if(s&&o&&!p)return{range:this.lineFullRangeWithEOL(e)}};insertEmptyBlockCommentLineOnEnd=e=>{let t=this.getEndofLine(),n=this.getTextLineFromRange(e),o=this.getTextLineFromRange(e,1);if(m.isBlockCommentEndingLine(o.text)&&m.isBlockComment(n.text))return{range:this.newRangeZeroBased(e.start.line,n.text.length,n.text.length),string:t+m.cleanBlockComment(n.text)+" "}};removeEmptyLinesBetweenBlockCommantAndCode=e=>{let t=this.getTextLineFromRange(e),n=this.getTextLineFromRange(e,-1);if(t.isEmptyOrWhitespace&&m.isBlockCommentEndingLine(n.text)){let o=e.start.line,s,a=[];for(;o<this.doc.lineCount&&(s=this.getTextLineFromRange(o),s.isEmptyOrWhitespace);)a.push(o),o++;return{range:new u.Range(new u.Position(e.start.line,0),new u.Position(o,0)),block:{lineSkip:a,priority:r.LineEditBlockPriority.HIGH}}}};setNowDateTimeOnLine=e=>({range:e,string:m.getNowDateTimeStamp.custom()})};var x=(l=>(l[l.removeDocumentStartingEmptyLine=0]="removeDocumentStartingEmptyLine",l[l.removeTrailingWhitespaceFromSelection=1]="removeTrailingWhitespaceFromSelection",l[l.removeMulitpleEmptyLinesFromSelection=2]="removeMulitpleEmptyLinesFromSelection",l[l.removeMultipleWhitespaceFromSelection=3]="removeMultipleWhitespaceFromSelection",l[l.removeEmptyLinesFromSelection=4]="removeEmptyLinesFromSelection",l[l.removeCommentedTextFromSelection=5]="removeCommentedTextFromSelection",l[l.removeDuplicateLineFromSelection=6]="removeDuplicateLineFromSelection",l[l.removeEmptyBlockCommentLineOnStart=7]="removeEmptyBlockCommentLineOnStart",l[l.removeMultipleEmptyBlockCommentLine=8]="removeMultipleEmptyBlockCommentLine",l[l.insertEmptyBlockCommentLineOnEnd=9]="insertEmptyBlockCommentLineOnEnd",l[l.removeEmptyLinesBetweenBlockCommantAndCode=10]="removeEmptyLinesBetweenBlockCommantAndCode",l[l.printNowDateTimeOnSelection=11]="printNowDateTimeOnSelection",l))(x||{}),g=class{#t;#e;constructor(){this.#e=new b,this.#t=new T,this.#t.setLineHandler(this.#e)}execute=(e,t)=>{this.#t.prepareEdit(e,t)};removeDocumentStartingEmptyLine=()=>({func:this.#e.removeDocumentStartingEmptyLine,type:r.LineEditType.DELETE});removeTrailingWhitespaceFromSelection=(e,t,n)=>({func:this.#e.removeTrailingWhiteSpace,type:r.LineEditType.DELETE});removeMulitpleEmptyLinesFromSelection=()=>({func:this.#e.removeMulitpleEmptyLine,type:r.LineEditType.DELETE,block:{priority:r.LineEditBlockPriority.MID}});removeMultipleWhitespaceFromSelection=()=>({func:this.#e.removeMultipleWhitespace,type:r.LineEditType.REPLACE});removeEmptyLinesFromSelection=()=>({func:this.#e.removeEmptyLine,type:r.LineEditType.DELETE,block:{priority:r.LineEditBlockPriority.LOW}});removeCommentedTextFromSelection=()=>({func:this.#e.removeCommentedLine,type:r.LineEditType.DELETE});removeDuplicateLineFromSelection=()=>({func:this.#e.removeDuplicateLine,type:r.LineEditType.DELETE,block:{priority:r.LineEditBlockPriority.LOW}});removeEmptyBlockCommentLineOnStart=()=>({func:this.#e.removeEmptyBlockCommentLineOnStart,type:r.LineEditType.DELETE,block:{priority:r.LineEditBlockPriority.VERYHIGH}});removeMultipleEmptyBlockCommentLine=()=>({func:this.#e.removeMultipleEmptyBlockCommentLine,type:r.LineEditType.DELETE,block:{priority:r.LineEditBlockPriority.HIGH}});insertEmptyBlockCommentLineOnEnd=()=>({func:this.#e.insertEmptyBlockCommentLineOnEnd,type:r.LineEditType.APPEND,block:{priority:r.LineEditBlockPriority.LOW}});removeEmptyLinesBetweenBlockCommantAndCode=()=>({func:this.#e.removeEmptyLinesBetweenBlockCommantAndCode,type:r.LineEditType.DELETE,block:{priority:r.LineEditBlockPriority.HIGH}});printNowDateTimeOnSelection=()=>({func:this.#e.setNowDateTimeOnLine,type:r.LineEditType.APPEND})};var R=(t=>(t[t.cleanUpDocumentCommand=0]="cleanUpDocumentCommand",t[t.cleanUBlockCommentCommand=1]="cleanUBlockCommentCommand",t))(R||{}),k=class extends g{constructor(){super()}cleanUpDocumentCommand=()=>[this.removeDocumentStartingEmptyLine(),this.removeTrailingWhitespaceFromSelection(),this.removeMulitpleEmptyLinesFromSelection(),this.removeMultipleWhitespaceFromSelection(),this.removeEmptyBlockCommentLineOnStart(),this.removeMultipleEmptyBlockCommentLine(),this.insertEmptyBlockCommentLineOnEnd(),this.removeEmptyLinesBetweenBlockCommantAndCode()];cleanUBlockCommentCommand=()=>[this.removeEmptyBlockCommentLineOnStart(),this.removeMultipleEmptyBlockCommentLine(),this.insertEmptyBlockCommentLineOnEnd(),this.removeEmptyLinesBetweenBlockCommantAndCode()]};var W=()=>P(x,i=>{let e=new g;if(i in e)return E.commands.registerTextEditorCommand(S.name+"."+i,(t,n)=>{let o={lineEditFlag:x[i]};e.execute([e[i]()],!1)});console.log("command ",i,"has no implementation")}),O=()=>{let i=new k;return P(R,e=>{if(e in i)return E.commands.registerTextEditorCommand(S.name+"."+e,(t,n)=>{let o={lineEditFlag:R[e]};i.execute(i[e](),!1)});console.log("command ",e,"has no implementation")})},P=(i,e)=>Object.keys(i).filter(t=>!/^[+-]?\d+(\.\d+)?$/.test(t)).map(e),M=(i,e=!0)=>{let t=[];t.push(...W()),t.push(...O()),t.push(E.window.onDidChangeActiveTextEditor(n=>{n&&(W(),O())})),i.subscriptions.push(...t)};function K(i){M(i)}function V(){}0&&(module.exports={activate,deactivate});
