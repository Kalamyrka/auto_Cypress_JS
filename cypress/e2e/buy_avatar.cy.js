describe("Проверка покупки авататра", function () {
  it("e2e тест на покупку нового аватара", function () {
    cy.visit("https://pokemonbattle.ru/login"); // Переходим на сайт
    cy.get(".style_1_popup_white_in").should("be.visible"); // Проверяес, что видна форма

    cy.get("#k_email").type("USER_LOGIN"); // Ввести почту
    cy.get("#k_password").type("USER_PASSWORD"); // Ввести пароль
    cy.get(".MuiButton-root").click(); // Кликнуть на кнопку Войти

    cy.wait(2000); // Ждём

    cy.get(".header_card_trainer").click(); // Кликаем в шапке на аватар тренера для перехода в ЛК
    cy.wait(2000); // Ждём
    cy.get(".k_mobile > :nth-child(5)").click(); // Кликнуть на кнопку Смена аватара
    cy.get(".available > button").first().click(); // Кликаем Купить у первого доступного аватара

    cy.get(".card_number").type("4620869113632996"); // Вводим номер карты
    cy.get(".card_csv").type("125"); // Вводим CVV карты
    cy.get(".card_date").type("1226"); // Вводим срок действия карты
    cy.get(".card_name").type("NAME"); // Вводим имя владельца действия карты

    cy.wait(2000); // Ждём

    cy.get(
      ".style_1_base_button_payment_body > .style_1_base_button_payment"
    ).click(); // Нажимаем на кнопку Оплатить

    cy.get(".style_1_base_input").type("56456"); // Вводим СМС код
    cy.get(
      ".style_1_base_button_payment_body > .style_1_base_button_payment"
    ).click(); // Нажимаем на кнопку Оплатить
    cy.contains("Покупка прошла успешно").should("be.visible"); // Проверяем наличие и видимость сообщения об успешной покупке

    cy.get(".payment_status_back").click(); // Нажимаем на кнопку Вернуться в магазин

    cy.wait(2000); // Ждём

    // !!!!!!!!!!!!! Немного отсебятины... Проверяем, что действительно выбирается первый доступный тренер !!!!!!!!!!!!

    cy.get(".available > button").first().click(); // Кликаем Купить у первого доступного аватара

    cy.get(".card_number").type("4620869113632996"); // Вводим номер карты
    cy.get(".card_csv").type("125"); // Вводим CVV карты
    cy.get(".card_date").type("1226"); // Вводим срок действия карты
    cy.get(".card_name").type("NAME"); // Вводим имя владельца действия карты

    cy.wait(2000); // Ждём

    cy.get(
      ".style_1_base_button_payment_body > .style_1_base_button_payment"
    ).click(); // Нажимаем на кнопку Оплатить

    cy.get(".style_1_base_input").type("56456"); // Вводим СМС код
    cy.get(
      ".style_1_base_button_payment_body > .style_1_base_button_payment"
    ).click(); // Нажимаем на кнопку Оплатить
    cy.contains("Покупка прошла успешно").should("be.visible"); // Проверяем наличие и видимость сообщения об успешной покупке

    cy.get(".payment_status_back").click(); // Нажимаем на кнопку Вернуться в магазин
  });
});
