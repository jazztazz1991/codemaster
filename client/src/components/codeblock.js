import { CodeBlock, nord } from "react-code-blocks";

function ReactCodeBlock({ code, language }) {
    // console.log(code, language, showLineNumbers)
    const styles ={
        borderRadius: "10px",
        overflow: "hidden",
    }
    return (
        <div style={styles}>
            <CodeBlock
                text={code}
                language={language}
                theme={nord}
            />
        </div>
    );
}

export default ReactCodeBlock;