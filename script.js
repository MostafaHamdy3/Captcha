(function () {
  const fonts = ["cursive", "sans-serif", "serif", "monospace"];
  let captchaValue = "";

  function generateCaptcha() {
    let value = btoa(Math.random() * 100000);
    value = value.substr(0, 5 + Math.random() * 4);
    captchaValue = value;
  }

  function setCaptcha() {
    let letters = captchaValue
      .split("")
      .map((letter) => {
        const rotate = -20 + Math.trunc(Math.random() * 30);
        const font = Math.trunc(Math.random() * fonts.length);

        return `<span style="transform:rotate(${rotate}deg);
      font-family:${fonts[font]}">
         ${letter}
      </span>`;
      })
      .join("");
    document.querySelector("#Form .captcha .preview").innerHTML = letters;
  }

  function initCaptcha() {
    document
      .querySelector("#Form .captcha .captcha-refresh")
      .addEventListener("click", () => {
        generateCaptcha();
        setCaptcha();
      });
    generateCaptcha();
    setCaptcha();
  }
  initCaptcha();

  document.querySelector("#Form .btn").addEventListener("click", () => {
    let inputCaptchaValue = document.querySelector(
      "#Form .captcha-form .captcha input"
    ).value;
    inputCaptchaValue === captchaValue
      ? swal("", "Logging In!", "success")
      : swal("Invalid captcha");
  });
})();
