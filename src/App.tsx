import React, { useReducer } from 'react';
import { presentationReducer, INITIAL_STATE } from './state/presentationReducer';
import { Layout } from './components/Layout';

export default function App() {
  const [state, dispatch] = useReducer(presentationReducer, INITIAL_STATE);

  return <Layout state={state} dispatch={dispatch} />;
}
