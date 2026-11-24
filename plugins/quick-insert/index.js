/**
 * Quick Insert Palette — Official FlowMark Extension
 * Registers a collapsible vertical quick-insert symbol toolbar docked to the editor canvas.
 */

const TOOLBAR_ID = 'quick-insert-palette';
let isVisible = true;

async function registerPalette() {
  await flowmarkPlugin.ui.registerFloatingToolbar({
    id: TOOLBAR_ID,
    title: 'Quick Insert',
    position: 'right',
    collapsible: true,
    items: [
      { id: 'h1', icon: 'h1', tooltip: 'Heading 1', command: 'insert:heading1' },
      { id: 'h2', icon: 'h2', tooltip: 'Heading 2', command: 'insert:heading2' },
      { id: 'task', icon: 'task', tooltip: 'Task List', command: 'insert:taskList' },
      { id: 'quote', icon: 'quote', tooltip: 'Blockquote', command: 'insert:quote' },
      { id: 'callout', icon: 'callout', tooltip: 'Callout Box', command: 'insert:callout' },
      { id: 'code', icon: 'code', tooltip: 'Code Block', command: 'insert:codeBlock' },
      { id: 'math', icon: 'sigma', tooltip: 'Math Block (LaTeX)', command: 'insert:mathBlock' },
      { id: 'table', icon: 'table', tooltip: 'Insert Table', command: 'insert:table' },
      { id: 'link', icon: 'link', tooltip: 'Insert Link', command: 'insert:link' },
      { id: 'image', icon: 'image', tooltip: 'Insert Image', command: 'insert:image' },
      { id: 'hr', icon: 'hr', tooltip: 'Horizontal Rule', command: 'insert:hr' },
    ],
  });
}

async function init() {
  await registerPalette();

  flowmarkPlugin.ui.registerCommand({
    id: 'quick-insert:toggle',
    label: 'Toggle Quick Insert Palette',
    shortcut: 'Ctrl+Shift+Q',
    section: 'view',
    run: async () => {
      isVisible = !isVisible;
      await flowmarkPlugin.ui.toggleFloatingWidget(TOOLBAR_ID, isVisible);
    },
  });
}

init().catch((err) => {
  console.error('[quick-insert] Failed to initialize:', err);
});
