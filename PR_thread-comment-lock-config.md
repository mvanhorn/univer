Title: feat(thread-comment): add config to lock editing, deleting and resolving comments

<!--
 Thank you for submitting a Pull Request.
 Please read our Pull Request guidelines:
 https://github.com/dream-num/univer/blob/dev/CONTRIBUTING.md#submitting-pull-requests
-->

<!-- Associate issues with the pull request if there is one. Separate them width commas. -->
<!-- Feel free to delete this if there is no related issue. -->
close #6004

<!-- A description of the proposed changes. -->

Hosts can now lock comment writes through `IUniverThreadCommentConfig.permissions` on the core `@univerjs/thread-comment` plugin (`edit`, `delete`, `resolve`, `reply`). Each key is `boolean | ((comment) => boolean)`. Omitted keys stay allowed, matching the previous command behavior. `AddCommentCommand` (replies), `UpdateCommentCommand`, `DeleteCommentCommand`, `DeleteCommentTreeCommand`, and `ResolveCommentCommand` return `false` without emitting mutations when the matching permission refuses. Mutations are unchanged so collab and undo still apply remote writes. `ThreadCommentTree` hides edit, delete, and resolve when locked; the panel stays readable and still shows the reply editor unless `reply` is `false`. Facade methods (`updateCommentAsync`, `deleteCommentAsync`, `resolveCommentAsync`, `replyCommentAsync`, and the sheets `FThreadComment` wrappers) return `false` in that case. Presets pass the same options through `UniverSheetsThreadCommentPreset` / `UniverDocsThreadCommentPreset` and register `UniverThreadCommentPlugin` first so `UNIVER_UNKNOWN` does not load the plugin with empty config.

<!-- How to test them. -->

`pnpm --filter @univerjs/thread-comment test` (60 passed; 52 on untouched `dev`). `pnpm --filter @univerjs/thread-comment-ui test` (69 passed; 66 on untouched `dev`). `pnpm --filter @univerjs/sheets-thread-comment test` (18 passed). Coverage: thread-comment 85.78% statements (was 85.37%), thread-comment-ui 77.19% (was 76.91%), `comment.command.ts` 91.34%, `comment-permission.ts` 100%, `ThreadCommentTree.tsx` 73.97%. Typecheck of those packages plus both thread-comment presets passed. `pnpm exec eslint` on the changed TS/TSX files passed with one existing `FUniver` naming warning. Builds of `@univerjs/thread-comment`, `@univerjs/thread-comment-ui`, `@univerjs/sheets-thread-comment`, and `@univerjs/sheets-thread-comment-ui` passed. In `#sheets`, pass `{ permissions: { edit: false, delete: false, resolve: false } }` into `UniverSheetsThreadCommentPreset` and confirm the B5 thread remains visible without edit/delete/resolve while `comment.replyAsync()` still succeeds and `comment.deleteAsync()` returns `false`. Docs/mobile workbenches were not driven in the browser; mobile uses the same tree.

<!-- Uncomment the below lines if there are breaking changes introduced in this PR. -->
<!-- BREAKING CHANGE:
Before:

After: -->

## Pull Request Checklist

- [ ] Related tickets or issues have been linked in the PR description (or missing issue).
- [ ] [Naming convention](https://github.com/dream-num/univer/blob/dev/docs/NAMING_CONVENTION.md) is followed (**do please** check it especially when you created new plugins, commands and resources).
- [x] Unit tests have been added for the changes (if applicable).
- [x] Breaking changes have been documented (or no breaking changes introduced in this PR).

## Demo

![demo](https://raw.githubusercontent.com/mvanhorn/pr-demo-assets/main/osc-bulk-1116/thread-comment-lock-config/preview.gif)

Full recording (MP4): https://raw.githubusercontent.com/mvanhorn/pr-demo-assets/main/osc-bulk-1116/thread-comment-lock-config/out.mp4
