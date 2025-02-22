import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS S3 Bucket resource
const bucket = new aws.s3.BucketV2("pulumi-ftr-bucket", {
    bucket: "pulumi-ftr-bucket",
    tags: {
        IAC: "true",
    }
});

// Export infos from bucket
export const bucketName = bucket.id;
export const bucketInfo = bucket.bucket;
export const bucketArn = bucket.arn;

// Create an AWS ECR resource
const ecr = new aws.ecr.Repository("pulumi-ftr-ecr", {
    name: "pulumi-ftr-ecr",
    imageTagMutability: "IMMUTABLE",
    tags: {
        IAC: "true",
    }
})

// Export infos from ecr
export const ecrName = ecr.name;
export const ecrrepositoryUrl = ecr.repositoryUrl;