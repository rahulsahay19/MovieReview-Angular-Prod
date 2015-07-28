Welcome to the Movie Review Application

I have created this app using bunch of client-server side technologies. This SPA is marriage of tons of client/server side app. These are mentioned below.

Client-Side Technologies

***

• HTML 5 & CSS
• Modernizer & LESS
• Media Queries
• Responsive Design
• Angular JS
• Toastr JS
• JQuery
• QUnit JS
• JQuery.MockJSON
• Change Tracking
• And many out of the box things 

Server Side Technologies

***
• SQL Server
• Entity Framework – Code First Approach
• Repository Pattern
• Unit of Work Pattern
• Web API
• JSON & AJAX
• NuGet
• Ninject IOC
• Bundling & Minification
• POCO Models 

## Application Live Demo :- [Movie Review](http://moviereview.rahulsahay.com/#/)

When, you come at this page, you will land at home page. Below is the screen shot for the same.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/170th.png)
![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/171th.png)

Above shown screen shot is the home page of the app. Now, when you click on the **Movies** link, it will take you to the below shown page.
![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/172nd.png)

Once, page gets loaded, little toast message at the bottom right of the screen pops up saying **Movies Fetched Successfully**. Now, from this screen you can do all the CRUD Operation. Here the very 1st link is **Add Movie**, which will give user flexibility to go ahead and add any new movie as shown below.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/173rd.png)

Now, let’s suppose if we try to post the Form as it is blank, then it won’t allow, because above fields are required as marked by its CSS color and star mark as well. Now, once I enter any information, different validation will get triggered

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/174th.png)

Even at this moment I cannot submit the form as the form is invalid. Once, I modify and enter valid details, then form error messages and its error color (Red) will disappear.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/175th.png)

Now, at this instant I can go ahead and submit the movie. Once I click submit button; one toast message will appear saying **Data Saved Successfully** and will get redirected back to movies link.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/176th.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/177th.png)

Next is the Edit link corresponding to the movie. When you click on this, it will present the below screen for editing the same.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/178th.png)

Here, also each and every validation will be there, what we have seen during creation. However, you can go ahead and edit anything over here, let’s say I change the year to 2002 and update.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/179th.png)

Once I update the movie it will save the same in database and then get redirected to Movies link as shown below.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/180th.png)

However, let me change the same back to the original one as it’s not correct. Similarly, you can go ahead and delete the movie from the Edit link as well. Next to **Edit** link, there is link for **Reviews** as well. From this link you can go ahead and add new review as shown below.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/181th.png)

Here, when I click on **Add New Review**, it will take me to the below form.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/182nd.png)

Above form has also got different set of validations as shown below.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/183rd.png)

Once done all the corrections, it will be like this

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/184th.png)

After successful, submission, it will redirect back to the **movies** link.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/185th.png)

After adding Review, position of newly added movie moves up in the list as behind the scene order by clause is working on total no of reviews. Now, when I click on the Reviews link again, it will show me the review which I have added.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/186th.png)

Here, corresponding to the Review, new Edit link also got enabled for editing or deleting the Review. This also works same what I explained above for Movie. **About App** link lists all the details of the application like what technologies used what tools you need, where to download the code etc….

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/187th.png)
![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/188th.png)
![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/189th.png)

I have also used **QUnit** Library to test my <strong>Web APIs</strong>. Below is the glimpse for the same.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/191th.png)

When you click on any individual test, it will present you the detailed results as shown below in the screen shot.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/192nd.png)

And if there is anything wrong with any end points, let’s suppose that doesn’t exist; easiest way to break the test, then it will be like

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/216th.png)

You can also verify these APIs like shown below

[http://moviereview.rahulsahay.com/api/moviereviews](http://moviereview.rahulsahay.com/api/moviereviews)

[http://moviereview.rahulsahay.com/api/movies](http://moviereview.rahulsahay.com/api/movies)

Similarly different endpoints can be tested. Apart from Web API tests. I have also used **Jasmine** to test my Angular code. You will also learn how to test client side JavaScript code with Visual Studio. Here, I have used **Chutzpah** to integrate **JavaScript Tests** with **Visual Studio**. Below is the glimpse for the same.

![http://myview.rahulnivi.net/wp-content/uploads/2015/02/194th.png](http://myview.rahulnivi.net/wp-content/uploads/2015/02/194th.png)

Now, when I check code coverage results for my tests, Chutzpah will open a new window in browser with the code coverage results for the client side as shown below in the screen shot.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/193rd.png)

The ones which are highlighted in red are the ones which are not covered 100%, so when I click on any of this link, it will open the code in browser and show what is covered and what is not

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/196th.png)

## Glimpse of Movie Review Solution:-

Let me go ahead and show you the solution structure of finished app. Below in the screen shot, I have 5 different projects. Each is having its on dependency and responsibility.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/197th.png)

Here, the highlighted one is the web project which is dependent on other infrastructure projects **Data, Contracts and Model**. **Data** project is the place where in you maintain initial seed data, Entity Framework DBContext and many more things involve direct interfacing down the layer with database. **Data Contract** is the place where in you manage your repositories and apply **Unit of Work Pattern** on repositories like **movies** and **moviereviews**. **Model** is the place where you will be having your **POCOs** (**Plain Old CLR Objects**). This is the place where in you are maintaining all properties attributed to the tables. Below is the glimpse of all projects in its expanded form.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/198th.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/199th.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/200th.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/201th.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/02/202nd.png)

You can also test WEB API Live here at [API TEST](http://moviereview.rahulsahay.com/Web%20API%20Tests/MoviesAPI.html)

Thanks for joining me.

Happy Coding
Rahul Sahay
[My View](http://myview.rahulnivi.net/)
