import SyntaxHighlighter from "react-syntax-highlighter";
import PropTypes from "prop-types";

import cn from "../../utils/cn.util.js";
import {detectLanguage, getRandomKey} from "../../utils/text.util.js";
import CustomSyntaxStyle from "../../values/custom-syntax-style.json";

function TextView({ message, onTextClick, className }) {

    const parts = message.split('```');

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const renderTextWithLinks = (text) => {
        return text.split(urlRegex).map((part, index) =>
            index % 2 === 0 ? (
                <p key={getRandomKey()} className="inline-block tracking-normal break-words hyphens-auto">
                    {part}
                </p>
            ) : (
                <a
                    key={getRandomKey()} href={part} target="_blank" rel="noopener noreferrer" style={{wordBreak: "break-all"}}
                    className="tracking-normal break-words text-accent cursor-pointer hover:underline">
                    {part}
                </a>
            )
        );
    };


    const formattedParts = parts.map((part, index) => {
        if (index % 2 === 1) {
            return (
                <SyntaxHighlighter key={getRandomKey()}
                                   language={detectLanguage(part)}
                                   style={CustomSyntaxStyle}
                                   lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
                                   wrapLongLines={true}
                                   wrapLines={true}
                                   title={"Click to copy the code"}
                                   className={cn("cursor-pointer tracking-normal")}
                                   onClick={() => onTextClick(part)}
                >
                    {part.trim()}
                </SyntaxHighlighter>
            );
        } else {
            return renderTextWithLinks(part);
        }
    });

    return (
        <div
            className={cn("text-base sm:text-sm text-start text-textPrimaryLight text-pretty leading-relaxed font-poppins py-2.5 px-4 bg-secondaryVariant whitespace-pre-wrap", className)}
        >
            {formattedParts}
        </div>
    );
}

TextView.propTypes = {
    message: PropTypes.string.isRequired,
    onTextClick: PropTypes.func,
    className: PropTypes.string
};

export default TextView;