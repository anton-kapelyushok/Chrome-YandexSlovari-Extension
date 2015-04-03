
// A generic onclick callback function.
function genericOnClick(info, tab) {
  console.log("Selection text " + info.selectionText)
  base_url = "https://slovari.yandex.ru/"
  lang = "/en-ru/"
  url = base_url + info.selectionText + lang
  chrome.tabs.create({ url: url });
}

// Create one test item for each context type.
var contexts = ["selection"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var id = chrome.contextMenus.create({"title": "Перевести слово" , "contexts":[context],
                                       "onclick": genericOnClick});
  console.log("'" + context + "' item:" + id);
}
