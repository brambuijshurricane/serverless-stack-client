export default {
  s3: {
    REGION: "us-east-2",
    BUCKET: "serverless-notes-demo-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://p4gry7hcpi.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Dtb2OYoVP",
    APP_CLIENT_ID: "4ve9ur1tf9ubm0po5ul0p2ppvt",
    IDENTITY_POOL_ID: "us-east-2:6ced5cef-9640-48ad-9cfe-d8f5d7b3201a"
  }
};