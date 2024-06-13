terraform {
  backend "s3" {
    bucket = "terraform-state-bucket-20240613"
    key = "state-folder/terraform.ftstate"
    region = "ap-south-1"
    dynamodb_table = "terraform-lock-table"
    encrypt = true
  }
}