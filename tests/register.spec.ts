import { test, expect, Page } from '@playwright/test';
import {RegisterPage} from '../pages/register.page';

async function goToPage(page: Page) {
  // navego a la pagina de registro
  await page.goto('https://www.zona-interactiva.canalrcn.com/register');
}

test.describe('registro de usuario de la casa de los famosos', () => {

  test.beforeEach(async({page}) => {
    await goToPage(page);
  });
  
  test('registro como humano', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.registerName();
    await registerPage.registerLastName();
    await registerPage.registerDateBirthday();
    await registerPage.selecttedCountry();
    await registerPage.registerCellNumber();
    await registerPage.selectteSexo();
    await registerPage.registerPassword();
    await registerPage.registerConfirmPassword();
    await registerPage.termsAndConditions();
    await registerPage.buttonContinue();
 // await expect(successMessage).toBeVisible();
  });
});
