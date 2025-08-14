export class LoginPageElements{


    username_text='[type="text"]'
    email_text='.signup-form > form > [type="email'
    password_text='#password'
    signup_button='.signup-form > form > .btn'
    gender_button='#id_gender1'
    days_button='#days'
    Months_button='#months'
    years_button='#years'
    newsletter_button='#newsletter'
    firstname_text='#first_name'
    lastname_text='#last_name'
    company_text='#company'
    country_button='#country'
    state_text='#state'
    city_text='#city'
    zipcode_text='#zipcode'
    mobile_text='#mobile_number'
    submit_button='.login-form > form > .btn'


    Username(username){
         cy.get(this.username_text).type(username)
    }

    Email(email){
         cy.get(this.email_text).type(email)
    }

    SignupButton(){
         cy.get(this.signup_button).click()
    }

    Password(){
     cy.get(this.password_text).type(1234)
    }

    FirstName(){
     cy.get(this.firstname_text).type(Bidur)
    }
    
    LastName(){
     cy.get(this.lastname_text).type(Neupane)
    }



}