function papapap(value, cb){
	switch(value) {
		case 'five_stars':
			if(cb.checked){
				cb1 = document.getElementById("one_star");
				cb2 = document.getElementById("two_stars");
				cb3 = document.getElementById("three_stars");
				cb4 = document.getElementById("four_stars");
				var nDisplay = 1;
				if(cb1.checked && cb2.checcked && cb3.checked && cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				document.getElementById("guitar1").style.display = "block";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar5").style.display = "none";
				if(cb2.checked){
					document.getElementById("guitar4").style.display = "block";
					nDisplay++;
				}
				if(cb1.checked){
					document.getElementById("guitar5").style.display = "block";
					nDisplay++;
				}
				if(cb3.checked){
					document.getElementById("guitar3").style.display = "block";
					nDisplay++;
				}
				if(cb4.checked){
					document.getElementById("guitar2").style.display = "block";
					nDisplay++;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			else{
				cb1 = document.getElementById("one_star");
				cb2 = document.getElementById("two_stars");
				cb3 = document.getElementById("three_stars");
				cb4 = document.getElementById("four_stars");
				var nDisplay = 0;
				if(!cb1.checked && !cb2.checked && !cb3.checked && !cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar5").style.display = "none";
				if(cb1.checked){
					document.getElementById("guitar5").style.display = "block";
					nDisplay++;
				}
				if(cb2.checked){
					document.getElementById("guitar4").style.display = "block";
					nDisplay++;
				}
				if(cb3.checked){
					document.getElementById("guitar3").style.display = "block";
					nDisplay++;
				}
				if(cb4.checked){
					document.getElementById("guitar2").style.display = "block";
					nDisplay++;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'four_stars':
			if(cb.checked){
				cb1 = document.getElementById("one_star");
				cb2 = document.getElementById("two_stars");
				cb3 = document.getElementById("three_stars");
				cb4 = document.getElementById("five_stars");
				var nDisplay = 1;
				if(cb1.checked && cb2.checked && cb3.checked && cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				document.getElementById("guitar2").style.display = "block";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar5").style.display = "none";
				if(cb1.checked){
					document.getElementById("guitar5").style.display = "block";
					nDisplay++;
				}
				if(cb2.checked){
					document.getElementById("guitar4").style.display = "block";
					nDisplay++;
				}
				if(cb3.checked){
					document.getElementById("guitar3").style.display = "block";
					nDisplay++;
				}
				if(cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					nDisplay++;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			else{
				cb1 = document.getElementById("one_star");
				cb2 = document.getElementById("two_stars");
				cb3 = document.getElementById("three_stars");
				cb4 = document.getElementById("five_stars");
				var nDisplay = 0;
				if(!cb1.checked && !cb2.checked && !cb3.checked && !cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar5").style.display = "none";
				if(cb1.checked){
					document.getElementById("guitar5").style.display = "block";
					nDisplay++;
				}
				if(cb2.checked){
					document.getElementById("guitar4").style.display = "block";
					nDisplay++;
				}
				if(cb3.checked){
					document.getElementById("guitar3").style.display = "block";
					nDisplay++;
				}
				if(cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					nDisplay++;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'three_stars':
			if(cb.checked){
				cb1 = document.getElementById("one_star");
				cb2 = document.getElementById("two_stars");
				cb3 = document.getElementById("four_stars");
				cb4 = document.getElementById("five_stars");
				var nDisplay = 1;
				if(cb1.checked && cb2.checked && cb3.checked && cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				document.getElementById("guitar3").style.display = "block";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar5").style.display = "none";
				if(cb1.checked){
					document.getElementById("guitar5").style.display = "block";
					nDisplay++;
				}
				if(cb2.checked){
					document.getElementById("guitar4").style.display = "block";
					nDisplay++;
				}
				if(cb3.checked){
					document.getElementById("guitar2").style.display = "block";
					nDisplay++;
				}
				if(cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					nDisplay++;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			else{
				cb1 = document.getElementById("one_star");
				cb2 = document.getElementById("two_stars");
				cb3 = document.getElementById("four_stars");
				cb4 = document.getElementById("five_stars");
				var nDisplay = 0;
				if(!cb1.checked && !cb2.checked && !cb3.checked && !cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar5").style.display = "none";
				if(cb1.checked){
					document.getElementById("guitar5").style.display = "block";
					nDisplay++;
				}
				if(cb2.checked){
					document.getElementById("guitar4").style.display = "block";
					nDisplay++;
				}
				if(cb3.checked){
					document.getElementById("guitar2").style.display = "block";
					nDisplay++;
				}
				if(cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					nDisplay++;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'two_stars':
			if(cb.checked){
				cb1 = document.getElementById("one_star");
				cb2 = document.getElementById("three_stars");
				cb3 = document.getElementById("four_stars");
				cb4 = document.getElementById("five_stars");
				var nDisplay = 1;
				if(cb1.checked && cb2.checked && cb3.checked && cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				document.getElementById("guitar4").style.display = "block";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar5").style.display = "none";
				if(cb1.checked){
					document.getElementById("guitar5").style.display = "block";
					nDisplay++;
				}
				if(cb2.checked){
					document.getElementById("guitar3").style.display = "block";
					nDisplay++;
				}
				if(cb3.checked){
					document.getElementById("guitar2").style.display = "block";
					nDisplay++;
				}
				if(cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					nDisplay++;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			else{
				cb1 = document.getElementById("one_star");
				cb2 = document.getElementById("three_stars");
				cb3 = document.getElementById("four_stars");
				cb4 = document.getElementById("five_stars");
				var nDisplay = 0;
				if(!cb1.checked && !cb2.checked && !cb3.checked && !cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar5").style.display = "none";
				if(cb1.checked){
					document.getElementById("guitar5").style.display = "block";
					nDisplay++;
				}
				if(cb2.checked){
					document.getElementById("guitar3").style.display = "block";
					nDisplay++;
				}
				if(cb3.checked){
					document.getElementById("guitar2").style.display = "block";
					nDisplay++;
				}
				if(cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					nDisplay++;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'one_star':
			if(cb.checked){
				cb1 = document.getElementById("two_stars");
				cb2 = document.getElementById("three_stars");
				cb3 = document.getElementById("four_stars");
				cb4 = document.getElementById("five_stars");
				var nDisplay = 1;
				if(cb1.checked && cb2.checked && cb3.checked && cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				document.getElementById("guitar5").style.display = "block";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				if(cb1.checked){
					document.getElementById("guitar4").style.display = "block";
					nDisplay++;
				}
				if(cb2.checked){
					document.getElementById("guitar3").style.display = "block";
					nDisplay++;
				}
				if(cb3.checked){
					document.getElementById("guitar2").style.display = "block";
					nDisplay++;
				}
				if(cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					nDisplay++;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			else{
				cb1 = document.getElementById("two_stars");
				cb2 = document.getElementById("three_stars");
				cb3 = document.getElementById("four_stars");
				cb4 = document.getElementById("five_stars");
				var nDisplay = 0;
				if(!cb1.checked && !cb2.checked && !cb3.checked && !cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar5").style.display = "none";
				if(cb1.checked){
					document.getElementById("guitar4").style.display = "block";
					nDisplay++;
				}
				if(cb2.checked){
					document.getElementById("guitar3").style.display = "block";
					nDisplay++;
				}
				if(cb3.checked){
					document.getElementById("guitar2").style.display = "block";
					nDisplay++;
				}
				if(cb4.checked){
					document.getElementById("guitar1").style.display = "block";
					nDisplay++;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'less_five':
			if(cb.checked){
				cb1 = document.getElementById("five_thousand");
				cb2 = document.getElementById("thousand_two");
				nDisplay = 0;
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "0 search results for 'les paul'<p>Displaying item(s) 0 of 0<br>0 entries contain all terms you searched for</p>"
					return;
				}
				document.getElementById("guitar5").style.display = "none";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					nDisplay+=3;
				}
				if(cb2.checked){
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					nDisplay+=2;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			else {
				cb1 = document.getElementById("five_thousand");
				cb2 = document.getElementById("thousand_two");
				nDisplay = 0;
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				document.getElementById("guitar5").style.display = "none";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					nDisplay+=3;
				}
				if(cb2.checked){
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					nDisplay+=2;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'five_thousand':
			if(cb.checked){
				cb1 = document.getElementById("thousand_two");
				document.getElementById("guitar5").style.display = "none";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				if(!cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "3 search results for 'les paul'<p>Displaying item(s) 3 of 3<br>3 entries contain all terms you searched for</p>"
					return;
				}
				else{
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
				}
			}
			else {
				cb1 = document.getElementById("less_five");
				cb2 = document.getElementById("thousand_two");
				nDisplay = 0;
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				document.getElementById("guitar5").style.display = "none";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				if(cb1.checked && !cb2.checked){
					document.getElementById("results").innerHTML = "0 search results for 'les paul'<p>Displaying item(s) 0 of 0<br>0 entries contain all terms you searched for</p>"
					return;
				}
				if(cb2.checked){
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					nDisplay+=2;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'thousand_two':
			if(cb.checked){
				cb1 = document.getElementById("five_thousand");
				document.getElementById("guitar5").style.display = "none";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				if(!cb1.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "2 search results for 'les paul'<p>Displaying item(s) 2 of 2<br>2 entries contain all terms you searched for</p>"
					return;
				}
				else{
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
				}
			}
			else {
				cb1 = document.getElementById("less_five");
				cb2 = document.getElementById("five_thousand");
				nDisplay = 0;
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				document.getElementById("guitar5").style.display = "none";
				document.getElementById("guitar2").style.display = "none";
				document.getElementById("guitar3").style.display = "none";
				document.getElementById("guitar1").style.display = "none";
				document.getElementById("guitar4").style.display = "none";
				if(cb1.checked && !cb2.checked){
					document.getElementById("results").innerHTML = "0 search results for 'les paul'<p>Displaying item(s) 0 of 0<br>0 entries contain all terms you searched for</p>"
					return;
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					nDisplay+=3;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'sunburst':
			if(cb.checked){
				cb1 = document.getElementById("color_black");
				cb2 = document.getElementById("color_cherry");
				if(cb1.checked && cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "3 search result for 'les paul'<p>Displaying item(s) 3 of 3<br>3 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("results").innerHTML = "4 search results for 'les paul'<p>Displaying item(s) 4 of 4<br>4 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "4 search results for 'les paul'<p>Displaying item(s) 4 of 4<br>4 entries contain all terms you searched for</p>"
				}
			} 
			else {																							/*uncheck sunburst*/
				cb1 = document.getElementById("color_black");
				cb2 = document.getElementById("color_cherry");
				nDisplay = 0;
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar2").style.display = "block";
					nDisplay+=1;
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar5").style.display = "block";	
					nDisplay+=1;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'black' :
			if(cb.checked){
				cb1 = document.getElementById("color_sunburst");
				cb2 = document.getElementById("color_cherry");
				if(cb1.checked && cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "1 search result for 'les paul'<p>Displaying item(s) 1 of 1<br>1 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "4 search results for 'les paul'<p>Displaying item(s) 4 of 4<br>4 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "2 search results for 'les paul'<p>Displaying item(s) 2 of 2<br>2 entries contain all terms you searched for</p>"
				}
			} 
			else {																							/*uncheck black*/
				cb1 = document.getElementById("color_sunburst");
				cb2 = document.getElementById("color_cherry");
				nDisplay = 0;
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "none";
					nDisplay+=3;
				}
				if(cb2.checked){
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar5").style.display = "block";	
					nDisplay+=1;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'cherry':
			if(cb.checked){
				cb1 = document.getElementById("color_sunburst");
				cb2 = document.getElementById("color_black");
				if(cb1.checked && cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "1 search result for 'les paul'<p>Displaying item(s) 1 of 1<br>1 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "4 search results for 'les paul'<p>Displaying item(s) 4 of 4<br>4 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "2 search results for 'les paul'<p>Displaying item(s) 2 of 2<br>2 entries contain all terms you searched for</p>"
				}
			} 
			else {																							/*uncheck cherry*/
				cb1 = document.getElementById("color_sunburst");
				cb2 = document.getElementById("color_black");
				nDisplay = 0;
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "none";
					nDisplay+=3;
				}
				if(cb2.checked){
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "none";
					nDisplay+=1;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'body_mahogany':
			if(cb.checked){
				cb1 = document.getElementById("body_alder");
				cb2 = document.getElementById("body_basswood");
				if(cb1.checked && cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "3 search result for 'les paul'<p>Displaying item(s) 3 of 3<br>3 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("results").innerHTML = "4 search results for 'les paul'<p>Displaying item(s) 4 of 4<br>4 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "4 search results for 'les paul'<p>Displaying item(s) 4 of 4<br>4 entries contain all terms you searched for</p>"
				}
			} 
			else {																							/*uncheck mahogany*/
				cb1 = document.getElementById("body_alder");
				cb2 = document.getElementById("body_basswood");
				nDisplay = 0;
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar2").style.display = "block";
					nDisplay+=1;
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar5").style.display = "block";	
					nDisplay+=1;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'body_alder' :
			if(cb.checked){
				cb1 = document.getElementById("body_mahogany");
				cb2 = document.getElementById("body_basswood");
				if(cb1.checked && cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "1 search result for 'les paul'<p>Displaying item(s) 1 of 1<br>1 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "4 search results for 'les paul'<p>Displaying item(s) 4 of 4<br>4 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "2 search results for 'les paul'<p>Displaying item(s) 2 of 2<br>2 entries contain all terms you searched for</p>"
				}
			} 
			else {																							
				cb1 = document.getElementById("body_mahogany");
				cb2 = document.getElementById("body_basswood");
				nDisplay = 0;
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "none";
					nDisplay+=3;
				}
				if(cb2.checked){
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar5").style.display = "block";	
					nDisplay+=1;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'body_basswood':
			if(cb.checked){
				cb1 = document.getElementById("body_mahogany");
				cb2 = document.getElementById("body_alder");
				if(cb1.checked && cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "1 search result for 'les paul'<p>Displaying item(s) 1 of 1<br>1 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "4 search results for 'les paul'<p>Displaying item(s) 4 of 4<br>4 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "2 search results for 'les paul'<p>Displaying item(s) 2 of 2<br>2 entries contain all terms you searched for</p>"
				}
			} 
			else {																							/*uncheck body basswood*/
				cb1 = document.getElementById("body_mahogany");
				cb2 = document.getElementById("body_alder");
				nDisplay = 0;
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "none";
					nDisplay+=3;
				}
				if(cb2.checked){
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "none";	
					nDisplay+=1;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'neck_mahogany':
			if(cb.checked){
				cb1 = document.getElementById("neck_maple");
				cb2 = document.getElementById("neck_rosewood");
				if(cb1.checked && cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "2 search result for 'les paul'<p>Displaying item(s) 2 of 2<br>2 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "4 search results for 'les paul'<p>Displaying item(s) 4 of 4<br>4 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "3 search results for 'les paul'<p>Displaying item(s) 3 of 3<br>3 entries contain all terms you searched for</p>"
				}
			}
			else {																							/*uncheck neck_mahogany*/
				cb1 = document.getElementById("neck_maple");
				cb2 = document.getElementById("neck_rosewood");
				nDisplay = 0;
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "none"
					nDisplay+=2;
				}
				if(cb2.checked){
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					nDisplay+=1;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'neck_maple':
			if(cb.checked){
				cb1 = document.getElementById("neck_mahogany");
				cb2 = document.getElementById("neck_rosewood");
				if(cb1.checked && cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "2 search result for 'les paul'<p>Displaying item(s) 2 of 2<br>2 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "4 search results for 'les paul'<p>Displaying item(s) 4 of 4<br>4 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "3 search results for 'les paul'<p>Displaying item(s) 3 of 3<br>3 entries contain all terms you searched for</p>"
				}
			}
			else {																							/*uncheck neck maple*/
				cb1 = document.getElementById("neck_mahogany");
				cb2 = document.getElementById("neck_rosewood");
				nDisplay = 0;
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar5").style.display = "none"
					nDisplay+=2;
				}
				if(cb2.checked){
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					nDisplay+=1;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'neck_rosewood':
			if(cb.checked){
				cb1 = document.getElementById("neck_mahogany");
				cb2 = document.getElementById("neck_maple");
				if(cb1.checked && cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "1 search result for 'les paul'<p>Displaying item(s) 1 of 1<br>1 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "3 search results for 'les paul'<p>Displaying item(s) 3 of 3<br>3 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "3 search results for 'les paul'<p>Displaying item(s) 3 of 3<br>3 entries contain all terms you searched for</p>"
				}
			}
			else {																							/*uncheck neck_rosewood*/
				cb1 = document.getElementById("neck_mahogany");
				cb2 = document.getElementById("neck_maple");
				nDisplay = 0;
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar5").style.display = "none"
					nDisplay+=2;
				}
				if(cb2.checked){
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					nDisplay+=2;
				}
				document.getElementById("results").innerHTML = nDisplay+" search results for 'les paul'<p>Displaying item(s) "+ nDisplay +" of " + nDisplay + "<br>" + nDisplay + " entries contain all terms you searched for</p>"
			}
			break;
		case 'fretboard_mahogany':
			if(cb.checked){
				cb1 = document.getElementById("fretboard_ebony");
				cb2 = document.getElementById("fretboard_walnut");
				if(cb1.checked && cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "2 search result for 'les paul'<p>Displaying item(s) 2 of 2<br>2 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "4 search results for 'les paul'<p>Displaying item(s) 4 of 4<br>4 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "3 search results for 'les paul'<p>Displaying item(s) 3 of 3<br>3 entries contain all terms you searched for</p>"
				}
			}
			else {																							/*uncheck fretboard_mahogany*/
				cb1 = document.getElementById("fretboard_ebony");
				cb2 = document.getElementById("fretboard_walnut");
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "none"
					document.getElementById("results").innerHTML = "2 search result for 'les paul'<p>Displaying item(s) 2 of 2<br>2 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					if(!cb1.checked){
						document.getElementById("guitar3").style.display = "none";
						document.getElementById("guitar4").style.display = "none";
						document.getElementById("results").innerHTML = "1 search result for 'les paul'<p>Displaying item(s) 1 of 1<br>1 entries contain all terms you searched for</p>"
						return;
					}
					document.getElementById("results").innerHTML = "3 search result for 'les paul'<p>Displaying item(s) 3 of 3<br>3 entries contain all terms you searched for</p>"
				}	
			}
			break;
		case 'fretboard_ebony':
			if(cb.checked){
				cb1 = document.getElementById("fretboard_mahogany");
				cb2 = document.getElementById("fretboard_walnut");
				if(cb1.checked && cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "2 search result for 'les paul'<p>Displaying item(s) 2 of 2<br>2 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("results").innerHTML = "4 search results for 'les paul'<p>Displaying item(s) 4 of 4<br>4 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "3 search results for 'les paul'<p>Displaying item(s) 3 of 3<br>3 entries contain all terms you searched for</p>"
				}
			}
			else {																							/*uncheck fretboard_ebony*/
				cb1 = document.getElementById("fretboard_mahogany");
				cb2 = document.getElementById("fretboard_walnut");
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar5").style.display = "none"
					document.getElementById("results").innerHTML = "2 search result for 'les paul'<p>Displaying item(s) 2 of 2<br>2 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					if(!cb1.checked){
						document.getElementById("guitar1").style.display = "none";
						document.getElementById("guitar2").style.display = "none";
						document.getElementById("results").innerHTML = "1 search result for 'les paul'<p>Displaying item(s) 1 of 1<br>1 entries contain all terms you searched for</p>"
						return;
					}
					document.getElementById("results").innerHTML = "3 search result for 'les paul'<p>Displaying item(s) 3 of 3<br>3 entries contain all terms you searched for</p>"
				}	
			}
			break;
		case 'fretboard_walnut':
			if(cb.checked){
				cb1 = document.getElementById("fretboard_mahogany");
				cb2 = document.getElementById("fretboard_ebony");
				if(cb1.checked && cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "1 search result for 'les paul'<p>Displaying item(s) 1 of 1<br>1 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "3 search results for 'les paul'<p>Displaying item(s) 3 of 3<br>3 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar1").style.display = "none";
					document.getElementById("guitar2").style.display = "none";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "3 search results for 'les paul'<p>Displaying item(s) 3 of 3<br>3 entries contain all terms you searched for</p>"
				}
			}
			else {																							/*uncheck fretboard_walnut*/
				cb1 = document.getElementById("fretboard_mahogany");
				cb2 = document.getElementById("fretboard_ebony");
				if(!cb1.checked && !cb2.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					document.getElementById("guitar5").style.display = "block";
					document.getElementById("results").innerHTML = "5 search results for 'les paul'<p>Displaying item(s) 5 of 5<br>5 entries contain all terms you searched for</p>"
					return;
				}
				if(cb1.checked){
					document.getElementById("guitar1").style.display = "block";
					document.getElementById("guitar2").style.display = "block";
					document.getElementById("guitar3").style.display = "none";
					document.getElementById("guitar4").style.display = "none";
					document.getElementById("guitar5").style.display = "none"
					document.getElementById("results").innerHTML = "2 search result for 'les paul'<p>Displaying item(s) 2 of 2<br>2 entries contain all terms you searched for</p>"
				}
				if(cb2.checked){
					document.getElementById("guitar5").style.display = "none";
					document.getElementById("guitar3").style.display = "block";
					document.getElementById("guitar4").style.display = "block";
					if(!cb1.checked){
						document.getElementById("guitar1").style.display = "none";
						document.getElementById("guitar2").style.display = "none";
						document.getElementById("results").innerHTML = "2 search result for 'les paul'<p>Displaying item(s) 2 of 2<br>2 entries contain all terms you searched for</p>"
						return;
					}
					document.getElementById("results").innerHTML = "4 search result for 'les paul'<p>Displaying item(s) 4 of 4<br>4 entries contain all terms you searched for</p>"
				}	
			}
			break;
	}
};

