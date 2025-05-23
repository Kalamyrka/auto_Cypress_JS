describe("Проверка авторизации", function () {
    
  it("Верный логин и верный пароль", function () {
    cy.visit("https://login.qa.studio/"); // Зайти на сайт
    cy.get("#form").should("be.visible"); // Проверяем, что видна форма

    cy.get("#mail").type("german@dolnikov.ru"); // Ввести почту
    cy.get("#pass").type("iLoveqastudio1"); // Ввести пароль
    cy.get("#loginButton").click(); // Кликнуть на кнопку войти

    cy.get("#messageHeader").contains("Авторизация прошла успешно"); // Проверяем текст
    cy.get("#exitMessageButton > .exitIcon").should("be.visible"); // Проверяем, что виден крестик
  });

  it("Востановление пароля", function () {
    cy.visit("https://login.qa.studio/"); // Зайти на сайт
    cy.get("#form").should("be.visible"); // Проверяем, что видна форма

    cy.get("#forgotEmailButton").should("have.css", "color", "rgb(0, 85, 152)"); // Проверяем цвет кнопки
    cy.get("#forgotEmailButton").click(); // Нажимаем на кнопку восстановить пароль

    cy.get("#forgotForm > .header").contains("Восстановите пароль"); // Проверяем форму
    cy.get("#mailForgot").type("german@dolnikov.ru"); // Вводим почту
    cy.get("#restoreEmailButton").click(); // Нажимаем на кнопку отправить код

    cy.get("#messageHeader").contains("Успешно отправили пароль на e-mail"); // Проверяем текст
    cy.get("#exitMessageButton > .exitIcon").should("be.visible"); // Проверяем, что виден крестик
  });

  it("Верный логин и неправильный пароль", function () {
    cy.visit("https://login.qa.studio/"); // Зайти на сайт
    cy.get("#form").should("be.visible"); // Проверяем, что видна форма

    cy.get("#mail").type("german@dolnikov.ru"); // Ввести почту
    cy.get("#pass").type("iLoveqastudio2"); // Ввести пароль
    cy.get("#loginButton").click(); // Кликнуть на кнопку войти

    cy.get("#messageHeader").contains("Такого логина или пароля нет"); // Проверяем текст
    cy.get("#exitMessageButton > .exitIcon").should("be.visible"); // Проверяем, что виден крестик
  });

  it("Неправильный логин и верный пароль", function () {
    cy.visit("https://login.qa.studio/"); // Зайти на сайт
    cy.get("#form").should("be.visible"); // Проверяем, что видна форма

    cy.get("#mail").type("negerman@dolnikov.ru"); // Ввести почту
    cy.get("#pass").type("iLoveqastudio1"); // Ввести пароль
    cy.get("#loginButton").click(); // Кликнуть на кнопку войти

    cy.get("#messageHeader").contains("Такого логина или пароля нет"); // Проверяем текст
    cy.get("#exitMessageButton > .exitIcon").should("be.visible"); // Проверяем, что виден крестик
  });

  it("Логин без @ и верный пароль", function () {
    cy.visit("https://login.qa.studio/"); // Зайти на сайт
    cy.get("#form").should("be.visible"); // Проверяем, что видна форма

    cy.get("#mail").type("germandolnikov.ru"); // Ввести почту
    cy.get("#pass").type("iLoveqastudio1"); // Ввести пароль
    cy.get("#loginButton").click(); // Кликнуть на кнопку войти

    cy.get("#messageHeader").contains("Нужно исправить проблему валидации"); // Проверяем текст
    cy.get("#exitMessageButton > .exitIcon").should("be.visible"); // Проверяем, что виден крестик
  });

  it("Проверка на приведение к строчным буквам в логине:", function () {
    cy.visit("https://login.qa.studio/"); // Зайти на сайт
    cy.get("#form").should("be.visible"); // Проверяем, что видна форма

    cy.get("#mail").type("GerMan@Dolnikov.ru"); // Ввести почту
    cy.get("#pass").type("iLoveqastudio1"); // Ввести пароль
    cy.get("#loginButton").click(); // Кликнуть на кнопку войти

    cy.get("#messageHeader").contains("Авторизация прошла успешно"); // Проверяем текст
    cy.get("#exitMessageButton > .exitIcon").should("be.visible"); // Проверяем, что виден крестик
  });
});
