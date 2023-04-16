document.addEventListener("DOMContentLoaded", () => {
    const runBtn = document.getElementById("run-btn");
    const patternInput = document.getElementById("pattern");
    const stringInput = document.getElementById("string");
    const regexFlagSelect = document.getElementById("regex-flag");
    const regexFuncSelect = document.getElementById("regex-func");
    const outputEl = document.getElementById("regex-output");
    const warningEl = document.getElementById("warning-msg");
  
    runBtn.addEventListener("click", () => {
      const pattern = patternInput.value;
      const string = stringInput.value;
      const regexFlags = regexFlagSelect.value;
      const regexFunc = regexFuncSelect.value;
  
      if (pattern.length == 0) {
        warningEl.innerHTML = "Please enter a pattern to continue.";
        return;
      }
  
      if (string.length == 0) {
        warningEl.innerHTML = "Please enter a string to continue.";
        return;
      }
  
      const regex = new RegExp(pattern, regexFlags);
      let result;
      switch (regexFunc) {
        case "test":
          result = regex.test(string);
          break;
        case "search":
          result = string.search(regex);
          break;
        case "match":
          result = string.match(regex);
          break;
      }
  
      if (result == null) {
        outputEl.innerHTML = "No matches found.";
      } else {
        outputEl.innerHTML = result.toString();
      }
      
      warningEl.innerHTML = "";
    });
  });
  