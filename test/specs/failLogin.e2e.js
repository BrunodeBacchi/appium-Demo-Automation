describe("Login Demo", () => {
    it("login-failed", async () => {
        await $("~open menu").click();
        await $("~menu item log in").click();
        await $("~Username input field").setValue("boa@example.com");
        await $("~Password input field").setValue("102030");
        await $("~Login button").click();
        await $("//android.view.ViewGroup[@content-desc='generic-error-message']/android.widget.TextView");
    });
});