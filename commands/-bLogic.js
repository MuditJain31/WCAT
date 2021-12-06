function dashB(content) {
    let num = 1;
    for (let i = 0; i < content.length; i++) {
      if (content[i].length == 1 && content.includes("\r", i)) {
        console.log(" " + content[i]);
      } else {
        console.log(num + " " + content[i]);
        num++;
      }
    }
  }

  module.exports = {
      dashB : dashB
  }