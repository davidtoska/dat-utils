import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");

describe("chrome-app", () => {
  it("works", () => {
    const runner = new SchematicTestRunner("schematics", collectionPath);
    const tree = runner.runSchematic("chrome-app", {}, Tree.empty());

    expect(tree.files.length).toEqual(6);
  });
});
