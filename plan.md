# PLAN

## Initial Set Up (everyone)

-   Create and initiliase a git repo
-   Add everyone as contributors
-   Install express, pg, nodemon
-   Create branches for each pair

## Routing (Hannah & Shiv)

-   Set up a routes and models folder
-   Create a GET request that includes the following logic...

    ### STEP 1 (Checking the parameters are defined in the URI)

    (Routes folder) Initial logic that says: - If certain parameters exist (query, breed, age, address, multifactor discount) then display a payload that includes the price of the quote - If these certain parameters don't exist, then send an error message

    ### STEP 2 (Validation of dog breed)

    -   (Models folder) Create a function that checks if a dog breed exists
    -   (Routes folder) If the dog breed doesn't exist then we return an error message. This puts a break in the code.

    ### STEP 3 (Validation of UK address)

    -   (Models folder) Create a function that checks if an address is valid
    -   (Routes folder) If the address doesn't exist then we return an error message. This puts a break in the code.

    ### STEP 4 (Quote price)

    (Routes folder) - Set up the base price for the quote to be £120 - Calculation: quote = basePrice

    ### STEP 5 (Discounting for specific dog breed)

    -   (Models folder) Create a function that says "If your dog breed is e.g. poodle/labrador/labradoodle then you can apply for a discount" i.e. return true
    -   (Routes folder) If the function returns
        -   TRUE - set the value of the discount to 0.1
        -   FALSE - set the value of the discount to 0
    -   Now

    ```
    quote = basePrice * (basePrice * breedDiscount)
    ```

    ### STEP 6 (Discounting for specific address places)

    -   (Models folder) Create a function that says "If you live in e.g. Birmingham/London/Leeds then your price is raised " i.e. return true
    -   (Routes folder) If the function returns
        -   TRUE - set the value of the increase to 1.15
        -   FALSE - set the value of the increase to 0
    -   Now

    ```
    quote = basePrice + (basePrice * breedDiscount) + (basePrice * addressIncrease)
    ```

    ### STEP 7 (Increasing the price for age)

    Logic that says: - Base pet price at birth = £120 - 1 year old pet = 105% of this price (£126) - 2 year old pet = 110% (£132) - 3 = 115% - 4 = 120% - 5 = 125% - 6 = 135% - 7 = 145% - 8 = 155% - 9 = 165% - 10+ = 175%

    ### STEP 7 (Multipet discount)

    -   If there is 1 pet apply 0% discount
    -   If there is 2+ pets apply 10% discount

## Dashboard (Neemo, Mary, Abdul-Aziz)

-   ### Backend

    -   Create a database on Heroku
    -   Create a logic for counting the number of requests made

    ## Frontend
