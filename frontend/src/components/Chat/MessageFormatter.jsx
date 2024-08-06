import {v4 as uuidv4} from 'uuid';
import SyntaxHighlighter from "react-syntax-highlighter";

import cn from "../../utils/cn.util.js";
import {detectLanguage} from "../../utils/text.util.js";
import CustomSyntaxStyle from "../../values/custom-syntax-style.json";

function MessageFormatter({ message, onClick }) {

    const parts = message.split('```');
    const hasOnlyCode = parts.filter((part, index) => index % 2 === 0 && part.trim() !== '').length === 0;

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const renderTextWithLinks = (text) =>
        text.split(urlRegex).map((part, index) =>
            index % 2 === 0 ? (
                <p key={uuidv4()} className="inline-block tracking-normal break-words hyphens-auto"
                   style={{wordBreak: 'break-word'}}>
                    {part}
                </p>
            ) : (
                <a
                    key={uuidv4()} href={part} target="_blank" rel="noopener noreferrer"
                    className="tracking-normal break-words text-blue-400 cursor-pointer hover:underline">
                    {part}
                </a>
            )
        );

    const renderedParts = parts.map((part, index) => {
        if (index % 2 === 1) {
            return (
                <SyntaxHighlighter key={uuidv4()}
                                   language={detectLanguage(part)}
                                   style={CustomSyntaxStyle}
                                   wrapLongLines={true}
                                   title={"Click to copy the code"}
                                   className={cn(hasOnlyCode ? "rounded-md" : "rounded-md my-2", "cursor-pointer break-words whitespace-pre", "tracking-normal")}
                                   onClick={onClick}
                >
                    {part.trim()}
                </SyntaxHighlighter>
            );
        } else {
            return renderTextWithLinks(part);
        }
    });

    return <div>{renderedParts}</div>;
}

export default MessageFormatter;