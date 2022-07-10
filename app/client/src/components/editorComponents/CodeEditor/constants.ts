import { Position } from "codemirror";

// For these error types, we want to show a warning
// All messages can be found here => https://github.com/jshint/jshint/blob/2.9.5/src/messages.js
export const WARNING_LINT_ERRORS = {
  W098: "'{a}' is defined but never used.",
  W014:
    "Misleading line break before '{a}'; readers may interpret this as an expression boundary.",
};
// These lint errors should be overlooked
export const UNWANTED_LINT_ERRORS: Record<string, string[]> = {
  codes: ["E041"],
  reasons: [],
};

// Refined error messages
export const REFINED_LINT_ERROR_MESSAGES: Record<string, string> = {
  "'await' is not defined.":
    "'await' expressions are only allowed within async functions. Did you mean to mark this function as 'async'?",
};
export const LINT_TOOLTIP_CLASS = "CodeMirror-lint-tooltip";
export const LINT_TOOLTIP_JUSTIFIED_LEFT_CLASS = "CodeMirror-lint-tooltip-left";
export enum LintTooltipDirection {
  left = "left",
  right = "right",
}
export const JS_OBJECT_START_STATEMENT = "export default";
export const INVALID_JSOBJECT_START_STATEMENT = `JSObject must start with '${JS_OBJECT_START_STATEMENT}'`;
export const CODE_EDITOR_START_POSITION: Position = { line: 0, ch: 0 };
export const VALID_JS_OBJECT_BINDING_POSITION: Position = {
  line: 0,
  ch: JS_OBJECT_START_STATEMENT.length,
};
