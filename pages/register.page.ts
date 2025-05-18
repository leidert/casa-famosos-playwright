import { Locator, expect, Page } from '@playwright/test';

export class RegisterPage{
    page: Page;

    constructor(page: Page){
        this.page = page;
    }
  
    async registerName() {
        // Simula typing humano, escribo en el campo de texto nombre letra por letra
        await this.page.getByRole('textbox', { name: 'El nombre solo puede contener' }).click();
        await this.page.keyboard.type('fulano', { delay: 150 });
      }

      async registerLastName(){
        // Simula typing humano, escribo en el campo de texto apellido letra por letra
        await this.page.getByRole('textbox', { name: 'El apellido solo puede' }).click();
        await this.page.keyboard.type('sutano', { delay: 150 });
     }

     async registerDateBirthday(){
        //selecciono la fecha de nacimiento
        await this.page.getByRole('textbox', { name: 'Debe ser mayor de 13 años' }).click();
        await this.page.keyboard.type('01-06-2008', { delay: 150 });
     }

     async selecttedCountry() {
        await this.page.mouse.move(340, 500); // Simula movimiento de mouse
        await this.page.waitForTimeout(500);
        // seleccionamos el pais
        await this.page.locator('.css-hlgwow').first().scrollIntoViewIfNeeded();
        await this.page.locator('.css-hlgwow').first().click();
        await this.page.keyboard.type('ee', { delay: 150 });
        await this.page.waitForTimeout(500);
        await this.page.getByRole('option', { name: 'EEUU Y CANADÁ' }).click();
      }

      async registerCellNumber(){
        //ingresamos el numero de cel
        await this.page.getByRole('spinbutton').click();
        await this.page.keyboard.type('1234567891', { delay: 100 });
      }
      
      async selectteSexo() {
        await this.page.mouse.move(360, 500);
        await this.page.waitForTimeout(800);
        //seleccionamos el genero
        await this.page.locator('#react-select-4-input').waitFor({ state: 'visible' });
        await this.page.locator('#react-select-4-input').click();
        await this.page.waitForTimeout(300);
        await this.page.getByRole('option', { name: 'Masculino' }).click();
      }
      
      async registerPassword(){
        //ingresamos el password
        await this.page.mouse.move(340, 500); // Simula movimiento de mouse
        await this.page.locator('.react-select-5-input]').scrollIntoViewIfNeeded;
        await this.page.locator('input[name="password"]').click();
        await this.page.keyboard.type('Ipega90.', { delay: 200 });
      }
      
      async registerConfirmPassword(){
         //ingresamos la confirmaciion del password
         await this.page.locator('input[name="password_confirmation"]').click();
         await this.page.keyboard.type('Ipega90.', { delay: 200 });
      }
      
      async termsAndConditions() {
        //aceptamos los terminos y condiciones
        await this.page.locator('label').filter({ hasText: 'Acepto los términos y' }).locator('span').click();
        await this.page.waitForTimeout(300);
        await this.page.locator('label').filter({ hasText: 'Acepto el tratamiento de mis' }).locator('span').click();
       
      }
      
      async buttonContinue() {
          // Espera y clic en continuar
          await this.page.waitForTimeout(500);
          await this.page.locator('button[type="submit"][data-testid="submitStep1"]').scrollIntoViewIfNeeded();
          await this.page.locator('button[type="submit"][data-testid="submitStep1"]').waitFor({ state: 'visible' });
          await this.page.locator('button[type="submit"][data-testid="submitStep1"]').click();
      }   

}