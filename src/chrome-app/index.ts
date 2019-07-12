import {
  Rule,
  SchematicContext,
  Tree,
  url,
  apply,
  template,
  move
} from "@angular-devkit/schematics";
import { strings } from "@angular-devkit/core";
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function chromeApp(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const logger = _context.logger;
    logger.log("warn", tree.root.path);

    // Rules to apply to tree.
    const rules: Rule[] = [template({ ...strings, ..._options }), move("dist")];

    const source = url("./files");

    return apply(source, rules)(_context);
  };
}
