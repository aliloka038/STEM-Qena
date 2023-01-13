  function OpenOrClose() {
	document.getElementById("mySidebar").classList.toggle("open");
	document.getElementById("main").classList.toggle("open");
  }

  setTimeout(function() {
    document.querySelector('.loader-container').style.display = 'none';
    document.querySelector('.main-content').classList.add('visible');
    document.body.style.overflow = "auto"
    }, 2000);