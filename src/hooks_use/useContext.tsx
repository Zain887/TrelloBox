import React, { useContext } from 'react';

// Create a context with a default value
const MyContext = React.createContext<string>('');

function ContextExample() {
    const value = useContext(MyContext);

    return <p>Value from context: {value}</p>;
}

// Wrap the component with a provider
function App() {
    return (
        <MyContext.Provider value="Hello from context!">
            <ContextExample />
        </MyContext.Provider>
    );
}

export default App;
