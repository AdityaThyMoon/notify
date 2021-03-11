# notify - Hack the North 2020 Submission
![alt text](https://raw.githubusercontent.com/TheAdityaMoon/notify/master/client/src/assets/logo.png)

## Inspiration
News is an invaluable source of knowledge, and something that many of us take for granted: Modern news is on the internet. For us, that means that the accessibility of our news is a couple scrolls away. For other people however, it’s not so easy.

After Google searching, we discovered that 3.6 billion people do not have reliable internet access. With up-to-date news constantly being posted on the internet, that isn’t good for the 3.6 billion people who can’t access it. After learning this, we wanted to think of a solution.

We went back to Google searching, and we soon learned that even though reliable internet access is limited, SMS messaging is not. SMS messages are actually extremely cheap, especially in second and third world countries, where many of the people who do not have consistent internet access live. Surprisingly, you can send a text message in India for as little as $0.087 CAD.

If reliable internet access is very limited (harder to acquire), but SMS is cheap (easier to acquire), then this must mean that out of that group of 3.6 billion people who do not have access to reliable internet, many of them must still have access to SMS. This was our group’s “A-ha!” moment. 

After making this realization, we knew that an SMS based news source can greatly benefit millions, if not billions of people in the world. And this inspired us to create notify!

## What does notify do exactly?
notify is a neoteric SMS chat bot that utilizes state-of-the-art APIs and NLP technologies to dispatch regionally-selected, summarized news articles for the user. It is extremely easy to use. Just text a number, type a couple of prompted words, and receive specifically-queried articles based on your input.

## But wait -- it gets better! 
- notify gives the option for users to discover customizable news articles based on keywords they can input. For keywords, the skys the limit -- keywords can be just about anything
- notify also allows the user to receive scheduled news updates, based on their daily/weekly/monthly preferences
- Forget those nasty-large text-plan-stealing money-stealing MMS messages! On top of notify summarizing articles, since notify is SMS-based, it does not take a heavy toll on users who may be limited by a strict texting plan or who are on a tight budget

## How we built it
We used the Vonage API to send and receive SMS messages, IBM Cloud (Watson) to act as a chatbot and article summarizer, and News API to fetch news articles. The frontend was built with React, while the backend was built with Node.js and MongoDB. The project was deployed using Heroku.

The core of the project revolved around using the Vonage API, IBM Cloud, and News API. 

To provide further details, we used the Vonage API to communicate with users around the world through SMS (no internet needed) and provide them with the latest news from anywhere. We were able to use the number provided by Vonage to send SMS in Node.js and receive SMS through webhooks. Vonage Number Insights were also used to obtain the user's country from their number, which was then used to retrieve relevant articles.

The IBM Watson assistant was utilized to understand the user's SMS (using NLP) and have a conversation interaction with the user. Additionally, the IBM text summarizer was used to summarize the contents of the news articles so that the users could be sent a short, informative SMS.

The News API was used to fetch the top news articles based on the query provided by the user in the SMS and their country. Upon receiving the articles, their URLs were used to get the full contents of the news article, which was then summarized with the IBM text summarizer.

## Challenges we ran into
- Learning many new technologies in such a short period of time, including the Vonage API, the IBM API & Watson, and TypeScript
- Designing an end-to-end flow from receiving a user's SMS to parsing it to fetching articles, and summarizing them, and then sending the summaries back to the user
- Integrating all the components together to make everything work (bug free ;))

## Accomplishments that we’re proud of
- We are proud of the scalability of our project, having the potential to assist up to 3.6 billion users worldwide on receiving their news updates
- The cleanliness and polish of our front and back end code quality
- Working together remotely from across the country to build something that can improve the lives of millions, or even billions of people

## What we learned
Throughout our time coding this project, we learned a countless number of things, such as how to use and integrate the…
- Vonage API 
- IBM Cloud tools
- The News API
- TypeScript for the frontend
- How to take a project from an idea on paper to a fully functional and implemented project in less than 36 hours

## The next steps forward
- While English is the most spoken language in the world, as a next step, we want to integrate a translation API for our news output, so that the user can receive news articles in the language of their choice
- Additionally, notify usually finds articles based on a given keyword to a high success rate, but it still isn’t perfect. notify will sometimes misidentify a certain article with an unrelated keyword. Ideally, as a next step, we would want to implement some ML into our project that could help us solve this issue

## Try it yourself!
Text +1 579-269-0864 to try out our project!

Or visit our website to try it on your device :)

## Frontend repository
https://github.com/TheAdityaMoon/notify

## Backend repository
https://github.com/KavpreetGrewal/notify-server

**All rights reserved.**
