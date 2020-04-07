package stepDefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;

//import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.junit.runner.RunWith;
//import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

@RunWith(Cucumber.class)
public class homepageValidation {
	
	static RemoteWebDriver driver;
	
    @Given("^User Open Browser for navigating the Home Page$")
    public void user_open_browser_for_navigating_the_home_page() throws Throwable {
    	
    	/*
    	DesiredCapabilities ds = DesiredCapabilities.chrome();
    	URL url = new URL("http://localhost/wd/hub");
    	driver = new RemoteWebDriver(url,ds);
    	*/
    	       
    	
        System.setProperty("webdriver.chrome.driver", "C:\\JavaProjects\\BDD_DOCKER\\forumautomation\\Drivers\\chromedriver.exe");
        driver= new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(40,TimeUnit.SECONDS);
        

    }

    @When("^User Open the Home Page Web Site$")
    public void user_open_the_home_page_web_site() throws Throwable {
    	driver.get("https://forum.digitalpoint.tech/");        
    }

    @Then("^Home Page Launched$")
    public void home_page_launched() throws Throwable {
    	System.out.println("The home page is landed.!");
    }

    @And("^Title is Validated$")
    public void title_is_validated() throws Throwable {
        String hexpectedtitle="Digital Point Forum";
        String hactualtitle=driver.getTitle();
        Assert.assertEquals(hexpectedtitle, hactualtitle);
        System.out.println("title gets validated.!");
    }
    
    @And("^Home Page is Quit$")
    public void home_page_is_quit() throws Throwable {
        driver.close();
    }

}
