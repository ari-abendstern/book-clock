# Book Clock

This is a project I made for a particularly well-read friend's birthday present. The plan was to create a shameless rip-off of the [Author Clock](https://www.authorclock.com/) using an old e-reader in order to avoid spending $199. There are already [projects that achieve this](https://github.com/JohannesNE/literature-clock) by hosting a website that is then opened in the e-reader's browser, but since I already had a jailbroken device running Android I *thought* it would be a good idea to recreate this as an app.

I "borrowed" the quotes file from [this project](https://github.com/JohannesNE/literature-clock), wrote a quick script to convert it to JSON and off I went and wrote a nice little app in React Native. It all worked perfectly, until it came to actually testing it on the device - turns out it needed to be running at least Android 5 and I couldn't update past Android 2. I did originally plan to remake the app in HTML and an old version of JavaScript before packaging the whole thing up into an app using whatever version of Apache Cordova was compatible with my device but eventually a friend pointed out that there comes a point where there's nothing more to learn from a project.

## Setup

You can preview the app locally by cloning the repo, installing dependencies and then using the terminal command `npx expo start` . I'd recommend viewing the web version (by pressing w) in an 800 x 600 sized landscape window (the screen size of the device I was developing for) but it does also run in Expo Go.

## Testing

The quote choosing util function has a couple of tests, that can be run with the terminal command `npm t` .
