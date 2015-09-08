Tools Required for Hybrid application Development
1) Nodejs & Node Package Manager
2) Phone gap or Cordova
3) Development sdk – for platforms

    Download Node JS from https://nodejs.org/dist/v0.12.7/node-v0.12.7-x86.msi if 32 bit and https://nodejs.org/dist/v0.12.7/x64/node-v0.12.7-x64.msi for 64 bit. Install Node js by downloading it from the same. Set Node Home as Follows
    
    You must now find the version visible when you type node –v in your terminal/command prompt.
    
    Ready to install Cordova now. From Command prompt, run the command
        * npm install –g cordova
        
        You will find something like the below one.
        
            Now we have the build tools separately installed and running, when we need to develop the same with any IDE’s, install the plugins in the same. Go to eclipse marketplace and install Eclipse Thym plugin from it as shown below.
            
            Now we could find the “Cordova” plugin integrated to eclipse and you could create a new “Hybrid Mobile” project as shown below.
            
            4) Last thing to do is to install the sdk.
                a. For Android SDK – https://developer.android.com/sdk/index.html#Other
                b. For Windows SDK – https://dev.windows.com/en-us/develop/download-phone-sdk
                
                For Android sdk, after installing sdk, install the sdk tools from the sdk manager as well. Make sure, when you build a cordova project, the sdk that you are developing for, should be set in environmental variables and included to the path variable
                
                The following commands should work as below.You can also run the same from eclipse by creating external tools configuration