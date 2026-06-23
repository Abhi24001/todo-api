provider "aws" {
region = "ap-south-1"
}

resource "aws_ecs_cluster" "todo_api" {
name = "todo-api-cluster"
}

resource "aws_ecr_repository" "todo_api" {
name = "todo-api"
}
