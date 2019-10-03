const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-nextjs-apollo-graphql-materialui:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ name: "myProject", projectAuthor: "my-name" });
  });

  it("creates files with proper content", () => {
    assert.file([
      "pages/_document.js",
      "pages/_app.js",
      "pages/index.js",
      "next.config.js",
      "package.json",
      "README.md",
      ".gitignore",
      "server.js"
    ]);

    assert.fileContent('package.json', '"name": "myProject"')
    assert.fileContent('package.json', '"author": "my-name"')
    assert.fileContent('server.js', 'port = process.env.PORT || 3000')
  });
});
