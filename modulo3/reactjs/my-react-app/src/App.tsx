/*
import HelloWorld from './components/HelloWorld';
import WelcomeUser from './components/WelcomeUser';
import ButtonCounter from './components/ButtonCounter';
import TextInput from './components/TextInput';
import ToggleMessage from './components/ToggleMessage';
import ShowDate from './components/ShowDate';
import ColorBox from './components/ColorBox';
import ConditionalText from './components/ConditionalText';
import EmojiList from './components/EmojiList';
import SimpleForm from './components/SimpleForm';

function App() {
  return (
    <>
      <HelloWorld />
      <WelcomeUser />
      <ButtonCounter />
      <TextInput />
      <ToggleMessage />
      <ShowDate />
      <ColorBox />
      <ConditionalText />
      <EmojiList />
      <SimpleForm />
    </>
  );
}

export default App; */

/*
import Greeting from './Props/Greeting';
import UserCard from './Props/UseCard';
import PromedioTresNotasForm from './components/PromedioTresNotasForm';

function App() {

  const userData = { name: 'Alexander', age: 30, address: 'Calle Falsa 123', phone: '1234567890' };
  return (
    <>
      <Greeting name="Alexander" />
      <Greeting name="Axel" />
      <PromedioTresNotasForm />
      <UserCard user={userData} />
    </>
  );
}

export default App;
*/

/*
import ParentButtonOne from './Props/ParentButtonOne';

function App() {
  return (
    <>
      <ParentButtonOne />
    </>
  );
}
export default App;
*/

/*
import ParentIncrementButton from './Props/ParentIncrementButton';

function App() {
  return (
    <>
      <ParentIncrementButton />
    </>
  );
}
export default App;
*/
/* 
import ParentInputNotifier from './Props/ParentInputNotifier';
import ParentUserList from './Props/ParentUserList';

import ParentLoginForm from './Props/ParentLoginForm';

function App() {
  return (
    <>
      <ParentInputNotifier />
      <ParentUserList />
      <ParentLoginForm />
    </>
  );
}
export default App;
*/

/*

import AccessWithLimit from "./useState/AccessWithLimit";
import CheckboxSummary from "./useState/CheckboxSummary";
import DocumentTitleChanger from "./useState/DocumentTitleChanger";
import HoverFont from "./useState/HoverFont";
import LoginWithLimit from "./useState/LoginWithLimit";
import PostLikes from "./useState/PostLikes";
import LanguageSwitcher from "./useState/LanguageSwitcher";
import MultiSwitch from "./useState/MultiSwitch";
import AutoCounter from "./useState/AutoCounter";
import DynamicColor from "./useState/DynamicColor";
import ClickHistory from "./useState/ClickHistory";


function App() {
  return (
    <>
      <HoverFont />
      <br />
      <br />
      <AccessWithLimit />
      <br />
      <br />
      <LoginWithLimit />
      <br />
      <br />
      <DocumentTitleChanger />
      <br />
      <br />
      <PostLikes />
      <br />
      <br />
      <CheckboxSummary />
      <br />
      <br />
      <LanguageSwitcher />
      <br />
      <br />
      <MultiSwitch />
      <br />
      <br />
      <AutoCounter />
      <br />
      <br />
      <AutoCounter />
      <br />
      <br />
      <DynamicColor />
      <br />
      <br />
      <ClickHistory />

    </>
  );
}
export default App;

*/

/*

import LogEffect from './useEffect/LogEffect';
import FetchUser from './useEffect/FetchUser';
import Clock from './useEffect/Clock';
import ScrollLogger from './useEffect/ScrollLoger';
import DynamicTitle from './useEffect/DynamycTitle';
import SafeFetch from './useEffect/SafeFetch';
import PersistCounter from './useEffect/PersistCounter';

function App() {
  return (
    <div>
      <LogEffect />
      <FetchUser />
      <Clock />
      <ScrollLogger />
      <DynamicTitle />
      <br />
      <br />
      <br />
      <SafeFetch />
      <br />
      <PersistCounter />
    </div>
  );
}

export default App;
*/
/*
import { useState } from 'react';
import { LanguageContext } from './useContext/LanguageContext';
import LanguageToggle from './useContext/LanguageToggle';

export default function App() {
  const [lang, setLang] = useState('es');
  const toggleLanguage = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <LanguageToggle />
    </LanguageContext.Provider>
  );
}
*/

/*
import { useState } from 'react';
import { LoginContext } from './useContext/LoginContext';
import LoginStatus from './useContext/LoginStatus';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn(prev => !prev);

  return (
    <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
      <LoginStatus />
    </LoginContext.Provider>
  );
}
*/

import { useState } from "react";
import { CartContext } from './useContext/CartContext';
import type { CartItem } from './useContext/CartContext';
import CartView from "./useContext/CartView";

export default function App() {
  const [items, setItems] = useState<CartItem[]>([]);
  const addItem = (item: Omit<CartItem, 'id'> & { id?: number }) => setItems(prev => [...prev, { ...item, id: item.id || Date.now() }]);
  const removeItem = (id: number) => setItems(prev => prev.filter(i => i.id !== id));

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      <CartView />
    </CartContext.Provider>
  );
}