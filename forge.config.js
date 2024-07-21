module.exports = {
  makers: [
    {
      name: '@electron-forge/maker-dmg',
      config: {
        background: './assets/dmg-background.png',
        format: 'ULFO'
      }
    }
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'IMOP999',
          name: 'vite-vue-js'
        },
        prerelease: false,
        draft: true
      }
    }
  ],
  // packagerConfig: {
  //   osxSign: {},
  //   // ...
  //   osxNotarize: {
  //     tool: 'notarytool',
  //     appleId: process.env.APPLE_ID,
  //     appleIdPassword: process.env.APPLE_PASSWORD,
  //     teamId: process.env.APPLE_TEAM_ID
  //   }
  //   // ...
  // }
};