# Cypress Demo project
Demo project with Cypress tool on test website as `amazon`


## Installations required
This project requires NodeJs and npm installed.


## How to get the project and install dependencies
```git clone <<repository_path>>```
```cd tracktikAssign```
```npm install```

## To get the cypress running :
### Scripts added in project can run automation in different ways -
1.To open the cypress runner:
  
  ```npm run cy:open```
this shows the runner window and specific test from different folders can be selected to run.
Browser value from dropdown can also changed in cypress runner window.

2.To run all scripts in headless mode
```npm run headless```
It executes all tests in console and gives result same as in snapshot.

3.To run all scripts in headed browser mode with reports generated
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





****
## Resources

📚 [Cypress Documentation](https://www.cypress.io/how-it-works/)