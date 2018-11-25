const iosSessionResponse = {
  "value": {
    "capabilities": {
      "webStorageEnabled": false,
      "locationContextEnabled": false,
      "browserName": "",
      "platform": "MAC",
      "javascriptEnabled": true,
      "databaseEnabled": false,
      "takesScreenshot": true,
      "networkConnectionEnabled": false,
      "platformName": "ios",
      "server:CONFIG_UUID": "XXXXXXXX-0000-0000-XXXX-XXXXXXXXXXXX",
      "app": "AppLocation/iosAppName.app",
      "automationName": "XCUITest",
      "deviceName": "iPhone Simulator",
      "newCommandTimeout": 3000,
      "noReset": true,
      "platformVersion": "12.1",
      "resetOnSessionStartOnly": false,
      "simpleIsVisibleCheck": true,
      "updatedWDABundleId": "com.yamsafer.driverAgent",
      "wdaLocalPort": 8102,
      "xcodeOrgId": "YUC5LW8F44",
      "xcodeSigningId": "iPhone Developer",
      "udid": "XXXXXXXX-0000-0000-XXXX-XXXXXXXXXXXX"
    },
    "sessionId": "XXXXXXXX-0000-0000-XXXX-XXXXXXXXXXXX"
  }
};

const w3cSessionResponse = {
  "status": 0,
  "sessionId": "XXXXXXXX00000000XXXXXXXXXXXXXXXX",
  "value": {
    "applicationCacheEnabled": false,
    "rotatable": false,
    "mobileEmulationEnabled": false,
    "networkConnectionEnabled": false,
    "chrome": {
      "chromedriverVersion": "2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb)",
      "userDataDir": "/tmp/.org.chromium.Chromium.QN56NN"
    },
    "takesHeapSnapshot": true,
    "pageLoadStrategy": "normal",
    "databaseEnabled": false,
    "handlesAlerts": true,
    "hasTouchScreen": false,
    "version": "66.0.3359.117",
    "platform": "Linux",
    "browserConnectionEnabled": false,
    "nativeEvents": true,
    "acceptSslCerts": false,
    "acceptInsecureCerts": false,
    "locationContextEnabled": true,
    "webStorageEnabled": true,
    "browserName": "chrome",
    "takesScreenshot": true,
    "javascriptEnabled": true,
    "cssSelectorsEnabled": true,
    "setWindowRect": true,
    "unexpectedAlertBehaviour": "",
    "webdriver.remote.sessionid": "XXXXXXXX00000000XXXXXXXXXXXXXXXX"
  }
}

module.exports = {
  iosSessionResponse,
  w3cSessionResponse,
}
