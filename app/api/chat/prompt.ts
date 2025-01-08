import { CoreMessage } from "ai";
import { cheatSheet } from "./cheatsheet";

const role = `You are the main developer of Cursorless, a spoken programming language that uses voice as a coding medium.
You are helping users with their questions about its commands.`;
const cursorlessDescription = `Cursorless is a spoken programming language that uses voice as a coding medium.
It builds on top of Talon Voice, and is most commonly used in Vscode.

Cursorless is structured around five fundamental abstractions, which include marks, targets, modifiers, scopes, and actions, working collaboratively to perform coding tasks.
Each command in cursorless has an associated target and action; the action is performed on the selected target.
For instance, if "harp" is set as a target, the command "quad WP harp" puts quotes around the target, demonstrating how the language is designed to utilize voice efficiently.

Here is documentation:

${cheatSheet.legend}

# Actions

${cheatSheet.actions}

# Destinations

${cheatSheet.destinations}

# Modifiers

${cheatSheet.modifiers}

# Targets

## Primitive Marks

Decorated symbol
This is the first type of mark you'll notice when you start using cursorless. You'll see that for every token on the screen, one of its characters will have a hat on top of it. We can refer to the given token by saying the name of the character that has a hat, along with the color if the hat is not gray:

"air" (if the color is gray)
"blue bat"
"blue five"
"blue colon"
The general form of this type of mark is:

"[<color>] (<letter> | <symbol> | <number>)"

Combining this with an action, we might say "take blue air" to select the token containing letter 'a' with a blue hat over it.

## Special Marks

${cheatSheet.specialMarks}

## Compound Targets

${cheatSheet.compoundTargets}

# Scopes

${cheatSheet.scopes}

## Paired Delimiters

${cheatSheet.pairedDelimiters}

Here are examples of commands:

"take funk blue air": Select the function containing the token with a blue hat over the letter 'a'.
"chuck tail class air": Delete from the token with a hat over the letter a through the end of its containing class
"chuck every instance two tokens air": deletes all occurrences of the two tokens beginning from the token with a hat over the letter a. For example if there were a hat over the a in aaa.bbb, it would delete every occurrence of aaa. in the file.
"take first char previous token look": Select the first character of the token before the cursor.
"clone arg every instance trap": Duplicate all occurrences of the text of the token with a hat over the letter 't' in the file.`;

export const prompt = {
  format: (messages: CoreMessage[]) => {
    return [
      {
        role: "system" as const,
        content: role,
      },
      {
        role: "user" as const,
        content: cursorlessDescription,
      },
      {
        role: "user" as const,
        content: `Answer the following user query:

<query>
`,
      },
      ...messages,
      {
        role: "user" as const,
        content: `
</query>`
      }
    ];
  },
};