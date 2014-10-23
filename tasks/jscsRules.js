module.exports = {
    force: true,
    "requireCurlyBraces": ["else", "for", "while", "do", "try", "catch"], /*"if",*/
    "requireSpaceAfterKeywords": ["if", "else", "for", "while", "do", "switch", "return", "try", "catch"],
    "requireSpaceBeforeBlockStatements": true,
    "requireParenthesesAroundIIFE": true,
    "disallowSpacesInFunctionDeclaration": {"beforeOpeningRoundBrace": true},
    "disallowSpacesInNamedFunctionExpression": {"beforeOpeningRoundBrace": true},
    "requireSpacesInFunctionExpression": {"beforeOpeningCurlyBrace": true},
    "requireSpacesInAnonymousFunctionExpression": {"beforeOpeningRoundBrace": true, "beforeOpeningCurlyBrace": true},
    "requireSpacesInNamedFunctionExpression": {"beforeOpeningCurlyBrace": true},
    "requireSpacesInFunctionDeclaration": {"beforeOpeningCurlyBrace": true},
    "disallowMultipleVarDecl": true,
    "requireBlocksOnNewline": true,
    "disallowEmptyBlocks": true,
    "disallowSpacesInsideObjectBrackets": true,
    "disallowSpacesInsideArrayBrackets": true,
    "disallowSpaceAfterObjectKeys": true,
    "disallowSpacesInsideParentheses": true,
    "requireCommaBeforeLineBreak": true,
    //"requireAlignedObjectValues": "all",
    "requireOperatorBeforeLineBreak": ["?", "+", "-", "/", "*", "=", "==", "===", "!=", "!==", ">", ">=", "<", "<="],
//            "disallowLeftStickedOperators": ["?", "+", "/", "*", "=", "==", "===", "!=", "!==", ">", ">=", "<", "<="],
//                    "requireRightStickedOperators": ["!"],
//                    "requireSpaceAfterBinaryOperators": ["?", "+", "/", "*", ":", "=", "==", "===", "!=", "!==", ">", ">=", "<", "<="],
    //"disallowSpaceAfterBinaryOperators": [","],
    "disallowSpaceAfterPrefixUnaryOperators": ["++", "--", "+", "-", "~", "!"],
    "disallowSpaceBeforePostfixUnaryOperators": ["++", "--"],
    "requireSpaceBeforeBinaryOperators": ["+", "-", "/", "*", "=", "==", "===", "!=", "!=="],
    "requireSpaceAfterBinaryOperators": ["?", ">", ",", ">=", "<=", "<", "+", "-", "/", "*", "=", "==", "===", "!=", "!=="],
    //"validateIndentation": 4,
    //"validateQuoteMarks": { "mark": "\"", "escape": true },
    "disallowMixedSpacesAndTabs": true,
    "disallowKeywordsOnNewLine": ["else", "catch"]

};