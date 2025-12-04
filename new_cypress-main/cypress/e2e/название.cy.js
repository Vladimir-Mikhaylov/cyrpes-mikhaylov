describe('Правильный логин и правильный пароль', () => {

  it('Ввод правильного логина и правильного пароля, проверка текста и кнопки крестик', () => {
    cy.visit('https://login.qa.studio//'); // Зашел на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
    cy.get('#pass').type('qa_one_love1'); // Ввел верный пароль
    cy.get('#loginButton').click(); // Нажал войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
  })
})

describe('Тест восстановления пароля', () => {

  it('Проверка логики восстановления пароля', () => {
    cy.visit('https://login.qa.studio//'); // Зашел на сайт
    cy.get('#forgotEmailButton').click(); // Нажал сменить пароль
    cy.get('#mailForgot').type('bubkil@mail.ru'); // Ввел почту email
    cy.get('#restoreEmailButton').click();  // кнопка отправки запроса восстановления
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что текст совпадает
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
  })
})

describe('Правильный логин и неправильный пароль', () => {

  it('Ввод правильного логина и неправильного пароля, проверка текста и кнопки крестик', () => {
    cy.visit('https://login.qa.studio//'); // Зашел на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
    cy.get('#pass').type('qa_one_1'); // Ввел неверный пароль
    cy.get('#loginButton').click(); // Нажал войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
  })
})

describe('Неправильный логин и правильный пароль', () => {

  it('Ввод правильного логина и неправильного пароля, проверка текста и кнопки крестик', () => {
    cy.visit('https://login.qa.studio//'); // Зашел на сайт
    cy.get('#mail').type('donat@mail.ru'); // Ввел неверный логин
    cy.get('#pass').type('qa_one_love1'); // Ввел верный пароль
    cy.get('#loginButton').click(); // Нажал войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
  })
})

describe('Проверка, что в логине есть @', () => {

  it('Ввод логина без @ и правильного пароля, проверка текста и кнопки крестик', () => {
    cy.visit('https://login.qa.studio//'); // Зашел на сайт
    cy.get('#mail').type('donatmail.ru'); // Ввел логин без @
    cy.get('#pass').type('qa_one_love1'); // Ввел верный пароль
    cy.get('#loginButton').click(); // Нажал войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
  })
})

describe('Проверка на приведение к строчным буквам в логине', () => {

  it('Ввод строчными буквами логина и правильного пароля, проверка текста и кнопки крестик', () => {
    cy.visit('https://login.qa.studio//'); // Зашел на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввел логин строчными буквами
    cy.get('#pass').type('qa_one_love1'); // Ввел верный пароль
    cy.get('#loginButton').click(); // Нажал войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
  })
})