## Deploy Node.js App to Amazon ECS using GitHub Actions and IaC using Terraform


In this article, I will deploy a Node.js application to Amazon ECS using GitHub Actions and Infrastructure as Code using Terraform. I will also use Amazon S3 and DynamoDB to store our backend's terraform state and lock file. I will create everything at once, commit it to GitHub, and then deploy it to AWS at once.

Overview of the application. It’s a simple application that fetches the Pokemon API and retrieves a Pokemon by name or ID.


#### Prerequisites
AWS Account
Code Editor (VS Code)
GitHub Account

##### npm install express
##### npm install node-fetch
##### node index.js

https://medium.com/@zwelakhespha/deploy-node-js-app-to-amazon-ecs-using-github-actions-and-iac-using-terraform-2489035c3097
