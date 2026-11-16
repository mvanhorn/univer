# Demo: lock comment editing, deleting, and resolving

Recorded against `pnpm dev` `#sheets` on this branch.

## What the recording shows

1. Default preset (permissions omitted). The Thread Comment fixture thread on B5 is opened in Comment Management, signed in as the comment author `developer`. Edit, Delete This Comment, and Mark as resolved are present.
2. Workbench restarted with `UniverSheetsThreadCommentPreset({ permissions: { edit: false, delete: false, resolve: false } })`.
3. The same thread stays readable. More / resolve / header delete are gone. A reply `Lock config still allows replies.` is added through `comment.replyAsync()`.
4. `comment.deleteAsync()` returns `false`. The root comment and replies remain on B5.

## Media

- `out.mp4`: 1920x1080, 30 fps, H.264 yuv420p, 25.40 s, 762 frames
- `preview.gif`: 1280x720, 10 fps, 2.50 MB
- `screenshots/`: stills from the same session

## Commands

Exact commands, exit codes, and captured output are in `commands.log` and `logs/`.
