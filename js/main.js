const hiddenShowPassword = (inputPassword, inputIcon) => {
  const input = document.getElementById(inputPassword),
    fontEye = document.getElementById(inputIcon);

  fontEye.addEventListener("click", () => {
    // Change password to text
    if (input.type === "password") {
      // Switch to text
      input.type = "text";

      // Add icon eye
      fontEye.classList.add("fa-eye");
      // Remove icon hideen eye
      fontEye.classList.remove("fa-eye-slash");
    } else {
      // Change to password
      input.type = "password";

      // Remove icon eye
      fontEye.classList.remove("fa-eye");
      // Add icon hidden
      fontEye.classList.add("fa-eye-slash");
    }
  });
};

hiddenShowPassword("input-pass", "input-icon");
