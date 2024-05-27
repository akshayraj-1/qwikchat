import { v4 as uuidv4 } from 'uuid';
import SyntaxHighlighter from "react-syntax-highlighter";

import cn from "../utils/cn.util.js";
import {detectLanguage} from "../utils/text.util.js";
import CustomSyntaxStyle from "../values/custom-syntax-style.json";

function CodeHighlight({message}) {

    const parts = message.split('```');
    const hasOnlyCode = parts.filter((part, index) => index % 2 === 0 && part.trim() !== '').length === 0;

    const renderedParts = parts.map((part, index) => {
        if (index % 2 === 1) {
            return (
                <SyntaxHighlighter key={uuidv4()}
                                   language={detectLanguage(part)}
                                   style={CustomSyntaxStyle}
                                   wrapLongLines={true}
                                   title={"Click to copy the code"}
                                   className={cn(hasOnlyCode ? "rounded-md" : "rounded-md my-2", "cursor-pointer")}
                                   onClick={() => {
                                       navigator.clipboard.writeText(part.trim()).then(r => {
                                           window.alert("Copied to clipboard");
                                       });
                                   }}
                >
                    {part.trim()}
                </SyntaxHighlighter>
            );
        } else {
            return <p key={uuidv4()} className="break-words" style={{ wordBreak: 'break-word' }}>{part}</p>;
        }
    });

    return <div>{renderedParts}</div>;
}

export default CodeHighlight;