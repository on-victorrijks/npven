# npven 1.0
Make easy and customizable alerts with JavaScript

*Hi*
on many of my projects, I need to have interactives, customizable and easy to set up alerts. So I create divs, js animation, functions,... A lot of stuff just for one single alert. So I decided to make a module for it. You just type important infos in a function, and it's done ! You can modify the design with CSS or copy/paste somes of mine. You can starts multiples alerts simultaneously, add timer, add a custom number of buttons with funtions, add images, textlines and animations !

# Functions

There're three functions

  - npven_create
  - npven_clear_spec
  - npven_custom

### 1. npven_create

--> If you just want to create a fast alert with no specific function, it's perfect.

Here's the syntax
```javascript
npven_create(
	1,//type
	"Title",//title
	"Content",//content
	0,//choice
	"reload",//url
	0,//timer (0 = disable / 1<= = enable && time)
	2,// type of timer (1 = npven_clear() / 2 = go to url)
	"npven_frame", // id of the frame
	"slide" // animation
);
```
So let's explain each of these :

| Name  | Type of info | Posibilities |
| ------------- | ------------- | ------------- |
| Type  | number | 1 to load an url when button 'OK' is pressed / 2 to execute a function |
| Title | string | just a title |
| Content | string | just a content (you can put html in it <img> for exemple)  |
| Choice | number | 0 = No choice (only OK button) / 1 = Two choice (if type = 1 --> only Accept:go to url / deny:close the alert ) |
| url | string | if type = 1 : just put an url or put reload to reload the page onClick / If type = 2 : put two function for example accept(), deny() (max 2 functions) |
| timer | number | 0 = disable / 1 or more = enable && time (60 = 2 minutes for example)  |
| timertype | number | 1 = close the alert after x seconds / 2 = go to url after x seconds |
| frame | string | id of the frame where the alert'll appear (EMPTY) |
| anim | string | none = disable / fade = fade (1.1s) / slide = slide (1.1s) |

#### Example

No choice
![No choice](http://i.imgur.com/xn3GBOQ.png)

Choice
![Choice](http://i.imgur.com/iDuALNC.png)

Spotify in content
![Spotify in content](http://i.imgur.com/eYkZjhN.png)


### 2. npven_clear_spec

--> Delete an alert

Here's the syntax
```javascript
npven_clear_spec(frame);
```


| Name  | Type of info | Posibilities |
| ------------- | ------------- | ------------- |
| frame  | string  |  id of the frame where the alert is


### 3. npven_custom
--> Create more complex alerts

Here's the syntax
```javascript
npven_custom(
	"textline1, textline2, textline3", //textline
	"Accept, Deny, Rules", //buttons
	"custom('Accept'), custom('Deny'), custom('Rules')", //actions
	"http://placehold.it/350x150, http://placehold.it/900x250", //images
	"npven_frame_demo", //frame
	"slide" // animation
);
```


| Name  | Type of info | Posibilities |
| ------------- | ------------- | ------------- |
| textline  | string  |  Text lines separated with a comma |
| buttons  | string  |  Text of the buttons |
| actions  | string  |  functions of the buttons |
| images  | string  |  image url sperated with a comma |
| frame  | string  |  id of the frame where the alert'll appear (EMPTY) |
| anim  | string  |  none = disable / fade = fade (1.1s) / slide = slide (1.1s) |

#### Example

3 text lines / 4 buttons / 2 images
![3 text lines / 4 buttons / 2 images](http://i.imgur.com/ivV2v8n.png)

# If you need help 

--> Twitter : https://twitter.com/VictorRijks


# Design

--> I'll add more design

```css
.npven_box {
    position: absolute;
    left: 0;
    right: 0;
    top: 8px;
    margin: auto;
    width: 360px;
    padding: 20px 40px;
    background: #e74c3c;
    -webkit-box-shadow: 0px 0px 38px 0px rgba(0,0,0,0.26);
    -moz-box-shadow: 0px 0px 38px 0px rgba(0,0,0,0.26);
    box-shadow: 0px 0px 38px 0px rgba(0,0,0,0.26);
    border-radius: 8px;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
}
.npven_title {
    font-family: 'Open Sans', sans-serif;
    color: white;
    font-weight: 700;
}
.npven_content {
    font-family: 'Open Sans', sans-serif;
    color: white;
    font-weight: 400;
}
.npven_action a {
    text-decoration: none;
    color: white;
    font-family: 'Open Sans', sans-serif;
    position: relative;
    float: left;
    height: 40px;
    line-height: 40px;
    margin-right: 10px;
    padding: 0px 18px;
    font-weight: bold;
    font-size: small;
    background: rgba(0,0,0,0.2);
    border-radius: 8px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
}
.npven_action {
    position: relative;
    float: left;
    height: 40px;
    margin-top: 10px;
}
a#npven_style_accept {
    background: #4CAF50;
}
a#npven_style_deny {
    background: #F44336;
}
```

