version = 0.1
[default]
[default.deploy]
[default.deploy.parameters]
stack_name = "event-lambda"
s3_bucket = "aws-sam-cli-managed-default-samclisourcebucket-nuxn913l2asj"
s3_prefix = "event-lambda"
region = "us-east-1"
confirm_changeset = true
capabilities = "CAPABILITY_IAM"
disable_rollback = true
parameter_overrides = "PartnerEventSource=\"aws.partner/mongodb.com/stitch.trigger/5fc72367f2fc61489a394828\""
image_repositories = []
