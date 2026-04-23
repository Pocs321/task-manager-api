variable "project" {
  type = string
}

variable "environment" {
  type = string
}

variable "vpc_id" {
  type = string
}

variable "private_subnet_ids" {
  type = list(string)
}

variable "alb_target_group_arn" {
  type = string
}

variable "ecr_repository_url" {
  type = string
}

variable "db_secret_arn" {
  type = string
}

variable "database_url" {
  type      = string
  sensitive = true
}
