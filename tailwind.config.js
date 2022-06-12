module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'home-desktop': "url('../src/Assets/home/background-home-desktop.jpg')",
        'home-tablet': "url('../src/Assets/home/background-home-tablet.jpg')",
        'home-mobile': "url('../src/Assets/home/background-home-mobile.jpg')",
        'crew-desktop': "url('../src/Assets/crew/background-crew-desktop.jpg')",
        'crew-tablet': "url('../src/Assets/crew/background-crew-tablet.jpg')",
        'crew-mobile': "url('../src/Assets/crew/background-crew-mobile.jpg')",
        'destination-desktop':
          "url('../src/Assets/destination/background-destination-desktop.jpg')",
        'destination-tablet':
          "url('../src/Assets/destination/background-destination-tablet.jpg')",
        'destination-mobile':
          "url('../src/Assets/destination/background-destination-mobile.jpg')",
        'technology-desktop':
          "url('../src/Assets/technology/background-technology-desktop.jpg')",
        'technology-tablet':
          "url('../src/Assets/technology/background-technology-tablet.jpg')",
        'technology-mobile':
          "url('../src/Assets/technology/background-technology-mobile.jpg')",
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        display: ['Oswald'],
        body: ['"Open Sans"'],
        navtext: ['Barlow Condensed'],

        bellefair: ['Bellefair'],
      },
    },
  },
  plugins: [],
};
