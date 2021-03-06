import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import ShoppingCartSmart from './smartComponents/ShoppingCart/ShoppingCartSmart';
import { setRootConfig } from './features/common/common.slice';
import ShoppingCartManager from './components/ShoppingCartManager/ShoppingCartManager';


export interface AppProps{
  rootConfig: any;
}

const App = (props: AppProps) => {

  const { rootConfig } = props;

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setRootConfig(rootConfig))
  }, [rootConfig,dispatch]);
  
  useEffect(() => {
    dispatch({type:"GET_PRODUCTS"})
  },[dispatch])
  return (
    <div className="App">
      {/* <ShoppingCartSmart></ShoppingCartSmart> */}
      <ShoppingCartManager></ShoppingCartManager>

    </div>
  );
}

export default App;

