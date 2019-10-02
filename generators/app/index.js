var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name:",
        default: this.appname // Default to current folder name
      },
      {
        type: "input",
        name: "port",
        message: "On which port to run the app:",
        default: 3000
      },
      {
        type: "confirm",
        name: "confirmed",
        message: "Would you like to create the new service?"
      }
    ]);

    this.log("app name", this.answers.name);
    this.log("running on port: ", this.answers.port);
    this.log(this.answers)
  }

  writing() {
    this.fs.copyTpl(
      `${this.templatePath()}/**/!(_)`,
      this.destinationPath(),
      this.answers,
    );
    this.fs.copyTpl(
      `${this.templatePath()}/**/.*`,
      this.destinationPath('./'),
      this.answers,
    );
  }

  install() {
    this.npmInstall()
  }
};