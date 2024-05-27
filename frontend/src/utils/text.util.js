function detectLanguage(codeString) {
    const code = codeString.trim();
    const patterns = {
        python: /\b(def|print|import|from|class|if|elif|else|try|except|finally|with|as|for|while|break|continue|return|lambda)\b/,
        javascript: /\b(function|console\.log|var|let|const|if|else|for|while|do|switch|case|break|continue|return|class|import|export|new|this|try|catch|finally)\b/,
        java: /\b(public|private|protected|class|interface|extends|implements|new|this|if|else|for|while|do|switch|case|break|continue|return|try|catch|finally|import|package)\b/,
        html: /<!DOCTYPE html>|<html>|<\/html>|<head>|<\/head>|<body>|<\/body>|<div>|<\/div>|<span>|<\/span>|<h[1-6]>|<\/h[1-6]>|<p>|<\/p>/,
        css: /[.#][a-zA-Z0-9_-]+\s*{[^}]*}|[a-zA-Z]+\s*{[^}]*}|@media\s+[^{]+\s*{[^}]*}/,
        cpp: /\b(#include|iostream|std::|using namespace|class|struct|public|private|protected|virtual|template|typename|try|catch|throw|new|delete|operator|if|else|for|while|do|switch|case|break|continue|return)\b/,
        c: /\b(#include|stdio\.h|stdlib\.h|main|printf|scanf|return|if|else|for|while|do|switch|case|break|continue)\b/,
    };
    for (const [language, pattern] of Object.entries(patterns)) {
        if (pattern.test(code)) {
            return language;
        }
    }
    return 'javascript';
}

export {detectLanguage}