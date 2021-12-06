function dashS(content) {
  let count = 0;
  for (let i = 0; i < content.length; i++) {
    if (content[i].length == 1 && content.includes("\r", i)) {
      count++;
    } else {
      count = 0;
    }

    if (count > 1) {
      content.splice(i, 1);
      i--;
      count = 1;
    }
  }

  //   console.log(content);

  return content;
}


module.exports= {
   dashS :dashS
}