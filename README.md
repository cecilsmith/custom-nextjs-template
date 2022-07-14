**Copyright (C) Cecil Smith - All Rights Reserved**

Unauthorized copying of any file, via any medium is strictly prohibited

Proprietary and confidential

Written by Cecil Smith, July 2022


# Next.js with React and MUI

# Installation instructions

1. Open Terminal
2. Create a new directory and navigate to it
   1. Ex: `cd ./Desktop && mkdir Website && cd ./Website`
3. Check if git is installed with `git --version`. If installed, skip to step 4.
   1. If not installed, follow this page's instructions: [install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
   2. Check if git is installed again with `git --version`
4. Run `git clone *https://git_repo_link.git*` to clone the repo into our directory
   1. If this fails, you may need to login to GitHub through your terminal. More information can be found [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). 
      * Get a `Personal Access Key` from your account settings under `Developer Options`.
      * Create a PAT and take note of it.
      * Use your username for the `username` and your *token* for the `password`.
      * If successful, move onto step 5.
   2. If that is not the problem, you may need a fresh git link to the repo. You can get it on the repo's site by clicking on the green download button and copying the link there. It will end with "`.git`"
   3. Once you have diagnosed the problem, retry `git clone *git link*`
5. Now that the repo is downloaded, we need to make sure Node.js is installed. Check whether it is installed with `node -v`
   1. If it is installed, got to step 6.
   2. If it is not installed, install it following the documentation [here](https://nodejs.dev/learn/how-to-install-nodejs).
6. Check that Node Package Manager is installed with `npm -v`. It should be already installed with Node.js.
7. **In the directory of your project (you may need to re-navigate there as it may be in a subfolder)**, run `npm install`. This will install all the necessary packages to get your project running.
8. Run `npm run build`
9. Run `npm start`
10. The website should be running on port 3000.

<img width="344" alt="Screen Shot 2022-07-12 at 4 59 04 PM" src="https://user-images.githubusercontent.com/19243227/178602756-e57f617c-3691-4624-ae04-57106fcd3550.png">

```mermaid
flowchart TD
   A[Open Terminal] --> B[Create a new directory and navigate to it: `cd ./Desktop && mkdir Website && cd ./Website`];
   B --> C[Check if Git is installed with `git --version`.];
   C -- Yes --> D[git clone *https://git_repo_link.git* to clone the repo into our directory];
   C -- No --> E[Install Git. Click here for a guide.];
   E --> C;
   D -- Success --> G[Check if Node.js is installed with `node -v`];
   D -- Failure --> F[You may need to login to GitHub through your terminal. Click here for more information.];
   F --> U[Get a `Personal Access Key` from your account settings under `Developer Options`];
   U --> V[Create and copy the PAT];
   V --> W[Use your username for the `username` and your *token* for the `password`];
   W --> D;
   G -- Success --> H[Check if Node Package Manager npm is installed with `npm -v`];
   G -- Not installed --> X[Click here for a guide to install];
   H -- Success --> I[Re-navigate to be inside the repo folder];
   H -- Not installed --> N[Click for documentation on installation. It should be already installed with Node.js];
   I -- Success --> J[Run 'npm install'];
   J -- Success --> K[Run 'npm run build'];
   K -- Success --> L[Run 'npm start'];
   K -- Failure --> O[The website failed to build. There are errors in your code.];
   O -- Errors Fixed --> K;
   L -- Success --> M[The website should be running on localhost at port 3000];
   L -- Failure --> Z[The web server failed to start];
   Z --> T[Look in terminal output for potential problems/fixes];
   T -- Errors Fixed --> K;
   J -- Failure --> P[Failed to install packages];
   P --> Q[You may have inconsistences in your package.lock file];
   Q -- Errors Fixed --> J;
   Q --> R[Packages you may be attempting to access are no longer supported.];
   R -- Errors Fixed --> J;
   R --> S[Packages may be a local download];
   S -- Errors Fixed --> J;
   
   click E href "https://git-scm.com/book/en/v2/Getting-Started-Installing-Git";
   click F href "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token";
   click N href "https://nodejs.dev/learn/how-to-install-nodejs";
   click X href "https://nodejs.dev/learn/how-to-install-nodejs";
   
   linkStyle 0 stroke:green,stroke-width:4px;
   linkStyle 1 stroke:green,stroke-width:4px;
   linkStyle 2 stroke:green,stroke-width:4px;
   linkStyle 3 stroke:red,stroke-width:4px;
   linkStyle 5 stroke:green,stroke-width:4px;
   linkStyle 6 stroke:red,stroke-width:4px;
   linkStyle 11 stroke:green,stroke-width:4px;
   linkStyle 13 stroke:green,stroke-width:4px;
   linkStyle 15 stroke:green,stroke-width:4px;
   linkStyle 16 stroke:green,stroke-width:4px;
   linkStyle 17 stroke:green,stroke-width:4px;
   linkStyle 20 stroke:green,stroke-width:4px;
   
   linkStyle 12 stroke:red,stroke-width:4px;
   linkStyle 14 stroke:red,stroke-width:4px;
   linkStyle 18 stroke:red,stroke-width:4px;
   linkStyle 21 stroke:red,stroke-width:4px;
   linkStyle 24 stroke:red,stroke-width:4px;
```
