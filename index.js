document.querySelector('.nav .part4').addEventListener('click', function() {
  document.querySelectorAll('.hidden').forEach(function(item) {
	  if (item.style.display === "flex"){
		  item.style.display = "none";
	  }else {
		  item.style.display = "flex";
	  }
  });
});
