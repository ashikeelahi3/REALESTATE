# Expo App
## Note by: Ashik E Elahi

# Getting Started
## NPX command
Fist Make a directory with the name of the project. Then
```bash
npx create-expo-app@latest ./
```
```bash
npx expo start
```

We use expo go for the android. Sometimes the expo go will show you error i.e. "Something went wrong'. You should checkout youtube solutions.

## Cleaning up (Not necessary)

```bash
npm run reset-project
```

# Install NativeWind
```bash
npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
```

```bash
npx pod-install
```

Follow for more information [NativeWind](https://www.nativewind.dev/getting-started/expo-router)

To create Tailwind CSS config file: tailwind.config.js
```bash
npx tailwindcss init
```
then replace using website code.

Inside App create a new CSS file named global.css

Also need a babel.config.js file

Then 
```bash
px expo customize metro.config.js
```