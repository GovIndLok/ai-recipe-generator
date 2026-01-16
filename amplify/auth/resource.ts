import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: "CODE",
      verificationEmailSubject: "Welcome to the Recipe Generator App",
      verificationEmailBody: (createCode) =>
        `Use the code to confirm your account: ${createCode()}`
    },
  },
});
