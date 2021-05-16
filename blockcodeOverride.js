var iterator = require('markdown-it-for-inline')
var MarkdownRender = require('markdown-it')
// var MarkdownSlack = require('slack-markdown-it')
// var md = require('markdown-it')()
//             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
//               console.log("tokens: ", tokens);
//               tokens[idx].content = tokens[idx].content.replace(/\n/g, '<br>');
//             })


let Constants = {
    Target: "target",
    Blank: "_blank",
    TargetRelationship: "rel",
    TargetRelationshipAttributes: "noopener noreferrer"
}
let md = new MarkdownRender(
    "default",
    {
        html: true, // To enable HTML tags in source
        linkify: true, // To autoconvert URL-like text to links
        breaks: true // To convert \n in paragraphs into <br>
    }
)

let origin_code_block = function (tokens, idx, options, env, slf) {
    var token = tokens[idx];
  
    return  '<pre' + slf.renderAttrs(token) + '><code>' +
            escapeHtml(tokens[idx].content) +
            '</code></pre>\n';
  };

let diy_code_block = function (tokens, idx, options, env, slf) {
var token = tokens[idx];

return  '<prediy' + slf.renderAttrs(token) + '><code>' +
        escapeHtml(tokens[idx].content) +
        '</code></prediy>\n';
};

// md.renderer.rules.code_block = diy_code_block;

console.log(md.renderer.rules );

const onloadFunc = ()=>{
    let inputStr = "```\nblock code\n```";
    let output = md.render(inputStr);
    console.log("Output: ", output);
}

onloadFunc()