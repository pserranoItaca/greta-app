export const FORM_REGEX = {
  USER: new RegExp(/^[A-Za-z0-9ñÑçÇáéíóúÁÉÍÓÚüÜ._-]+$/),

  PASS: new RegExp(
    /^(?=.*[A-Za-zñÑçÇáéíóúÁÉÍÓÚüÜ])(?=.*\d)(?=.*[@$!%*?&])[A-Za-zñÑçÇáéíóúÁÉÍÓÚüÜ\d@$!%*?&]{6,}$/
  ),
};
