Product	Radius (Essential)
Account	NielsenIQ (5439617)
Program	NielsenIQ (25109)


	OVERVIEW

NielsenIQ to implement impact.com's Universal Tracking Tag, Identify function, and trackConversion function for tracking Survey Complete events on nielseniq.com.  The scripts can be deployed via a tag manager or placed directly on the site.


This implementation must be performed by a skilled technical resource with a web developer's background.


EVENT NAMES (EVENT IDS)
METHOD
SITE DEFINITION
Survey Complete (49465) 
JavaScript
nielseniq.com

   

	DOCUMENT HISTORY

DATE
AUTHOR
NOTES
Sep 4, 2024
launch@impact.com
Document created























	TECHNICAL REQUIREMENTS


The following elements must be completed by NielsenIQ and verified by your impact.com Implementation Engineer before your new program(s) and/or conversion event(s) can go live.  


Provide the domain(s) for all staging environments where the implementation will be tested
Confirm the production domain(s) where the implementation will be deployed:
nielseniq.com
Confirm Impact can append the parameter, irclickid={clickid}, on all landing page URLs
A landing page is any webpage to which a consumer is directed when they click on an ad
See Appendix 1, User Journey at the end of this document for an example application of the Click Id
Confirm the production domain(s) and/or URL structure permitted for Deep Linking:
nielseniq.com,*.nielseniq.com
A Deep Link is any webpage specified by a partner (as a modification to the original ad landing page) to serve as the landing page for an ad for the purpose of promoting a product, product category, offer promotion, or similar tactic. 
Staging
Implement and test the Universal Tracking Tag
Implement and test the Identify function
Implement and test the trackConversion function
Complete end-to-end testing for any/all conversion events
Production
Implement and test the Universal Tracking Tag
Implement and test the Identify function
Implement and test the trackConversion function
Complete end-to-end testing for any/all conversion events
Complete conversion event validation for any/all conversion events


Guidelines for CustomProfileIds
Passing a CustomProfileId is recommended for the identify and trackConversion functions included in this document
To generate an effective CustomProfileId, ideally a UUID, please adhere to the following recommendations:
Non-Personal Data: The identifier should not contain any data that could directly identify an individual, such as email addresses or authenticated user IDs. Instead, use the respective CustomerEmail (SHA1 hashed) and CustomerId fields for such information.
Secure Storage Practices: Store the identifier in a cookie with HTTPOnly and Same-Site attributes to prevent unauthorized access and enhance security against web-based attacks.
Alignment with Site’s IP Range: Ensure the domain issuing the cookie matches the site’s IP address range, maintaining the identifier's status as a first-party element in browsers like Safari and supporting effective tracking.



Please refer to Appendix 1 at the end of this document for additional technical requirements that may be relevant to your implementation.  



	HOW TO CONTACT IMPACT.COM

During Your Onboarding Project
Log in to your impact.com user account and comment on your Tech Thread ticket.

After Your Onboarding Project
Log in to your impact.com user account, expand the Help Menu (?) in the lower-right corner of the user interface:
Submit a ticket
Start a live chat

	UNIVERSAL TRACKING TAG

Place the Universal Tracking Tag in the head section of each page of the site.  You can use this script tag on secure and non-secure pages.

<script type="text/javascript">
(function(a,b,c,d,e,f,g){e['ire_o']=c;e[c]=e[c]||function(){(e[c].a=e[c].a||[]).push(arguments)};f=d.createElement(b);g=d.getElementsByTagName(b)[0];f.async=1;f.src=a;g.parentNode.insertBefore(f,g);})('https://utt.impactcdn.com/A5439617-ed7b-40d2-a6b2-a059ea27fddd1.js','script','ire',document,window); 
</script>



Testing the Universal Tracking Tag
To confirm the Universal Tracking Tag is executing on all pages:
Search for utt.impactcdn.com in the developer tools network tab in your browser
Test on multiple pages
The recommended load time is under 3 seconds




	IDENTIFY FUNCTION

