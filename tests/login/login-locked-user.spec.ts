import { expect, test } from "@playwright/test";
import { USERS } from "../../constants/users";
import { LoginPage } from "../../pages/LoginPage";

test("falha de login com usuário bloqueado", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goTo();

  await loginPage.login(USERS.LOCKED.username, USERS.LOCKED.password);

  await expect(loginPage.errorMessage).toBeVisible();

  await expect(loginPage.errorMessage).toContainText(
    "Sorry, this user has been locked out.",
  );
});
