function BreakTextIntoLines(text) {
  return text.replace(/(\.|\!)/g, "$1<br/>").split("<br/>");
}

export default BreakTextIntoLines;
