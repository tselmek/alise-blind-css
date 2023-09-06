module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('basics', {
      description: 'Generate files for a new game of Blind CSS',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Entrez votre prénom et nom de famille'
        },
        {
          type: 'input',
          name: 'promo',
          message: 'Entrez votre promotion (entre 1993 et 2026)'
        },
      ], // array of inquirer prompts
      actions: [
        {
          type: 'add',
          path: 'src/contest/{{pascalCase name}}/{{pascalCase name}}.js',
          templateFile: 'src/contest/template/ContestantName.hbs',
        },
        {
          type: 'add',
          path: 'src/contest/{{pascalCase name}}/{{pascalCase name}}.module.css',
          templateFile: 'src/contest/template/ContestantName.module.css',
        },
        {
          type: 'modify',
          path: 'src/app/contestants.js',
          pattern: /(import[^;]*;)*\s*export/gm,
          template: '$1\nimport {{pascalCase name}} from \'@/contest/{{pascalCase name}}/{{pascalCase name}}\';\n\nexport',
        },
        {
          type: 'append',
          path: 'src/app/contestants.js',
          pattern: /(\s*export\s*const\s*allContestants\s*=\s*\[)/gm,
          templateFile: 'src/contest/template/contestant-entry.hbs',
        }
      ]  // array of actions
  });
};
