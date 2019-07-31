# SumoMe app for Enonic XP

Add [SumoMe](https://sumome.com) to pages on [Enonic XP](https://github.com/enonic/xp) websites. Configuration for SumoMe is done in in the SumoMe embed itself.

## How to use this app

* Visit the [SumoMe website](https://sumome.com) and create a site profile.
* Copy the long **ID** for your SumoMe account.
* Add this app to your XP site.
* Edit the *site content* and add the SumoMe App with the "Applications" dropdown selector.
* Add the SumoMe ID to the app configuration.
* Select "head" or "body" mode for injecting the embed code.

That's all you need. The html source code will now get the SumoMe script added on all pages.

## Releases and Compatibility

| Version        | XP version |
| ------------- | ------------- |
| 2.0.0 | 7.0.0 |
| 1.1.0 | 6.7.3 |
| 1.0.1 | 6.7.3 |
| 1.0.0 | 6.3.1 |

## Changelog

**Version 2.0.0**
* Upgrade for compatibility with XP7

**Version 1.1.0**
* Option to generate embed code in legacy (head) or modern (body) way - default is legacy, to maintain backward compatibility.
* Upgrade to Gradle 4

**Version 1.0.1**
* Upgrade to 6.7.3 .

**Version 1.0.0**
* Release of the app.

## Notes

* The SumoMe script won't be generated when inside the admin console or in preview mode. This is by design.
