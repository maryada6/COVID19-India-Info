The idea behind this application is to display the statistics of Coronavirus COVID-19 in 🇮🇳 and the data are being collected from https://api.covid19india.org/ and it updates the cases constantly on this app in India.

I made a react app to show the COVID-19 INDIA information rendered using 	https://api.covid19india.org/ api.
I used React hooks(useState,useEffect,useRef), Vanilla Js, fetch API, CSS, Js and HTML.
Fetch API, CSS, HTML make a large part of this app. useState hook was used to store state, district and api render information.
useRef was used to refer to select tag elements(state and district values)
useEffect was used to render components on refreshing and during changes made to state values.
Map function was used to render components dynamically by looping over objects.

Link: https://covid19-india-info.netlify.app/

![Alt text](https://github.com/maryada6/COVID19-India-Info/blob/main/covidindia.png)
