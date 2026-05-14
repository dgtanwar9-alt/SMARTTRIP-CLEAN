<script>

const requestOtpButton = document.getElementById("requestOtpButton");

requestOtpButton.addEventListener("click", function(){

  document.getElementById("authScreen").hidden = true;

  document.getElementById("appShell").hidden = false;

});

</script>