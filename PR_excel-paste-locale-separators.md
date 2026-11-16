Title: fix(sheets-ui): read Excel's displayed separators when pasting numbers

<!--
 Thank you for submitting a Pull Request.
 Please read our Pull Request guidelines:
 https://github.com/dream-num/univer/blob/dev/CONTRIBUTING.md#submitting-pull-requests
-->

<!-- Associate issues with the pull request if there is one. Separate them width commas. -->
<!-- Feel free to delete this if there is no related issue. -->
close #6087

<!-- A description of the proposed changes. -->

Excel clipboard HTML declares the region's displayed decimal and thousands separators on the table style (`mso-displayed-decimal-separator` / `mso-displayed-thousand-separator`). The HTML-to-USM converter now reads those values (including escaped `\,` / `\.`, space / `\0020` / non-breaking space, and apostrophe) and, when a cell is a number in that notation, writes a numeric cell instead of text. `x:num` is preferred when it is present and valid. Text formats (`mso-number-format:"\@"`) stay text. US Excel (`"."` / `","`) and non-Excel HTML are unchanged. Univer's own number display is not modified.

<!-- How to test them. -->

Copy a numeric range from Excel in a comma-decimal locale (or paste the captured HTML from `packages/sheets-ui/src/services/clipboard/__tests__/excel-locale-separator-html.ts`) into the sheets workbench. `516.382.306.730` should become the number `516382306730`, and `=SUM` over the pasted cells should add them. `pnpm --filter @univerjs/sheets-ui test`: 147 files / 1253 passed (untouched `upstream/dev` baseline: 147 / 1239). Converter coverage rose (statements 92.66% → 93.53%, branches 83.92% → 84.69%, functions 89.83% → 91.89%, lines 93.20% → 93.83%). `pnpm --filter @univerjs/sheets-ui typecheck` passed. `pnpm exec eslint` on the changed clipboard files: 0 errors. `pnpm --filter @univerjs/sheets-ui... run build` passed (`pnpm build:plugins --filter @univerjs/sheets-ui...` is not a defined script here). Not run: full-repo `pnpm lint`. Not verified in this change: a live Excel process on a German/Vietnamese OS (the demo uses captured Excel clipboard HTML), or Google Sheets / Univer-to-Univer paste in the browser.

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

![demo](https://raw.githubusercontent.com/mvanhorn/pr-demo-assets/main/osc-bulk-1116/excel-paste-locale-separators/preview.gif)

Full recording (MP4): https://raw.githubusercontent.com/mvanhorn/pr-demo-assets/main/osc-bulk-1116/excel-paste-locale-separators/out.mp4
