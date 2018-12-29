# Contributing

This guide will show you how to contribute code to `@alifd/next`. Please take a few minutes to read before creating an issue or pull request.

## Open Development

All development work takes place on Github, and whether it's a core team member or an external contributor, the pull request will go through the same review process.

## Branch Organization

* Bug fix, please pull request to master.
* A new branch like feature/1.10.0 is opened every month, and new feature should be pull request to the branch.

## Create Issue

We use [GitHub Issues] (https://github.com/alibaba-fusion/next/issues) to track bugs and features. When creating an issue, please select Bug report or Feature request [https://fusion.design/feedback] template and fill in the necessary information to help us quickly locate and resolve the problem.

Also, before you report a bug or submit a feature, make sure you have already searched for an existing issue.

## Pull Request

We will focus on all pull requests, review and merge your code, and may ask you to make some changes or tell you why we can't accept such changes.

Before you send a Pull Request, please make sure you follow the steps below:

1. Make changes based on the **correct branch** described above.

2. Run `npm install` in the project root directory to install all development dependencies.

3. If you want to update the code of the Button component, run `npm run dev button` in the project root directory, it will automatically launch the browser for you and open the demo page.

4. If you fix a bug or add a new feature, be sure to write the test case. You can start all the components test case by running `npm run test` in the root directory, and you can also use `npm run test button` to run the test case for the specified component during development.

5. Make sure that the code you've modified passes the eslint and stylelint checks, and we'll automate the lint on the code files you've added to the git cache during the precommit phase.

6. Make sure your git commit message format meets our requirements: `<type>(<scope>): <subject>`, `type` is required, optional values include: build|
Chore|ci|docs|feat|fix|perf|refactor|revert|style|test|temp; `scope` is required, fill in the specific modified component name, such as `feat(Menu)`, if it is a bulk modification or other changes, you can write as `*`, such as `chore(*)`; `subject` is required, please use English, start with lowercase, if you close the issue, you should write such as `fix(Menu): resolve xxx issue, close #12 `, we will check the submission information in the git commit message phase.

7. If a pull request has multiple commits, rebase the multiple commit record to one commit record.

## Development Workflow
After you clone the `@alifd/next` and install the dependencies with `npm install`, you can also run the following commands:

* `npm run dev component` start the debug page of the specified component

* `npm run test component` start the test case of the specified component

* `npm run api component` update the Chinese API documentation for the specified component automatically based on the code and comments

* `npm run test` start test case of all components

* `npm run build` compile es2015+ code to es5 and generate lib and es directories

* `npm run pack` package the file and generate the dist directory


## Release Schedule

Follow [Semantic Versioning 2.0.0](https://semver.org/) Semantic Version Strategy.

Patch Version: Every Wednesday release of a bugfix version(anytime for urgent bugfix).

Minor Version: Monthly release of a backward compatible version with new features.

Major version: contains some break changes, usually one to two years release of a version.

