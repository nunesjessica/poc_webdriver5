import Page from './page';

class NewUserPage extends Page {
  get alert_message() {
    return $('#notice');
  }
  get name() {
    return $('#user_name');
  }
  get lastname() {
    return $('#user_lastname');
  }
  get email() {
    return $('#user_email');
  }
  get submitbutton() {
    return $('//*[@name="commit"]');
}
  open() {
    super.open('https://automacaocombatista.herokuapp.com/users/new');
  }
  write_required_fields(name, lastname, email){
    this.name.setValue(name);
    this.lastname.setValue(lastname);
    this.email.setValue(email);
    this.submitbutton.click();
  }
}

export default new NewUserPage();