import React, { useState, useEffect, useCallback } from 'react'; 
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript';
import { Button } from './ui/button';
import { useCookies } from 'react-cookie';
import axios from 'axios'

export default function Editor({text, testName}) {
    console.log("text:", text)
    console.log("test name:",testName)


    const [value, setValue] = useState(text);
    const [results, setResults] = useState(null);
    const [_, setCookies] = useCookies(['access_token']);
    const [userLoggedIn, setUserLoggedIn] = useState(null);


    useEffect(() => {
        setUserLoggedIn(window.localStorage.getItem('userID'));
    })


    const onChange = useCallback((val, viewUpdate) => {
        console.log('value changed:', val);
        setValue(val);
    }, []);

    const runTests = async (event) => {
        event.preventDefault();
        try {
            // unable to use nodemon when running tests with jest. must disable before starting // 
            const response = await axios.post("http://localhost:3001/api/test", {  text: value, test: testName  });

            if (response) {
                setResults(response.data);
                console.log("res:", response.data)
            } else {
                console.log("no response received")
            }
        } catch (err) {
            console.log(error)
        }
        const testResults = {
            success: false,
            suit: "Jest",
            description: "The description of the Test",
            expected: "console.log('Hello World')",
            received: "console.log('hello W0rld')",
            error: "null",
            details: "Your code did not pass the test. Please try again."
        }
        setResults(testResults);
    
    }

    const onSubmit = () => {
        console.log("onSubmit");
        
    }
    return (
        <div>
            <CodeMirror
                value={value}
                height="500px"
                extensions={[javascript({ jsx: true })]}
                onChange={onChange}
            />
            <div className="flex p-3 bg-slate-50">
                <Button className="bg-green-500 mr-3" size="sm" onClick={runTests}>Run Tests</Button>
                {userLoggedIn && (
                    <Button size="sm" onClick={onSubmit}>Submit</Button>
                )}
            </div>
            <div id="results">
                {results && results.success ? (
                    <div>
                        <h2>Results</h2>
                        <ul className="testResults">
                            <li>Congratulations! Your tests did passed.</li>
                            <h3>Test: {testName}</h3>
                            <li><span className="loggedResults">Test Suite:</span> {results.suit}</li>
                            <li>Test Description: {results.description}</li>
                            <li>Expected Values: {results.expected}</li>
                            <li>Received Values: {results.received}</li>
                            <li>Results: {results.details}</li>
                        </ul>
                    </div>
                ) : null}
                {results && !results.success ? (
                    <div>
                        <h2>Results</h2>
                        <div className="testResults">
                            <h2 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">Your tests did not pass.</h2>
                            <p ><span className="font-semibold text-gray-900">Test: </span> {testName}</p>
                            <p><span className="font-semibold text-gray-900">Test Suite: </span>{results.suit}</p>
                            <p><span className="font-semibold text-gray-900">Test Description: </span>{results.description}</p>
                            <p><span className="font-semibold text-gray-900">Expected Values: </span>{results.expected}</p>
                            <p><span className="font-semibold text-gray-900">Received Values: </span>{results.received}</p>
                            <p><span className="font-semibold text-gray-900">Location of errors: </span>{results.error}</p>
                            <p><span className="font-semibold text-gray-900">Results: </span>{results.details}</p>
                        </div>
                    </div>
                ) : null}
            </div>
            
        </div>
    )
}