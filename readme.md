# SumoMe app for Enonic XP 6

Add [SumoMe](https://sumome.com) to pages on [Enonic XP](https://github.com/enonic/xp) websites. Configuration for SumoMe is done in in the SumoMe embed itself.

## Building and deploying

Build this app with gradle. In the terminal, from the root of the project, enter `./gradlew build`. On Windows, just enter `gradlew build`
in the command line from the project root. Next, move the JAR file from build/libs to your `$XP_HOME/deploy` directory. The SumoMe
app will now be available to add to your websites through the Content Manager app.

## How to use this app

* Visit the [SumoMe website](https://sumome.com) and create a site profile.
* Note the long **ID** for your SumoMe account.
* Add this app to your XP site.
* Edit the *site content* and add the SumoMe App with the "Applications" dropdown selector.
* Add the SumoMe ID to the app configuration.

That's all you need. The html source code will now get the SumoMe script added to it's head.

## Releases and Compatibility

| Version        | XP version |
| ------------- | ------------- |
| 1.0.1 | 6.7.3 |
| 1.0.0 | 6.3.1 |

## Changelog
**Version 1.0.1**
* Upgrade to 6.7.3 

**Version 1.0.0**
* Release of the app.

## Notes

* The SumoMe script won't be generated when inside the admin console or in preview mode. This is by design.
