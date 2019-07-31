function SearchResponsive() {
    var x = document.getElementById("search_js");
    x.value = "Search...";
}

function UserPopup() {
	var popup = document.getElementById("userpopup");
	popup.classList.toggle("show");
}

function LogoutPopup() {
	var popup = document.getElementById("logoutpopup");
	popup.classList.toggle("show");
}

function MyCartPopup(){
	var popup = document.getElementById("mycartpopup");
	popup.classList.toggle("show");	
}

function AvailableImmediatelyPopup1() {
	var popup = document.getElementById("available1");
	popup.classList.toggle("show");
}

function AvailableImmediatelyPopup2() {
	var popup = document.getElementById("available2");
	popup.classList.toggle("show");
}

function AvailableImmediatelyPopup3() {
	var popup = document.getElementById("available3");
	popup.classList.toggle("show");
}

function AvailableImmediatelyPopup4() {
	var popup = document.getElementById("available4");
	popup.classList.toggle("show");
}

function AvailableImmediatelyPopup5() {
	var popup = document.getElementById("available5");
	popup.classList.toggle("show");
}

var cart = 0;

function UpdateCart(added,stayblue) {
	cart++;
	mycart_txt = document.getElementById("mycart_txt");
	mycart = document.getElementById("mycart");
	mycart_txt.innerHTML = "&nbsp;My Cart (" + cart + ")";
	if(cart < 10) {
		mycart.style.marginRight = "2%";
	} 
	else {
		mycart.style.width = "135px";
	}
	added.innerHTML = "Added!";
	if(stayblue) {
		added.style.color = "#366299";
	}
}

function UpdateCartMobile(added,stayblue) {
	cart++;
	mycart_txt = document.getElementById("mycart_txt");
	mycart = document.getElementById("mycart");
	mycart_txt.innerHTML = "(" + cart + ")";
	mycart.style.width = "135px";
	added.innerHTML = "Added!";
	mycart_txt.style.marginTop = "2%";
	if(stayblue) {
		added.style.color = "#366299";
	}
}

function LoginPopup() {
	var popup = document.getElementById("loginpopup");
	popup.classList.toggle("show");
}

function SignUpPopup() {
	var popup = document.getElementById("signuppopup");
	popup.classList.toggle("show");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function resetTextarea(){
	document.getElementById("text_area").value = "";
	var popup = document.getElementById("submit_button_js");
	popup.classList.toggle("show");
}

function SearchResponsive2a() {
    var x = document.getElementById("price1");
    x.value = "0$";
}

function SearchResponsive2b() {
    var x = document.getElementById("price2");
    x.value = "5,000$";
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("backtotopbutton").style.display = "block";
    } 
	else {
        document.getElementById("backtotopbutton").style.display = "none";
    }
}

function dropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
}

