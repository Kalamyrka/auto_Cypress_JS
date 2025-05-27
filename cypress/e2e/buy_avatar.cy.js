describe("Проверка покупки авататра", function () {
  it("e2e тест на покупку нового аватара", function () {
    cy.visit("https://pokemonbattle.ru/login"); // Переходим на сайт
    cy.get(".style_1_popup_white_in").should("be.visible"); // Проверяем, что видна форма

    cy.get("#k_email").type("USER_LOGIN"); // Ввести почту
    cy.get("#k_password").type("USER_PASSWORD"); // Ввести пароль
    cy.get("button[type='submit']").click(); // Кликнуть на кнопку Войти

    cy.get(".header_card_trainer").click(); // Кликаем в шапке на аватар тренера для перехода в ЛК
    cy.get(".k_mobile > :nth-child(5)").click(); // Кликнуть на кнопку Смена аватара

    cy.get(".available > button").first().click(); // Кликаем Купить у первого доступного аватара

    cy.get(".card_number").type("4620869113632996"); // Вводим номер карты
    cy.get(".card_date").type("1226"); // Вводим срок действия карты
    cy.get(".card_csv").type("125"); // Вводим CVV карты
    cy.get(".card_name").type("NAME"); // Вводим имя владельца

    cy.get(".style_1_base_button_payment")
      .should("not.have.class", "disable") // После заполнения полей проверяем, что у кнопки исчез класс .disable
      .and("be.visible"); // Ждём смены класса кнопки (становится активной)

    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Производим клик по кнопке

    cy.get(".style_1_base_input").type("56456"); // Вводим СМС код

    cy.get(".style_1_base_button_payment")
      .should("not.have.class", "disable")
      .and("be.visible"); // Ждём смены класса кнопки (становится активной)

    cy.get(
      ".style_1_base_button_payment_body > .style_1_base_button_payment").click(); // Нажимаем на кнопку Оплатить
    cy.contains("Покупка прошла успешно").should("be.visible"); // Проверяем наличие и видимость сообщения об успешной покупке

    cy.get(".payment_status_back").click(); // Нажимаем на кнопку Вернуться в магазин

    cy.get('.header_interactive_button_exit > .interactive_button > .wrapper_img').click(); // Нажимаем кнопку Разлогиниться

  });
});
