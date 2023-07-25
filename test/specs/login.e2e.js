describe("Login Demo", () => {
    it("login-sucessfull", async () => {
        await $("~open menu").click();
        await $("~menu item log in").click();
        await $("~Username input field").setValue("bob@example.com");
        await $("~Password input field").setValue("10203040");
        await $("~Login button").click();
        await $("~open menu").click();
        await $("~menu item log in").click();
    });
});