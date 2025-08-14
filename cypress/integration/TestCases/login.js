import { LoginPageElements } from "../../../PageObjects/PageActions/LoginPageActions"

const Login_Elements = new LoginPageElements

describe('Page Object Model', function(){

        it('Login Page', function(){

            cy.visit('https://automationexercise.com/login')
            Login_Elements.Username('bidur')
            Login_Elements.Email('bidur@gmail.com')
            Login_Elements.SignupButton()
        })



})
