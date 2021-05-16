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
// .use(iterator, "url_new_win", "link_open", (tokens, index) => {
//     console.log("called linkopen");
//     console.log("tokens: ", tokens, " index: ", index)
// })
// .use(iterator, '', 'newline', function (tokens, idx) {
//                   console.log("tokens: ", tokens);
//                   tokens[idx].content = tokens[idx].content.replace(/\n/g, '<br>');
//                 })
// .use(iterator, 'url_beautify', 'link_open', function (tokens, idx) {
//     // Make sure link contains only text
//     // if ((tokens[idx + 2].type !== 'link_close') ||
//     //     (tokens[idx + 1].type !== 'text')) {
//     //   return;
//     // }
//     console.log("get here 1");
//     // Do replacement
//     tokens[idx + 1].content = tokens[idx + 1].content
//                                 .replace(/^https?:\/\//, '')
//                                 .replace(/^www./, 'sfsfsf');
//   })
.use(iterator, "url_new_win", "link_open", (tokens, index) => {
    const targetAttrIndex = tokens[index].attrIndex(Constants.Target);
    const relAttrIndex = tokens[index].attrIndex(Constants.TargetRelationship);
    console.log("get here 2: ", tokens[index]);
    if (~targetAttrIndex) {
        tokens[index].attrs[targetAttrIndex][1] = Constants.Blank;
    } else {
        tokens[index].attrPush([Constants.Target, Constants.Blank]);
    }

    if (~relAttrIndex) {
        tokens[index].attrs[relAttrIndex][1] = Constants.TargetRelationshipAttributes;
    } else {
        tokens[index].attrPush([Constants.TargetRelationship, Constants.TargetRelationshipAttributes]);
    }
})

// .use(MarkdownSlack);
;

// MarkdownRender.enable(
//     [
//         "newline"
//     ]
// )

// let text = "this is test\n\n\n\n fff";
// let textArray = text.split("\n");
// textArray[2] = "<br>";
// textArray[3] = "<br>";
// text = textArray.join("\n");
// console.log("md text: ", md.render(text))

// let count = (text.match(/\n/g) || []).length;
// console.log("text array: ", textArray, " count: ", count);

// const testRegex = /^&lt; /;
// const testString = "&lt; this is blockquote";

// console.log("Is string matching: ", testString.match(testRegex));



const onloadFunc = ()=>{
    let testString = "*strong*\n_italics_\n*_strong and italics_*\n_*italics and strong*_\n```mono space test```\n[Test embedded link](https://bing.com)\nhttps://www.bing.com\n# header 1\n## header 2\n### header 3\n#### header 4\n&gt; blockquote 1\n&gt; blockquote 2";
    let convertGtTestString = "*strong*\n_italics_\n*_strong and italics_*\n_*italics and strong*_\n```mono space test```\n[Test embedded link](https://bing.com)\nhttps://www.bing.com\n# header 1\n## header 2\n### header 3\n#### header 4\n> blockquote 1\n> blockquote 2";
    let urlString = "www.abc.com"
    let htmlString = md.render(urlString);
    console.log("html string: ", htmlString);
}

function testOutput(){
    console.log("reached test");
    let md = new MarkdownRender(
        "default",
        {
            html: true, // To enable HTML tags in source
            linkify: true, // To autoconvert URL-like text to links
            breaks: true // To convert \n in paragraphs into <br>
        }
    )
    // .use(iterator, "url_new_win", "link_open", (tokens, index) => {
    //     console.log("called linkopen");
    //     console.log("tokens: ", tokens, " index: ", index)
    // })
    // .use(iterator, '', 'newline', function (tokens, idx) {
    //                   console.log("tokens: ", tokens);
    //                   tokens[idx].content = tokens[idx].content.replace(/\n/g, '<br>');
    //                 })
    // .use(iterator, 'url_beautify', 'link_open', function (tokens, idx) {
    //     // Make sure link contains only text
    //     // if ((tokens[idx + 2].type !== 'link_close') ||
    //     //     (tokens[idx + 1].type !== 'text')) {
    //     //   return;
    //     // }
    //     console.log("get here 1");
    //     // Do replacement
    //     tokens[idx + 1].content = tokens[idx + 1].content
    //                                 .replace(/^https?:\/\//, '')
    //                                 .replace(/^www./, 'sfsfsf');
    //   })
    .use(iterator, "url_new_win", "link_open", (tokens, index) => {
        const targetAttrIndex = tokens[index].attrIndex(Constants.Target);
        const relAttrIndex = tokens[index].attrIndex(Constants.TargetRelationship);
        console.log("get here 2: ", tokens[index]);
        if (~targetAttrIndex) {
            tokens[index].attrs[targetAttrIndex][1] = Constants.Blank;
        } else {
            tokens[index].attrPush([Constants.Target, Constants.Blank]);
        }
    
        if (~relAttrIndex) {
            tokens[index].attrs[relAttrIndex][1] = Constants.TargetRelationshipAttributes;
        } else {
            tokens[index].attrPush([Constants.TargetRelationship, Constants.TargetRelationshipAttributes]);
        }
    })
    let testString = "*strong*\n_italics_\n*_strong and italics_*\n_*italics and strong*_\n```mono space test```\n[Test embedded link](https://bing.com)\nhttps://www.bing.com\n# header 1\n## header 2\n### header 3\n#### header 4\n&gt; blockquote 1\n&gt; blockquote 2";
    let convertGtTestString = "*strong*\n_italics_\n*_strong and italics_*\n_*italics and strong*_\n```mono space test```\n[Test embedded link](https://bing.com)\nhttps://www.bing.com\n# header 1\n## header 2\n### header 3\n#### header 4\n> blockquote 1\n> blockquote 2";
    let urlString = "www.abc.com"
    let htmlString = md.render(urlString);
    console.log("html string: ", htmlString);
}

onloadFunc()