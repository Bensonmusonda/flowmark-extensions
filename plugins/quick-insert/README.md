# Quick Insert Palette

A collapsible vertical floating toolbar docked to the right side of the FlowMark editor canvas for one-click Markdown insertion.

## Features

- **Headings**: Heading 1 (`insert:heading1`) and Heading 2 (`insert:heading2`)
- **Lists & Blocks**: Task List, Blockquote, Callout Box, Horizontal Rule
- **Code & Math**: Fenced Code Block, LaTeX Math Block
- **Structured Content**: Table, Link, Image
- **Collapsible**: Toggle collapse directly from the toolbar handle or via `Ctrl+Shift+Q` (**Toggle Quick Insert Palette**)

## Permissions

- `ui.floatingWidgets` — registers and toggles the floating toolbar
- `editor.commands` — executes built-in `insert:*` commands
- `editor.read` — reads editor context for toolbar actions

## Shortcuts

| Shortcut | Action |
| --- | --- |
| `Ctrl+Shift+Q` | Toggle Quick Insert Palette visibility |
