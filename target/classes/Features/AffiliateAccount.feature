Feature: OpenCart Affiliate Account Feature 


Scenario: OpenCart Affiliate Scenario

Given  user is present on Login Page 
When  title of the page is Account Login 
Then  user enters username and password 
|ghost@gmail.com|ghost10|
Then  user click on login button
Then  user is on Account Page 
Then user clicks on Affiliate account link
Then user fills out affilate details
|Amazon|amazon.com|1234|Ali|
Then agreement option is clicked and continue is clicked
Then success message should be displayed
And close the browser