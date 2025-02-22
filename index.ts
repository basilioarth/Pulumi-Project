import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS S3 Bucket resource
const firstBucket = new aws.s3.BucketV2("pulumi-ftr-first-bucket", {
    bucket: "pulumi-ftr-first-bucket",
    tags: {
        IAC: "true",
    }
});

// Export infos from bucket
export const firstBucketName = firstBucket.id;
export const firstBucketInfo = firstBucket.bucket;
export const firstBucketArn = firstBucket.arn;

// Create an AWS S3 Bucket resource
const secondBucket = new aws.s3.BucketV2("pulumi-ftr-second-bucket", {
    bucket: "pulumi-ftr-second-bucket",
    tags: {
        IAC: "true",
    }
});

// Export infos from bucket
export const secondBucketName = secondBucket.id;
export const secondBucketInfo = secondBucket.bucket;
export const secondBucketArn = secondBucket.arn;

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