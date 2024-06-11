# Contributing

This guide will show you how to contribute code to `@alifd/next`. Please take a few minutes to read before creating an issue or pull request.

## Open Development

All development work takes place on Github, and whether it's a core team member or an external contributor, the pull request will go through the same review process.

## Branch Organization

* Bug fix/new feature, please pull request to master.

## Create Issue

We use [GitHub Issues] (https://github.com/alibaba-fusion/next/issues) to track bugs and features. When creating an issue, please select Bug report or Feature request [https://fusion.design/feedback] template and fill in the necessary information to help us quickly locate and resolve the problem.

Also, before you report a bug or submit a feature, make sure you have already searched for an existing issue.

## Pull Request

We will focus on all pull requests, review and merge your code, and may ask you to make some changes or tell you why we can't accept such changes.

Before you send a Pull Request, please make sure you follow the steps below:

1. Make changes based on the **correct branch** described above.

2. Run `npm install` in the project root directory to install all development dependencies.

3. If you want to update the code of the Button component, run `npm start button` in the project root directory, it will automatically launch the browser for you and open the demo page.

4. If you fix a bug or add a new feature, be sure to write the test case. You can start all the components test case by running `npm run test` in the root directory, and you can also use `npm run test button` to run the test case for the specified component during development.

5. Make sure that the code you've modified passes the eslint and stylelint checks, and we'll automate the lint on the code files you've added to the git cache during the precommit phase.

6. Make sure your git commit message format meets our requirements: `<type>(<scope>): <subject>`, `type` is required, optional values include: build|
Chore|ci|docs|feat|fix|perf|refactor|revert|style|test|temp; `scope` is required, fill in the specific modified component name, such as `feat(Menu)`, if it is a bulk modification or other changes, you can write as `*`, such as `chore(*)`; `subject` is required, please use English, start with lowercase, if you close the issue, you should write such as `fix(Menu): resolve xxx issue, close #12 `, we will check the submission information in the git commit message phase.

7. If a pull request has multiple commits, rebase the multiple commit record to one commit record.

## Development Workflow

1. Fork this repo to your own github account (step in the page https://github.com/alibaba-fusion/next , click on the fork button in the upper right cornor)
2. Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/alibaba-fusion/next)

Or clone locally:

Download the code you just forked on https://github.com/[your account]/next
```
git clone git@github.com:[your account]/next.git
```

3. Step in the files, create a new branch and start your work
```
cd next
git checkout -b fix-issue-100
```

After doing all the stuff above and install the dependencies with `npm install`, you can also run the following commands:

* `npm start component` start the debug page of the specified component

* `npm test component` start the test case of the specified component

* `npm run api component` update the Chinese API documentation for the specified component automatically based on the code and comments

* `npm run test` start test case of all components
  
* `npm run test:head` start test case of all components with browser, used for debugging

* `npm run build` compile es2015+ code to es5 and generate lib and es directories

## Notes

1. To support SSR (Server-Side-Render):
    - Avoid using client variables such as windows as far as possible ( There is no window object on the server side. If you need to use it, you need to judge whether it exists step by step from the window. )
    - Use `typeof` to check whether a client object exits or not
        ```
        if(window && window.autoScroll)
        =>
        if(typeof window != undefined && window.autoScroll) )
        ```
    - Avoid mounting timers (possible memory leaks) to global objects such as windows
    - Avoid uncertain outputs such as random () (the output is predictable, independent of environment, etc.)
2. The variable of SASS color calculation needs to start with `$color-calcualte-`, and should be written to `variable.scss` (not to `main.scss`), refer to `Search`, see [#1029](https://github.com/alibaba-fusion/next/issues/1029).

## Release Schedule

Follow [Semantic Versioning 2.0.0](https://semver.org/) Semantic Version Strategy.

Patch Version: Every Wednesday release of a bugfix version(anytime for urgent bugfix).

Minor Version: Monthly release of a backward compatible version with new features.

Major version: contains some break changes, usually one to two years release of a version.

