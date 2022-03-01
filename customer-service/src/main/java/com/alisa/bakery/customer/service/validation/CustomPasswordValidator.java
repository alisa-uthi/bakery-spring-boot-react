package com.alisa.bakery.customer.service.validation;

import org.passay.*;
import org.springframework.stereotype.Component;

@Component
public class CustomPasswordValidator {

    public boolean validatePassword(String password) {
        PasswordValidator passwordValidator = new PasswordValidator(
                // length between 8 and 16 characters
                new LengthRule(8, 16),

                // at least one upper-case character
                new CharacterRule(EnglishCharacterData.UpperCase, 1),

                // at least one lower-case character
                new CharacterRule(EnglishCharacterData.LowerCase, 1),

                // at least one digit character
                new CharacterRule(EnglishCharacterData.Digit, 1),

                // no whitespace
                new WhitespaceRule()
        );

        RuleResult result = passwordValidator.validate(new PasswordData(password));
        return result.isValid();
    }
}
