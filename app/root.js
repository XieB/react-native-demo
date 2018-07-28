import {
    StackNavigator,
} from 'react-navigation';
import React from 'react';
import HomeScreen from './component/HomeScreen';
import ProfileScreen from './component/ProfileScreen';
import LoadingScreen from './component/Loading';
import AnimateScreen from './component/Animate';
import KeyboardScreen from './component/KeyboardAvoiding';
import ModalScreen from './component/Modal';
import PickerScreen from './component/Picker';
import ProgressScreen from './component/Progress';
import JokeScreen from './component/Joke';
import RefreshScreen from './component/Refresh';
import SliderScreen from './component/Slider';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Joke: { screen: JokeScreen },
    Profile: { screen: ProfileScreen },
    Loading: {screen: LoadingScreen},
    Animate: {screen: AnimateScreen},
    Keyboard: {screen: KeyboardScreen},
    Modal: {screen: ModalScreen},
    Picker: {screen: PickerScreen},
    Progress: {screen: ProgressScreen},
    Refresh: {screen: RefreshScreen},
    Slider: {screen: SliderScreen}
});




export default App;