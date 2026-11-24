# FlowMark Extensions Registry

Official extension registry and first-party plugins for the **FlowMark Markdown Editor**.

## Structure

- `registry.json` — Central index consumed by FlowMark's Extensions sidebar.
- `plugins/<id>/` — First-party extensions maintained in this repository.

## Submitting a Third-Party Extension

1. Host your extension in a public GitHub repository with a valid `plugin.json` at the root of your release `.zip`.
2. Publish a GitHub Release containing `<plugin-id>-v<version>.zip`.
3. Open a Pull Request adding your extension's metadata to `registry.json`:

```json
{
  "id": "my-extension",
  "name": "My Extension",
  "version": "1.0.0",
  "description": "What your extension does.",
  "author": "Your Name",
  "tags": ["editor", "productivity"],
  "permissions": ["editor.read"],
  "downloadUrl": "https://github.com/user/repo/releases/download/v1.0.0/my-extension-v1.0.0.zip",
  "homepage": "https://github.com/user/repo"
}
```
