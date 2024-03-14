import React, { useState, useEffect, useCallback } from 'react'; 
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript';
import { Button } from './ui/button';
import { useCookies } from 'react-cookie';
import axios from 'axios'
import ReactCodeBlock from './codeblock'

export default function Editor({text, testName}) {
    // console.log("text:", text)
    // console.log("test name:",testName)
  

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
            const response = await axios.post("http://localhost:3001/api/test", {  text: value, test: testName  });
    
            if (response && response.data) {
                console.log("res:", response.data)
                setResults(response.data);
  
            } else {
                console.log("No response received")
            }
        } catch (err) {
            console.log(err)
        }
    }

    const onSubmit = () => {
        console.log("onSubmit");
    }
    // console.log("results:", results);
    // console.log("results message:", results?.message);
    return (
        <div className='editorPage'>
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
                {results?.message.includes("Accepted") ? (
    
                    <div>
                        <h1 className='mb-5 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>Results</h1>
                        <div className="testResults">    
                        <div className='mt-5'>
                            <strong className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">{results.message}</strong>
                        </div>
                        <div className='mt-2 mb-3'>Expected </div>
                            <ReactCodeBlock 
                                code={results.expectedOutput}
                                language="javascript"
                            />
                        </div>
                        <div className='mt-2 mb-3'>Recieved </div>
                            <ReactCodeBlock 
                                code={results.receivedInput}
                                language="javascript"
                            />
                        </div>
                ) : null }
                {results?.message.includes("Wrong Answer")? (
                    <div>
                        <h1 className='mb-5 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>Results</h1>
                        <div className="testResults">    
                        <div className='mt-5'>
                            <strong className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">{results.message}</strong>
                        </div>
                        <div className='mt-2 mb-3'>Expected </div>
                            <ReactCodeBlock 
                                code={results.expectedOutput}
                                language="javascript"
                            />
                        </div>
                        <div className='mt-2 mb-3'>Recieved </div>
                            <ReactCodeBlock 
                                code={results.receivedInput}
                                language="javascript"
                            />
                        </div>
                ):null}
            </div>
            
        </div>
    )
}