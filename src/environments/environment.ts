// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyA8XPAhyF1r_dmQzZI_Zcnak0FMhobykzY',
        authDomain: 'shops-and-carts-develop.firebaseapp.com',
        databaseURL: 'https://shops-and-carts-develop.firebaseio.com',
        projectId: 'shops-and-carts-develop',
        storageBucket: 'shops-and-carts-develop.appspot.com',
        messagingSenderId: '769298931967',
        appId: '1:769298931967:web:7184803a90be9aff9f2cca',
        measurementId: 'G-F3Y92CH14C'
    },
    mapbox: {
        accessToken: 'pk.eyJ1IjoibmV4dGdlbmFwcHMxNDYiLCJhIjoiY2tmZWg3cnUyMDIyNzJzbzdjd3ZiYzdicSJ9.jmBf4BLUx5c_shUDIf5KUA'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
