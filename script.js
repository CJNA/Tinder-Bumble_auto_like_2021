function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }
  
  var confirmBox = confirm('Start swiping right?');
  // Add how many likes to run through
  var likes = prompt("How many likes to run?", '100')
  var no_of_likes = parseInt(likes)
  
  // Check whether tinder or bumble
  var tinder_or_bumble = confirm("Is this for Tinder?")

  // This portion is super hardcoded as it's very much prone to change.
  // Thinking about better way of fetching this.
  // Most likely API call is the most reliable way of doing this, but hell, this works
  tinder_xpath = '#t-1801132545 > div > div.App__body.H\(100\%\).Pos\(r\).Z\(0\) > div > main > div.H\(100\%\) > div > div > div.recsCardboard.W\(100\%\).Mt\(a\).H\(100\%\)--s.Px\(4px\)--s.Pos\(r\) > div > div.Pos\(r\).Py\(16px\).Py\(12px\)--s.Px\(4px\).Px\(8px\)--ml.D\(f\).Jc\(sb\).Ai\(c\).Maw\(375px\)--m.Mx\(a\).Pe\(n\).Mt\(-1px\) > div:nth-child(4) > button'
  bumble_xpath = '/html/body/div[1]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[2]/div[4]/button'

  target_xpath = bumble_xpath
  if (tinder_or_bumble) {
    target_xpath = tinder_xpath
  }

  var count = 1;
  var like = function(){
      if (confirmBox){ getElementByXpath(target_xpath).click();
        console.log('Liked ' + count);						  count++;												};
      setTimeout(like, 100);
  };
  setTimeout(like, 100);