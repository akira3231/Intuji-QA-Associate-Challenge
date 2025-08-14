export class LoginPageElements{


    username_text='[type="text"]'
    email_text='.signup-form > form > [type="email'
    signup_button='.signup-form > form > .btn'

    Username(username){
         cy.get(this.username_text).type(username)
    }

    Email(email){
         cy.get(this.email_text).type(email)
    }

    SignupButton(){
         cy.get(this.signup_button).click()
    }

}