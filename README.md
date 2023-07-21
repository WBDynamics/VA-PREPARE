# VA-PREPARE
Maternal Health Summit

## Dev URL's
Main Branch - https://ambitious-cliff-0cd489410.3.azurestaticapps.net/
Develop Branch - https://green-ground-06c1c1c10.3.azurestaticapps.net/

## How to Install and Run the Project
1. Clone this repo. Navigate to the directory where you'd like to put the VA-PREPARE directory and run:
    ```bash
    git clone https://github.com/WBDynamics/VA-PREPARE.git
    ```
    
    This will create a va-ncchi-beta directory with the website files inside. Navigate to this new directory:
    ```bash
    cd VA-PREPARE
    ```

1. Install Node.js `16.16.0` or higher =>
    * Check your node version if it is already installed `node -v`
    * [Download](https://nodejs.org/en/).    

1. Install the project dependencies:
    ```bash
    npm install
    ```
    
1. Start the local server. You'll find the home page located at: `http://localhost:8080/`
    ```bash
    npm start
    ```

1. Run gulp to watch any changes you make to `scss` files:
    ```bash
    gulp watch
