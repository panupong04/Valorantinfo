module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    // ...
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],

  plugins: [
      require('flowbite/plugin')
  ]

}