export const cheatSheet = {
    legend: `| Term         | Definition                                                               |
  |--------------|--------------------------------------------------------------------------|
  | [formatter]| Formatter (eg "camel", "snake"). Say "format help" for a list           |
  | [modifier] | Cursorless modifier                                                       |
  | [pair]     | Paired delimiter                                                          |
  | [target]   | Cursorless target                                                        |
  | [destination]| Cursorless destination                                                   |
  | [scope]    | Cursorless scope                                                          |
  | [number]   | Number                                                                    |
  | [nth]      | Ordinal, eg first, second, third                                          |`,
    actions: `| Spoken Form                                  | Meaning                                                                   |
  |-----------------------------------------------|---------------------------------------------------------------------------|
  | "[pair] repack [target]"                      | Rewrap [target] with [pair]                                                |
  | "[pair] wrap [target]"                        | Wrap [target] with [pair]                                                  |
  | "bottom [target]"                             | Scroll to bottom                                                          |
  | "break [target]"                              | Break line                                                                |
  | "break point [target]"                        | Toggle line breakpoint                                                    |
  | "bring [target]"                              | Insert copy of [target] at cursor                                         |
  | "bring [target] [destination]"                | Copy [target] to [destination]                                             |
  | "call [target 1] on [target 2]"               | Call [target 1] on [target 2]                                              |
  | "call [target]"                               | Call [target] on selection                                                |
  | "carve [target]"                              | Cut to clipboard                                                          |
  | "center [target]"                             | Scroll to center                                                          |
  | "change [target]"                             | Clear and set selection                                                    |
  | "chuck [target]"                              | Remove                                                                    |
  | "clone [target]"                              | Insert copy after                                                          |
  | "clone up [target]"                           | Insert copy before                                                         |
  | "comment [target]"                            | Toggle line comment                                                       |
  | "copy [target]"                               | Copy to clipboard                                                          |
  | "crown [target]"                              | Scroll to top                                                             |
  | "decrement [target]"                          | Decrement                                                                 |
  | "dedent [target]"                             | Outdent line                                                              |
  | "define [target]"                             | Reveal definition                                                         |
  | "drink [target]"                              | Edit new line/scope before                                                |
  | "drop [target]"                               | Insert empty line before                                                  |
  | "extract [target]"                            | Extract variable                                                          |
  | "float [target]"                              | Insert empty line after                                                   |
  | "fold [target]"                               | Fold region                                                               |
  | "follow [target]"                             | Follow link                                                               |
  | "follow split [target]"                       | Follow link aside                                                         |
  | "format [formatter] at [target]"              | Reformat [target] as [formatter]                                           |
  | "give [target]"                               | Deselect                                                                  |
  | "highlight [target]"                          | Highlight                                                                 |
  | "hover [target]"                              | Show hover                                                                |
  | "increment [target]"                          | Increment                                                                 |
  | "indent [target]"                             | Indent line                                                               |
  | "inspect [target]"                            | Show debug hover                                                          |
  | "join [target]"                               | Join lines                                                                |
  | "move [target]"                               | Move [target] to cursor position                                           |
  | "move [target] [destination]"                 | Move [target] to [destination]                                            |
  | "paste [destination]"                         | Paste from clipboard at [destination]                                     |
  | "phones [target]"                             | Next homophone                                                            |
  | "post [target]"                               | Set selection after                                                       |
  | "pour [target]"                               | Edit new line/scope after                                                 |
  | "pre [target]"                                | Set selection before                                                      |
  | "puff [target]"                               | Insert empty lines around                                                 |
  | "quick fix [target]"                          | Show quick fix                                                            |
  | "reference [target]"                          | Show references                                                           |
  | "rename [target]"                             | Rename                                                                    |
  | "reverse [target]"                            | Reverse targets                                                           |
  | "scout [target]"                              | Find in document                                                          |
  | "scout all [target]"                          | Find in workspace                                                         |
  | "shuffle [target]"                            | Randomize targets                                                         |
  | "snippet [target]"                            | Insert snippet                                                            |
  | "snippet make [target]"                       | Generate snippet                                                          |
  | "sort [target]"                               | Sort targets                                                              |
  | "swap [target 1] with [target 2]"             | Swap [target 1] with [target 2]                                           |
  | "swap with [target]"                          | Swap selection with [target]                                              |
  | "take [target]"                               | Set selection                                                             |
  | "type deaf [target]"                          | Reveal type definition                                                    |
  | "unfold [target]"                             | Unfold region                                                             |`,
    destinations: `| Spoken Form        | Meaning                    |
  |--------------------|----------------------------|
  | "after [target]"   | Insert after [target]      |
  | "before [target]"  | Insert before [target]     |
  | "to [target]"      | Replace [target]           |`,
    scopes: `| Spoken Form      | Meaning                       |
  |------------------|-------------------------------|
  | "arg"            | Argument                      |
  | "attribute"      | Attribute                     |
  | "block"          | Paragraph                     |
  | "branch"         | Branch                        |
  | "call"           | Function call                 |
  | "callee"         | Function callee               |
  | "cell"           | Notebook cell                 |
  | "chapter"        | Chapter                       |
  | "char"           | Character                     |
  | "class"          | Class                         |
  | "class name"     | Class name                    |
  | "command"        | Command                       |
  | "comment"        | Comment                       |
  | "condition"      | Condition                     |
  | "element"        | Xml element                   |
  | "end tag"        | Xml end tag                   |
  | "environment"    | Environment                   |
  | "file"           | Document                      |
  | "funk"           | Named function                |
  | "funk name"      | Function name                 |
  | "glyph [character]"| Instance of single character [character] |
  | "identifier"     | Identifier                    |
  | "if state"       | If statement                  |
  | "instance"       | Instance                      |
  | "item"           | Collection item               |
  | "key"            | Collection key                |
  | "lambda"         | Anonymous function            |
  | "line"           | Line                          |
  | "link"           | Url                           |
  | "list"           | List                          |
  | "map"            | Map                           |
  | "name"           | Name                          |
  | "paint"          | Non whitespace sequence       |
  | "paragraph"      | Named paragraph               |
  | "part"           | Part                          |
  | "regex"          | Regular expression            |
  | "section"        | Section                       |
  | "selector"       | Selector                      |
  | "sentence"       | Sentence                      |
  | "short block"    | Paragraph bounded by surrounding pair delimeters |
  | "short paint"    | Non-whitespace sequence bounded by surrounding pair delimeters |
  | "start tag"      | Xml start tag                 |
  | "state"          | Statement                     |
  | "sub"            | Word                          |
  | "subparagraph"   | Sub paragraph                 |
  | "subsection"     | Sub section                   |
  | "subsubsection"  | Sub sub section               |
  | "tags"           | Xml both tags                 |
  | "token"          | Token                         |
  | "type"           | Type                          |
  | "unit"           | Unit                          |
  | "value"          | Value                         |`,
    modifiers: `| Spoken Form                                  | Meaning                                                                                              |
  |-----------------------------------------------|------------------------------------------------------------------------------------------------------|
  | "[number] [scope]s"                           | [number] instances of [scope] including target, going forwards, as contiguous range                   |
  | "[number] [scope]s backward"                  | [number] instances of [scope] including target, going backwards, as contiguous range                  |
  | "[nth] [scope]"                              | [nth] instance of [scope] in iteration scope                                                         |
  | "[nth] last [scope]"                         | [nth]-to-last instance of [scope] in iteration scope                                                  |
  | "[nth] next [scope]"                         | [nth] instance of [scope] after target                                                                |
  | "[nth] previous [scope]"                     | [nth] instance of [scope] before target                                                               |
  | "[scope]"                                    | Containing instance of [scope]                                                                        |
  | "[scope] backward"                            | single instance of [
  | "[scope] forward"                             | single instance of [scope] including target, going forwards                                          |
  | "bounds"                                     | Bounding paired delimiters                                                                           |
  | "content"                                    | Keep content filter                                                                                  |
  | "empty"                                      | Keep empty filter                                                                                    |
  | "end of"                                     | Empty position at end of target                                                                       |
  | "every [number] [scope]s"                    | [number] instances of [scope] including target, going forwards, as individual targets                |
  | "every [number] [scope]s backward"           | [number] instances of [scope] including target, going backwards, as individual targets               |
  | "every [scope]"                              | Every instance of [scope]                                                                             |
  | "every first [number] [scope]s"              | first [number] instances of [scope] in iteration scope, as individual targets                         |
  | "every last [number] [scope]s"               | last [number] instances of [scope] in iteration scope, as individual targets                          |
  | "every next [number] [scope]s"               | next [number] instances of [scope], as individual targets                                             |
  | "every previous [number] [scope]s"           | previous [number] instances of [scope], as individual targets                                        |
  | "first [number] [scope]s"                    | first [number] instances of [scope] in iteration scope, as contiguous range                           |
  | "grand [scope]"                              | Grandparent containing instance of [scope]                                                           |
  | "head"                                       | Extend through start of line                                                                         |
  | "head [modifier]"                            | Extend through start of [modifier]                                                                   |
  | "inside"                                     | Interior only                                                                                        |
  | "its"                                        | Infer previous mark                                                                                  |
  | "just"                                       | No inference                                                                                         |
  | "last [number] [scope]s"                     | last [number] instances of [scope] in iteration scope, as contiguous range                            |
  | "leading"                                    | Leading delimiter range                                                                              |
  | "next [number] [scope]s"                     | next [number] instances of [scope], as contiguous range                                               |
  | "next [scope]"                               | Next instance of [scope]                                                                             |
  | "previous [number] [scope]s"                 | previous [number] instances of [scope], as contiguous range                                          |
  | "previous [scope]"                           | Previous instance of [scope]                                                                         |
  | "start of"                                   | Empty position at start of target                                                                    |
  | "tail"                                       | Extend through end of line                                                                           |
  | "tail [modifier]"                            | Extend through end of [modifier]                                                                     |
  | "trailing"                                   | Trailing delimiter range                                                                             |
  | "visible"                                    | Visible                                                                                              |`,
    pairedDelimiters: `| Spoken Form    | Meaning            |
  |----------------|--------------------|
  | "box"          | Square brackets    |
  | "curly"        | Curly brackets     |
  | "diamond"      | Angle brackets     |
  | "escaped box"  | Escaped square brackets |
  | "escaped quad" | Escaped double quotes |
  | "escaped round"| Escaped parentheses|
  | "escaped twin" | Escaped single quotes|
  | "pair"         | Any                |
  | "quad"         | Double quotes      |
  | "round"        | Parentheses        |
  | "skis"         | Backtick quotes    |
  | "twin"         | Single quotes      |
  | "void"         | Whitespace         |`,
    specialMarks: `| Spoken Form   | Meaning                     |
  |---------------|-----------------------------|
  | "down [number]"| Line number down from cursor |
  | "nothing"     | Nothing                     |
  | "row [number]" | Line number modulo 100      |
  | "source"      | Previous source             |
  | "special"     | Unknown symbol              |
  | "that"        | Previous target             |
  | "this"        | Current selection           |
  | "up [number]"  | Line number up from cursor   |`,
    compoundTargets: `| Spoken Form                      | Meaning                                               |
  |-----------------------------------|-------------------------------------------------------|
  | "[target 1] and [target 2]"       | [target 1] and [target 2]                             |
  | "[target 1] between [target 2]"   | between [target 1] and [target 2]                     |
  | "[target 1] past [target 2]"      | [target 1] through [target 2]                         |
  | "[target 1] slice [target 2]"     | [target 1] vertically through [target 2]              |
  | "[target 1] until [target 2]"     | [target 1] until start of [target 2]                  |
  | "between [target]"                | between selection and [target]                        |
  | "past [target]"                   | selection through [target]                            |
  | "slice [target]"                  | selection vertically through [target]                 |
  | "until [target]"                  | selection until start of [target]                     |`,
    colors: `| Spoken Form | Meaning        |
  |-------------|----------------|
  | "blue"      | Blue           |
  | "brown"     | User color 1   |
  | "pink"      | Pink           |
  | "red"       | Red            |
  | "yellow"    | Yellow         |`,
  };
  