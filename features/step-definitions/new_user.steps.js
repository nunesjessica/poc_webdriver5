import { Given, When, Then } from "cucumber";
import { expect } from 'chai';
import newUserPage from "../pages/new_user.page";

Given('que estou na página de criação de usuário', () => {
  newUserPage.open();
});

When('crio um usuário com as informações obrigatórias', () => {
  newUserPage.write_required_fields('nameTest', 'lastnameTest', 'emailTest@email.com');
});

Then('vejo o usuário criado com sucesso', () => {
  expect(newUserPage.alert_message.getText()).to.equal('Usuário Criado com sucesso');
});


