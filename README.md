# Cypress Demo project
Demo project with Cypress tool on test website as `amazon`


## Installations required
This project requires NodeJs and npm installed as prerequisite.


## How to get the project and install dependencies

      ```git clone <<repository_path>>```
      ```cd tracktikAssign```
      ```npm install```

## To get the cypress running :
### Scripts added in project can run automation in different ways -
- To open the cypress runner:
  
      ```npm run cy:open```

  ![Result](../tracktikAssign/cypress/fixtures/Cypress_runner.png)


this shows the runner window and specific test from different folders can be selected to run.
Browser value from dropdown can also changed in cypress runner window.

![Result](../tracktikAssign/cypress/fixtures/Execution_cypressWindow.png)




- To run all scripts in headless mode

      ```npm run headless```

It executes all tests in console and gives result same as in snapshot --


![Result](../tracktikAssign/cypress/fixtures/Headless_run.png)




- To run all scripts in headed browser mode with reports generated

      ```npm run e2e```




### Paramatrizing the scripts (giving dynamic values from commandline):
- To run scripts with new domain url
(by default baseUrl value set in scripts is overritten by commandline value)

      ```npm run e2e -- --env baseUrl=https://www.amazon.com```


- To run automaiton in different browsers:

      ```npm run e2e -- --browser chrome```


- To run automation for particular spec file:

      ```npm run e2e -- --spec "<path_of_spec_file>"```


### Environment variables can be changed in ``cypress.json`` file
- values such folder path for saving snapshots or videos of execution

      ``` {  "video": false  } ```


### HTML reports are generated using npm ```mochawesome``` library:
- reports are saved automatically in ```../reports``` folder
Reports are generated as:-- 

![Result](../tracktikAssign/cypress/fixtures/Reports_html.png)




****
## Resources

📚 [Cypress Documentation](https://www.cypress.io/how-it-works/)