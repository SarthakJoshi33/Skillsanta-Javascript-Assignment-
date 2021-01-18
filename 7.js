function search_word(sentence, word){
    var x = 0, y=0;
    for (var i = 0; i< sentence.length; i++)
        {
        if(sentence[i] == word[0])
            {
            for(var j=i;j< i+word.length;j++)
               {
                if(sentence[j] == word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return "'"+word+"' was found "+x+" times.";
}
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
