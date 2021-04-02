$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/Mohammad/eclipse-workspace/BDDCucumberFrameWork/src/main/java/Features/affiliateMap.feature");
formatter.feature({
  "line": 1,
  "name": "OpenCart Affiliate Account Feature",
  "description": "",
  "id": "opencart-affiliate-account-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "OpenCart Affiliate Scenario",
  "description": "",
  "id": "opencart-affiliate-account-feature;opencart-affiliate-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is present on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of the page is Account Login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "ghost@gmail.com",
        "ghost10"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Affiliate account link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user fills out affilate details",
  "rows": [
    {
      "cells": [
        "Company",
        "Website",
        "TaxId",
        "Cheque Payee Name"
      ],
      "line": 15
    },
    {
      "cells": [
        "Google",
        "gmail.com",
        "23421",
        "Hamed"
      ],
      "line": 16
    },
    {
      "cells": [
        "Netflix",
        "netflix.com",
        "5342",
        "Mohammad"
      ],
      "line": 17
    },
    {
      "cells": [
        "YTS",
        "yts.com",
        "4234",
        "David"
      ],
      "line": 18
    },
    {
      "cells": [
        "Amazon",
        "amazon.com",
        "1234",
        "Ali"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "agreement option is clicked and continue is clicked",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "success message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AffiliateWithMapStepDefinition.user_present_on_Login_page()"
});
formatter.result({
  "duration": 12609259000,
  "status": "passed"
});
formatter.match({
  "location": "AffiliateWithMapStepDefinition.title_of_the_page_is_Account_Login()"
});
formatter.result({
  "duration": 70490100,
  "status": "passed"
});
formatter.match({
  "location": "AffiliateWithMapStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 423729800,
  "status": "passed"
});
formatter.match({
  "location": "AffiliateWithMapStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 1148721600,
  "status": "passed"
});
formatter.match({
  "location": "AffiliateWithMapStepDefinition.user_is_on_Account_Page()"
});
formatter.result({
  "duration": 14514400,
  "status": "passed"
});
formatter.match({
  "location": "AffiliateWithMapStepDefinition.user_clicks_on_Affiliate_account_link()"
});
formatter.result({
  "duration": 541445800,
  "status": "passed"
});
formatter.match({
  "location": "AffiliateWithMapStepDefinition.user_fills_out_affilate_details(DataTable)"
});
formatter.result({
  "duration": 8399383600,
  "status": "passed"
});
formatter.match({
  "location": "AffiliateWithMapStepDefinition.agreement_option_is_clicked_and_continue_is_clicked()"
});
formatter.result({
  "duration": 1038054100,
  "status": "passed"
});
formatter.match({
  "location": "AffiliateWithMapStepDefinition.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 55977500,
  "status": "passed"
});
formatter.match({
  "location": "AffiliateWithMapStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 28900,
  "status": "passed"
});
});