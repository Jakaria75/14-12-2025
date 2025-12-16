
import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Display from './Display';

function App() {
    const [count, setCount] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags,cca2,capital,region')
            .then(response => response.json())
            .then(data => setCount(data));
    }, [])

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}><Display count={count} />
            </Suspense>

        </>
    )
}

export default App
