$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("home.feature");
formatter.feature({
  "line": 2,
  "name": "Digital Point Forum Home Page Validation",
  "description": "",
  "id": "digital-point-forum-home-page-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regressiontest"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Home Page should be launched and validated",
  "description": "",
  "id": "digital-point-forum-home-page-validation;home-page-should-be-launched-and-validated",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User Open Browser for navigating the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Open the Home Page Web Site",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Home Page Launched",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Title is Validated",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Home Page is Quit",
  "keyword": "And "
});
formatter.match({
  "location": "homepageValidation.user_open_browser_for_navigating_the_home_page()"
});
formatter.result({
  "duration": 11823531800,
  "status": "passed"
});
formatter.match({
  "location": "homepageValidation.user_open_the_home_page_web_site()"
});
formatter.result({
  "duration": 2834363400,
  "status": "passed"
});
formatter.match({
  "location": "homepageValidation.home_page_launched()"
});
formatter.result({
  "duration": 382600,
  "status": "passed"
});
formatter.match({
  "location": "homepageValidation.title_is_validated()"
});
formatter.result({
  "duration": 406742000,
  "status": "passed"
});
formatter.match({
  "location": "homepageValidation.home_page_is_quit()"
});
formatter.result({
  "duration": 4127471900,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Digital Point Forum Login Page Validation",
  "description": "",
  "id": "digital-point-forum-login-page-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regressiontest"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Login Page should be launched and validated",
  "description": "",
  "id": "digital-point-forum-login-page-validation;login-page-should-be-launched-and-validated",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User Open Browser for navigating the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Open the Login Page Web Site",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Login Page Launched",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Login Title is Validated",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Login Page is Quit",
  "keyword": "And "
});
formatter.match({
  "location": "loginValidation.user_open_browser_for_navigating_the_login_page()"
});
formatter.result({
  "duration": 9650486500,
  "status": "passed"
});
formatter.match({
  "location": "loginValidation.user_open_the_login_page_web_site()"
});
formatter.result({
  "duration": 1920937400,
  "status": "passed"
});
formatter.match({
  "location": "loginValidation.login_page_launched()"
});
formatter.result({
  "duration": 249300,
  "status": "passed"
});
formatter.match({
  "location": "loginValidation.login_title_is_validated()"
});
formatter.result({
  "duration": 24345700,
  "status": "passed"
});
formatter.match({
  "location": "loginValidation.login_page_is_quit()"
});
formatter.result({
  "duration": 250397700,
  "status": "passed"
});
});