Place the Identify function in the body section of each page on the site.      


The Identify function is required to be invoked on all pages.  
This function is responsible for creating the referral event within impact.com
When the customerId and customerEmail values are unknown, pass an empty string value for each variable and not a default or placeholder value such as undefined or null


<script type="text/javascript">
               ire('identify', {customerId: 'Customer Id', customerEmail: 'SHA1 Email Address', customProfileId: 'UUID'});
</script>


Values shown in red should be set dynamically:
customerId: pass the Customer Id or an empty string
customerEmail: pass a SHA1 hash of the customer's email address or an empty string
customProfileId: pass a Unique identifier used to identify a visitor on your website (regardless of whether they're signed in). Common examples include UUIDs, anonymous user cookies, and IDFVs.  See Guidelines for CustomProfileIds in the Technical Requirements section above for more information.






















Testing the Identify function

To confirm the Identify function is invoked on all pages:
Clear cache and cookies in your browser
Open developer tools
For each website address in scope (nielseniq.com), append “?irclickid=1234567”, and hit enter
In the network tab of your browser developer tools, locate the request containing `/xur/` or `/cur/` or `/ur/` and your Program ID(25109)
Repeat for multiple pages of your site

To confirm you are passing a CustomProfileId, Customer Id and/or Customer Email (where applicable) properly:
test both “logged in” and anonymous scenarios
locate the request containing `/xur/` or `/cur/` or `/ur/` and your Program ID(25109) in the network tab in your browser developer tools and click to highlight it in the Name column
Then, review the Request Payload section under the Headers sub-tab 
When anonymous
confirm the Customer id (custid) and Customer Email (custemail) parameters are empty strings when the user is anonymous
Confirm the CustomProfileId (customprofileid) is present
When logged in
confirm the CustomProfileId (customprofileid), Customer id (custid) and Customer Email (custemail) parameters are present for “logged in” users
confirm the value of the Customer Email is a SHA1 hashed value






















	CONVERSION TRACKING

Survey Complete (49465) 

Place the trackConversion function below in the body of the confirmation page to be invoked immediately after a successful Survey Complete event.  


This tag requires the Universal Tracking Tag to be loaded for all transactions.


<script type="text/javascript">
ire('trackConversion', actionTrackerId, {
     orderId: "Order Id here",
     customProfileId: "UUID here",
     customerId: "Customer Id here",
     customerEmail: "SHA1 Hash of Customer’s Email",
               },
          {
          verifySiteDefinitionMatch:true
          }
          );
</script>


Conversion Event Parameters
Values in red should be set dynamically

PARAMETER
DESCRIPTION (DATA TYPE)
NOTES
actionTrackerId: (required)
Value specific to each conversion event; use 49465 for Survey Complete 


orderId: (required)
Unique trackable ID for each event. (AlphaNumeric 64)


customProfileId: (recommended)
Unique identifier used to identify a visitor on your website (regardless of whether they're signed in). Common examples include UUIDs, anonymous user cookies, and IDFVs.  See Guidelines for CustomProfileIds in the Technical Requirements section above for more information.  (string 70)


customerId: (recommended)
Unique customer identifier your platform assigns to customer accounts. Do not use personally identifiable data for this field. Pass an empty string if unavailable. (String 255)


customerEmail: (recommended)
SHA1 hash of customer’s email. Pass an empty string if unavailable. (String 64)





Additional parameters are available upon request



Testing the trackConversion function
To confirm the trackConversion function is invoked:
Turn on your browser developer tools
Place a test conversion
Look for your Event Id (49465) or tracking domain (nielseniq.pxf.io) in the browser network tab of your browser developer tools
Confirm all payload parameters are correct



	END TO END TESTING AND EVENT VALIDATION

Once you have confirmed the Universal Tracking Tag, Identify function, and trackConversion function using the test processes (in orange) above, it is necessary to perform a final end-to-end test in your production environment in order to validate each conversion event.


Generating a test tracking link
Log in to your impact.com user account
Navigate to Engage (left-hand nav) > Transactions > Test Actions
Click the "Start New Test" button in the upper-right corner
Select a Template Term; using Public Terms is the most common selection
Select an Ad; using the Online Tracking Link is the most common selection
If desired, add a Shared ID value
If you need to test a custom landing page, toggle the selector to "On" and input your desired landing page
If you provide a custom landing page, be sure the provided destination is permitted for Deep Linking in your program settings
Click the "Generate test link" button
Copy the test tracking link
Executing the end-to-end conversion test
Clear cache and cookies (before each test) and be sure ad-blocking browser extensions are disabled
 You may also conduct your test in your browser's private mode, incognito mode, or guest mode:
Chrome Guest Mode
Chrome Incognito mode
Edge Guest Mode
Edge Private Mode (go to File > New InPrivate Window)
Firefox Guest Mode
Firefox Private Mode (go to File > New Private Window)
Safari Private Window (go to File > New Private Window)
Copy & paste the test tracking link in your web browser; the link will direct you to your website
Record the irclickid value from the URL 
Complete a conversion event on your website and record the Order ID and payload parameters
Recommendations for Sale transactions: complete several tests with multiple SKUs, a minimum quantity of 2 for each SKU, and some tests with a promo code & discount and some without a promo code and discount 
Recommendations for Lead transactions: complete several transactions to test variations in payload parameters such as promo codes, note, or text fields, etc that are relevant to your expected payout conditions
Validating the end-to-end conversion test
Log in to your impact.com user account
Navigate to Engage (left-hand nav) > Transactions > Test Actions
Find your test conversion(s) based on the Order Id you recorded above
Hover over the transaction row to reveal the three-dot menu on the right
Click the three-dot menu and select "See Details"
Review the conversion payload details paying attention to revenue, discounts, product details, and any other element that will potentially affect partner payouts
If all the details are as expected, click the "Approve" button
If any detail is not correct, click the "Reject" button

It may take up to 30 minutes for a test transaction to surface on the Test Actions screen
If your test transaction does not appear on the test transaction screen, contact your Implementation Engineer using the process in "How to contact Impact.com" section of this document
If you reject the end-to-end test result, you will need correct the integration and repeat the end-to-end process for that conversion event until you achieve a successful result


24 hours after the solution is in production: 
pull a log file from your backend/eCommerce engine that includes the date, time, time zone, order id, and conversion revenue amount 
Please include all revenue-related metrics like tax, shipping, discounts, subtotals, etc
Send the data to your Implementation Engineer for data validation via the Tech Thread


	RESOURCES

The following Impact solutions and resources are commonly leveraged by advertisers to complete or complement their implementation  
Please log in to your Impact account and then follow the links below to explore how you can take advantage of these features

Gateway Tracking Settings - The Gateway Tracking Settings page is where you can configure behavior for your impact.com tracking links, like your default landing page, tracking templates, SSL support, how partners can deep link to your website, and a couple of advanced options.

Guide to Product Catalogs - A product catalog is a data feed that holds a list of your products and their metadata.  Many brands will create a product catalog through their e-commerce (or shopping cart) solution, which can be exported and shared with Impact.

Reversals and Modifications -  You may wish to reverse or modify conversion events before they lock. For example, if an item is returned or if an order is canceled or fraudulent, you can reverse or modify the details of the order to adjust the payout to the Partner accordingly. Actions can be reversed through one of the following processes:
Manually via the UI Pending Payouts screen
Batch Process via FTP or Email
Batch Process via API (Web Services)

Impact Brand API - Here you'll find comprehensive guides and documentation about how to use our brand API.

Impact Help Center - How can we help you today?  Visit the impact.com Help Center to find help guides, FAQs, and other useful resources.


	APPENDIX 1

Cookie Banners & Cookie Policies
If Impact’s script tags are executed after a cookie policy has been accepted, querystring parameters including the irclickid parameter must not be stripped from the URL until after consent has been given and the Universal Tracking Tag loads
Capturing and storing of the Click Id value from the landing page URL is recommended for all EMEA implementations (see Capturing and Storing Click Id in Appendix 1 below) 
Capturing and storing of the Click Id value from the landing page URL is required for any implementation if the user journey includes more than one top-level domain (see Capturing and Storing Click Id in Appendix 1 below)
 If there is a domain or top-level domain transition, the Click Id should be passed to and stored against the new domain
Click Id should be passed in the conversion payload


If you believe any of the Cookie Banner & Cookie Policies elements apply to your implementation, please inform your Implementation Engineer as soon as possible using the guidelines in the How to Contact impact.com section above. 


Capturing and Storing Click Id
Impact will dynamically populate a Click Id on Landing Page URLs resulting from clicks on Impact tracking links 
If the Click Id is present in the URL:
Capture the Click Id value and store it in a http or server-side cookie
The query string parameter name is irclickid
The Click Id value should be passed in the conversion payload
The JavaScript variable is clickid
The minimum cookie duration should match the referral window in your Template Terms
See the Help Center article Create Template Terms for more information


User Journey 
A user visits nielseniq.com from an Impact tracking link
Impact will dynamically populate a Click Id value in a landing page URL parameter called irclickid
e.g. https://nielseniq.com?irclickid=14zqjADgl7uNcN9V8uPPgD3Cj:oube4Osd-nEHg-PBfM
NielsenIQ loads Impact’s Universal Tracking Tag in the head followed by the Identify function in the body
User navigates around nielseniq.com
NielsenIQ loads Impact’s Universal Tracking Tag in the head followed by the Identify function in the body on every page of the site
User completes a/an Survey Complete event
NielsenIQ loads Impact’s Universal Tracking Tag in the head followed by the trackCoversion function in the body


To alter the destination URL of the Test Tracking Link:
If your tracking link is https://program.sjv.io/c/1234567/1234567/12345
Add a "u" parameter to the tracking link
Add an encoded version of your desired landing page URL as the value of the "u" parameter
For example
https://www.somelandingpage.com 
will become
https%3A%2F%2Fwww.somelandingpage.com
Your final test tracking link will be:
https://program.sjv.io/c/1234567/1234567/12345?u=https%3A%2F%2Fwww.somelandingpage.com

The above process can be used to complete end-to-end tests in staging / development and production environments
If you alter the destination URL, be sure the new destination is permitted for Deep Linking in your program settings









































Implementation of Universal Tracking Tag, Identify Function, and Track Conversion on Verint Surveys 
Preliminary Results: 
Browser Tested: Google Chrome and Mozilla Firefox (Incognito Mode) 
Test URL: https://www.nielsenhomescansurveys.com/se/08EAFFFB09A6DF5D?irclickid=1234567 
After following the provided documentation, we observed the following results: 
Universal Tracking Tag 
The function is invoked, as indicated by the output in the browser's network tab. 
 

 
 
Identify Function 
A script was placed first within the <body> element, alongside the Universal Tracking Tag. 
We used a dummy customProfileId (UUID) for testing purposes. 
No related requests were detected in the browser’s network tab. 
 

 
 
 
 
Conversion Tracking 
A script was placed after the Universal Tracking Tag and Identify Function, within the confirmation page body. (Click on the second option and “Next” to complete conversion) 
Dummy values were used for customProfileId (UUID) and orderId. 
No related requests were detected in the browser’s network tab. 
 

 
 
 
Next Steps 
Given that the expected results were not observed, we are looking for guidance on the following: 
What might be missing from the current implementation? 
Why aren’t the functions working as expected according to the documentation? 
How can we proceed with End-to-End Testing and Event Validation? 
We would appreciate any assistance in ensuring the tracking functions are functioning as intended. 

