import './App.css';

import React from 'react';

interface UserInfo {
    firstName: string;
    lastName: string;
}

const userInfo : UserInfo = {
    firstName : 'adrien',
    lastName: 'gerard'
}
function formatName(userInfo: UserInfo): string {
    return userInfo.firstName + ' ' + userInfo.lastName;
}

function Greeting(userInfo: UserInfo) {
    return userInfo ? <h1>Bonjour, {formatName(userInfo)}</h1> : <h1>Salut Bro</h1>
}
const App: React.FC = () => {
  return (<Greeting {...userInfo} />);
}

export default App;
