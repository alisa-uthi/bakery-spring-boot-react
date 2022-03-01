package com.alisa.bakery.customer.service.validation;

import org.springframework.stereotype.Component;

@Component
public class PhoneValidator {

    public boolean isPhoneNumberValid(String phoneNumber) {
        phoneNumber = phoneNumber.trim().replaceAll("-", "");
        return phoneNumber.length() == 10 && isNumeric(phoneNumber);
    }

    public static boolean isNumeric(String strNum) {
        if (strNum == null) {
            return false;
        }
        try {
            int number = Integer.parseInt(strNum);
        } catch (NumberFormatException nfe) {
            return false;
        }
        return true;
    }
}
