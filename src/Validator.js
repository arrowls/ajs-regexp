export default class Validator {
  static validateUsername(username) {
    return (
      /^[a-z]+[a-z_\-0-9]*[a-z]+$/i.test(username)
      && username.split(/[a-z\-_]/).every((letter) => letter.length <= 3)
    );
  }

  static validatePhone(number) {
    let validNumber = number;
    if (number.startsWith('8')) {
      validNumber = '+7'.concat(number.slice(2));
    }
    return validNumber.replace(/[()\- ]/g, '');
  }
}
