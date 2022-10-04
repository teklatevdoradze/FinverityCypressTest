
it('Google search', function(){

    cy.visit('https://staging.finverity.com/login')

    expect('#sign-in').to.exist

    cy.get('.forgot-pass__link').click()

    cy.get('#reset-password-email').type('tetevd31@gmail.com')



    cy.get('#reset-password-email')
    .invoke('val')
  .then(sometext => cy.log(sometext));

    cy.get('.button').click()

    expect('Please check your email inbox and click url to reset your password').to.exist

    cy.get('.button').click()

})