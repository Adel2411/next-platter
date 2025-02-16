# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.5.1](https://github.com/Adel2411/next-starter-template/compare/v0.5.0...v0.5.1) (2025-02-16)

### Added

- Added a `.gitignore` file to the new project.
- Created an initial commit after `npm install`.

## [0.5.0](https://github.com/Adel2411/next-starter-template/compare/v0.4.1...v0.5.0) (2025-02-16)

### Added

- Added **cross-platform support** using `cross-spawn` for seamless compatibility across Windows, macOS, and Linux.
- Improved **dependency installation** by displaying `npm install` output in real-time for better visibility.

### Changed

- Added **`cwd` option** to `spawn` calls to avoid changing the working directory with `process.chdir`.
- Simplified code and removed redundant logic for better maintainability.

### Fixed

- Fixed `npm install` issues on Windows by automatically resolving `.cmd` files with `cross-spawn`.
- Enhanced error handling for `git init` and `npm install` to ensure graceful exits on failure.

---

### [0.4.1](https://github.com/Adel2411/next-starter-template/compare/v0.4.0...v0.4.1) (2025-02-15)

### Added

- Added Logo of the CLI Tool.

### Changed

- Updated README.md file and GitHub repo description.

---

## [0.4.0](https://github.com/Adel2411/next-starter-template/compare/v0.3.2...v0.4.0) (2025-02-13)

### Added

- Added success color (green) and applied it to success toasts.
- Added some animations.

### Changed

- Changed current success toast to neutral toast.
- Changed Cypress test structure to make it more readable and beautiful.
- Changed landing and protect page title to fit the current template (mention next-platter too).

---

### [0.3.2](https://github.com/Adel2411/next-starter-template/compare/v0.3.0...v0.3.2) (2025-02-08)

### Fixed

- Solved the install dependencies message glitching.
- Removed initial commit creation step.

---

## [0.3.0](https://github.com/Adel2411/next-starter-template/compare/v0.3.1...v0.3.0) (2025-02-08)

### Added

- Initialized git by default and made initial commit.

### Changed

- Refactored "/" and "/protected" routes (removed features/home and features/protected folders).

### Fixed

- Solved Cypress errors.
- Don't copy ".next" before the `npm i` command.
- Solved the kill process bug.
