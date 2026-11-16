# Demo: Excel paste locale separators

Recorded against the real `pnpm --filter univer-examples dev` workbench at `http://127.0.0.1:5173/#sheets`.

The clipboard HTML is the Excel shape for a comma-decimal / dot-thousands locale (`mso-displayed-decimal-separator:"\,"`, `mso-displayed-thousand-separator:"\."`) with displayed cells `516.382.306.730`, `12,5`, and `1.000,5`. It is injected through `univerAPI.pasteIntoSheet` (the workbench paste path) and labeled on screen as the captured Excel clipboard.

## Before (`upstream/dev`)

- A1 stays the text `516.382.306.730` (cell type text).
- A2 stays `12,5`, A3 stays `1.000,5`.
- `=SUM(A1:A3)` evaluates to `0`.

## After (`feat/excel-paste-locale-separators`)

- A1 is the number `516382306730` (sheet display `516,382,306,730`).
- A2 is `12.5`, A3 is `1000.5`.
- `=SUM(A1:A3)` evaluates to `516382307743`.

## Media

- `out.mp4`: 1920x1080, 30 fps, H.264 yuv420p, 28.63 s (Playwright `recordVideo` of the workbench, concatenated before/after).
- `preview.gif`: 1280x720, 10 fps, 1,605,763 bytes.
- `screenshots/`: stills of each labeled step.
- `logs/`: baseline and after test/coverage/eslint/typecheck/build output, plus `ffprobe.txt`.
