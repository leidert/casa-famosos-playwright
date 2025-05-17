import { test, expect, Page } from '@playwright/test';

async function goToPage(page: Page) {
  // navego a la pagina de registro
  await page.goto('https://www.zona-interactiva.canalrcn.com/register');
}
async function registerName(page: Page) {
  // Simula typing humano, escribo en el campo de texto nombre letra por letra
  await page.getByRole('textbox', { name: 'El nombre solo puede contener' }).click();
  await page.keyboard.type('fulano', { delay: 150 });
}

async function registerLastName(page: Page){
   // Simula typing humano, escribo en el campo de texto apellido letra por letra
   await page.getByRole('textbox', { name: 'El apellido solo puede' }).click();
   await page.keyboard.type('sutano', { delay: 150 });
}

async function registerDateBirthday(page: Page){
   //selecciono la fecha de nacimiento
   await page.getByRole('textbox', { name: 'Debe ser mayor de 13 años' }).click();
   await page.keyboard.type('01-06-2008', { delay: 150 });
}

async function selecttedCountry(page: Page) {
  await page.mouse.move(340, 500); // Simula movimiento de mouse
  await page.waitForTimeout(500);
  // seleccionamos el pais
  await page.locator('.css-hlgwow').first().scrollIntoViewIfNeeded();
  await page.locator('.css-hlgwow').first().click();
  await page.keyboard.type('ee', { delay: 150 });
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'EEUU Y CANADÁ' }).click();
}

async function registerCellNumber(page: Page){
  //ingresamos el numero de cel
  await page.getByRole('spinbutton').click();
  await page.keyboard.type('1234567891', { delay: 100 });
}

async function selectteSexo(page: Page) {
  await page.mouse.move(330, 500);
  await page.waitForTimeout(300);
  //seleccionamos el genero
  await page.locator('#react-select-4-input').waitFor({ state: 'visible' });
  await page.locator('#react-select-4-input').click();
  await page.waitForTimeout(300);
  await page.getByRole('option', { name: 'Masculino' }).click();
}

async function registerPassword(page: Page){
  //ingresamos el password
  await page.mouse.move(340, 500); // Simula movimiento de mouse
  await page.locator('.react-select-5-input]').scrollIntoViewIfNeeded;
  await page.locator('input[name="password"]').click();
  await page.keyboard.type('Ipega90.', { delay: 200 });
}

async function registerConfirmPassword(page: Page){
   //ingresamos la confirmaciion del password
   await page.locator('input[name="password_confirmation"]').click();
   await page.keyboard.type('Ipega90.', { delay: 200 });
}

async function termsAndConditions(page: Page) {
  //aceptamos los terminos y condiciones
  await page.locator('label').filter({ hasText: 'Acepto los términos y' }).locator('span').click();
  await page.waitForTimeout(300);
  await page.locator('label').filter({ hasText: 'Acepto el tratamiento de mis' }).locator('span').click();
 
}

async function buttonContinue(page: Page) {
    // Espera y clic en continuar
    await page.waitForTimeout(500);
    await page.locator('button[type="submit"][data-testid="submitStep1"]').scrollIntoViewIfNeeded();
    await page.locator('button[type="submit"][data-testid="submitStep1"]').waitFor({ state: 'visible' });
    await page.locator('button[type="submit"][data-testid="submitStep1"]').click();
}
test.describe('registro de usuario de la casa de los famosos', () => {

  test('registro como humano', async ({ page }) => {
    await goToPage(page);
    await registerName(page);
    await registerLastName(page);
    await registerDateBirthday(page);
    await selecttedCountry(page);
    await registerCellNumber(page);
    await selectteSexo(page);
    await registerPassword(page);
    await registerConfirmPassword(page);
    await termsAndConditions(page);
    await buttonContinue(page);

    // //verifico que el registro fue exitoso
    // const successMessage = page.locator('text=¡Bienvenido a la casa de los famosos!');
    // await expect(successMessage).toBeVisible();
  });
});
